'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  fullWidth?: boolean;
}

const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'bg-white text-brand border border-brand hover:bg-brand/10',
  ghost: 'bg-transparent text-slate-700 hover:text-brand'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5 rounded-md',
  md: 'text-base px-4 py-2 rounded-lg',
  lg: 'text-lg px-6 py-3 rounded-xl'
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  icon,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
