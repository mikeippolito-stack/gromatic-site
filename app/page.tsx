import Section from '@/components/Section';
import { ArrowRight, CheckCircle2, LineChart, Workflow, ShieldCheck, Bolt, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Growth on <span className="text-[#2B7A3D]">Autopilot</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We install simple, automated growth systems for local businesses — capture more leads, 
            follow up automatically, and convert faster while you focus on running your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-[#2B7A3D] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Growth Audit
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all"
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
            <div className="text-4xl md:text-5xl font-bold text-[#2B7A3D]">+38%</div>
            <div className="text-slate-600 mt-2">Average lead volume increase</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#2B7A3D]">-62%</div>
            <div className="text-slate-600 mt-2">Reduction in manual admin time</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#2B7A3D]">3.4x</div>
            <div className="text-slate-600 mt-2">Marketing ROI improvement</div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How We Help You Grow</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our Growth Circuit Method installs automation that works around the clock.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B7A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LineChart className="text-[#2B7A3D]" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Lead Growth</h3>
            <p className="text-sm text-slate-600">More enquiries from search, ads & social media.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Workflow className="text-[#1E3A8A]" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Automation</h3>
            <p className="text-sm text-slate-600">Follow-ups & nurturing on complete autopilot.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-[#F59E0B]" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Reliability</h3>
            <p className="text-sm text-slate-600">Systems that quietly work 24/7, 365 days.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B7A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bolt className="text-[#2B7A3D]" size={32} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Speed</h3>
            <p className="text-sm text-slate-600">Fast setup, fast results, fast ROI.</p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16 bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
            </div>
            <p className="text-slate-800 italic mb-4">
              "We stopped chasing leads. The system just hums along and bookings keep coming."
            </p>
            <div className="text-sm text-slate-600">— A. Taylor, Restaurant Owner</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
              <Star className="text-[#F59E0B] shrink-0" size={20} />
            </div>
            <p className="text-slate-800 italic mb-4">
              "Follow-ups are automatic now — our team finally has its evenings back."
            </p>
            <div className="text-sm text-slate-600">— J. Singh, Electrical Services</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="text-center bg-[#1E3A8A] rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to automate your growth?</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Let's build your Growth Circuit in under 30 days. Book a free audit to see how much growth you're missing.
          </p>
          <a 
            href="/contact" 
            className="mt-6 inline-flex items-center bg-[#2B7A3D] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your Free Audit
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </Section>
    </main>
  );
}
