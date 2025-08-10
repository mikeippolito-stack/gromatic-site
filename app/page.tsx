"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircuitBoard, LineChart, Bolt, ShieldCheck, Workflow, Mail, Phone, MapPin, CheckCircle2, Sparkles, Star } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";

const GRN = "#2B7A3D";
const BLU = "#1E3A8A";
const GLD = "#F59E0B";

interface PillProps {
  children: React.ReactNode;
}

function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${BLU}10`, color: BLU }}>
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
    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${GRN}15` }}>
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
    <div className="text-3xl md:text-4xl font-extrabold" style={{ color: GRN }}>{value}</div>
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
    <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: BLU }}>{n}</div>
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
  <Card className={`rounded-2xl border-2 ${featured ? "shadow-xl" : "shadow"}`} style={{ borderColor: featured ? GRN : "#e5e7eb" }}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {featured && <p className="text-sm text-slate-600">Most Popular</p>}
      </div>
      <div className="mb-4">
        <div className="text-3xl font-extrabold" style={{ color: GRN }}>{price}</div>
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
              <div className="font-extrabold text-lg" style={{ color: BLU }}>Gromatic</div>
              <div className="text-xs text-slate-600">Growth on Autopilot</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/how-it-works" className="hover:opacity-80">How it works</a>
            <a href="/services" className="hover:opacity-80">Services</a>
            <a href="/case-studies" className="hover:opacity-80">Case studies</a>
            <a href="/about" className="hover:opacity-80">About</a>
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
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: BLU }}>
            Growth on <span style={{ color: GRN }}>Autopilot</span>
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
          className=
