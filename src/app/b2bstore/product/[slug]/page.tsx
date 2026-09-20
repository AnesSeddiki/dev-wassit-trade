"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatPrice, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import B2BQuickOrder from "../../_components/B2BQuickOrder";
import B2BProductCard from "../../_components/B2BProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { b2bText } from "../../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#0b2545", "#134074"],
  women: ["#134074", "#8da9c4"],
  kids: ["#0b2545", "#8da9c4"],
};

export default function B2BStoreProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = b2bText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const [from, to] = TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs text-[#142433]/50" style={{ fontFamily: "var(--font-b2b-mono)" }}>
        <Link href="/b2bstore" className="hover:text-[#0b2545]">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link href={`/b2bstore/shop?category=${product.category}`} className="hover:text-[#0b2545]">
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square border border-[#142433]/12">
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={from}
            colorTo={to}
            label={product.sku}
            className="h-full w-full"
          />
        </div>

        <div>
          {product.tag ? (
            <span
              className="mb-2 inline-block bg-[#8da9c4]/25 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#134074]"
              style={{ fontFamily: "var(--font-b2b-mono)" }}
            >
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-3xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            {text.name}
          </h1>
          <p className="mt-1 text-xs text-[#142433]/50" style={{ fontFamily: "var(--font-b2b-mono)" }}>
            {product.sku} &middot; {t.moqUnits(product.moq)}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#142433]/70">{text.description}</p>

          <div className="mt-6 overflow-hidden border border-[#142433]/12">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-b2b-mono)" }}>
              <thead>
                <tr className="bg-[#0b2545] text-white">
                  <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">{t.qtyHeader}</th>
                  <th className="p-2 text-right text-xs font-medium uppercase tracking-wider">{t.priceUnitHeader}</th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier, i) => (
                  <tr key={tier.minQty} className={i % 2 ? "bg-[#f7f9fb]" : "bg-white"}>
                    <td className="p-2 text-[#142433]/70">{tier.minQty}+</td>
                    <td className="p-2 text-right font-semibold text-[#0b2545]">{formatPrice(tier.price, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#142433]/60" style={{ fontFamily: "var(--font-b2b-mono)" }}>
            <span>{t.sizesLabel}: {product.sizes.join(", ")}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-4 text-xs text-[#142433]/60" style={{ fontFamily: "var(--font-b2b-mono)" }}>
            <span>{t.colorsLabel}: {product.colors.join(", ")}</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <B2BQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <h2
            className="mb-5 text-xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            {t.moreIn} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <B2BProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
