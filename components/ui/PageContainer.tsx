import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  className?: string;
  children: ReactNode;
}

export function PageContainer({ className, children }: PageContainerProps) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8', className)}>{children}</div>;
}
