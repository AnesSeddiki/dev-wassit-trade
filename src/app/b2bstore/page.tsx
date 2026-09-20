"use client";

import Link from "next/link";
import { categoryPhotos, categories, products } from "@/lib/products";
import B2BProductCard from "./_components/B2BProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { b2bText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  men: ["#0b2545", "#134074"],
  women: ["#134074", "#8da9c4"],
  kids: ["#0b2545", "#8da9c4"],
};

export default function B2BStoreHome() {
  const { locale } = useLanguage();
  const t = b2bText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#142433]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em] text-[#134074]"
              style={{ fontFamily: "var(--font-b2b-mono)" }}
            >
              {t.eyebrow}
            </p>
            <h1
              className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight text-[#0b2545] sm:text-5xl"
              style={{ fontFamily: "var(--font-b2b-display)" }}
            >
              {t.headline.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < t.headline.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#142433]/70">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/b2bstore/shop"
                className="bg-[#0b2545] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#134074]"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                {t.browseCatalog}
              </Link>
              <Link
                href="/b2bstore/shop"
                className="border border-[#0b2545]/25 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b2545] transition-colors hover:border-[#0b2545]"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                {t.requestQuote}
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#142433]/10 pt-6">
              {t.tiers.map((tier) => (
                <div key={tier.name}>
                  <p
                    className="text-sm font-semibold text-[#0b2545]"
                    style={{ fontFamily: "var(--font-b2b-display)" }}
                  >
                    {tier.name}
                  </p>
                  <p className="text-[11px] text-[#142433]/55" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                    {tier.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote request preview card */}
          <div className="border border-[#142433]/12 bg-[#f7f9fb]">
            <div className="flex items-center justify-between bg-[#0b2545] px-5 py-3 text-white">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                {t.quotePreview.heading}
              </span>
              <span className="text-[11px] text-[#8da9c4]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                {t.quotePreview.ref}
              </span>
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#142433]/55">{t.quotePreview.statusLabel}</span>
                <span className="rounded-sm bg-[#8da9c4]/25 px-2 py-0.5 text-xs font-medium text-[#134074]">
                  {t.quotePreview.statusValue}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#142433]/55">{t.quotePreview.accountTierLabel}</span>
                <span className="font-medium text-[#142433]">{t.quotePreview.accountTierValue}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#142433]/55">{t.quotePreview.paymentTermsLabel}</span>
                <span className="font-medium text-[#142433]">{t.quotePreview.paymentTermsValue}</span>
              </div>
              <div className="border-t border-dashed border-[#142433]/15 pt-4">
                <p
                  className="mb-2 text-[11px] uppercase tracking-wider text-[#142433]/45"
                  style={{ fontFamily: "var(--font-b2b-mono)" }}
                >
                  {t.quotePreview.lineItemsHeading}
                </p>
                <div className="space-y-1.5 text-xs" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  <div className="flex justify-between">
                    <span className="text-[#142433]/70">MN-TEE-001 &times; 144</span>
                    <span className="text-[#142433]">$7.20/u</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#142433]/70">WM-DRS-041 &times; 50</span>
                    <span className="text-[#142433]">$18.72/u</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#142433]/70">KD-TEE-011 &times; 36</span>
                    <span className="text-[#142433]">$12.75/u</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#142433]/15 pt-4">
                <span
                  className="text-xs uppercase tracking-wider text-[#142433]/55"
                  style={{ fontFamily: "var(--font-b2b-mono)" }}
                >
                  {t.quotePreview.estTotalLabel}
                </span>
                <span className="text-lg font-semibold text-[#0b2545]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  {t.quotePreview.estTotalValue}
                </span>
              </div>
              <Link
                href="/b2bstore/shop"
                className="block bg-[#0b2545] py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#134074]"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                {t.quotePreview.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2
            className="text-2xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            {t.categorySection.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {categories.map((c) => {
            const [from, to] = CATEGORY_TONES[c.id];
            return (
              <Link
                key={c.id}
                href={`/b2bstore/shop?category=${c.id}`}
                className="group relative flex h-44 flex-col justify-end overflow-hidden border border-[#142433]/12 p-5"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={from}
                  colorTo={to}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-[#0b2545]/15 to-transparent" />
                <span
                  className="relative text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-b2b-display)" }}
                >
                  {categoryTranslations[c.id][locale].label}
                </span>
                <span className="relative text-[11px] text-white/80" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  {categoryTranslations[c.id][locale].description}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between border-b border-[#142433]/10 pb-4">
          <h2
            className="text-2xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            {t.featuredSection.heading}
          </h2>
          <Link
            href="/b2bstore/shop"
            className="text-xs font-medium text-[#134074] underline decoration-[#8da9c4] underline-offset-4 hover:text-[#0b2545]"
          >
            {t.featuredSection.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <B2BProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Trust / process */}
      <section className="bg-[#0b2545]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8da9c4]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
            {t.trust.eyebrow}
          </p>
          <h2
            className="mt-2 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            {t.trust.heading}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.steps.map((s) => (
              <div key={s.step} className="relative border-t-2 border-[#8da9c4]/40 pt-5">
                <span className="text-3xl font-semibold text-[#8da9c4]/50" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  {s.step}
                </span>
                <p className="mt-3 text-sm font-semibold text-white" style={{ fontFamily: "var(--font-b2b-display)" }}>
                  {s.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
