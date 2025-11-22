import { cn } from '@/lib/utils';

interface BadgeProps {
  label: string;
  tone?: 'default' | 'positive' | 'info';
  className?: string;
}

const toneClasses: Record<Required<BadgeProps>['tone'], string> = {
  default: 'bg-slate-200 text-slate-900',
  positive: 'bg-emerald-100 text-emerald-800',
  info: 'bg-brand/10 text-brand-dark'
};

export function Badge({ label, tone = 'default', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', toneClasses[tone], className)}>
      {label}
    </span>
  );
}
