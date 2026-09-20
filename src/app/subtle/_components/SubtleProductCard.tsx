"use client";

import { useState } from "react";
import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { subtleText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#c3d4b0", "#9caf88"],
  women: ["#f6dcd4", "#f0c9c0"],
  kids: ["#f5e3bd", "#e8c88f"],
};

const TAG_STYLES: Record<string, string> = {
  New: "bg-[#9caf88] text-white",
  Bestseller: "bg-[#3a3a34] text-white",
  "Low stock": "bg-[#f0c9c0] text-[#3a3a34]",
  Restocked: "bg-white text-[#3a3a34]",
};

export default function SubtleProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);
  const { locale } = useLanguage();
  const t = subtleText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white p-2.5 shadow-[0_10px_30px_-18px_rgba(58,58,52,0.3)] transition-shadow hover:shadow-[0_16px_34px_-16px_rgba(58,58,52,0.35)]">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setSaved((s) => !s);
        }}
        aria-label={saved ? t.saveRemove : t.saveAdd}
        className={`absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-colors ${
          saved ? "bg-[#f0c9c0] text-[#3a3a34]" : "bg-white/85 text-[#3a3a34]/50 hover:text-[#3a3a34]"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s-7.2-4.5-10-9.1C.4 8.6 1.8 5 5.3 5c2 0 3.5 1.1 4.7 2.6C11.2 6.1 12.7 5 14.7 5c3.5 0 4.9 3.6 3.3 6.9C19.2 16.5 12 21 12 21z" />
        </svg>
      </button>

      <Link href={`/subtle/product/${product.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={from}
            colorTo={to}
            label={product.sku}
            rounded="rounded-2xl"
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {product.tag ? (
            <span
              className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${TAG_STYLES[product.tag]}`}
            >
              {product.tag}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-1 px-2 pb-1 pt-3">
          <p
            className="text-sm font-semibold leading-snug text-[#3a3a34]"
            style={{ fontFamily: "var(--font-subtle-display)" }}
          >
            {text.name}
          </p>
          <p className="text-[11px] text-[#3a3a34]/50">
            {t.moqPrefix} {product.moq} {t.unitsSuffix}
          </p>
          <div className="mt-auto flex items-baseline justify-between pt-2 text-xs">
            <span className="text-[#3a3a34]/45">{t.asLowAs}</span>
            <span className="font-semibold text-[#3a3a34]">
              {formatUSD(lowestTier.price)}<span className="text-[#3a3a34]/45">{t.perUnit}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
