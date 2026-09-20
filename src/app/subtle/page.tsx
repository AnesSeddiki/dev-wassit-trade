"use client";

import Link from "next/link";
import { categoryPhotos, categories, products } from "@/lib/products";
import SubtleProductCard from "./_components/SubtleProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { subtleText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  men: ["#c3d4b0", "#9caf88"],
  women: ["#f6dcd4", "#f0c9c0"],
  kids: ["#f5e3bd", "#e8c88f"],
};

export default function SubtleHome() {
  const { locale } = useLanguage();
  const t = subtleText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-8 lg:pt-12">
        <div className="grid grid-cols-1 items-center gap-10 rounded-[2.5rem] bg-gradient-to-br from-[#f0c9c0]/50 via-[#f6f3ef] to-[#9caf88]/25 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#3a3a34]/60">
              {t.badge}
            </span>
            <h1
              className="mt-4 text-4xl leading-[1.1] text-[#3a3a34] sm:text-5xl"
              style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
            >
              {t.headline}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3a3a34]/70">
              {t.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/subtle/shop"
                className="rounded-full bg-[#3a3a34] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#3a3a34]/85"
              >
                {t.startBrowsing}
              </Link>
              <Link
                href="/subtle/shop"
                className="rounded-full bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3a3a34] transition-colors hover:bg-white"
              >
                {t.seeVolumePricing}
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {t.stats.map((s) => (
              <div key={s.label} className="rounded-3xl bg-white/75 p-4 shadow-sm">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-[#3a3a34]/45">
                  {s.label}
                </dt>
                <dd
                  className="mt-1 text-2xl text-[#3a3a34]"
                  style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9caf88]">
            {t.shopByCategoryEyebrow}
          </p>
          <h2
            className="mt-1 text-2xl text-[#3a3a34]"
            style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
          >
            {t.shopByCategoryHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((c) => {
            const [from, to] = CATEGORY_TONES[c.id];
            const ct = categoryTranslations[c.id][locale];
            return (
              <Link
                key={c.id}
                href={`/subtle/shop?category=${c.id}`}
                className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-[2rem] p-5 shadow-[0_14px_36px_-20px_rgba(58,58,52,0.4)]"
              >
                <GarmentPlaceholder
                  category={c.id}
                  seed={c.id}
                  images={categoryPhotos(c.id)}
                  colorFrom={from}
                  colorTo={to}
                  rounded="rounded-[2rem]"
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a34]/55 via-[#3a3a34]/5 to-transparent" />
                <span
                  className="relative text-xl text-white"
                  style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
                >
                  {ct.label}
                </span>
                <span className="relative text-xs text-white/85">{ct.description}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-8">
        <div className="rounded-[2.5rem] bg-[#3a3a34] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c9c0]">
            {t.bundleEyebrow}
          </p>
          <h2
            className="mt-1 text-2xl text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
          >
            {t.bundleHeading}
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.valueProps.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white/10 p-5">
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
                >
                  {v.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-[#9caf88]/25 via-[#f6f3ef] to-[#f0c9c0]/40 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#9caf88] to-[#f0c9c0] shadow-[0_16px_40px_-20px_rgba(58,58,52,0.45)]">
            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#3a3a34]">
              {t.videoBadge}
            </span>
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#3a3a34] shadow-md transition-transform hover:scale-105"
              aria-label={t.videoAriaLabel}
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </button>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9caf88]">
              {t.videoEyebrow}
            </p>
            <h2
              className="mt-1 text-2xl text-[#3a3a34]"
              style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
            >
              {t.videoHeading}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3a3a34]/70">
              {t.videoBody}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9caf88]">
              {t.pickedEyebrow}
            </p>
            <h2
              className="mt-1 text-2xl text-[#3a3a34]"
              style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
            >
              {t.pickedHeading}
            </h2>
          </div>
          <Link
            href="/subtle/shop"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#3a3a34]/70 shadow-sm transition-colors hover:text-[#3a3a34]"
          >
            {t.viewEverything}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <SubtleProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
