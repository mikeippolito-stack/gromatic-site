import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  color?: "green" | "blue";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
  solid: "",
  outline: "border bg-transparent",
  ghost: "bg-transparent",
};
const colors = {
  green: "bg-[#2B7A3D] text-white hover:opacity-90 focus:ring-[#2B7A3D]",
  blue: "bg-[#1E3A8A] text-white hover:opacity-90 focus:ring-[#1E3A8A]",
};
const sizes = { sm: "px-3 py-2 text-sm", md: "px-4 py-2", lg: "px-6 py-3 text-lg" };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "solid", color = "green", size = "md", ...props }, ref) => {
    const cls = [base, variants[variant], colors[color], sizes[size], className].filter(Boolean).join(" ");
    return <button ref={ref} className={cls} {...props} />;
  }
);
Button.displayName = "Button";
