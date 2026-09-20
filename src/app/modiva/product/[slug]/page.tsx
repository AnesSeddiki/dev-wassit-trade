"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatUSD, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import ModivaQuickOrder from "../../_components/ModivaQuickOrder";
import ModivaProductCard from "../../_components/ModivaProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { modivaText } from "../../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  men: ["#4a3d33", "#2b2420"],
  women: ["#e8c4a0", "#c1602f"],
  kids: ["#c1602f", "#6b3820"],
};

export default function ModivaProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = modivaText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const [from, to] = TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#2b2420]/45">
        <Link href="/modiva" className="hover:text-[#c1602f]">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link href={`/modiva/shop?category=${product.category}`} className="hover:text-[#c1602f]">
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="aspect-[4/5] w-full">
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
            <span className="mb-3 inline-block border border-[#c1602f] px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-[#c1602f]">
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-5xl italic leading-[1.02] text-[#2b2420]"
            style={{ fontFamily: "var(--font-modiva-display)" }}
          >
            {text.name}
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#2b2420]/45">
            {product.sku} · {t.moqUnits(product.moq)}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#2b2420]/70">
            {text.description}
          </p>

          <div className="mt-8 border-t border-[#2b2420]/12 pt-6">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#2b2420]/45">
              {t.tieredPricing}
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2b2420]/15 text-left text-[10px] uppercase tracking-[0.16em] text-[#2b2420]/45">
                  <th className="py-2 font-normal">{t.qtyHeader}</th>
                  <th className="py-2 text-right font-normal">{t.priceUnitHeader}</th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier) => (
                  <tr key={tier.minQty} className="border-b border-[#2b2420]/8">
                    <td className="py-2 text-[#2b2420]/70">{tier.minQty}+ {t.unitsSuffix}</td>
                    <td className="py-2 text-right font-medium text-[#c1602f]">
                      {formatUSD(tier.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col gap-1.5 text-xs text-[#2b2420]/60">
            <span>
              <span className="uppercase tracking-[0.14em] text-[#2b2420]/40">{t.sizesLabel} </span>
              {product.sizes.join(", ")}
            </span>
            <span>
              <span className="uppercase tracking-[0.14em] text-[#2b2420]/40">{t.colorwaysLabel} </span>
              {product.colors.join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <ModivaQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-20">
          <h2
            className="mb-6 border-b border-[#2b2420]/12 pb-4 text-2xl italic text-[#2b2420]"
            style={{ fontFamily: "var(--font-modiva-display)" }}
          >
            {t.moreFrom} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {related.map((p) => (
              <ModivaProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
