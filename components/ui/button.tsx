import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  variant?: 'default' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  className = '', 
  color = '#2B7A3D', 
  variant = 'default',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-xl font-medium transition-all hover:opacity-90';
  
  const variantClasses = variant === 'outline' 
    ? 'bg-transparent border-2 hover:bg-opacity-10' 
    : 'text-white';

  const style = variant === 'outline' 
    ? { borderColor: color, color: color }
    : { backgroundColor: color };

  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
