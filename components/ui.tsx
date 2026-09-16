import Link from 'next/link';
import { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) { return <div className={`container ${className}`}>{children}</div>; }
export function Button({ href, children, variant = 'primary', className = '' }: { href: string; children: ReactNode; variant?: 'primary' | 'light' | 'outline'; className?: string }) {
  const colors = variant === 'primary' ? 'bg-teal text-white hover:bg-ocean' : variant === 'light' ? 'bg-white text-teal hover:bg-sand' : 'border border-teal text-teal hover:bg-teal hover:text-white';
  return <Link href={href} className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${colors} ${className}`}>{children}</Link>;
}
export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) { return <div className={`mb-10 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}><p className="eyebrow mb-3">{eyebrow}</p><h2 className="text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>{text && <p className="mt-4 leading-7 text-slate-600">{text}</p>}</div>; }
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <article className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 ${className}`}>{children}</article>; }
