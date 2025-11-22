import Link from 'next/link';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { productCategories } from '@/data/products';
import { brands } from '@/data/brands';
import { industries } from '@/data/industries';

const featureHighlights = [
  { label: 'Since 1991', detail: '34+ years supplying Gujarat workshops' },
  { label: 'Multi-brand distributor', detail: 'Curated range across 9 OEM partners' },
  { label: 'Fast delivery', detail: 'Ready stock on common chuck sizes' }
];

const reasons = [
  'Authorised access to OEM spare jaws, cylinders, and service kits.',
  'Technical guidance on chuck selection, welding processes, and compressed air sizing.',
  'Local inventory of popular diameters, jaw sets, and drill spares for quick turnarounds.',
  'Enquiry cart + RFQ workflow that captures specs so we can quote accurately the first time.'
];

const industriesSubset = industries.slice(0, 3);

const featuredCategories = [
  {
    key: 'chuck',
    title: productCategories.chuck,
    description: 'Self-centering, independent, dog, and big-bore power chucks up to 630 mm.',
    link: '/products?category=chuck'
  },
  {
    key: 'welding',
    title: productCategories.welding,
    description: 'MMA, TIG, and automation solutions with on-ground support.',
    link: '/products?category=welding'
  },
  {
    key: 'drilling',
    title: productCategories.drilling,
    description: 'Pillar, radial, and magnetic drills for fabrication contractors.',
    link: '/products?category=drilling'
  },
  {
    key: 'vice',
    title: productCategories.vice,
    description: 'Tilting, hydraulic, and swivel vices for manual and CNC setups.',
    link: '/products?category=vice'
  },
  {
    key: 'compressor',
    title: productCategories.compressor,
    description: 'Piston and screw compressors with AMC-Ready support.',
    link: '/products?category=compressor'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-slate-50">
        <PageContainer className="grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge label="Trusted Distributor" tone="info" />
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Amtech Machine Tools – Multi-Brand Lathe Chucks & Workshop Equipment Since 1991
            </h1>
            <p className="text-lg text-slate-600">
              We help machine shops, fabrication units, and SME factories source reliable workholding, welding, drilling, and compressed air equipment with responsive support from Ahmedabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products?category=chuck"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark"
              >
                Browse Chucks
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-800 hover:border-brand"
              >
                Request a Quote
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {featureHighlights.map((feature) => (
                <Card key={feature.label} heading={feature.label} description={feature.detail} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-brand/40 bg-white/70 p-6 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Fast RFQs</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Build your enquiry cart</h3>
            <p className="mt-2 text-sm text-slate-600">
              Add multiple chucks, welders, or accessories into one enquiry, include specs such as dia, jaw count, or preferred brand, and send a consolidated RFQ without back-and-forth emails.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li>• Add items from any catalog page</li>
              <li>• View cart summary on every page</li>
              <li>• Pre-populated Contact / RFQ form</li>
            </ul>
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <Section title="Highlighted categories" subtitle="Built for the way Gujarat machine shops buy" eyebrow="Catalog">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <Card key={category.key} heading={category.title} description={category.description}>
                <Link href={category.link} className="text-sm font-semibold text-brand">
                  View products →
                </Link>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Why choose Amtech" subtitle="Four reasons buyers and foremen keep working with us" eyebrow="Differentiators">
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <Card key={reason} description={reason} />
            ))}
          </div>
        </Section>

        <Section title="Brands we stock" subtitle="Authorised multi-brand catalogue ready for RFQs" eyebrow="Partners">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brands.slice(0, 10).map((brand) => (
              <div key={brand.name} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-lg font-semibold text-slate-900">{brand.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{brand.specialties[0]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Industries we serve" subtitle="From job shops to OEMs" eyebrow="Applications">
          <div className="grid gap-6 md:grid-cols-3">
            {industriesSubset.map((industry) => (
              <Card key={industry.title} heading={industry.title} description={industry.summary}>
                <p className="text-sm text-slate-500">Typical buys: {industry.typicalBuys.join(', ')}</p>
              </Card>
            ))}
          </div>
        </Section>

        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-light">Ready to source?</p>
          <h3 className="mt-4 text-3xl font-semibold">Send us your requirement list</h3>
          <p className="mt-2 text-lg text-slate-200">
            Share specs, preferred brands, and delivery timelines. We respond within one business day.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900">
              Go to Contact / RFQ
            </Link>
            <Link href="tel:+919825000000" className="rounded-full border border-white px-6 py-3 font-semibold text-white">
              Call / WhatsApp
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
