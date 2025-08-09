import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({
  className = "",
  children,
  ...props
}: { className?: string; children: React.ReactNode } & DivProps) {
  return (
    <div {...props} className={`bg-white border rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: { className?: string; children: React.ReactNode } & DivProps) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
