import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve | Amtech Machine Tools',
  description: 'Machine shops, fabrication workshops, maintenance teams, and SMEs rely on us for tooling, welding, and compressed air solutions.'
};

export default function IndustriesPage() {
  return (
    <PageContainer>
      <Section title="Industries we serve" subtitle="We understand the nuances of each buyer persona so you get the right spec the first time.">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Card key={industry.title} heading={industry.title} description={industry.summary}>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                {industry.typicalBuys.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}
