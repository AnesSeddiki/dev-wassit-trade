"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatPrice, type Product } from "@/lib/products";
import { ColorDot } from "./swatch";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { razziText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#2dd4ff", "#1a1a1a"],
  women: ["#ff3d81", "#1a1a1a"],
  kids: ["#ffe14d", "#ff3d81"],
};

const TAG_STYLES: Record<string, string> = {
  New: "bg-[#2dd4ff] text-[#1a1a1a]",
  Bestseller: "bg-[#ff3d81] text-white",
  "Low stock": "bg-[#1a1a1a] text-[#ffe14d]",
  Restocked: "bg-[#ffe14d] text-[#1a1a1a]",
};

export default function RazziProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = razziText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link
      href={`/razzi/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] bg-white shadow-[4px_4px_0_0_#1a1a1a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#1a1a1a]"
    >
      <div className="relative aspect-[4/5] w-full border-b-[3px] border-[#1a1a1a]">
        <GarmentPlaceholder
          category={product.category}
          seed={product.id}
          image={product.image}
          colorFrom={from}
          colorTo={to}
          label={product.sku}
          className="h-full w-full"
        />
        {product.tag ? (
          <span
            className={`absolute right-2 top-2 rounded-full border-2 border-[#1a1a1a] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${TAG_STYLES[product.tag]}`}
          >
            {product.tag}
          </span>
        ) : null}
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#1a1a1a] py-2 text-center text-xs font-bold uppercase tracking-wide text-white transition-transform duration-200 group-hover:translate-y-0">
          {t.quickView}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <p
          className="text-base font-bold leading-snug text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-razzi-display)" }}
        >
          {text.name}
        </p>
        <p className="text-[11px] uppercase tracking-wide text-[#1a1a1a]/50">
          {product.sku} · {t.moqPrefix} {product.moq}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          {product.colors.slice(0, 6).map((c) => (
            <ColorDot key={c} name={c} />
          ))}
        </div>

        <div className="mt-auto flex items-baseline justify-between border-t-2 border-dashed border-[#1a1a1a]/15 pt-2 text-sm">
          <span className="text-[#1a1a1a]/50">{t.from}</span>
          <span className="font-extrabold text-[#ff3d81]">
            {formatPrice(lowestTier.price, locale)}
            <span className="text-[#1a1a1a]/50 font-medium">{t.perUnit}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
