"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { hyperText } from "../_i18n/translations";

export default function HyperNav() {
  const { locale, setLocale } = useLanguage();
  const t = hyperText(locale).nav;

  return (
    <div className="sticky top-0 z-20 border-b border-[#d4af37]/20 bg-[#0a0a0a]/95 backdrop-blur">
      <div
        className="flex items-center justify-between gap-4 border-b border-[#d4af37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#f5f2ea]/45 sm:px-10"
      >
        <span className="truncate">{t.announcement1}</span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">{t.announcement2}</span>
          <div className="flex items-center gap-1 border-l border-[#d4af37]/20 pl-4">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                className={`px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                  locale === l.code
                    ? "bg-[#d4af37] text-[#0a0a0a]"
                    : "text-[#f5f2ea]/45 hover:text-[#d4af37]"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-5 sm:px-10">
        <Link
          href="/hyper"
          className="text-2xl tracking-[0.01em] text-[#f5f2ea]"
          style={{ fontFamily: "var(--font-hyper-display)" }}
        >
          HYPER<span className="text-[#d4af37]">.</span>
        </Link>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#f5f2ea]/65 md:flex">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/hyper/shop?category=${c.id}`}
              className="transition-colors hover:text-[#d4af37]"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link href="/hyper/shop" className="transition-colors hover:text-[#d4af37]">
            {t.fullCollection}
          </Link>
        </div>
        <Link
          href="/hyper/shop"
          className="border border-[#d4af37] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#0a0a0a]"
        >
          {t.requestAccess}
        </Link>
      </nav>
    </div>
  );
}
