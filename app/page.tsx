"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircuitBoard, LineChart, Bolt, ShieldCheck, Workflow, Mail, Phone, MapPin, CheckCircle2, Sparkles, Star } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";

const GRN = "var(--gromatic-green)";
const BLU = "var(--automation-blue)";
const GLD = "var(--success-gold)";

interface PillProps {
  children: React.ReactNode;
}

function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
      <CircuitBoard size={14} />
      {children}
    </span>
  );
}

interface FeatureProps {
  icon: React.ComponentType<{ color?: string; size?: number }>;
  title: string;
  desc: string;
}

const Feature = ({ icon: Icon, title, desc }: FeatureProps) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-green-50">
      <Icon color={GRN} />
    </div>
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

interface StatProps {
  value: string;
  label: string;
}

const Stat = ({ value, label }: StatProps) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-green-700">{value}</div>
    <div className="text-slate-600 text-sm">{label}</div>
  </div>
);

interface StepProps {
  n: number;
  title: string;
  desc: string;
}

const Step = ({ n, title, desc }: StepProps) => (
  <div className="relative p-5 rounded-2xl border shadow-sm bg-white">
    <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-blue-800">
      {n}
    </div>
    <h4 className="font-semibold mb-1 text-slate-900 mt-8">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

interface ServiceCardProps {
  title: string;
  price: string;
  bullets: string[];
  featured?: boolean;
}

const ServiceCard = ({ title, price, bullets, featured }: ServiceCardProps) => (
  <Card className={`rounded-2xl border-2 ${featured ? "shadow-xl border-green-700" : "shadow border-gray-200"}`}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {featured && <p className="text-sm text-slate-600">Most Popular</p>}
      </div>
      <div className="mb-4">
        <div className="text-3xl font-extrabold text-green-700">{price}</div>
        <p className="text-sm text-slate-600">per month</p>
      </div>
      <ul className="space-y-2 mb-6">
        {bullets.map((b: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 color={GRN} className="mt-0.5" size={18} />
            {b}
          </li>
        ))}
      </ul>
      <Button className="mt-auto" color={BLU}>Choose plan</Button>
    </CardContent>
  </Card>
);

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial = ({ quote, author, role }: TestimonialProps) => (
  <div className="p-6 rounded-2xl border bg-white shadow-sm">
    <div className="flex items-start gap-3">
      <Star className="shrink-0" color={GLD} />
      <p className="text-slate-800 italic">"{quote}"</p>
    </div>
    <div className="mt-4 text-sm text-slate-600">— {author}, {role}</div>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 64 64" className="rounded-xl" style={{ background: "#F8FAFC" }} aria-label="Gromatic logo">
              <defs><linearGradient id="grom-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2B7A3D" /><stop offset="100%" stopColor="#1E3A8A" /></linearGradient></defs>
              <path d="M48 32a16 16 0 1 1-7.6-13.7" fill="none" stroke="url(#grom-grad)" strokeWidth="6" strokeLinecap="round" />
              <path d="M40 32h14" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" />
              <path d="M54 32l-6 6" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <div className="font-extrabold text-lg text-blue-800">Gromatic</div>
              <div className="text-xs text-slate-600">Growth on Autopilot</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/how-it-works" className="hover:opacity-80">How it works</a>
            <a href="/services" className="hover:opacity-80">Services</a>
            <a href="/case-studies" className="hover:opacity-80">Case studies</a>
            <a href="/about" className="hover:opacity-80">About</a>
            <a href="/blog" className="hover:opacity-80">Blog</a>
            <a href="/contact" className="hover:opacity-80">Contact</a>
          </nav>
          <Button className="hidden md:inline-flex" color={GRN}>
            Book a Free Growth Audit <ArrowRight className="ml-2" size={16} />
          </Button>
        </Section>
      </header>

      <Section className="py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Pill>Automated Growth for Local Business</Pill>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-blue-800">
            Growth on <span className="text-green-700">Autopilot</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">We build simple, connected systems that capture every lead, follow up automatically, and turn clicks into customers — while you focus on running your business.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button color={GRN}>Build My Growth System</Button>
            <Button variant="outline" className="border" color={BLU}>See Automation in Action</Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <Stat value="+38%" label="Avg. lead volume" />
            <Stat value="-62%" label="Manual admin time" />
            <Stat value="3.4x" label="Marketing ROI" />
          </div>
        </div>
        <motion.div 
          initial={{ opacity:0, y:20 }} 
          whileInView={{ opacity:1, y:0 }} 
          transition={{ duration:0.6 }} 
          className="relative w-full h-[360px] md:h-[420px] rounded-3xl shadow-xl border overflow-hidden bg-gradient-to-br from-blue-800 to-green-700"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i} 
              className="absolute w-3 h-3 rounded-full bg-white" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} 
              style={{ top: 40 + (i%4)*70, left: 40 + (i<4? i*90 : (7-i)*90) }} 
            />
          ))}
          <svg className="absolute inset-0" viewBox="0 0 600 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff55" />
                <stop offset="100%" stopColor="#ffffff05" />
              </linearGradient>
            </defs>
            <path d="M40 80 C 220 40, 380 120, 560 60" stroke="url(#flow)" strokeWidth="3" fill="none" />
            <path d="M40 220 C 220 260, 380 200, 560 260" stroke="url(#flow)" strokeWidth="3" fill="none" />
            <path d="M40 300 C 220 340, 380 320, 560 320" stroke="url(#flow)" strokeWidth="3" fill="none" />
          </svg>
        </motion.div>
      </Section>

      <div className="py-10 border-y bg-slate-50">
        <Section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Feature icon={LineChart} title="Lead growth" desc="More enquiries from search, ads & social." />
          <Feature icon={Workflow} title="Automation" desc="Follow-ups & nurturing on autopilot." />
          <Feature icon={ShieldCheck} title="Reliability" desc="Systems that quietly work 24/7." />
          <Feature icon={Bolt} title="Speed" desc="Fast setup, fast results." />
        </Section>
      </div>

      <Section id="how" className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Pill>How it works</Pill>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-blue-800">The Growth Circuit Method</h2>
          <p className="mt-3 text-slate-600">Five simple steps to install a growth system that captures, nurtures and converts — automatically.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-5 gap-4">
          <Step n={1} title="Audit" desc="Quick audit to find bottlenecks and missed leads." />
          <Step n={2} title="Capture" desc="Fix tracking, forms & chat so every lead is caught." />
          <Step n={3} title="Nurture" desc="Email/SMS sequences keep you top‑of‑mind." />
          <Step n={4} title="Convert" desc="Bookings, reminders & offers drive action." />
          <Step n={5} title="Optimise" desc="Monthly improvements based on real data." />
        </div>
      </Section>

      <Section id="services" className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Pill>Services</Pill>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-blue-800">Packages that scale with you</h2>
          <p className="mt-3 text-slate-600">Start small or go all‑in. Every package installs your Growth Circuit with clear ROI.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ServiceCard title="Growth Circuit Starter" price="$1,200" bullets={["Lead capture & tracking","Google Business Profile tune‑up","Basic follow‑up sequence","Monthly report"]} />
          <ServiceCard featured title="Growth Circuit Pro" price="$2,400" bullets={["Everything in Starter","CRM setup + pipelines","Ads management (Google/Meta)","Advanced email/SMS nurture"]} />
          <ServiceCard title="Growth Circuit Enterprise" price="Custom" bullets={["Multi‑location & teams","Reputation management","AI lead qual & chat","BI dashboard & SLAs"]} />
        </div>
      </Section>

      <Section id="cases" className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Pill>Proof</Pill>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-blue-800">Before & After results</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border shadow">
            <CardContent className="p-6">
              <div className="text-sm text-slate-600">Restaurant • 90 days</div>
              <div className="mt-3 text-2xl font-bold text-green-700">+42% bookings</div>
              <p className="mt-2 text-sm text-slate-700">Automated reservation confirmations & review requests.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border shadow">
            <CardContent className="p-6">
              <div className="text-sm text-slate-600">Electrician • 60 days</div>
              <div className="mt-3 text-2xl font-bold text-green-700">+57% enquiries</div>
              <p className="mt-2 text-sm text-slate-700">Google ads + instant SMS follow‑ups to missed calls.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border shadow">
            <CardContent className="p-6">
              <div className="text-sm text-slate-600">Real Estate • 120 days</div>
              <div className="mt-3 text-2xl font-bold text-green-700">3.1x appraisal leads</div>
              <p className="mt-2 text-sm text-slate-700">Lead magnets + nurture sequences for homeowners.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="about" className="py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>About Gromatic</Pill>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-blue-800">Simple systems. Serious growth.</h2>
            <p className="mt-3 text-slate-600">We combine marketing, automation and local market insight to install a Growth Circuit tailored to your business. Less busywork, more bookings and sales.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><Sparkles color={GLD} /> Built for time‑poor owners</li>
              <li className="flex gap-2"><ShieldCheck color={GRN} /> Transparent ROI reporting</li>
              <li className="flex gap-2"><Workflow color={BLU} /> Works with your existing tools</li>
            </ul>
          </div>
          <div className="rounded-3xl border shadow p-6 bg-white">
            <div className="text-sm text-slate-600">What clients say</div>
            <div className="mt-4 grid gap-4">
              <Testimonial quote="We stopped chasing leads. The system just hums along and bookings keep coming." author="A. Taylor" role="Restaurant Owner" />
              <Testimonial quote="Follow‑ups are automatic now — our team finally has its evenings back." author="J. Singh" role="Electrical Services" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Pill>Start here</Pill>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-blue-800">Book your free Growth Audit</h2>
          <p className="mt-3 text-slate-600">Tell us a little about your business. We'll map your Growth Circuit and identify quick wins in under 30 minutes.</p>
        </div>
        <form className="mt-8 grid md:grid-cols-2 gap-4" name="contact">
          <input name="name" required className="w-full border rounded-xl px-4 py-3 text-sm" placeholder="Full name" />
          <input name="business" className="w-full border rounded-xl px-4 py-3 text-sm" placeholder="Business name" />
          <input type="email" name="email" required className="w-full border rounded-xl px-4 py-3 text-sm" placeholder="Email" />
          <input name="phone" className="w-full border rounded-xl px-4 py-3 text-sm" placeholder="Phone" />
          <select name="service" className="w-full border rounded-xl px-4 py-3 text-sm md:col-span-2">
            <option>Service of interest</option>
            <option>Starter</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
          <textarea name="message" className="w-full border rounded-xl px-4 py-3 text-sm md:col-span-2" rows={4} placeholder="Tell us about your goals"></textarea>
          <div className="md:col-span-2">
            <Button className="w-full md:w-auto" color={GRN}>
              Request my audit <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </form>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-3"><Mail color={BLU} /> hello@gromatic.co</div>
          <div className="flex items-center gap-3"><Phone color={BLU} /> (02) 8000 0000</div>
          <div className="flex items-center gap-3"><MapPin color={BLU} /> Australia • Remote</div>
        </div>
      </Section>

      <footer className="py-10 border-t bg-slate-50">
        <Section className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Gromatic. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="/services">Services</a>
            <a className="hover:underline" href="/case-studies">Case studies</a>
            <a className="hover:underline" href="/blog">Blog</a>
            <a className="hover:underline" href="/contact">Contact</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
