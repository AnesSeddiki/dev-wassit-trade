"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { b2bText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#0b2545", "#134074"],
  women: ["#134074", "#8da9c4"],
  kids: ["#0b2545", "#8da9c4"],
};

export default function B2BProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = b2bText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link
      href={`/b2bstore/product/${product.slug}`}
      className="group flex flex-col border border-[#142433]/12 bg-white transition-all hover:border-[#0b2545]/40 hover:shadow-[0_2px_14px_rgba(11,37,69,0.08)]"
    >
      <div className="relative aspect-[4/5] w-full border-b border-[#142433]/10">
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
            className="absolute right-2 top-2 bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-mono)" }}
          >
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <p className="text-sm font-semibold leading-snug text-[#142433] group-hover:text-[#0b2545]">
          {text.name}
        </p>
        <p className="text-[11px] text-[#142433]/50" style={{ fontFamily: "var(--font-b2b-mono)" }}>
          {product.sku} &middot; {t.moqPrefix} {product.moq}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-[#8da9c4]/30 pt-1.5 text-xs">
          <span
            className="uppercase tracking-wide text-[#142433]/45"
            style={{ fontFamily: "var(--font-b2b-mono)" }}
          >
            {t.from}
          </span>
          <span className="font-semibold text-[#0b2545]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
            {formatUSD(lowestTier.price)}{t.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
