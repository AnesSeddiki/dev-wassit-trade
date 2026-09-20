"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatPrice, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import DukakenQuickOrder from "../../_components/DukakenQuickOrder";
import DukakenProductCard from "../../_components/DukakenProductCard";
import { CATEGORY_THEME } from "../../_components/theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { dukakenText } from "../../_i18n/translations";

export default function DukakenProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = dukakenText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const theme = CATEGORY_THEME[product.category];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs font-bold uppercase tracking-wider text-[#111827]/45">
        <Link href="/dukaken" className="hover:text-[#111827]">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link
          href={`/dukaken/shop?category=${product.category}`}
          className="capitalize hover:text-[#111827]"
          style={{ color: theme.accent }}
        >
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div
          className="aspect-square border-4 border-[#111827]"
          style={{ boxShadow: `6px 6px 0 ${theme.accent}` }}
        >
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={theme.from}
            colorTo={theme.to}
            label={product.sku}
            className="h-full w-full"
          />
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span
              className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white"
              style={{ backgroundColor: theme.accent, fontFamily: "var(--font-dukaken-display)" }}
            >
              {categoryTranslations[product.category][locale].label}
            </span>
            {product.tag ? (
              <span
                className="bg-[#111827] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-dukaken-display)" }}
              >
                {t.tagLabels[product.tag]}
              </span>
            ) : null}
          </div>
          <h1 className="text-3xl tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            {text.name}
          </h1>
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#111827]/45">
            {t.moqLine(product.sku, product.moq)}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#111827]/70">{text.description}</p>

          <div className="mt-6 overflow-hidden border-2 border-[#111827]">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: theme.accent }}>
                  <th className="p-2 text-left text-xs font-black uppercase tracking-wider text-white">
                    {t.qtyHeader}
                  </th>
                  <th className="p-2 text-right text-xs font-black uppercase tracking-wider text-white">
                    {t.priceUnitHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier, i) => (
                  <tr key={tier.minQty} style={{ backgroundColor: i % 2 ? theme.tint : "white" }}>
                    <td className="p-2 font-semibold text-[#111827]/70">{tier.minQty}+</td>
                    <td className="p-2 text-right font-black text-[#111827]">{formatPrice(tier.price, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#111827]/60">
            <span>{t.sizesLabel}: {product.sizes.join(", ")}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#111827]/60">
            <span>{t.colorsLabel}: {product.colors.join(", ")}</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <DukakenQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <h2 className="mb-5 text-2xl tracking-tight" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            {t.moreIn} <span style={{ color: theme.accent }}>{categoryTranslations[product.category][locale].label}</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <DukakenProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
