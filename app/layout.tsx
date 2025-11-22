import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EnquiryCartProvider } from '@/components/enquiry/EnquiryCartProvider';
import { EnquiryCartWidget } from '@/components/enquiry/EnquiryCartWidget';

export const metadata: Metadata = {
  title: {
    default: 'Amtech Machine Tools | Industrial Workholding & Welding Solutions',
    template: '%s | Amtech Machine Tools'
  },
  description:
    'Wholesale distributor of multi-brand lathe chucks, welding machines, drilling equipment, vices, and air compressors serving workshops across Gujarat since 1991.',
  keywords: [
    'lathe chucks',
    'welding machines',
    'industrial distributor',
    'Ahmedabad machine tools',
    'enquiry cart'
  ],
  openGraph: {
    title: 'Amtech Machine Tools — Reliable Multi-Brand Distributor in Ahmedabad',
    description:
      'Browse lathe chucks, welding inverters, drilling machines, vices, and air compressors with ready enquiry cart for quick RFQs.',
    url: 'https://amtechmachinetools.in',
    locale: 'en_IN',
    siteName: 'Amtech Machine Tools',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <EnquiryCartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <EnquiryCartWidget />
        </EnquiryCartProvider>
      </body>
    </html>
  );
}
