import { client } from '@/lib/sanity.client';
import { postBySlugQuery } from '@/lib/sanity.queries';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity.image';
import { notFound } from 'next/navigation';

export const revalidate = 60;

type Post = {
  title: string; slug: string; excerpt?: string; date?: string;
  body?: any[]; cover?: any;
};

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch('*[_type=="post" && defined(slug.current)]{ "slug": slug.current }');
  return slugs.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt ?? '',
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: post.cover ? {
      title: post.title, description: post.excerpt, url: `/blog/${params.slug}`,
      images: [{ url: urlFor(post.cover).width(1200).height(630).url(), width: 1200, height: 630, alt: post.title }]
    } : undefined
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) notFound();

  return (
    <main className="min-h-screen">
      <section className="w-full max-w-3xl mx-auto px-4 md:px-8 py-16 prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{post.title}</h1>
        <div className="mt-2 text-sm text-slate-500">{post.date ? new Date(post.date).toLocaleDateString() : null}</div>
        {post.cover ? <img src={urlFor(post.cover).width(1200).height(630).url()} alt={post.title} className="rounded-xl border my-4" /> : null}
        <article className="mt-6">
          <PortableText value={post.body} />
        </article>
      </section>
    </main>
  );
}
