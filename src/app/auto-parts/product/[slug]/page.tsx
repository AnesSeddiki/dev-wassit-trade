"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { formatPrice } from "@/lib/products";
import { getAutoPart, autoParts } from "@/lib/autoParts";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import QuickOrderMatrix from "../../_components/QuickOrderMatrix";
import ProductCard from "../../_components/ProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { autoPartCategoryTranslations, translateAutoPart } from "@/lib/i18n/autoPartTranslations";
import { autoPartsText } from "../../_i18n/translations";

const TONES: Record<string, [string, string]> = {
  engine: ["#3a3f47", "#16181c"],
  "brakes-suspension": ["#5c2020", "#1a0d0d"],
  "electrical-lighting": ["#1e3a5c", "#0d1a2b"],
};

export default function AutoPartsProduct() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const t = autoPartsText(locale);
  const product = getAutoPart(slug);
  if (!product) notFound();

  const text = translateAutoPart(product, locale);
  const [from, to] = TONES[product.category];
  const related = autoParts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs text-white/45" style={{ fontFamily: "var(--font-auto-display)" }}>
        <Link href="/auto-parts" className="hover:text-white">
          {t.breadcrumbHome}
        </Link>
        {" / "}
        <Link href={`/auto-parts/shop?category=${product.category}`} className="hover:text-white">
          {autoPartCategoryTranslations[product.category][locale].label}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square border border-white/10">
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
              className="mb-2 inline-block bg-[#ff7a1a] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#16181c]"
              style={{ fontFamily: "var(--font-auto-display)" }}
            >
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {text.name}
          </h1>
          <p className="mt-1 text-xs text-white/45" style={{ fontFamily: "var(--font-auto-display)" }}>
            {product.sku} · {t.moqUnits(product.moq)}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">{text.description}</p>

          <div className="mt-6 overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0e0f11] text-white">
                  <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">{t.qtyHeader}</th>
                  <th className="p-2 text-right text-xs font-medium uppercase tracking-wider">
                    {t.priceUnitHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((tier, i) => (
                  <tr key={tier.minQty} className={i % 2 ? "bg-[#1c1f24]" : "bg-[#191c21]"}>
                    <td className="p-2 text-white/70">{tier.minQty}+</td>
                    <td className="p-2 text-right font-semibold text-white">
                      {formatPrice(tier.price, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/55">
            <span>
              {t.packSizeLabel}: {product.packSizes.join(", ")}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-4 text-xs text-white/55">
            <span>
              {t.gradeLabel}: {product.grades.join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <QuickOrderMatrix product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <h2
            className="mb-5 text-xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {t.moreIn} {autoPartCategoryTranslations[product.category][locale].label}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
