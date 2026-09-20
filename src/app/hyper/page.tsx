"use client";

import Link from "next/link";
import { categoryCover, categoryPhotos, categories, products } from "@/lib/products";
import HyperProductCard, { HYPER_TONES } from "./_components/HyperProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { hyperText } from "./_i18n/translations";

export default function HyperHome() {
  const { locale } = useLanguage();
  const t = hyperText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#d4af37]/15">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
              {t.eyebrow}
            </p>
            <h1
              className="mt-5 text-[2.75rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-[4.5rem]"
              style={{ fontFamily: "var(--font-hyper-display)" }}
            >
              {t.headline[0]}
              <br />
              {t.headline[1]}
              <br />
              <span className="text-[#d4af37]">{t.headline[2]}</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#f5f2ea]/60">
              {t.sub}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/hyper/shop"
                className="bg-[#d4af37] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] transition-colors hover:bg-[#e8c869]"
              >
                {t.enterCollection}
              </Link>
              <Link
                href="#wholesale-terms"
                className="border border-[#f5f2ea]/25 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5f2ea] transition-colors hover:border-[#f5f2ea]"
              >
                {t.viewBuyerTerms}
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-[#d4af37]/15 sm:grid-cols-4">
              {t.stats.map((s) => (
                <div key={s.label} className="bg-[#0a0a0a] p-4">
                  <dt className="text-[9px] uppercase tracking-[0.18em] text-[#f5f2ea]/40">
                    {s.label}
                  </dt>
                  <dd
                    className="mt-1.5 text-2xl text-[#d4af37]"
                    style={{ fontFamily: "var(--font-hyper-display)" }}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-[#d4af37]/25 lg:min-h-full">
            <GarmentPlaceholder
              category="women"
              seed="hero-lookbook"
              image={categoryCover("women")}
              colorFrom="#4a1530"
              colorTo="#0a0a0a"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
                {t.heroCaptionEyebrow}
              </p>
              <p
                className="mt-1 text-xl text-[#f5f2ea]"
                style={{ fontFamily: "var(--font-hyper-display)" }}
              >
                {t.heroCaptionTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-10">
        <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
          {t.shopByCategory}
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {categories.map((c) => {
            const [from, to] = HYPER_TONES[c.id];
            const ct = categoryTranslations[c.id][locale];
            return (
              <Link
                key={c.id}
                href={`/hyper/shop?category=${c.id}`}
                className="group relative flex h-64 flex-col justify-end overflow-hidden border border-[#d4af37]/15 p-5 transition-colors hover:border-[#d4af37]/50"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={from}
                  colorTo={to}
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span
                  className="relative text-2xl text-[#f5f2ea]"
                  style={{ fontFamily: "var(--font-hyper-display)" }}
                >
                  {ct.label}
                </span>
                <span className="relative mt-1 text-[11px] uppercase tracking-[0.12em] text-[#f5f2ea]/65">
                  {ct.description}
                </span>
                <span className="relative mt-3 text-[10px] uppercase tracking-[0.2em] text-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100">
                  {t.shopTheRange}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-10">
        <div className="mb-6 flex items-end justify-between border-b border-[#d4af37]/15 pb-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
              {t.thisSeason}
            </p>
            <h2 className="mt-1 text-2xl" style={{ fontFamily: "var(--font-hyper-display)" }}>
              {t.volumeMovers}
            </h2>
          </div>
          <Link
            href="/hyper/shop"
            className="text-[11px] uppercase tracking-[0.15em] text-[#f5f2ea]/50 underline decoration-[#d4af37]/40 underline-offset-4 hover:text-[#d4af37]"
          >
            {t.viewFullCollection}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <HyperProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Wholesale value props */}
      <section id="wholesale-terms" className="border-t border-[#d4af37]/15 bg-[#2b0f1f]/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
            {t.howAccountWorks}
          </p>
          <h2
            className="mt-2 max-w-xl text-3xl leading-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-hyper-display)" }}
          >
            {t.builtForBuyers}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#d4af37]/15 sm:grid-cols-2 lg:grid-cols-4">
            {t.valueProps.map((v) => (
              <div key={v.n} className="bg-[#0a0a0a] p-6">
                <span
                  className="text-sm text-[#d4af37]/60"
                  style={{ fontFamily: "var(--font-hyper-display)" }}
                >
                  {v.n}
                </span>
                <p
                  className="mt-3 text-lg text-[#f5f2ea]"
                  style={{ fontFamily: "var(--font-hyper-display)" }}
                >
                  {v.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#f5f2ea]/55">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
