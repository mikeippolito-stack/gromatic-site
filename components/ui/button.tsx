import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid'|'outline', color?: string };
export default function Button({ variant='solid', color='#1E3A8A', className='', children, ...props }: Props){
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition';
  const styles = variant==='outline' ? `border text-[${color}] border-[${color}] bg-white hover:opacity-80` : `bg-[${color}] text-white hover:opacity-90`;
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
