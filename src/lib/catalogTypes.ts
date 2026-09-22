export interface TierPrice {
  minQty: number;
  price: number;
}

export function tiers(base: number): TierPrice[] {
  return [
    { minQty: 1, price: base },
    { minQty: 12, price: +(base * 0.85).toFixed(2) },
    { minQty: 50, price: +(base * 0.72).toFixed(2) },
    { minQty: 144, price: +(base * 0.6).toFixed(2) },
  ];
}

/** Minimal shape the cart needs to resolve a line item's name/price, shared across every industry catalog. */
export interface CatalogItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  tierPricing: TierPrice[];
}
