import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { products, getUniqueBrands } from '@/data/products';
import { ProductBrowser } from '@/components/products/ProductBrowser';

export const metadata: Metadata = {
  title: 'Product Catalogue | Amtech Machine Tools',
  description: 'Browse chucks, welding machines, drilling solutions, vices, and compressors with filterable specs and enquiry cart integration.'
};

export default function ProductsPage() {
  const brands = getUniqueBrands();

  return (
    <PageContainer>
      <Section
        title="Catalog of lathe chucks, welders, drilling machines, vices, and compressors"
        subtitle="Use the filters to shortlist the right models, then add them to your enquiry cart."
      >
        <ProductBrowser products={products} brands={brands} />
      </Section>
    </PageContainer>
  );
}
