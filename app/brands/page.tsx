import type { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { brands } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Brands | Amtech Machine Tools',
  description: 'Meet the OEM partners we distribute across Gujarat — from workholding to welding and air solutions.'
};

export default function BrandsPage() {
  return (
    <PageContainer>
      <Section
        title="Brands we stock"
        subtitle="We curate complementary OEM partners so buyers can source most shop-floor essentials with one call."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {brands.map((brand) => (
            <Card key={brand.name} heading={brand.name} description={brand.description}>
              <p className="text-sm text-slate-500">Origin: {brand.origin}</p>
              <p className="text-sm text-slate-500">Focus: {brand.specialties.join(', ')}</p>
              <Link
                href={`/products?brand=${encodeURIComponent(brand.name)}`}
                className="text-sm font-semibold text-brand"
              >
                View products →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}
