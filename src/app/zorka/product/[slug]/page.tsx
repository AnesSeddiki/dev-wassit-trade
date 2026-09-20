"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatUSD, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import ZorkaQuickOrder from "../../_components/ZorkaQuickOrder";
import ZorkaProductCard from "../../_components/ZorkaProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { zorkaText } from "../../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#111111", "#3a3a3a"],
  women: ["#161616", "#3a3a3a"],
  kids: ["#0d0d0d", "#3a3a3a"],
};

export default function ZorkaProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = zorkaText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const [from, to] = TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-24">
      <p className="mb-10 text-xs text-black/40" style={{ fontFamily: "var(--font-zorka-body)" }}>
        <Link href="/zorka" className="hover:text-black">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link href={`/zorka/shop?category=${product.category}`} className="hover:text-black">
          {categoryTranslations[product.category][locale].label}
        </Link>
      </p>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="aspect-[4/5] w-full">
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={from}
            colorTo={to}
            className="h-full w-full"
          />
        </div>

        <div className="lg:pt-4">
          {product.tag ? (
            <p
              className="mb-3 text-xs uppercase tracking-[0.2em] text-black/40"
              style={{ fontFamily: "var(--font-zorka-body)" }}
            >
              {product.tag}
            </p>
          ) : null}
          <h1
            className="text-4xl leading-[0.95] tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-zorka-display)", fontWeight: 600 }}
          >
            {text.name}
          </h1>
          <p className="mt-3 text-xs text-black/40" style={{ fontFamily: "var(--font-zorka-body)" }}>
            {product.sku}
          </p>
          <p
            className="mt-6 max-w-md text-sm leading-relaxed text-black/60"
            style={{ fontFamily: "var(--font-zorka-body)" }}
          >
            {text.description}
          </p>

          <p className="mt-6 text-xs text-black/50" style={{ fontFamily: "var(--font-zorka-body)" }}>
            {t.moqUnits(product.moq)}
          </p>

          <div className="mt-8 max-w-sm">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-zorka-body)" }}>
              <tbody>
                {product.tierPricing.map((tier) => (
                  <tr key={tier.minQty} className="border-b border-black/10">
                    <td className="py-2 text-black/50">
                      {tier.minQty}+ {t.tierUnitsSuffix}
                    </td>
                    <td className="py-2 text-right font-medium text-black">{formatUSD(tier.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="mt-8 flex flex-col gap-1 text-xs text-black/50"
            style={{ fontFamily: "var(--font-zorka-body)" }}
          >
            <p>
              {t.sizesLabel} — {product.sizes.join(", ")}
            </p>
            <p>
              {t.colorsLabel} — {product.colors.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-black/10 pt-14">
        <ZorkaQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-24">
          <h2
            className="mb-10 text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-zorka-display)", fontWeight: 600 }}
          >
            {t.moreIn} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-4">
            {related.map((p) => (
              <ZorkaProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
