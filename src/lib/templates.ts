export interface TemplateMeta {
  slug: string;
  name: string;
  inspiredBy: string;
  tagline: string;
  direction: string;
  accent: string;
  from: string;
  to: string;
}

export const templates: TemplateMeta[] = [
  {
    slug: "trade",
    name: "Trade",
    inspiredBy: "Shopify's Trade theme",
    tagline: "Spreadsheet-fast ordering for buyers who already know what they want.",
    direction: "Utilitarian data-dense B2B",
    accent: "#f59e0b",
    from: "#1e293b",
    to: "#0f172a",
  },
  {
    slug: "hyper",
    name: "Hyper",
    inspiredBy: "Hyper by FoxEcom (Shopify Plus)",
    tagline: "A dark, editorial storefront for brands selling to demanding buyers.",
    direction: "Premium maximalist / dark luxury",
    accent: "#d4af37",
    from: "#2b0f1f",
    to: "#0a0a0a",
  },
  {
    slug: "modiva",
    name: "Modiva",
    inspiredBy: "Modiva (fashion boutique theme)",
    tagline: "Magazine-style layouts for apparel buyers who shop with their eyes.",
    direction: "Editorial fashion",
    accent: "#c1602f",
    from: "#c1602f",
    to: "#e8c4a0",
  },
  {
    slug: "subtle",
    name: "Subtle",
    inspiredBy: "Subtle (Shopify B2B toolkit theme)",
    tagline: "A calm, rounded interface that makes bulk ordering feel easy.",
    direction: "Soft pastel",
    accent: "#9caf88",
    from: "#9caf88",
    to: "#f0c9c0",
  },
  {
    slug: "dukaken",
    name: "Dukaken",
    inspiredBy: "Dukaken (WooCommerce multipurpose)",
    tagline: "A dense, color-coded marketplace built for very large catalogs.",
    direction: "Maximalist marketplace",
    accent: "#2563eb",
    from: "#2563eb",
    to: "#db2777",
  },
  {
    slug: "razzi",
    name: "Razzi",
    inspiredBy: "Razzi (WooCommerce + Elementor)",
    tagline: "A loud, swatch-driven storefront that makes filtering fun.",
    direction: "Playful pop-art",
    accent: "#ff3d81",
    from: "#ff3d81",
    to: "#2dd4ff",
  },
  {
    slug: "wholesale-stores",
    name: "Wholesale Stores",
    inspiredBy: "Wholesale Stores (bulk-selling WP theme)",
    tagline: "No-frills, warehouse-honest ordering for buyers who just want the SKU.",
    direction: "Industrial / brutalist",
    accent: "#ff5a1f",
    from: "#6b6b6b",
    to: "#2b2b2b",
  },
  {
    slug: "b2bstore",
    name: "B2Bstore",
    inspiredBy: "B2Bstore (PrestaShop theme)",
    tagline: "A corporate storefront built around quotes, terms, and trust.",
    direction: "Corporate B2B",
    accent: "#8da9c4",
    from: "#0b2545",
    to: "#134074",
  },
  {
    slug: "zorka",
    name: "Zorka",
    inspiredBy: "Zorka (fashion WooCommerce theme)",
    tagline: "Radical whitespace and oversized type for a gallery-like catalog.",
    direction: "Brutally minimal",
    accent: "#ff2d2d",
    from: "#111111",
    to: "#3a3a3a",
  },
  {
    slug: "orson",
    name: "Orson",
    inspiredBy: "Orson (WordPress store theme)",
    tagline: "A warm, general-store feel for a catalog that covers everyone.",
    direction: "Retro / vintage general store",
    accent: "#a8442e",
    from: "#d9a441",
    to: "#a8442e",
  },
];
