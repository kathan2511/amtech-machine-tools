import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { AddToEnquiryButton } from '@/components/enquiry/AddToEnquiryButton';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: 'Product not found' };
  }
  return {
    title: `${product.name} | Amtech Machine Tools`,
    description: product.shortDescription
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product!);

  return (
    <PageContainer>
      <nav className="text-sm text-slate-500">
        <Link href="/products" className="hover:text-brand">
          Products
        </Link>{' '}
        / <span className="text-slate-700">{product!.name}</span>
      </nav>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="relative h-96 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <Image src={product!.image} alt={product!.name} fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <Badge label={product!.brand} tone="info" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{product!.name}</h1>
            <p className="text-sm text-slate-500">
              {product!.category} · Model {product!.model}
            </p>
          </div>
          <p className="text-lg text-slate-600">{product!.description}</p>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Key specifications</p>
            <dl className="mt-3 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm">
              {product!.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-slate-500">{spec.label}</dt>
                  <dd className="font-semibold text-slate-900">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <AddToEnquiryButton productId={product!.id} fullWidth />
        </div>
      </div>

      <Section title="Applications" subtitle="Where this model is typically deployed">
        <div className="grid gap-6 md:grid-cols-3">
          <Card description="Jobbing machine shops needing reliable repeatability for daily production." />
          <Card description="Maintenance teams clamping eccentric or repair components." />
          <Card description="OEM ancillaries machining castings and forgings in batches." />
        </div>
      </Section>

      <Section title="Related products" subtitle="Explore more options in the same category">
        {related.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-600">View the full catalog for additional models.</p>
        )}
      </Section>
    </PageContainer>
  );
}
