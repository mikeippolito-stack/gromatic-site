import React from 'react';
export function Card({ className='', children }:{className?:string, children:React.ReactNode}){ return <div className={`bg-white border rounded-2xl ${className}`}>{children}</div>; }
export function CardContent({ className='', children }:{className?:string, children:React.ReactNode}){ return <div className={`p-6 ${className}`}>{children}</div>; }
