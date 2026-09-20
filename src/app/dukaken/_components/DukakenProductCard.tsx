"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatPrice, type Product } from "@/lib/products";
import { CATEGORY_THEME } from "./theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { dukakenText } from "../_i18n/translations";

export default function DukakenProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = dukakenText(locale);
  const theme = CATEGORY_THEME[product.category];
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const text = translateProduct(product, locale);

  return (
    <Link
      href={`/dukaken/product/${product.slug}`}
      className="group flex flex-col border-2 border-[#111827] bg-white transition-transform duration-150 hover:-translate-y-0.5"
      style={{ boxShadow: `4px 4px 0 ${theme.accent}` }}
    >
      <div className="relative aspect-[4/5] w-full border-b-2 border-[#111827]">
        <GarmentPlaceholder
          category={product.category}
          seed={product.id}
          image={product.image}
          colorFrom={theme.from}
          colorTo={theme.to}
          label={product.sku}
          className="h-full w-full"
        />
        <span
          className="absolute left-0 top-0 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white"
          style={{ backgroundColor: theme.accent, fontFamily: "var(--font-dukaken-display)" }}
        >
          {categoryTranslations[product.category][locale].label}
        </span>
        {product.tag ? (
          <span className="absolute right-0 top-0 bg-[#111827] px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white">
            {t.tagLabels[product.tag]}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-2.5">
        <p className="text-xs font-bold leading-snug text-[#111827] group-hover:underline">{text.name}</p>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[#111827]/45">
          {product.sku} · {t.productCard.moqPrefix} {product.moq}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-dashed border-[#111827]/15 pt-1.5 text-xs">
          <span className="text-[#111827]/40">{t.productCard.from}</span>
          <span className="font-black" style={{ color: theme.accent }}>
            {formatPrice(lowestTier.price, locale)}{t.productCard.perUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}
