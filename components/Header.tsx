"use client";
import { useState } from 'react';
export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <a href="/" className="font-extrabold text-lg text-[#1E3A8A]">Gromatic</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/how-it-works">How it works</a>
          <a href="/services">Services</a>
          <a href="/case-studies">Case studies</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border" onClick={()=>setOpen(true)}>
          <span className="block w-5 h-0.5 bg-slate-900 mb-1" />
          <span className="block w-5 h-0.5 bg-slate-900 mb-1" />
          <span className="block w-5 h-0.5 bg-slate-900" />
        </button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={()=>setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-[#1E3A8A]">Menu</div>
              <button aria-label="Close menu" className="w-10 h-10 rounded-lg border" onClick={()=>setOpen(false)}>✕</button>
            </div>
            <nav className="mt-6 grid gap-3 text-slate-800">
              <a href="/how-it-works" onClick={()=>setOpen(false)}>How it works</a>
              <a href="/services" onClick={()=>setOpen(false)}>Services</a>
              <a href="/services/google-ads" onClick={()=>setOpen(false)}>— Google Ads (PPC)</a>
              <a href="/services/seo" onClick={()=>setOpen(false)}>— SEO</a>
              <a href="/services/ai-seo" onClick={()=>setOpen(false)}>— AI SEO</a>
              <a href="/case-studies" onClick={()=>setOpen(false)}>Case studies</a>
              <a href="/about" onClick={()=>setOpen(false)}>About</a>
              <a href="/blog" onClick={()=>setOpen(false)}>Blog</a>
              <a href="/contact" onClick={()=>setOpen(false)} className="mt-3 inline-block rounded-xl bg-[#2B7A3D] text-white px-4 py-2">Book a Growth Audit</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
