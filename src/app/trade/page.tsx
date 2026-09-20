"use client";

import Link from "next/link";
import { categoryPhotos, categories, products } from "@/lib/products";
import ProductCard from "./_components/ProductCard";
import QuickSkuOrder from "./_components/QuickSkuOrder";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { tradeText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  men: ["#334155", "#0f172a"],
  women: ["#7c5a3c", "#3f2d1c"],
  kids: ["#a16207", "#422006"],
};

export default function TradeHome() {
  const { locale } = useLanguage();
  const t = tradeText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-amber-600"
            style={{ fontFamily: "var(--font-trade-mono)" }}
          >
            {t.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {t.headline1}
            <br />
            {t.headline2}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#0f172a]/65">{t.sub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/trade/shop"
              className="bg-[#0f172a] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1e293b]"
              style={{ fontFamily: "var(--font-trade-mono)" }}
            >
              {t.browseCatalog}
            </Link>
            <Link
              href="/trade/shop"
              className="border border-[#0f172a]/25 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0f172a] transition-colors hover:border-[#0f172a]"
              style={{ fontFamily: "var(--font-trade-mono)" }}
            >
              {t.downloadLineSheet}
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[#0f172a]/12 sm:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="bg-white p-3">
                <dt
                  className="text-[10px] uppercase tracking-wider text-[#0f172a]/45"
                  style={{ fontFamily: "var(--font-trade-mono)" }}
                >
                  {s.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-[#0f172a]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <QuickSkuOrder />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {categories.map((c) => {
            const [from, to] = CATEGORY_TONES[c.id];
            const ct = categoryTranslations[c.id][locale];
            return (
              <Link
                key={c.id}
                href={`/trade/shop?category=${c.id}`}
                className="group relative flex h-40 flex-col justify-end overflow-hidden border border-[#0f172a]/12 p-4"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={from}
                  colorTo={to}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="relative text-lg font-semibold text-white">{ct.label}</span>
                <span
                  className="relative text-[11px] text-white/75"
                  style={{ fontFamily: "var(--font-trade-mono)" }}
                >
                  {ct.description}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">{t.reorderFavorites}</h2>
          <Link
            href="/trade/shop"
            className="text-xs font-medium text-[#0f172a]/60 underline decoration-dotted underline-offset-4 hover:text-[#0f172a]"
          >
            {t.viewAllSkus}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
