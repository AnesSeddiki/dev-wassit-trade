"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { tradeText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#334155", "#0f172a"],
  women: ["#7c5a3c", "#3f2d1c"],
  kids: ["#a16207", "#422006"],
};

export default function ProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = tradeText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link
      href={`/trade/product/${product.slug}`}
      className="group flex flex-col border border-[#0f172a]/12 bg-white transition-colors hover:border-[#0f172a]/40"
    >
      <div className="relative aspect-[4/5] w-full border-b border-[#0f172a]/12">
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
            className="absolute right-2 top-2 bg-amber-500 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0f172a]"
            style={{ fontFamily: "var(--font-trade-mono)" }}
          >
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <p className="text-sm font-semibold leading-snug text-[#0f172a] group-hover:underline">
          {text.name}
        </p>
        <p
          className="text-[11px] text-[#0f172a]/50"
          style={{ fontFamily: "var(--font-trade-mono)" }}
        >
          {product.sku} · {t.moqPrefix} {product.moq}
        </p>
        <div
          className="mt-auto flex items-baseline justify-between border-t border-dashed border-[#0f172a]/15 pt-1.5 text-xs"
          style={{ fontFamily: "var(--font-trade-mono)" }}
        >
          <span className="text-[#0f172a]/50">{t.from}</span>
          <span className="font-semibold text-[#0f172a]">
            {formatUSD(lowestTier.price)}{t.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
