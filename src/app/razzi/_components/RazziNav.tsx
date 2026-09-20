"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { razziText } from "../_i18n/translations";

const PILL_COLORS = ["#ff3d81", "#2dd4ff", "#ffe14d"];

export default function RazziNav() {
  const { locale, setLocale } = useLanguage();
  const t = razziText(locale);

  return (
    <div className="sticky top-0 z-20 bg-white">
      <div
        className="overflow-hidden whitespace-nowrap border-b-[3px] border-[#1a1a1a] bg-[#ffe14d] px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-wide text-[#1a1a1a] sm:px-8"
        style={{ fontFamily: "var(--font-razzi-body)" }}
      >
        {t.nav.marquee}
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-b-[3px] border-[#1a1a1a] px-4 py-4 sm:px-8">
        <Link href="/razzi" className="flex items-center gap-1.5">
          <span
            className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            razzi
          </span>
          <span className="flex gap-0.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff3d81]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2dd4ff]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffe14d]" />
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              href={`/razzi/shop?category=${c.id}`}
              className="rounded-full border-2 border-[#1a1a1a] px-4 py-1.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: PILL_COLORS[i % PILL_COLORS.length] }}
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link
            href="/razzi/shop"
            className="rounded-full border-2 border-[#1a1a1a] px-4 py-1.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
          >
            {t.nav.shopAll}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <div
            className="flex items-center gap-0.5 rounded-full border-[3px] border-[#1a1a1a] bg-white p-0.5 shadow-[3px_3px_0_0_#1a1a1a]"
            role="group"
            aria-label="Language"
          >
            {LOCALES.map((l, i) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                title={l.nativeLabel}
                className={`rounded-full px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                  locale === l.code ? "text-[#1a1a1a]" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70"
                }`}
                style={{
                  backgroundColor: locale === l.code ? PILL_COLORS[i % PILL_COLORS.length] : "transparent",
                  border: locale === l.code ? "2px solid #1a1a1a" : "2px solid transparent",
                }}
              >
                {l.code}
              </button>
            ))}
          </div>
          <Link
            href="/razzi/shop"
            className="rounded-full border-[3px] border-[#1a1a1a] bg-[#1a1a1a] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-[3px_3px_0_0_#ff3d81] transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#ff3d81] sm:px-5"
          >
            {t.nav.quickOrder}
          </Link>
        </div>
      </nav>
    </div>
  );
}
