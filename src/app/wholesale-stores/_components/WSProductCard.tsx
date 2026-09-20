"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { wsText } from "../_i18n/translations";

const STEEL: [string, string] = ["#6b6b6b", "#2b2b2b"];

export default function WSProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = wsText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];

  return (
    <Link
      href={`/wholesale-stores/product/${product.slug}`}
      className="group flex flex-col border-[3px] border-[#1c1c1c] bg-[#e5e2da] transition-colors hover:bg-[#1c1c1c]/5"
    >
      <div className="relative aspect-[4/5] w-full border-b-[3px] border-[#1c1c1c]">
        <GarmentPlaceholder
          category={product.category}
          seed={product.id}
          image={product.image}
          colorFrom={STEEL[0]}
          colorTo={STEEL[1]}
          label={product.sku}
          className="h-full w-full"
        />
        {product.tag ? (
          <span
            className="absolute right-0 top-0 border-b-[3px] border-l-[3px] border-[#1c1c1c] bg-[#ff5a1f] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1c1c1c]"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <p
          className="text-sm font-bold uppercase leading-tight tracking-tight text-[#1c1c1c] group-hover:underline"
          style={{ fontFamily: "var(--font-ws-display)" }}
        >
          {text.name}
        </p>
        <p
          className="text-[11px] text-[#1c1c1c]/60"
          style={{ fontFamily: "var(--font-ws-mono)" }}
        >
          SKU {product.sku} &middot; {t.moqPrefix} {product.moq}
        </p>
        <div
          className="mt-auto flex items-baseline justify-between border-t-2 border-dashed border-[#1c1c1c]/30 pt-1.5 text-xs"
          style={{ fontFamily: "var(--font-ws-mono)" }}
        >
          <span className="text-[#1c1c1c]/50">{t.from}</span>
          <span className="font-bold text-[#1c1c1c]">
            {formatUSD(lowestTier.price)}{t.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
