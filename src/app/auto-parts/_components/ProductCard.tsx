"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatPrice } from "@/lib/products";
import type { AutoPart } from "@/lib/autoParts";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateAutoPart } from "@/lib/i18n/autoPartTranslations";
import { autoPartsText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  engine: ["#3a3f47", "#16181c"],
  "brakes-suspension": ["#5c2020", "#1a0d0d"],
  "electrical-lighting": ["#1e3a5c", "#0d1a2b"],
};

export default function ProductCard({ product }: { product: AutoPart }) {
  const { locale } = useLanguage();
  const t = autoPartsText(locale).productCard;
  const text = translateAutoPart(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link
      href={`/auto-parts/product/${product.slug}`}
      className="group flex flex-col border border-white/10 bg-[#1c1f24] transition-colors hover:border-[#ff7a1a]/60"
    >
      <div className="relative aspect-[4/5] w-full border-b border-white/10">
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
            className="absolute right-2 top-2 bg-[#ff7a1a] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#16181c]"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <p className="text-sm font-semibold leading-snug text-white group-hover:underline">
          {text.name}
        </p>
        <p className="text-[11px] text-white/45" style={{ fontFamily: "var(--font-auto-display)" }}>
          {product.sku} · {t.moqPrefix} {product.moq}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-dashed border-white/15 pt-1.5 text-xs">
          <span className="text-white/45">{t.from}</span>
          <span className="font-semibold text-[#ff7a1a]">
            {formatPrice(lowestTier.price, locale)}
            {t.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
