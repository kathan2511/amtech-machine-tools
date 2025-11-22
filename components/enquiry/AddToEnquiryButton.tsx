'use client';

import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { useEnquiryCart } from '@/components/enquiry/EnquiryCartProvider';

interface AddToEnquiryButtonProps {
  productId: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export function AddToEnquiryButton({ productId, variant = 'primary', fullWidth }: AddToEnquiryButtonProps) {
  const { items, addItem, removeItem } = useEnquiryCart();
  const isAdded = useMemo(() => items.some((item) => item.productId === productId), [items, productId]);

  return (
    <Button
      type="button"
      variant={variant}
      fullWidth={fullWidth}
      onClick={() => (isAdded ? removeItem(productId) : addItem(productId))}
    >
      {isAdded ? 'Added to enquiry' : 'Add to enquiry'}
    </Button>
  );
}
