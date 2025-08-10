import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </section>
  );
}
