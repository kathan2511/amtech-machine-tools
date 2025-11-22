import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children?: ReactNode;
  heading?: string;
  description?: string;
  footer?: ReactNode;
}

export function Card({ className, children, heading, description, footer }: CardProps) {
  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white p-6 shadow-sm', className)}>
      {heading && <h3 className="text-lg font-semibold text-slate-900">{heading}</h3>}
      {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      {children && <div className={heading || description ? 'mt-4 space-y-3' : 'space-y-3'}>{children}</div>}
      {footer && <div className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">{footer}</div>}
    </div>
  );
}
