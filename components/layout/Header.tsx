import Link from 'next/link';
import { PageContainer } from '@/components/ui/PageContainer';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/brands', label: 'Brands' },
  { href: '/industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact / RFQ' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <PageContainer className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold tracking-tight">
            AM
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Amtech</p>
            <p className="text-lg font-semibold text-slate-900 leading-none">Machine Tools</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-dark">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg border border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-brand/10 sm:inline-flex"
          >
            Request a Quote
          </Link>
          <Link
            href="tel:+919825000000"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            <span aria-hidden>📞</span>
            Call / WhatsApp
          </Link>
        </div>
      </PageContainer>
      <nav className="border-t border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 lg:hidden">
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-dark">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
