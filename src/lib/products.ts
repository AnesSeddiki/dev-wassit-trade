export type Category = "men" | "women" | "kids";

export interface TierPrice {
  minQty: number;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  sku: string;
  basePrice: number;
  tierPricing: TierPrice[];
  moq: number;
  sizes: string[];
  colors: string[];
  description: string;
  tag?: "New" | "Bestseller" | "Low stock" | "Restocked";
  image: string;
}

export const categories: { id: Category; label: string; description: string }[] = [
  { id: "men", label: "Men", description: "Essentials, outerwear & workwear staples" },
  { id: "women", label: "Women", description: "Everyday basics through occasion wear" },
  { id: "kids", label: "Kids", description: "Sizes 2T–14, sold by the case" },
];

const sizesAdult = ["XS", "S", "M", "L", "XL", "XXL"];
const sizesKids = ["2T", "3T", "4T", "5", "6", "7", "8", "10", "12", "14"];

function tiers(base: number): TierPrice[] {
  return [
    { minQty: 1, price: base },
    { minQty: 12, price: +(base * 0.85).toFixed(2) },
    { minQty: 50, price: +(base * 0.72).toFixed(2) },
    { minQty: 144, price: +(base * 0.6).toFixed(2) },
  ];
}

export const products: Product[] = [
  {
    id: "m1",
    slug: "heavyweight-crew-tee",
    name: "Heavyweight Crew Tee",
    category: "men",
    sku: "MN-TEE-001",
    basePrice: 12,
    tierPricing: tiers(12),
    moq: 24,
    sizes: sizesAdult,
    colors: ["Black", "White", "Charcoal", "Navy", "Olive"],
    description:
      "270gsm combed cotton crew neck built for print and embroidery. Consistent fit across the run, pre-shrunk.",
    tag: "Bestseller",
    image: "/product/images/product1.jpg",
  },
  {
    id: "m2",
    slug: "canvas-work-jacket",
    name: "Canvas Work Jacket",
    category: "men",
    sku: "MN-JKT-014",
    basePrice: 38,
    tierPricing: tiers(38),
    moq: 12,
    sizes: sizesAdult,
    colors: ["Khaki", "Black", "Rust"],
    description: "12oz washed canvas with corduroy collar. Reinforced stitching at stress points for repeat washes.",
    image: "/product/images/product2.jpg",
  },
  {
    id: "m3",
    slug: "fleece-quarter-zip",
    name: "Fleece Quarter-Zip",
    category: "men",
    sku: "MN-FLC-022",
    basePrice: 24,
    tierPricing: tiers(24),
    moq: 24,
    sizes: sizesAdult,
    colors: ["Heather Grey", "Navy", "Forest"],
    description: "Anti-pill microfleece, brushed interior. A steady reorder item for corporate and team programs.",
    tag: "Restocked",
    image: "/product/images/product3.jpg",
  },
  {
    id: "m4",
    slug: "selvedge-denim-straight",
    name: "Selvedge Denim, Straight",
    category: "men",
    sku: "MN-DNM-009",
    basePrice: 42,
    tierPricing: tiers(42),
    moq: 12,
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Raw Indigo", "Black Rinse"],
    description: "13oz selvedge from a mill we've run for six seasons. Chain-stitched hem on request.",
    image: "/product/images/product4.jpg",
  },
  {
    id: "m5",
    slug: "utility-cargo-pant",
    name: "Utility Cargo Pant",
    category: "men",
    sku: "MN-PNT-031",
    basePrice: 29,
    tierPricing: tiers(29),
    moq: 24,
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Stone", "Black", "Olive"],
    description: "Ripstop cotton blend with articulated knee and six-pocket layout. High reorder rate.",
    image: "/product/images/product5.jpg",
  },
  {
    id: "m6",
    slug: "merino-crew-sweater",
    name: "Merino Crew Sweater",
    category: "men",
    sku: "MN-SWT-018",
    basePrice: 34,
    tierPricing: tiers(34),
    moq: 12,
    sizes: sizesAdult,
    colors: ["Camel", "Charcoal", "Bottle Green"],
    description: "17.5 micron merino, fully fashioned shoulders. Low-pill finish tested to 30 washes.",
    tag: "New",
    image: "/product/images/product6.jpg",
  },
  {
    id: "w1",
    slug: "modal-wrap-dress",
    name: "Modal Wrap Dress",
    category: "women",
    sku: "WM-DRS-041",
    basePrice: 26,
    tierPricing: tiers(26),
    moq: 24,
    sizes: sizesAdult,
    colors: ["Terracotta", "Black", "Ivory", "Sage"],
    description: "Fluid modal-blend jersey that drapes without clinging. One of our fastest sell-through styles.",
    tag: "Bestseller",
    image: "/product/images/product7.jpg",
  },
  {
    id: "w2",
    slug: "tailored-blazer",
    name: "Tailored Blazer",
    category: "women",
    sku: "WM-BLZ-007",
    basePrice: 46,
    tierPricing: tiers(46),
    moq: 12,
    sizes: sizesAdult,
    colors: ["Black", "Camel", "Pinstripe"],
    description: "Structured shoulder, half-lined for breathability. Consistently reorders ahead of Q3/Q4.",
    image: "/product/images/product8.jpg",
  },
  {
    id: "w3",
    slug: "ribbed-seamless-legging",
    name: "Ribbed Seamless Legging",
    category: "women",
    sku: "WM-LEG-055",
    basePrice: 18,
    tierPricing: tiers(18),
    moq: 24,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Mocha", "Deep Teal"],
    description: "4-way stretch, squat-proof at 200gsm. Activewear buyers reorder this every cycle.",
    tag: "Bestseller",
    image: "/product/images/product9.jpg",
  },
  {
    id: "w4",
    slug: "linen-blend-shirt",
    name: "Linen-Blend Shirt",
    category: "women",
    sku: "WM-SHT-063",
    basePrice: 22,
    tierPricing: tiers(22),
    moq: 24,
    sizes: sizesAdult,
    colors: ["White", "Stone", "Chambray"],
    description: "55% linen, 45% cotton for structure without the wrinkle penalty. Runs true to size.",
    image: "/product/images/product10.jpg",
  },
  {
    id: "w5",
    slug: "quilted-vest",
    name: "Quilted Vest",
    category: "women",
    sku: "WM-VST-028",
    basePrice: 31,
    tierPricing: tiers(31),
    moq: 12,
    sizes: sizesAdult,
    colors: ["Black", "Dusty Rose", "Olive"],
    description: "Lightweight fill rated to 3-season wear. Strong attach rate alongside outerwear programs.",
    tag: "New",
    image: "/product/images/product11.jpg",
  },
  {
    id: "w6",
    slug: "midi-knit-skirt",
    name: "Midi Knit Skirt",
    category: "women",
    sku: "WM-SKT-072",
    basePrice: 19,
    tierPricing: tiers(19),
    moq: 24,
    sizes: sizesAdult,
    colors: ["Black", "Camel", "Charcoal"],
    description: "Ribbed knit with a soft waistband. Pairs cleanly with three other styles in this range.",
    image: "/product/images/product12.jpg",
  },
  {
    id: "k1",
    slug: "graphic-tee-set",
    name: "Graphic Tee, 3-Pack",
    category: "kids",
    sku: "KD-TEE-011",
    basePrice: 15,
    tierPricing: tiers(15),
    moq: 36,
    sizes: sizesKids,
    colors: ["Assorted Brights", "Assorted Neutrals"],
    description: "Pre-packed 3-count case in mixed sizes. Softest seller in the kids range by volume.",
    tag: "Bestseller",
    image: "/product/images/product13.jpg",
  },
  {
    id: "k2",
    slug: "fleece-zip-hoodie",
    name: "Fleece Zip Hoodie",
    category: "kids",
    sku: "KD-HOD-019",
    basePrice: 17,
    tierPricing: tiers(17),
    moq: 36,
    sizes: sizesKids,
    colors: ["Navy", "Heather Grey", "Berry"],
    description: "Brushed-back fleece, kid-proof double-stitched seams. Ships pre-sized and case-packed.",
    image: "/product/images/product14.jpg",
  },
  {
    id: "k3",
    slug: "cotton-romper",
    name: "Cotton Romper",
    category: "kids",
    sku: "KD-RMP-004",
    basePrice: 11,
    tierPricing: tiers(11),
    moq: 48,
    sizes: ["2T", "3T", "4T"],
    colors: ["Yellow", "Sage", "Cloud"],
    description: "Snap-front romper in GOTS-certified cotton. A staple reorder for baby/toddler buyers.",
    tag: "Restocked",
    image: "/product/images/product15.jpg",
  },
  {
    id: "k4",
    slug: "jogger-set",
    name: "Jogger Set",
    category: "kids",
    sku: "KD-JOG-026",
    basePrice: 16,
    tierPricing: tiers(16),
    moq: 36,
    sizes: sizesKids,
    colors: ["Charcoal", "Navy", "Olive"],
    description: "Matching crew and jogger, ribbed cuffs. Sold as a set, priced as a set.",
    image: "/product/images/product16.jpg",
  },
  {
    id: "k5",
    slug: "rain-shell-jacket",
    name: "Rain Shell Jacket",
    category: "kids",
    sku: "KD-JKT-033",
    basePrice: 21,
    tierPricing: tiers(21),
    moq: 24,
    sizes: sizesKids,
    colors: ["Yellow", "Navy", "Coral"],
    description: "Taped seams, packable hood. Seasonal but reorders fast once weather turns.",
    tag: "New",
    image: "/product/images/product17.jpg",
  },
  {
    id: "k6",
    slug: "school-polo-set",
    name: "School Polo, 2-Pack",
    category: "kids",
    sku: "KD-PLO-008",
    basePrice: 14,
    tierPricing: tiers(14),
    moq: 48,
    sizes: sizesKids,
    colors: ["White", "Navy", "Forest"],
    description: "Uniform-grade pique, colorfast wash. Our steadiest back-to-school program item.",
    image: "/product/images/product18.jpg",
  },
];

export function productsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function categoryCover(category: Category): string {
  return productsByCategory(category)[0]?.image ?? "";
}

export function categoryPhotos(category: Category): string[] {
  return productsByCategory(category).map((p) => p.image);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatUSD(value: number): string {
  return `$${value.toFixed(2)}`;
}
