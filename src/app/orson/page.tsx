"use client";

import { Fragment } from "react";
import Link from "next/link";
import { categoryCover, categoryPhotos, categories, products } from "@/lib/products";
import OrsonProductCard from "./_components/OrsonProductCard";
import EstStamp from "./_components/EstStamp";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { orsonText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  men: ["#6b6a3d", "#a8442e"],
  women: ["#c98a4b", "#a8442e"],
  kids: ["#d9a441", "#a8442e"],
};

export default function OrsonHome() {
  const { locale } = useLanguage();
  const t = orsonText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-[3px] border-[#3b2a1a]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #3b2a1a 0px, #3b2a1a 1px, transparent 1px, transparent 14px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <EstStamp size={52} />
              <p className="text-xs uppercase tracking-[0.3em] text-[#a8442e]">
                {t.eyebrow}
              </p>
            </div>
            <h1
              className="text-4xl leading-[1.08] tracking-tight text-[#3b2a1a] sm:text-5xl lg:text-[3.4rem]"
              style={{ fontFamily: "var(--font-orson-display)" }}
            >
              {t.headline1}
              <br />
              {t.headline2}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#3b2a1a]/75">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/orson/shop"
                className="rounded-full bg-[#a8442e] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#f4e8d0] transition-colors hover:bg-[#8f3624]"
              >
                {t.browseCatalog}
              </Link>
              <Link
                href="/orson/shop"
                className="rounded-full border-2 border-[#3b2a1a] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3b2a1a] transition-colors hover:bg-[#3b2a1a] hover:text-[#f4e8d0]"
              >
                {t.seeTerms}
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.15em] text-[#3b2a1a]/55">
              {t.trust.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 ? <span className="text-[#d9a441]">★</span> : null}
                  <span>{line}</span>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border-[3px] border-[#3b2a1a] shadow-[8px_8px_0_0_#3b2a1a]">
            <GarmentPlaceholder
              category="men"
              seed="orson-hero"
              image={categoryCover("men")}
              colorFrom="#c98a4b"
              colorTo="#a8442e"
              label={t.catalogLabel}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Category "departments" */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <div className="mb-6 flex items-end justify-between border-b-2 border-dashed border-[#3b2a1a]/25 pb-3">
          <h2
            className="text-2xl tracking-tight text-[#3b2a1a]"
            style={{ fontFamily: "var(--font-orson-display)" }}
          >
            {t.departmentsHeading}
          </h2>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-[#3b2a1a]/50 sm:inline">
            {t.departmentsNote}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((c) => {
            const [from, to] = CATEGORY_TONES[c.id];
            return (
              <Link
                key={c.id}
                href={`/orson/shop?category=${c.id}`}
                className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-md border-[3px] border-[#3b2a1a] p-4 shadow-[6px_6px_0_0_#3b2a1a] transition-transform hover:-translate-y-0.5"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={from}
                  colorTo={to}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1a]/75 via-[#3b2a1a]/15 to-transparent" />
                <span
                  className="relative text-2xl tracking-tight text-[#f4e8d0]"
                  style={{ fontFamily: "var(--font-orson-display)" }}
                >
                  {categoryTranslations[c.id][locale].label}
                </span>
                <span className="relative mt-1 text-[11px] uppercase tracking-wide text-[#f4e8d0]/80">
                  {t.categoryNotes[c.id]}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between border-b-2 border-dashed border-[#3b2a1a]/25 pb-3">
          <h2
            className="text-2xl tracking-tight text-[#3b2a1a]"
            style={{ fontFamily: "var(--font-orson-display)" }}
          >
            {t.picksHeading}
          </h2>
          <Link
            href="/orson/shop"
            className="text-xs uppercase tracking-[0.2em] text-[#a8442e] underline decoration-dotted underline-offset-4 hover:text-[#8f3624]"
          >
            {t.viewFullCatalog}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <OrsonProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Wholesale value props, styled like a catalog blurb */}
      <section className="border-y-[3px] border-[#3b2a1a] bg-[#ead9b4]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a8442e]">
              {t.valueEyebrow}
            </p>
            <h2
              className="mt-2 text-2xl tracking-tight text-[#3b2a1a] sm:text-3xl"
              style={{ fontFamily: "var(--font-orson-display)" }}
            >
              {t.valueHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {t.valueProps.map((v, i) => (
              <div
                key={v.title}
                className="relative rounded-md border-2 border-[#3b2a1a]/20 bg-[#fbf2df] p-6"
              >
                <span
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#a8442e] text-sm font-semibold text-[#a8442e]"
                  style={{ fontFamily: "var(--font-orson-display)" }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-lg text-[#3b2a1a]"
                  style={{ fontFamily: "var(--font-orson-serif)", fontWeight: 700 }}
                >
                  {v.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#3b2a1a]/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
