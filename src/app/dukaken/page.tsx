"use client";

import Link from "next/link";
import { categoryCover, categoryPhotos, categories, productsByCategory } from "@/lib/products";
import DukakenProductCard from "./_components/DukakenProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { CATEGORY_THEME } from "./_components/theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { dukakenText } from "./_i18n/translations";

export default function DukakenHome() {
  const { locale } = useLanguage();
  const t = dukakenText(locale);
  const home = t.home;

  const VALUE_PROPS = [
    { ...home.valueProps[0], accent: CATEGORY_THEME.men.accent },
    { ...home.valueProps[1], accent: CATEGORY_THEME.women.accent },
    { ...home.valueProps[2], accent: CATEGORY_THEME.kids.accent },
    { ...home.valueProps[3], accent: CATEGORY_THEME.men.accent },
  ];

  const TAG_BADGES: { label: string; color: string }[] = [
    { label: home.badges.New, color: CATEGORY_THEME.men.accent },
    { label: home.badges.Bestseller, color: CATEGORY_THEME.women.accent },
    { label: home.badges.Restocked, color: CATEGORY_THEME.kids.accent },
    { label: home.badges["Low stock"], color: "#111827" },
  ];

  const featured = [0, 1, 2, 3].flatMap((i) =>
    categories.map((c) => productsByCategory(c.id)[i]).filter(Boolean)
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-4 border-[#111827] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {TAG_BADGES.map((tb) => (
                <span
                  key={tb.label}
                  className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white"
                  style={{ backgroundColor: tb.color, fontFamily: "var(--font-dukaken-display)" }}
                >
                  {tb.label}
                </span>
              ))}
            </div>
            <h1
              className="text-[2.5rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]"
              style={{ fontFamily: "var(--font-dukaken-display)" }}
            >
              {home.headline.line1Plain}
              <span style={{ color: CATEGORY_THEME.men.accent }}>{home.headline.line1Accent}</span>
              <br />
              {home.headline.line2Plain}
              <span style={{ color: CATEGORY_THEME.women.accent }}>{home.headline.line2Accent}</span>
              <br />
              {home.headline.line3Plain}
              <span style={{ color: CATEGORY_THEME.kids.accent }}>{home.headline.line3Accent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm font-medium leading-relaxed text-[#111827]/65 sm:text-base">
              {home.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/dukaken/shop"
                className="border-2 border-[#111827] bg-[#111827] px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#111827]"
              >
                {home.browseCatalog}
              </Link>
              <Link
                href="/dukaken/shop?category=men"
                className="border-2 px-6 py-3 text-xs font-black uppercase tracking-wider transition-colors"
                style={{ borderColor: CATEGORY_THEME.men.accent, color: CATEGORY_THEME.men.accent }}
              >
                {home.seeWhatsNew}
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-2 border-[#111827] sm:grid-cols-4">
              {VALUE_PROPS.map((v) => (
                <div key={v.title} className="bg-white p-3">
                  <dt
                    className="text-lg font-black tracking-tight"
                    style={{ color: v.accent, fontFamily: "var(--font-dukaken-display)" }}
                  >
                    {v.title}
                  </dt>
                  <dd className="mt-1 text-[11px] font-medium leading-snug text-[#111827]/60">{v.copy}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[420px] grid-cols-2 gap-3 lg:grid">
            <div className="flex flex-col gap-3">
              <GarmentPlaceholder
                category="men"
                seed="hero-men"
                image={categoryCover("men")}
                colorFrom={CATEGORY_THEME.men.from}
                colorTo={CATEGORY_THEME.men.to}
                label="MEN"
                className="h-1/2 border-2 border-[#111827]"
              />
              <GarmentPlaceholder
                category="kids"
                seed="hero-kids"
                image={categoryCover("kids")}
                colorFrom={CATEGORY_THEME.kids.from}
                colorTo={CATEGORY_THEME.kids.to}
                label="KIDS"
                className="h-1/2 border-2 border-[#111827]"
              />
            </div>
            <GarmentPlaceholder
              category="women"
              seed="hero-women"
              image={categoryCover("women")}
              colorFrom={CATEGORY_THEME.women.from}
              colorTo={CATEGORY_THEME.women.to}
              label="WOMEN"
              className="h-full border-2 border-[#111827]"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY TILES */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl tracking-tight" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            {home.shopByCategory}
          </h2>
          <span className="text-xs font-bold uppercase tracking-wider text-[#111827]/40">{home.colorCoded}</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((c) => {
            const theme = CATEGORY_THEME[c.id];
            const ct = categoryTranslations[c.id][locale];
            const count = productsByCategory(c.id).length;
            return (
              <Link
                key={c.id}
                href={`/dukaken/shop?category=${c.id}`}
                className="group relative flex h-56 flex-col justify-end overflow-hidden border-4 border-[#111827] p-5"
                style={{ boxShadow: `6px 6px 0 ${theme.accent}` }}
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={theme.from}
                  colorTo={theme.to}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span
                  className="relative w-fit px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#111827]"
                  style={{ backgroundColor: "white" }}
                >
                  {home.skuCount(count)}
                </span>
                <span
                  className="relative mt-2 text-3xl leading-none text-white"
                  style={{ fontFamily: "var(--font-dukaken-display)" }}
                >
                  {ct.label}
                </span>
                <span className="relative mt-1 text-xs font-medium text-white/80">{ct.description}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-8">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl tracking-tight" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            {home.trending}
          </h2>
          <Link
            href="/dukaken/shop"
            className="text-xs font-bold uppercase tracking-wider text-[#111827]/50 underline decoration-dotted underline-offset-4 hover:text-[#111827]"
          >
            {home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {featured.map((p) => (
            <DukakenProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* WHOLESALE VALUE PROPS */}
      <section className="border-t-4 border-[#111827] bg-[#111827]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
          <h2
            className="mb-8 text-2xl tracking-tight text-white"
            style={{ fontFamily: "var(--font-dukaken-display)" }}
          >
            {home.builtFor}
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden border-2 border-white/15 sm:grid-cols-3">
            {[CATEGORY_THEME.men.accent, CATEGORY_THEME.women.accent, CATEGORY_THEME.kids.accent].map((accent, i) => {
              const s = home.bottomStats[i];
              return (
                <div key={s.stat} className="bg-[#111827] p-6">
                  <p className="text-3xl font-black" style={{ color: accent, fontFamily: "var(--font-dukaken-display)" }}>
                    {s.stat}
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white">{s.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{s.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
