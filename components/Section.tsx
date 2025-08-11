interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </section>
  );
}
