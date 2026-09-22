"use client";

import Link from "next/link";
import { autoPartCategories, autoParts, autoPartsByCategory } from "@/lib/autoParts";
import ProductCard from "./_components/ProductCard";
import QuickSkuOrder from "./_components/QuickSkuOrder";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { autoPartCategoryTranslations } from "@/lib/i18n/autoPartTranslations";
import { autoPartsText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  engine: ["#3a3f47", "#16181c"],
  "brakes-suspension": ["#5c2020", "#1a0d0d"],
  "electrical-lighting": ["#1e3a5c", "#0d1a2b"],
};

export default function AutoPartsHome() {
  const { locale } = useLanguage();
  const t = autoPartsText(locale).home;
  const featured = autoParts.slice(0, 8);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#ff7a1a]"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {t.eyebrow}
          </p>
          <h1
            className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {t.headline1}
            <br />
            {t.headline2}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">{t.sub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/auto-parts/shop"
              className="bg-[#ff7a1a] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#16181c] transition-colors hover:bg-[#ff9142]"
              style={{ fontFamily: "var(--font-auto-display)" }}
            >
              {t.browseCatalog}
            </Link>
            <Link
              href="/auto-parts/shop"
              className="border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/80 transition-colors hover:border-white/50"
              style={{ fontFamily: "var(--font-auto-display)" }}
            >
              {t.downloadLineSheet}
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 sm:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="bg-[#1c1f24] p-3">
                <dt
                  className="text-[10px] uppercase tracking-wider text-white/40"
                  style={{ fontFamily: "var(--font-auto-display)" }}
                >
                  {s.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <QuickSkuOrder />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {autoPartCategories.map((c) => {
            const [from, to] = CATEGORY_TONES[c.id];
            const ct = autoPartCategoryTranslations[c.id][locale];
            return (
              <Link
                key={c.id}
                href={`/auto-parts/shop?category=${c.id}`}
                className="group relative flex h-40 flex-col justify-end overflow-hidden border border-white/10 p-4"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={autoPartsByCategory(c.id).map((p) => p.image)}
                  colorFrom={from}
                  colorTo={to}
                  intervalMs={3500}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span
                  className="relative text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-auto-display)" }}
                >
                  {ct.label}
                </span>
                <span className="relative text-[11px] text-white/70">{ct.description}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <div className="mb-5 flex items-end justify-between">
          <h2
            className="text-xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {t.reorderFavorites}
          </h2>
          <Link
            href="/auto-parts/shop"
            className="text-xs font-medium text-white/50 underline decoration-dotted underline-offset-4 hover:text-white"
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
