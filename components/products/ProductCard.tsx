'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { Badge } from '@/components/ui/Badge';
import { AddToEnquiryButton } from '@/components/enquiry/AddToEnquiryButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Link href={`/products/${product.slug}`} className="relative block h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 300px, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="text-lg font-semibold text-slate-900 hover:text-brand">
          {product.name}
        </Link>
        <p className="text-sm text-slate-600">{product.shortDescription}</p>
        {product.tags && (
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} label={tag} tone="info" />
            ))}
          </div>
        )}
        <div className="mt-auto space-y-2">
          <p className="text-sm text-slate-500">Model: {product.model}</p>
          <AddToEnquiryButton productId={product.id} fullWidth />
        </div>
      </div>
    </div>
  );
}
