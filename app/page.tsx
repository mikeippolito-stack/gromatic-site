import Section from '@/components/Section';
import { ArrowRight, CheckCircle2, LineChart, Workflow, ShieldCheck, Bolt } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Growth on <span className="text-gromatic-green">Autopilot</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We install simple, automated growth systems for local businesses — capture more leads, 
            follow up automatically, and convert faster while you focus on running your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-gromatic-green text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Growth Audit
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center border-2 border-automation-blue text-automation-blue px-8 py-4 rounded-xl font-semibold hover:bg-automation-blue hover:text-white transition-all"
            >
              See Our Services
            </a>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gromatic-green">+38%</div>
            <div className="text-slate-600 mt-2">Average lead volume increase</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gromatic-green">-62%</div>
            <div className="text-slate-600 mt-2">Reduction in manual admin time</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gromatic-green">3.4x</div>
            <div className="text-slate-600 mt-2">Marketing ROI improvement</div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Help You Grow</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our Growth Circuit Method installs automation that works around the clock to capture, 
            nurture, and convert your ideal customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gromatic-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LineChart className="text-gromatic-green" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Lead Growth</h3>
            <p className="text-sm text-slate-600">More enquiries from search, ads & social media.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-automation-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Workflow className="text-automation-blue" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Automation</h3>
            <p className="text-sm text-slate-600">Follow-ups & nurturing on complete autopilot.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-success-gold" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Reliability</h3>
            <p className="text-sm text-slate-600">Systems that quietly work 24/7, 365 days.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gromatic-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bolt className="text-gromatic-green" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Speed</h3>
            <p className="text-sm text-slate-600">Fast setup, fast results, fast ROI.</p>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="py-16 bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Simple packages that scale with you
            </h2>
            <p className="mt-4 text-slate-600">
              Start small or go all-in. Every package installs your Growth Circuit with clear ROI and measurable results.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gromatic-green shrink-0" size={20} />
                <span className="text-slate-700">Lead capture & tracking systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gromatic-green shrink-0" size={20} />
                <span className="text-slate-700">Automated follow-up sequences</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gromatic-green shrink-0" size={20} />
                <span className="text-slate-700">Google Ads & SEO management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-gromatic-green shrink-0" size={20} />
                <span className="text-slate-700">Monthly performance reporting</span>
              </div>
            </div>
            <a 
              href="/services" 
              className="mt-6 inline-flex items-center text-automation-blue font-semibold hover:underline"
            >
              View all services
              <ArrowRight className="ml-1" size={16} />
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900">Growth Circuit Pro</h3>
              <div className="mt-2 text-3xl font-bold text-gromatic-green">$2,400<span className="text-lg text-slate-600">/month</span></div>
              <p className="mt-2 text-sm text-slate-600">Most popular package</p>
              <a 
                href="/contact" 
                className="mt-6 block w-full bg-gromatic-green text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="text-center bg-automation-blue rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to automate your growth?</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Let's build your Growth Circuit in under 30 days. Book a free audit to see how much growth you're missing.
          </p>
          <a 
            href="/contact" 
            className="mt-6 inline-flex items-center bg-gromatic-green text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your Free Audit
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </Section>
    </main>
  );
}
