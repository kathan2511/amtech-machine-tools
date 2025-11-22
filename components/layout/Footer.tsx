import Link from 'next/link';
import { PageContainer } from '@/components/ui/PageContainer';

const quickLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <PageContainer className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Amtech Machine Tools</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">Ahmedabad, Gujarat</p>
          <p className="mt-4 text-sm text-slate-600">
          4338, Amar House, Kadia Kui, Relief Road<br />
          Ahmedabad - 380001, Gujarat, India
          </p>
          <p className="mt-4 text-sm text-slate-600">Phone / WhatsApp: +91 98250 00000</p>
          <p className="text-sm text-slate-600">Email: sales@amtechmachinetools.in</p>
          <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">GSTIN: 24ABCDE1234F1Z5 (placeholder)</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick links</h4>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-dark">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact Hours</h4>
          <p className="mt-4 text-sm text-slate-600">Monday to Saturday, 9:30 AM – 7:30 PM</p>
          <p className="mt-4 text-sm text-slate-600">
            We support enquiries via phone, WhatsApp, or email. For RFQs, please mention quantities, application, and required delivery timelines to help us respond faster.
          </p>
        </div>
      </PageContainer>
      <div className="border-t border-slate-100 bg-slate-50 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Amtech Machine Tools. All rights reserved.
      </div>
    </footer>
  );
}
