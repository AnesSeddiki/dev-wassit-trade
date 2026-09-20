"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { hyperText } from "../_i18n/translations";

export const HYPER_TONES: Record<string, [string, string]> = {
  men: ["#2b0f1f", "#0a0a0a"],
  women: ["#4a1530", "#170610"],
  kids: ["#3a2c10", "#120c05"],
};

export default function HyperProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = hyperText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = HYPER_TONES[product.category];

  return (
    <Link
      href={`/hyper/product/${product.slug}`}
      className="group flex flex-col border border-[#d4af37]/15 bg-[#0a0a0a] transition-colors hover:border-[#d4af37]/60"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-[#d4af37]/15">
        <GarmentPlaceholder
          category={product.category}
          seed={product.id}
          image={product.image}
          colorFrom={from}
          colorTo={to}
          label={product.sku}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag ? (
          <span className="absolute right-2 top-2 bg-[#d4af37] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]">
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p
          className="text-base leading-snug text-[#f5f2ea] transition-colors group-hover:text-[#d4af37]"
          style={{ fontFamily: "var(--font-hyper-display)" }}
        >
          {text.name}
        </p>
        <p className="text-[10px] uppercase tracking-[0.16em] text-[#f5f2ea]/40">
          {product.sku} &middot; {t.moqPrefix} {product.moq}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-[#d4af37]/10 pt-2 text-xs">
          <span className="uppercase tracking-[0.16em] text-[#f5f2ea]/40">{t.from}</span>
          <span className="font-semibold text-[#d4af37]">
            {formatUSD(lowestTier.price)}
            {t.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
