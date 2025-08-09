import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata = { title: "Blog", description: "Insights on automated growth for local businesses." };

type PostMeta = { slug: string; title: string; excerpt: string; date: string; cover?: string };

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(dir).filter(f=>f.endsWith(".mdx"));
  const posts = files.map((f)=>{
    const raw = fs.readFileSync(path.join(dir,f),"utf-8");
    const { data } = matter(raw);
    return { slug:data.slug, title:data.title, excerpt:data.excerpt, date:data.date, cover:data.cover } as PostMeta;
  });
  return posts.sort((a,b)=> a.date < b.date ? 1 : -1);
}

export default function Page(){
  const posts = getPosts();
  return (
    <main className="min-h-screen">
      <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Blog</h1>
        <p className="mt-3 text-slate-600">Insights, tips, and case studies from the Gromatic team.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {posts.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="block border rounded-2xl p-6 hover:shadow bg-white">
              <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
