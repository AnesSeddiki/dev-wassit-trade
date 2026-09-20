"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { zorkaText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#111111", "#3a3a3a"],
  women: ["#161616", "#3a3a3a"],
  kids: ["#0d0d0d", "#3a3a3a"],
};

export default function ZorkaProductCard({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = zorkaText(locale);
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link href={`/zorka/product/${product.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <GarmentPlaceholder
          category={product.category}
          seed={product.id}
          image={product.image}
          colorFrom={from}
          colorTo={to}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm leading-snug" style={{ fontFamily: "var(--font-zorka-body)" }}>
            {text.name}
          </p>
          <p
            className="mt-1 text-[11px] text-black/40"
            style={{ fontFamily: "var(--font-zorka-body)" }}
          >
            {product.tag ? `${product.tag} · ` : ""}
            {t.productCard.moqPrefix} {product.moq}
          </p>
        </div>
        <p
          className="whitespace-nowrap text-xs text-black/50"
          style={{ fontFamily: "var(--font-zorka-body)" }}
        >
          {t.productCard.from} {formatPrice(lowestTier.price, locale)}
        </p>
      </div>
    </Link>
  );
}
