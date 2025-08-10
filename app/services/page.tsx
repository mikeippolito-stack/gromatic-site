import Section from '@/components/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Services',
  description: 'Gromatic\'s automated growth services: Google Ads, SEO, AI SEO, and complete Growth Circuit packages for local businesses.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Services That Scale Your Business
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from individual services or complete Growth Circuit packages that automate your entire customer journey.
          </p>
        </div>

        {/* Growth Circuit Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Growth Circuit Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-[#2B7A3D] mb-4">$1,200<span className="text-lg text-slate-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Lead capture & tracking
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Google Business Profile optimization
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Basic follow-up sequence
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Monthly reporting
                </li>
              </ul>
              <a href="/contact" className="block w-full bg-[#1E3A8A] text-white py-3 rounded-xl font-semibold text-center hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>

            <div className="bg-white border-2 border-[#2B7A3D] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2B7A3D] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
              <div className="text-3xl font-bold text-[#2B7A3D] mb-4">$2,400<span className="text-lg text-slate-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Everything in Starter
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  CRM setup & pipelines
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Google Ads management
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Advanced email/SMS nurture
                </li>
              </ul>
              <a href="/contact" className="block w-full bg-[#2B7A3D] text-white py-3 rounded-xl font-semibold text-center hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-[#2B7A3D] mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Multi-location & teams
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  Reputation management
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  AI lead qualification
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="text-[#2B7A3D] shrink-0 mt-0.5" size={16} />
                  BI dashboard & SLAs
                </li>
              </ul>
              <a href="/contact" className="block w-full bg-[#1E3A8A] text-white py-3 rounded-xl font-semibold text-center hover:opacity-90 transition-opacity">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Individual Services */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Individual Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Google Ads Management</h3>
              <p className="text-slate-600 mb-4">Done-for-you PPC campaigns that generate qualified leads for local businesses.</p>
              <a href="/services/google-ads" className="inline-flex items-center text-[#1E3A8A] font-medium hover:underline">
                Learn more <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Local SEO Services</h3>
              <p className="text-slate-600 mb-4">Rank in Google Maps and organic search with proper SEO foundations.</p>
              <a href="/services/seo" className="inline-flex items-center text-[#1E3A8A] font-medium hover:underline">
                Learn more <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI SEO & LLM Visibility</h3>
              <p className="text-slate-600 mb-4">Future-proof your content for AI search engines and language models.</p>
              <a href="/services/ai-seo" className="inline-flex items-center text-[#1E3A8A] font-medium hover:underline">
                Learn more <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
