"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatPrice, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import HyperQuickOrder from "../../_components/HyperQuickOrder";
import HyperProductCard, { HYPER_TONES } from "../../_components/HyperProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { hyperText } from "../../_i18n/translations";

export default function HyperProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = hyperText(locale).product;
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const [from, to] = HYPER_TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-10">
      <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#f5f2ea]/40">
        <Link href="/hyper" className="hover:text-[#d4af37]">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link href={`/hyper/shop?category=${product.category}`} className="capitalize hover:text-[#d4af37]">
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="aspect-square border border-[#d4af37]/20">
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
            <span className="mb-3 inline-block bg-[#d4af37] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]">
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-4xl leading-tight tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-hyper-display)" }}
          >
            {text.name}
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#f5f2ea]/45">
            {product.sku} &middot; {t.moqUnits(product.moq)}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#f5f2ea]/65">
            {text.description}
          </p>

          <div className="mt-8 overflow-hidden border border-[#d4af37]/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2b0f1f]">
                  <th className="p-3 text-left text-[10px] font-medium uppercase tracking-[0.15em] text-[#f5f2ea]/70">
                    {t.quantityHeader}
                  </th>
                  <th className="p-3 text-right text-[10px] font-medium uppercase tracking-[0.15em] text-[#f5f2ea]/70">
                    {t.priceUnitHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier, i) => (
                  <tr key={tier.minQty} className={i % 2 ? "bg-[#f5f2ea]/[0.03]" : ""}>
                    <td className="p-3 text-[#f5f2ea]/60">
                      {tier.minQty}+ {t.unitsSuffix}
                    </td>
                    <td
                      className="p-3 text-right text-base text-[#d4af37]"
                      style={{ fontFamily: "var(--font-hyper-display)" }}
                    >
                      {formatPrice(tier.price, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#f5f2ea]/55">
            <span>
              <span className="uppercase tracking-[0.15em] text-[#f5f2ea]/35">{t.sizesLabel} </span>
              {product.sizes.join(", ")}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#f5f2ea]/55">
            <span>
              <span className="uppercase tracking-[0.15em] text-[#f5f2ea]/35">{t.colorwaysLabel} </span>
              {product.colors.join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <HyperQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-20 border-t border-[#d4af37]/15 pt-10">
          <p className="mb-1 text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
            {t.completeTheRun}
          </p>
          <h2 className="mb-6 text-2xl" style={{ fontFamily: "var(--font-hyper-display)" }}>
            {t.moreIn} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <HyperProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
