"use client";

import Link from "next/link";
import { categoryPhotos, categories, products } from "@/lib/products";
import RazziProductCard from "./_components/RazziProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { razziText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  men: ["#2dd4ff", "#1a1a1a"],
  women: ["#ff3d81", "#1a1a1a"],
  kids: ["#ffe14d", "#ff3d81"],
};

const VALUE_PROP_STYLES = [
  { bg: "#ffe14d" },
  { bg: "#2dd4ff" },
  { bg: "#ff3d81" },
];

export default function RazziHome() {
  const { locale } = useLanguage();
  const t = razziText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-[3px] border-[#1a1a1a]">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#ffe14d]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rotate-12 bg-[#2dd4ff]" />
        <div className="pointer-events-none absolute right-10 bottom-10 hidden h-24 w-24 rotate-45 border-[6px] border-[#ff3d81] sm:block" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
          <span className="inline-block rounded-full border-2 border-[#1a1a1a] bg-[#ff3d81] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {t.eyebrow}
          </span>
          <h1
            className="mt-5 flex max-w-2xl flex-col text-5xl font-extrabold tracking-tight sm:text-7xl"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            <span className="leading-[1.25]">{t.headlineLine1}</span>
            <span className="mt-1 flex flex-wrap items-baseline gap-x-2.5 gap-y-2 leading-[1.25]">
              <span>{t.headlineLead}</span>
              <span className="text-[#ff3d81]">{t.headlineWord1}</span>
              <span className="text-[#2dd4ff]">{t.headlineWord2}</span>
              <span className="rounded-lg bg-[#ffe14d] px-2">{t.headlineWord3}</span>
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#1a1a1a]/70">{t.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/razzi/shop"
              className="rounded-full border-[3px] border-[#1a1a1a] bg-[#1a1a1a] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[4px_4px_0_0_#ff3d81] transition-transform hover:-translate-y-0.5"
            >
              {t.ctaShop}
            </Link>
            <Link
              href="/razzi/shop"
              className="rounded-full border-[3px] border-[#1a1a1a] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#1a1a1a] shadow-[4px_4px_0_0_#2dd4ff] transition-transform hover:-translate-y-0.5"
            >
              {t.ctaBrowse}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {t.stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl border-[3px] border-[#1a1a1a] bg-white p-3 shadow-[3px_3px_0_0_#1a1a1a]"
                style={{ transform: i % 2 ? "rotate(-1deg)" : "rotate(1deg)" }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-wide text-[#1a1a1a]/50">
                  {s.label}
                </dt>
                <dd
                  className="mt-1 text-xl font-extrabold"
                  style={{ fontFamily: "var(--font-razzi-display)" }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY TILES */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <h2
          className="mb-6 text-3xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-razzi-display)" }}
        >
          {t.pickLane}
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {categories.map((c, i) => {
            const [from, to] = CATEGORY_TONES[c.id];
            const ct = categoryTranslations[c.id][locale];
            return (
              <Link
                key={c.id}
                href={`/razzi/shop?category=${c.id}`}
                className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] shadow-[5px_5px_0_0_#1a1a1a] transition-transform hover:-translate-y-1"
                style={{ transform: i === 1 ? "rotate(0.5deg)" : "rotate(-0.5deg)" }}
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={from}
                  colorTo={to}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span
                  className="relative px-4 text-2xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-razzi-display)" }}
                >
                  {ct.label}
                </span>
                <span className="relative px-4 pb-4 text-xs font-medium text-white/80">
                  {ct.description}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2
            className="text-3xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {t.freshHeading}
          </h2>
          <Link
            href="/razzi/shop"
            className="text-sm font-bold text-[#ff3d81] underline decoration-2 underline-offset-4 hover:text-[#1a1a1a]"
          >
            {t.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <RazziProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-t-[3px] border-[#1a1a1a] bg-[#1a1a1a] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <h2
            className="mb-8 text-3xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {t.valuePropsHeading}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {t.valueProps.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border-[3px] border-[#1a1a1a] p-5 shadow-[5px_5px_0_0_rgba(255,255,255,0.25)]"
                style={{ backgroundColor: VALUE_PROP_STYLES[i % VALUE_PROP_STYLES.length].bg }}
              >
                <p
                  className="text-lg font-extrabold text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-razzi-display)" }}
                >
                  {v.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/80">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
