export const metadata = { 
  title: "About", 
  description: "Simple systems. Serious growth." 
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
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
      </section>
    </main>
  );
