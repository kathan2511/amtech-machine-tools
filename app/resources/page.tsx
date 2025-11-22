import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const guides = [
  {
    title: 'How to choose the right lathe chuck size',
    summary: 'Quick framework covering jaw count, scroll type, spindle nose, and recommended gripping ranges.'
  },
  {
    title: '3-jaw vs 4-jaw chucks: when to use what',
    summary: 'Explains runout considerations, off-centre clamping, and job changeover tips for shop supervisors.'
  },
  {
    title: 'Checklist for specifying welding inverters',
    summary: 'Covers input supply, duty cycle, process selection, and must-have accessories for fabrication sites.'
  },
  {
    title: 'Compressed air sizing for SMEs',
    summary: 'Rules of thumb for moving from piston to screw compressors with dryer selection guidance.'
  }
];

export const metadata: Metadata = {
  title: 'Resources | Amtech Machine Tools',
  description: 'Guides that teach machinists and procurement teams how to select the correct tooling and equipment.'
};

export default function ResourcesPage() {
  return (
    <PageContainer>
      <Section
        title="Resources & guides"
        subtitle="Short, practical explainers your team can reference when preparing RFQs."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Card key={guide.title} heading={guide.title} description={guide.summary}>
              <p className="text-sm text-slate-500">Updated quarterly · PDF coming soon</p>
            </Card>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}
