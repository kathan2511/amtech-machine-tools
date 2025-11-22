import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const milestones = [
  { year: '1991', detail: 'Founded in Ahmedabad as a specialist shop for lathe workholding accessories.' },
  { year: '2002', detail: 'Expanded into welding distribution for fabrication clusters in VATVA and Naroda.' },
  { year: '2011', detail: 'Added compressed air solutions with NordAir partnership and service crew.' },
  { year: '2022', detail: 'Launched digital enquiry cart to speed up RFQ intake for SME buyers.' }
];

export const metadata: Metadata = {
  title: 'About | Amtech Machine Tools',
  description:
    'Family-run distributor helping Gujarat manufacturers source reliable workholding, welding, drilling, and compressed air solutions since 1991.'
};

export default function AboutPage() {
  return (
    <PageContainer>
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">About us</p>
        <h1 className="text-4xl font-bold text-slate-900">Focused on shop-floor reliability for three decades.</h1>
        <p className="text-lg text-slate-600">
          Amtech Machine Tools is a family-run distributor headquartered in Ahmedabad. We obsess over stocking the right mix of
          chucks, vices, welding inverters, drilling solutions, and compressed air equipment so machine shops can keep running without downtime.
        </p>
      </section>

      <Section title="Highlights" subtitle="Milestones that shaped our customer service playbook">
        <div className="grid gap-6 md:grid-cols-2">
          {milestones.map((milestone) => (
            <Card key={milestone.year} heading={milestone.year} description={milestone.detail} />
          ))}
        </div>
      </Section>

      <Section title="Leadership" subtitle="Hands-on ownership from the shop floor to dispatch">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="h-32 w-32 rounded-3xl bg-slate-200" aria-hidden />
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Ketan Shah</h3>
              <p className="text-sm uppercase tracking-wide text-slate-500">Founder & Managing Partner</p>
              <p className="mt-3 text-slate-600">
                Ketan started as a machine shop supervisor before founding Amtech. He still visits customer plants weekly,
                validating tooling problems on the shop floor so our recommendations are grounded in reality.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
