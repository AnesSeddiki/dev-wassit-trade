"use client";

import Link from "next/link";
import { categoryCover, categoryPhotos, categories, products, type Category } from "@/lib/products";
import WSProductCard from "./_components/WSProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { wsText } from "./_i18n/translations";

const STEEL: [string, string] = ["#6b6b6b", "#2b2b2b"];

const HAZARD_STRIPES = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #1c1c1c 0px, #1c1c1c 10px, #ff5a1f 10px, #ff5a1f 20px)",
};

export default function WholesaleStoresHome() {
  const { locale } = useLanguage();
  const t = wsText(locale);
  const home = t.home;
  const binLabels: Record<Category, string> = home.binLabels;
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="border-b-4 border-[#1c1c1c]">
        <div className="mx-auto grid max-w-6xl gap-0 px-4 py-0 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="border-b-4 border-[#1c1c1c] py-12 lg:border-b-0 lg:border-r-4 lg:py-16 lg:pr-10">
            <p
              className="inline-block border-2 border-[#1c1c1c] bg-[#ff5a1f] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1c1c1c]"
              style={{ fontFamily: "var(--font-ws-mono)" }}
            >
              {home.eyebrow}
            </p>
            <h1
              className="mt-4 text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl"
              style={{ fontFamily: "var(--font-ws-display)" }}
            >
              {home.headline[0]}
              <br />
              {home.headline[1]}
              <br />
              {home.headline[2]}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#1c1c1c]/70">{home.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/wholesale-stores/shop"
                className="border-[3px] border-[#1c1c1c] bg-[#1c1c1c] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#e5e2da] transition-colors hover:bg-[#ff5a1f] hover:text-[#1c1c1c]"
                style={{ fontFamily: "var(--font-ws-display)" }}
              >
                {home.ctaPrimary}
              </Link>
              <Link
                href="/wholesale-stores/shop"
                className="border-[3px] border-[#1c1c1c] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#1c1c1c] transition-colors hover:bg-[#1c1c1c] hover:text-[#e5e2da]"
                style={{ fontFamily: "var(--font-ws-display)" }}
              >
                {home.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-2 border-[#1c1c1c] sm:grid-cols-4">
              {home.manifest.map((s) => (
                <div key={s.label} className="border border-[#1c1c1c]/15 bg-[#e5e2da] p-3">
                  <dt
                    className="text-[10px] uppercase tracking-wider text-[#1c1c1c]/50"
                    style={{ fontFamily: "var(--font-ws-mono)" }}
                  >
                    {s.label}
                  </dt>
                  <dd
                    className="mt-1 text-lg font-bold text-[#1c1c1c]"
                    style={{ fontFamily: "var(--font-ws-display)" }}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <GarmentPlaceholder
              category="men"
              seed="hero-crate"
              image={categoryCover("men")}
              colorFrom={STEEL[0]}
              colorTo={STEEL[1]}
              className="h-full w-full"
            />
            <div aria-hidden className="absolute inset-x-0 top-0 h-3" style={HAZARD_STRIPES} />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-3" style={HAZARD_STRIPES} />
            <span
              className="absolute left-4 top-8 border-2 border-[#e5e2da] px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e5e2da]"
              style={{ fontFamily: "var(--font-ws-mono)" }}
            >
              {home.palletLabel}
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORY BINS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <h2
          className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#1c1c1c]/60"
          style={{ fontFamily: "var(--font-ws-mono)" }}
        >
          {home.binsHeading}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((c) => {
            const ct = categoryTranslations[c.id][locale];
            return (
              <Link
                key={c.id}
                href={`/wholesale-stores/shop?category=${c.id}`}
                className="group relative flex h-44 flex-col justify-end overflow-hidden border-[3px] border-[#1c1c1c]"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={STEEL[0]}
                  colorTo={STEEL[1]}
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span
                  className="absolute left-3 top-3 border-2 border-[#e5e2da] bg-black/30 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#e5e2da]"
                  style={{ fontFamily: "var(--font-ws-mono)" }}
                >
                  {binLabels[c.id]}
                </span>
                <span
                  className="relative px-4 text-xl font-bold uppercase tracking-tight text-[#e5e2da]"
                  style={{ fontFamily: "var(--font-ws-display)" }}
                >
                  {ct.label}
                </span>
                <span
                  className="relative px-4 pb-4 text-[11px] text-[#e5e2da]/80"
                  style={{ fontFamily: "var(--font-ws-mono)" }}
                >
                  {ct.description}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED LINE ITEMS */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="mb-5 flex items-end justify-between border-b-2 border-[#1c1c1c]/20 pb-3">
          <h2
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#1c1c1c]/60"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {home.favoritesHeading}
          </h2>
          <Link
            href="/wholesale-stores/shop"
            className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c]/60 underline decoration-dotted underline-offset-4 hover:text-[#ff5a1f]"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {home.viewAllSkus}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <WSProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* TERMS — PRINTED FORM */}
      <section className="border-t-4 border-[#1c1c1c] bg-[#1c1c1c]/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
          <h2
            className="mb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#1c1c1c]/60"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {home.terms.eyebrow}
          </h2>
          <h3
            className="mb-8 text-2xl font-bold uppercase tracking-tight"
            style={{ fontFamily: "var(--font-ws-display)" }}
          >
            {home.terms.headline}
          </h3>
          <div className="grid grid-cols-1 gap-px overflow-hidden border-2 border-[#1c1c1c] sm:grid-cols-3">
            {home.terms.cards.map((card) => (
              <div key={card.num} className="border border-[#1c1c1c]/15 bg-[#e5e2da] p-5">
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-widest text-[#ff5a1f]"
                  style={{ fontFamily: "var(--font-ws-mono)" }}
                >
                  {card.num} — {card.title}
                </p>
                <p className="text-sm leading-relaxed text-[#1c1c1c]/75">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
