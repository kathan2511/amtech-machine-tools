'use client';

import { createContext, useContext, useMemo, useReducer } from 'react';
import { products, type Product } from '@/data/products';

interface EnquiryCartItem {
  productId: string;
}

interface EnquiryCartState {
  items: EnquiryCartItem[];
}

type Action =
  | { type: 'ADD'; productId: string }
  | { type: 'REMOVE'; productId: string }
  | { type: 'CLEAR' };

interface EnquiryCartContextValue extends EnquiryCartState {
  selectedProducts: Product[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
}

const EnquiryCartContext = createContext<EnquiryCartContextValue | undefined>(undefined);

const initialState: EnquiryCartState = { items: [] };

function reducer(state: EnquiryCartState, action: Action): EnquiryCartState {
  switch (action.type) {
    case 'ADD':
      if (state.items.some((item) => item.productId === action.productId)) {
        return state;
      }
      return { items: [...state.items, { productId: action.productId }] };
    case 'REMOVE':
      return { items: state.items.filter((item) => item.productId !== action.productId) };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export function EnquiryCartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectedProducts = useMemo(() => {
    return state.items
      .map((item) => products.find((product) => product.id === item.productId))
      .filter((product): product is Product => Boolean(product));
  }, [state.items]);

  const value: EnquiryCartContextValue = {
    ...state,
    selectedProducts,
    addItem: (productId) => dispatch({ type: 'ADD', productId }),
    removeItem: (productId) => dispatch({ type: 'REMOVE', productId }),
    clear: () => dispatch({ type: 'CLEAR' })
  };

  return <EnquiryCartContext.Provider value={value}>{children}</EnquiryCartContext.Provider>;
}

export function useEnquiryCart() {
  const ctx = useContext(EnquiryCartContext);
  if (!ctx) {
    throw new Error('useEnquiryCart must be used within EnquiryCartProvider');
  }
  return ctx;
}
