"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { b2bText } from "../_i18n/translations";

export default function B2BNav() {
  const { locale, setLocale } = useLanguage();
  const t = b2bText(locale).nav;

  return (
    <div className="sticky top-0 z-20 bg-white/95 backdrop-blur">
      <div
        className="flex items-center justify-between gap-4 bg-[#0b2545] px-4 py-2 text-[11px] text-white/80 sm:px-8"
        style={{ fontFamily: "var(--font-b2b-mono)" }}
      >
        <span className="hidden truncate sm:inline">{t.termsNoticeFull}</span>
        <span className="truncate sm:hidden">{t.termsNoticeShort}</span>
        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/b2bstore/shop"
            className="underline decoration-[#8da9c4] decoration-1 underline-offset-4 hover:text-white"
          >
            {t.requestQuote}
          </Link>
          <span className="hidden text-white/40 sm:inline">|</span>
          <Link href="/b2bstore/shop" className="hidden text-white/80 hover:text-white sm:inline">
            {t.accountSignIn}
          </Link>
          <div className="flex items-center gap-1 border-l border-white/20 pl-3">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-label={l.label}
                className={`px-1.5 py-0.5 text-[10px] uppercase tracking-wider transition-colors ${
                  locale === l.code ? "bg-[#8da9c4] text-[#0b2545]" : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 border-b border-[#142433]/10 px-4 py-4 sm:px-8">
        <Link href="/b2bstore" className="flex items-baseline gap-2">
          <span
            className="text-xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            B2Bstore
          </span>
          <span
            className="hidden text-[10px] uppercase tracking-[0.2em] text-[#8da9c4] sm:inline"
            style={{ fontFamily: "var(--font-b2b-mono)" }}
          >
            {t.tagline}
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-[#142433]/75 md:flex">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/b2bstore/shop?category=${c.id}`}
              className="transition-colors hover:text-[#0b2545]"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link href="/b2bstore/shop" className="transition-colors hover:text-[#0b2545]">
            {t.fullCatalog}
          </Link>
        </div>
        <Link
          href="/b2bstore/shop"
          className="rounded-sm bg-[#0b2545] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#134074]"
          style={{ fontFamily: "var(--font-b2b-mono)" }}
        >
          {t.openCatalog}
        </Link>
      </nav>
    </div>
  );
}
