import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

export function Section({ title, subtitle, eyebrow, children, align = 'left', id }: SectionProps) {
  return (
    <section id={id} className="py-12">
      <div className={align === 'center' ? 'text-center' : 'text-left'}>
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
