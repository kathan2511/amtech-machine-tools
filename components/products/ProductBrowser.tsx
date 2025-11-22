'use client';

import { useMemo, useState } from 'react';
import { Product, ProductCategory, filterProducts, productCategories } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/Button';

interface ProductBrowserProps {
  products: Product[];
  brands: string[];
}

export function ProductBrowser({ products, brands }: ProductBrowserProps) {
  const [category, setCategory] = useState<ProductCategory | ''>('');
  const [brand, setBrand] = useState('');
  const [jawCount, setJawCount] = useState('');
  const [minDiameter, setMinDiameter] = useState('');
  const [maxDiameter, setMaxDiameter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      filterProducts(products, {
        category: category || undefined,
        brand: brand || undefined,
        jawCount: jawCount ? parseInt(jawCount, 10) : undefined,
        minDiameter: minDiameter ? parseInt(minDiameter, 10) : undefined,
        maxDiameter: maxDiameter ? parseInt(maxDiameter, 10) : undefined,
        search: search || undefined
      }),
    [products, category, brand, jawCount, minDiameter, maxDiameter, search]
  );

  const resetFilters = () => {
    setCategory('');
    setBrand('');
    setJawCount('');
    setMinDiameter('');
    setMaxDiameter('');
    setSearch('');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button type="button" className="text-sm text-brand" onClick={resetFilters}>
            Reset
          </button>
        </div>
        <div className="mt-6 space-y-4 text-sm text-slate-700">
          <label className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as ProductCategory | '')}
              className="w-full rounded-lg border border-slate-200 px-3 py-2"
            >
              <option value="">All categories</option>
              {Object.entries(productCategories).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Brand</span>
            <select value={brand} onChange={(event) => setBrand(event.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2">
              <option value="">All brands</option>
              {brands.map((brandName) => (
                <option key={brandName} value={brandName}>
                  {brandName}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Jaw count (for chucks)</span>
            <select value={jawCount} onChange={(event) => setJawCount(event.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2">
              <option value="">Any</option>
              <option value="3">3 jaws</option>
              <option value="4">4 jaws</option>
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-2">
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Min Ø (mm)</span>
              <input
                type="number"
                value={minDiameter}
                onChange={(event) => setMinDiameter(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2">
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Max Ø (mm)</span>
              <input
                type="number"
                value={maxDiameter}
                onChange={(event) => setMaxDiameter(event.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2"
              />
            </label>
          </div>
          <label className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Search</span>
            <input
              type="text"
              placeholder="Search by name or spec"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2"
            />
          </label>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-500">Product results</p>
            <p className="text-2xl font-semibold text-slate-900">{filtered.length} item{filtered.length === 1 ? '' : 's'}</p>
          </div>
          <Button variant="secondary" onClick={resetFilters}>
            Clear all filters
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filtered.length === 0 && <p className="text-sm text-slate-600">No products match the filters. Adjust filters to see more results.</p>}
        </div>
      </div>
    </div>
  );
}
