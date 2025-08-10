"use client";
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <a href="/" className="font-extrabold text-lg text-automation-blue hover:opacity-80 transition-opacity">
          Gromatic
        </a>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/how-it-works" className="hover:text-gromatic-green transition-colors">How it works</a>
          <a href="/services" className="hover:text-gromatic-green transition-colors">Services</a>
          <a href="/case-studies" className="hover:text-gromatic-green transition-colors">Case studies</a>
          <a href="/contact" className="hover:text-gromatic-green transition-colors">Contact</a>
        </nav>
        
        <a 
          href="/contact"
          className="hidden md:inline-flex items-center bg-gromatic-green text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Book Audit
        </a>
        
        <button 
          aria-label="Open menu" 
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-slate-50 transition-colors" 
          onClick={() => setOpen(true)}
        >
          <span className="block w-5 h-0.5 bg-slate-900 mb-1" />
          <span className="block w-5 h-0.5 bg-slate-900 mb-1" />
          <span className="block w-5 h-0.5 bg-slate-900" />
        </button>
      </div>
      
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-automation-blue">Menu</div>
              <button 
                aria-label="Close menu" 
                className="w-10 h-10 rounded-lg border hover:bg-slate-50 transition-colors" 
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="mt-6 space-y-3">
              <a href="/how-it-works" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-gromatic-green transition-colors">How it works</a>
              <a href="/services" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-gromatic-green transition-colors">Services</a>
              <div className="pl-4 space-y-2">
                <a href="/services/google-ads" onClick={() => setOpen(false)} className="block py-1 text-sm text-slate-600 hover:text-gromatic-green transition-colors">— Google Ads (PPC)</a>
                <a href="/services/seo" onClick={() => setOpen(false)} className="block py-1 text-sm text-slate-600 hover:text-gromatic-green transition-colors">— SEO</a>
                <a href="/services/ai-seo" onClick={() => setOpen(false)} className="block py-1 text-sm text-slate-600 hover:text-gromatic-green transition-colors">— AI SEO</a>
              </div>
              <a href="/case-studies" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-gromatic-green transition-colors">Case studies</a>
              <a href="/contact" 
                onClick={() => setOpen(false)} 
                className="mt-4 block text-center rounded-xl bg-gromatic-green text-white px-4 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                Book a Growth Audit
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
