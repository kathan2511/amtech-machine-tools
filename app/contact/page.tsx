import type { Metadata } from 'next';
import { PageContainer } from '@/components/ui/PageContainer';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & RFQ | Amtech Machine Tools',
  description: 'Share your requirement list, preferred brands, and delivery timelines. We respond within one business day.'
};

export default function ContactPage() {
  return (
    <PageContainer>
      <Section
        title="Contact / RFQ"
        subtitle="Tell us what you are looking for and include any specs. We will revert with pricing, delivery, and alternates if needed."
      >
        <ContactForm />
      </Section>
    </PageContainer>
  );
}
