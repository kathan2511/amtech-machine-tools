'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { useEnquiryCart } from './EnquiryCartProvider';

export function EnquiryCartWidget() {
  const router = useRouter();
  const { selectedProducts, removeItem, clear } = useEnquiryCart();
  const [isOpen, setIsOpen] = useState(false);
  const count = selectedProducts.length;
  const enquiryParam = useMemo(() => selectedProducts.map((product) => product.id).join(','), [selectedProducts]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark"
      >
        <span>Enquiry Cart</span>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{count}</span>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-black/30"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="h-full w-full max-w-md bg-white shadow-2xl sm:h-auto sm:rounded-l-3xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500">Enquiry Cart</p>
                <p className="text-lg font-semibold text-slate-900">{count} item{count === 1 ? '' : 's'}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-800"
                aria-label="Close enquiry cart"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-6 py-4 sm:max-h-[70vh]">
              {count === 0 && <p className="text-sm text-slate-600">No products added yet. Explore the catalog and add items to build your RFQ.</p>}
              <ul className="space-y-4">
                {selectedProducts.map((product) => (
                  <li key={product.id} className="rounded-xl border border-slate-200 p-4">
                    <p className="text-sm font-semibold text-slate-900">{product.name}</p>
                    <p className="text-xs text-slate-500">{product.brand} · {product.model}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="mt-3 text-sm font-medium text-brand hover:text-brand-dark"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 border-t border-slate-200 px-6 py-4">
              <Button
                fullWidth
                variant="primary"
                disabled={count === 0}
                onClick={() => {
                  if (count === 0) return;
                  router.push(`/contact?items=${encodeURIComponent(enquiryParam)}`);
                  setIsOpen(false);
                }}
              >
                Proceed to RFQ
              </Button>
              {count > 0 && (
                <Button variant="ghost" fullWidth onClick={clear}>
                  Clear cart
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
