'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { productCategories } from '@/data/products';
import { useEnquiryCart } from '@/components/enquiry/EnquiryCartProvider';

interface FormState {
  name: string;
  company: string;
  city: string;
  email: string;
  phone: string;
  contactMethod: 'Phone' | 'WhatsApp' | 'Email';
  categories: string[];
  requirements: string;
}

const initialState: FormState = {
  name: '',
  company: '',
  city: '',
  email: '',
  phone: '',
  contactMethod: 'Phone',
  categories: [],
  requirements: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const { selectedProducts, removeItem, addItem, clear } = useEnquiryCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const hydratedFromQuery = useRef(false);

  useEffect(() => {
    if (hydratedFromQuery.current) return;
    const itemsParam = searchParams.get('items');
    if (!itemsParam) return;
    itemsParam.split(',').forEach((id) => {
      if (id) {
        addItem(id.trim());
      }
    });
    hydratedFromQuery.current = true;
  }, [searchParams, addItem]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      form,
      enquiryItems: selectedProducts.map((product) => ({ id: product.id, name: product.name }))
    };
    // eslint-disable-next-line no-console
    console.log('RFQ submission', payload);
    setSubmitted(true);
    router.push('#rfq-success');
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCategory = (categoryKey: string) => {
    setForm((prev) => {
      const exists = prev.categories.includes(categoryKey);
      return {
        ...prev,
        categories: exists ? prev.categories.filter((cat) => cat !== categoryKey) : [...prev.categories, categoryKey]
      };
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="font-semibold text-slate-700">Name *</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold text-slate-700">Company</span>
          <input
            type="text"
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold text-slate-700">City *</span>
          <input
            required
            type="text"
            value={form.city}
            onChange={(event) => updateField('city', event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold text-slate-700">Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold text-slate-700">Phone / WhatsApp *</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-semibold text-slate-700">Preferred contact *</span>
          <select
            value={form.contactMethod}
            onChange={(event) => updateField('contactMethod', event.target.value as FormState['contactMethod'])}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          >
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
        </label>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-700">Product categories of interest</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {Object.entries(productCategories).map(([key, label]) => (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm"
            >
              <input
                type="checkbox"
                checked={form.categories.includes(key)}
                onChange={() => toggleCategory(key)}
                className="h-4 w-4"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
      <label className="space-y-2 text-sm">
        <span className="font-semibold text-slate-700">Requirements / RFQ details *</span>
        <textarea
          required
          rows={5}
          value={form.requirements}
          onChange={(event) => updateField('requirements', event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="Share quantities, applications, preferred brands, delivery timelines, etc."
        />
      </label>
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-500">Enquiry cart items</p>
            <p className="text-lg font-semibold text-slate-900">{selectedProducts.length} item{selectedProducts.length === 1 ? '' : 's'}</p>
          </div>
          <Button type="button" variant="ghost" onClick={clear}>
            Clear list
          </Button>
        </div>
        <ul className="space-y-3">
          {selectedProducts.length === 0 && <p className="text-sm text-slate-600">No items yet. Add products from the catalog to help us quote faster.</p>}
          {selectedProducts.map((product) => (
            <li key={product.id} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-sm">
              <div>
                <p className="font-semibold text-slate-900">{product.name}</p>
                <p className="text-xs text-slate-500">{product.brand} · {product.model}</p>
              </div>
              <button type="button" onClick={() => removeItem(product.id)} className="text-xs font-semibold text-brand">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <Button type="submit" size="lg">
          Submit RFQ
        </Button>
        {submitted && (
          <p id="rfq-success" className="text-sm font-medium text-emerald-600">
            Thanks! Our team will contact you within one business day.
          </p>
        )}
      </div>
    </form>
  );
}
