"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, formatUSD, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import WSQuickOrder from "../../_components/WSQuickOrder";
import WSProductCard from "../../_components/WSProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { wsText } from "../../_i18n/translations";

const STEEL: [string, string] = ["#6b6b6b", "#2b2b2b"];

export default function WholesaleStoresProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = wsText(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const text = translateProduct(product, locale);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <p
        className="mb-6 text-xs uppercase tracking-wider text-[#1c1c1c]/50"
        style={{ fontFamily: "var(--font-ws-mono)" }}
      >
        <Link href="/wholesale-stores" className="hover:text-[#1c1c1c]">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link
          href={`/wholesale-stores/shop?category=${product.category}`}
          className="hover:text-[#1c1c1c]"
        >
          {categoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square border-[3px] border-[#1c1c1c]">
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={STEEL[0]}
            colorTo={STEEL[1]}
            label={product.sku}
            className="h-full w-full"
          />
        </div>

        <div>
          {product.tag ? (
            <span
              className="mb-2 inline-block border-2 border-[#1c1c1c] bg-[#ff5a1f] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1c1c1c]"
              style={{ fontFamily: "var(--font-ws-mono)" }}
            >
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-4xl font-bold uppercase leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-ws-display)" }}
          >
            {text.name}
          </h1>
          <p
            className="mt-2 text-xs uppercase tracking-wider text-[#1c1c1c]/60"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            SKU {product.sku} &middot; {t.moqUnits(product.moq)}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1c1c1c]/70">
            {text.description}
          </p>

          <div className="mt-6 overflow-hidden border-[3px] border-[#1c1c1c]">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-ws-mono)" }}>
              <thead>
                <tr className="bg-[#1c1c1c] text-[#e5e2da]">
                  <th className="p-2 text-left text-xs font-bold uppercase tracking-wider">
                    {t.qtyBreakHeader}
                  </th>
                  <th className="p-2 text-right text-xs font-bold uppercase tracking-wider">
                    {t.priceUnitHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier, i) => (
                  <tr
                    key={tier.minQty}
                    className={i % 2 ? "bg-[#1c1c1c]/[0.04]" : "bg-[#e5e2da]"}
                  >
                    <td className="p-2 text-[#1c1c1c]/70">{tier.minQty}+ units</td>
                    <td className="p-2 text-right font-bold text-[#1c1c1c]">
                      {formatUSD(tier.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2 border-2 border-dashed border-[#1c1c1c]/30 p-3 text-xs sm:grid-cols-2" style={{ fontFamily: "var(--font-ws-mono)" }}>
            <span className="text-[#1c1c1c]/70">
              <span className="font-bold text-[#1c1c1c]">{t.sizesLabel}:</span> {product.sizes.join(", ")}
            </span>
            <span className="text-[#1c1c1c]/70">
              <span className="font-bold text-[#1c1c1c]">{t.colorsLabel}:</span> {product.colors.join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <WSQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16 border-t-2 border-[#1c1c1c]/20 pt-8">
          <h2
            className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#1c1c1c]/60"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {t.moreIn} {categoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <WSProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
