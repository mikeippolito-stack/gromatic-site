import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "posts");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "content", "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(file)) return { title: "Post not found" };
  const raw = fs.readFileSync(file, "utf-8");
  const { data } = matter(raw);
  return {
    title: data.title ?? "Blog",
    description: data.excerpt ?? "",
    alternates: { canonical: `/blog/${data.slug ?? params.slug}` },
    openGraph: data.cover
      ? { title: data.title, description: data.excerpt, url: `/blog/${data.slug ?? params.slug}`, images: [{ url: data.cover, width: 1200, height: 630, alt: data.title }] }
      : undefined,
  };
}

const components = {
  img: (props: any) => <img {...props} className="rounded-xl border my-4" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-8" />,
  p: (props: any) => <p {...props} className="mt-4 leading-relaxed" />,
};

export default function Page({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "content", "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(file)) notFound();

  const raw = fs.readFileSync(file, "utf-8");
  const { content, data } = matter(raw);

  const mdx = <MDXRemote source={content} components={components as any} />;

  return (
    <main className="min-h-screen">
      <section className="w-full max-w-3xl mx-auto px-4 md:px-8 py-16 prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{data.title}</h1>
        <div className="mt-2 text-sm text-slate-500">{data.date ? new Date(data.date).toLocaleDateString() : null}</div>
        <article className="mt-6">{mdx}</article>
      </section>
    </main>
  );
}
