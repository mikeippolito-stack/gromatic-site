import React from 'react';
export default function Section({ id, className='', children }:{ id?:string, className?:string, children:React.ReactNode }){
  return <section id={id} className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${className}`}>{children}</section>;
}
