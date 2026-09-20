"use client";

import Link from "next/link";
import { categoryCover, categoryPhotos, categories, products } from "@/lib/products";
import ModivaProductCard from "./_components/ModivaProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { modivaText } from "./_i18n/translations";

const CATEGORY_TONES: Record<string, [string, string]> = {
  men: ["#4a3d33", "#2b2420"],
  women: ["#e8c4a0", "#c1602f"],
  kids: ["#c1602f", "#6b3820"],
};

const NUMERALS = ["I", "II", "III"];

export default function ModivaHome() {
  const { locale } = useLanguage();
  const t = modivaText(locale).home;
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Editorial hero — asymmetric composition */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pt-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#c1602f]">
              {t.eyebrow}
            </p>
            <h1
              className="mt-5 text-6xl italic leading-[0.98] text-[#2b2420] sm:text-7xl"
              style={{ fontFamily: "var(--font-modiva-display)" }}
            >
              {t.headline[0]}
              <br />
              {t.headline[1]}
              <br />
              {t.headline[2]}
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#2b2420]/70">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/modiva/shop"
                className="border border-[#2b2420] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#2b2420] transition-colors hover:border-[#c1602f] hover:text-[#c1602f]"
              >
                {t.viewCollection}
              </Link>
              <Link
                href="/modiva/shop?category=women"
                className="text-[11px] uppercase tracking-[0.2em] text-[#2b2420]/60 underline decoration-[#c1602f]/50 underline-offset-4 hover:text-[#c1602f]"
              >
                {t.startWomens}
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
              <GarmentPlaceholder
                category="women"
                seed="modiva-hero"
                image={categoryCover("women")}
                colorFrom="#e8c4a0"
                colorTo="#c1602f"
                className="h-full w-full"
              />
            </div>
            <div className="relative -mt-10 ml-6 max-w-[13rem] bg-[#f7f1e8] p-4 shadow-[0_1px_0_0_rgba(43,36,32,0.12)] sm:-mt-16 sm:ml-10 sm:p-6">
              <p
                className="text-xl italic leading-snug text-[#2b2420]"
                style={{ fontFamily: "var(--font-modiva-display)" }}
              >
                {t.heroQuote}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#2b2420]/45">
                {t.heroQuoteCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category editorial spreads */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-[#2b2420]/12 pb-4">
          <h2
            className="text-3xl italic text-[#2b2420]"
            style={{ fontFamily: "var(--font-modiva-display)" }}
          >
            {t.threeStories}
          </h2>
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-[#2b2420]/45 sm:inline">
            {t.season}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {categories.map((c, i) => {
            const [from, to] = CATEGORY_TONES[c.id];
            const ct = categoryTranslations[c.id][locale];
            return (
              <Link key={c.id} href={`/modiva/shop?category=${c.id}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <GarmentPlaceholder
                    category={c.id}
                    seed={c.id}
                    images={categoryPhotos(c.id)}
                    colorFrom={from}
                    colorTo={to}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute left-3 top-3 text-3xl italic text-white/85"
                    style={{ fontFamily: "var(--font-modiva-display)" }}
                  >
                    {NUMERALS[i]}
                  </span>
                </div>
                <h3
                  className="mt-4 text-2xl italic text-[#2b2420] group-hover:text-[#c1602f]"
                  style={{ fontFamily: "var(--font-modiva-display)" }}
                >
                  {ct.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#2b2420]/60">
                  {ct.description}
                </p>
                <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.2em] text-[#c1602f]">
                  {t.shopStory}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Lookbook-style featured grid + pull-quote sidebar */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_18rem]">
          <div>
            <div className="mb-8 flex items-end justify-between border-b border-[#2b2420]/12 pb-4">
              <h2
                className="text-3xl italic text-[#2b2420]"
                style={{ fontFamily: "var(--font-modiva-display)" }}
              >
                {t.theEdit}
              </h2>
              <Link
                href="/modiva/shop"
                className="text-[11px] uppercase tracking-[0.2em] text-[#2b2420]/55 hover:text-[#c1602f]"
              >
                {t.fullLineSheet}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((p, i) => (
                <ModivaProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>

          {/* Wholesale value props styled as a magazine sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-l-2 border-[#c1602f] pl-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#c1602f]">
                {t.editorsNotes}
              </p>
              <p
                className="mt-3 text-2xl italic leading-snug text-[#2b2420]"
                style={{ fontFamily: "var(--font-modiva-display)" }}
              >
                {t.editorsQuote}
              </p>
            </div>
            <dl className="mt-8 space-y-6">
              {t.valueProps.map((v) => (
                <div key={v.title} className="border-t border-[#2b2420]/12 pt-4">
                  <dt
                    className="text-base italic text-[#2b2420]"
                    style={{ fontFamily: "var(--font-modiva-display)" }}
                  >
                    {v.title}
                  </dt>
                  <dd className="mt-1.5 text-xs leading-relaxed text-[#2b2420]/60">
                    {v.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </div>
  );
}
