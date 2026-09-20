"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatPrice, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import OrsonQuickOrder from "../../_components/OrsonQuickOrder";
import OrsonProductCard from "../../_components/OrsonProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { orsonText } from "../../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#6b6a3d", "#a8442e"],
  women: ["#c98a4b", "#a8442e"],
  kids: ["#d9a441", "#a8442e"],
};

export default function OrsonProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = orsonText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const [from, to] = TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#3b2a1a]/50">
        <Link href="/orson" className="hover:text-[#a8442e]">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link
          href={`/orson/shop?category=${product.category}`}
          className="capitalize hover:text-[#a8442e]"
        >
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-md border-[3px] border-[#3b2a1a] shadow-[8px_8px_0_0_#3b2a1a]">
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
            <span className="mb-3 inline-block rounded-full border border-[#3b2a1a]/30 bg-[#ead9b4] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#a8442e]">
              {t.tagLabels[product.tag] ?? product.tag}
            </span>
          ) : null}
          <h1
            className="text-3xl leading-tight tracking-tight text-[#3b2a1a] sm:text-4xl"
            style={{ fontFamily: "var(--font-orson-display)" }}
          >
            {text.name}
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#3b2a1a]/50">
            {product.sku} · {t.moqUnits(product.moq)}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#3b2a1a]/75">
            {text.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-md border-2 border-[#3b2a1a]/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#3b2a1a] text-[#f4e8d0]">
                  <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">
                    {t.qtyHeader}
                  </th>
                  <th className="p-2 text-right text-xs font-medium uppercase tracking-wider">
                    {t.priceUnitHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier, i) => (
                  <tr key={tier.minQty} className={i % 2 ? "bg-[#ead9b4]/60" : "bg-[#fbf2df]"}>
                    <td className="p-2 text-[#3b2a1a]/70">{tier.minQty}+ {t.unitsSuffix}</td>
                    <td className="p-2 text-right font-semibold text-[#a8442e]">
                      {formatPrice(tier.price, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#3b2a1a]/25 px-2.5 py-1 text-xs text-[#3b2a1a]/70"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <span
                key={c}
                className="rounded-full border border-dashed border-[#3b2a1a]/25 px-2.5 py-1 text-xs text-[#3b2a1a]/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <OrsonQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <h2
            className="mb-5 border-b-2 border-dashed border-[#3b2a1a]/25 pb-3 text-xl tracking-tight text-[#3b2a1a]"
            style={{ fontFamily: "var(--font-orson-display)" }}
          >
            {t.moreFrom} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((p) => (
              <OrsonProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
