"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatUSD, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import SubtleQuickOrder from "../../_components/SubtleQuickOrder";
import SubtleProductCard from "../../_components/SubtleProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { subtleText } from "../../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#c3d4b0", "#9caf88"],
  women: ["#f6dcd4", "#f0c9c0"],
  kids: ["#f5e3bd", "#e8c88f"],
};

export default function SubtleProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = subtleText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const [from, to] = TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs font-semibold text-[#3a3a34]/45">
        <Link href="/subtle" className="hover:text-[#3a3a34]">
          {t.breadcrumbHome}
        </Link>
        {" · "}
        <Link href={`/subtle/shop?category=${product.category}`} className="hover:text-[#3a3a34]">
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" · "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-[2rem] shadow-[0_18px_44px_-24px_rgba(58,58,52,0.4)]">
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={from}
            colorTo={to}
            label={product.sku}
            rounded="rounded-[2rem]"
            className="h-full w-full"
          />
        </div>

        <div>
          {product.tag ? (
            <span className="mb-3 inline-block rounded-full bg-[#f0c9c0]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#3a3a34]">
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-3xl text-[#3a3a34] sm:text-4xl"
            style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
          >
            {text.name}
          </h1>
          <p className="mt-2 text-xs font-semibold text-[#3a3a34]/45">
            {product.sku} · {t.moqNote(product.moq)}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3a3a34]/70">
            {text.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-20px_rgba(58,58,52,0.3)]">
            <div className="bg-[#3a3a34] px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                {t.volumePricingHeader}
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[#3a3a34]/45">
                  <th className="px-5 pt-4">{t.quantityHeader}</th>
                  <th className="px-5 pt-4 text-right">{t.priceUnitHeader}</th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tr) => (
                  <tr key={tr.minQty} className="border-t border-[#3a3a34]/8">
                    <td className="px-5 py-2.5 text-[#3a3a34]/70">{tr.minQty}+ units</td>
                    <td className="px-5 py-2.5 text-right font-semibold text-[#3a3a34]">
                      {formatUSD(tr.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-wider text-[#3a3a34]/40">
            {t.sizesLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#3a3a34]/70 shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-[#3a3a34]/40">
            {t.colorsLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <span
                key={c}
                className="rounded-full bg-[#9caf88]/15 px-3 py-1.5 text-xs font-semibold text-[#3a3a34]/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SubtleQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9caf88]">
            {t.pairsWellTogether}
          </p>
          <h2
            className="mt-1 mb-5 text-2xl text-[#3a3a34]"
            style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
          >
            {t.moreFrom} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((p) => (
              <SubtleProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
