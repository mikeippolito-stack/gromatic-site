import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card({ className = '', children, style }: CardProps) {
  return (
    <div className={`bg-white ${className}`} style={style}>
      {children}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className = '', children }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
