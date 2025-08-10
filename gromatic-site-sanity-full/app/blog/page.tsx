import { client } from '@/lib/sanity.client';
import { postsQuery } from '@/lib/sanity.queries';
export const metadata={title:'Blog',description:'Insights on automated growth for local businesses.'};
export const revalidate=60;
export default async function Page(){const posts=await client.fetch(postsQuery);return(<main className='min-h-screen'><section className='w-full max-w-5xl mx-auto px-4 md:px-8 py-16'><h1 className='text-3xl md:text-4xl font-extrabold text-slate-900'>Blog</h1><p className='mt-3 text-slate-600'>Insights, tips, and case studies from the Gromatic team.</p><div className='mt-8 grid md:grid-cols-2 gap-6'>{posts.map((p:any)=>(<a key={p._id} href={`/blog/${p.slug}`} className='block border rounded-2xl p-6 hover:shadow bg-white'><div className='text-xs text-slate-500'>{p.date?new Date(p.date).toLocaleDateString():''}</div><h3 className='mt-2 text-xl font-semibold'>{p.title}</h3><p className='mt-2 text-slate-600 text-sm'>{p.excerpt}</p></a>))}</div></section></main>)}
