import Section from '@/components/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Gromatic for your free growth audit. Book a consultation to discuss your automated growth system.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Book Your Free Growth Audit
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Tell us about your business and we'll map your Growth Circuit to identify quick wins in under 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gromatic-green focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gromatic-green focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gromatic-green focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gromatic-green focus:border-transparent"
                      placeholder="+61 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gromatic-green focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="growth-circuit-starter">Growth Circuit Starter</option>
                    <option value="growth-circuit-pro">Growth Circuit Pro</option>
                    <option value="growth-circuit-enterprise">Growth Circuit Enterprise</option>
                    <option value="google-ads">Google Ads Management</option>
                    <option value="seo">SEO Services</option>
                    <option value="ai-seo">AI SEO</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gromatic-green focus:border-transparent"
                    placeholder="What challenges are you facing with lead generation and follow-up?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gromatic-green text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Request My Free Audit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-automation-blue shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div className="text-slate-600">hello@gromatic.co</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-automation-blue shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <div className="text-slate-600">(02) 8000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-automation-blue shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-slate-900">Location</div>
                      <div className="text-slate-600">Australia • Remote</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gromatic-green rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 30-minute strategy session</li>
                  <li>• Growth bottleneck analysis</li>
                  <li>• Custom automation roadmap</li>
                  <li>• No obligation to proceed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
