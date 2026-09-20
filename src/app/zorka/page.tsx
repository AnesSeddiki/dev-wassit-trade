"use client";

import Link from "next/link";
import { categoryCover, categories, products } from "@/lib/products";
import ZorkaProductCard from "./_components/ZorkaProductCard";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { zorkaText } from "./_i18n/translations";

export default function ZorkaHome() {
  const { locale } = useLanguage();
  const t = zorkaText(locale);
  const bestsellers = products.filter((p) => p.tag === "Bestseller");
  const featured = (bestsellers.length >= 4 ? bestsellers : products).slice(0, 6);

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 pt-16 sm:px-10 sm:pt-28">
        <p
          className="text-xs uppercase tracking-[0.3em] text-black/40"
          style={{ fontFamily: "var(--font-zorka-body)" }}
        >
          {t.home.eyebrow}
        </p>
        <h1
          className="mt-6 text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-[8.5rem]"
          style={{ fontFamily: "var(--font-zorka-display)", fontWeight: 700 }}
        >
          {t.home.headline1}
          <br />
          {t.home.headline2}
        </h1>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1400px] grid-cols-1 gap-10 px-6 sm:px-10 lg:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col justify-between gap-10">
          <ul style={{ fontFamily: "var(--font-zorka-display)" }}>
            {categories.map((c) => {
              const ct = categoryTranslations[c.id][locale];
              return (
                <li key={c.id} className="border-b border-black/10 first:border-t">
                  <Link
                    href={`/zorka/shop?category=${c.id}`}
                    className="group flex flex-col gap-1 py-5 transition-opacity hover:opacity-50 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="text-3xl tracking-tight sm:text-4xl" style={{ fontWeight: 600 }}>
                      {ct.label}
                    </span>
                    <span
                      className="text-xs font-normal tracking-normal text-black/30"
                      style={{ fontFamily: "var(--font-zorka-body)" }}
                    >
                      {ct.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/zorka/shop"
            className="inline-block w-fit border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white"
            style={{ fontFamily: "var(--font-zorka-body)" }}
          >
            {t.home.viewFullRange}
          </Link>
        </div>

        <div className="aspect-[4/5] w-full sm:aspect-[16/10]">
          <GarmentPlaceholder
            category="women"
            seed="zorka-atmosphere"
            image={categoryCover("women")}
            colorFrom="#111111"
            colorTo="#3a3a3a"
            className="h-full w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
        <p
          className="max-w-3xl text-2xl leading-snug tracking-tight sm:text-3xl"
          style={{ fontFamily: "var(--font-zorka-display)", fontWeight: 600 }}
        >
          {t.home.valuePre} <span className="text-[#ff2d2d]">{t.home.valueHighlight}</span>{" "}
          {t.home.valuePost}
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mb-12 flex items-baseline justify-between">
          <h2
            className="text-sm uppercase tracking-[0.2em] text-black/40"
            style={{ fontFamily: "var(--font-zorka-body)" }}
          >
            {t.home.featured}
          </h2>
          <Link
            href="/zorka/shop"
            className="text-sm text-black/40 underline underline-offset-4 hover:text-black"
            style={{ fontFamily: "var(--font-zorka-body)" }}
          >
            {t.home.allProducts}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3">
          {featured.map((p) => (
            <ZorkaProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
