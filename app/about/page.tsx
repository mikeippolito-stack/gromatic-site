import Section from '@/components/Section';

export const metadata = {
  title: 'About',
  description: 'Simple systems. Serious growth.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              About Gromatic
            </h1>
            <p className="mt-3 text-slate-600">
              Simple systems. Serious growth.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
