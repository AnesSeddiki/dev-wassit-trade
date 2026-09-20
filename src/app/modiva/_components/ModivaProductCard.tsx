"use client";

import Link from "next/link";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { modivaText } from "../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#4a3d33", "#2b2420"],
  women: ["#e8c4a0", "#c1602f"],
  kids: ["#c1602f", "#6b3820"],
};

export default function ModivaProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  const { locale } = useLanguage();
  const t = modivaText(locale).productCard;
  const text = translateProduct(product, locale);
  const lowestTier = product.tierPricing[product.tierPricing.length - 1];
  const [from, to] = TONES[product.category];

  return (
    <Link href={`/modiva/product/${product.slug}`} className="group flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <GarmentPlaceholder
          category={product.category}
          seed={product.id}
          image={product.image}
          colorFrom={from}
          colorTo={to}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {typeof index === "number" ? (
          <span className="absolute left-2 top-2 text-[10px] uppercase tracking-[0.2em] text-white/85">
            {t.look(String(index + 1).padStart(2, "0"))}
          </span>
        ) : null}
        {product.tag ? (
          <span className="absolute right-2 top-2 border border-white/70 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.16em] text-white">
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-1">
        <p
          className="text-lg italic leading-snug text-[#2b2420] group-hover:text-[#c1602f]"
          style={{ fontFamily: "var(--font-modiva-display)" }}
        >
          {text.name}
        </p>
        <p className="text-[10px] uppercase tracking-[0.16em] text-[#2b2420]/45">
          {product.sku} · {t.moqPrefix} {product.moq}
        </p>
        <p className="mt-1 text-xs text-[#2b2420]/60">
          {t.from} <span className="font-medium text-[#c1602f]">{formatUSD(lowestTier.price)}</span> {t.perUnit}
        </p>
      </div>
    </Link>
  );
}
