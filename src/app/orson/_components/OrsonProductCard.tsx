"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { orsonText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#6b6a3d", "#a8442e"],
  women: ["#c98a4b", "#a8442e"],
  kids: ["#d9a441", "#a8442e"],
};

export default function OrsonProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = orsonText(locale);
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link
      href={`/orson/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border-2 border-[#3b2a1a]/15 bg-[#fbf2df] transition-colors hover:border-[#a8442e]"
    >
      <div className="relative aspect-[4/5] w-full border-b-2 border-[#3b2a1a]/15">
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
            className="absolute right-2 top-2 rounded-full border border-[#f4e8d0]/60 bg-[#3b2a1a] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#f4e8d0]"
          >
            {t.tagLabels[product.tag] ?? product.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <p
          className="text-[15px] leading-snug text-[#3b2a1a] group-hover:text-[#a8442e]"
          style={{ fontFamily: "var(--font-orson-serif)", fontWeight: 600 }}
        >
          {text.name}
        </p>
        <p className="text-[11px] uppercase tracking-wide text-[#3b2a1a]/55">
          {product.sku} · {t.productCard.moqPrefix} {product.moq}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-dashed border-[#3b2a1a]/25 pt-1.5 text-sm">
          <span className="text-[11px] uppercase tracking-wide text-[#3b2a1a]/50">{t.productCard.from}</span>
          <span className="font-semibold text-[#a8442e]">
            {formatPrice(lowestTier.price, locale)}{t.productCard.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
