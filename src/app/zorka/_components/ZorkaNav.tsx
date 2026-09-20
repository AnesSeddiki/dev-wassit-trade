"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { zorkaText } from "../_i18n/translations";

export default function ZorkaNav() {
  const { locale, setLocale } = useLanguage();
  const t = zorkaText(locale);

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6 py-8 sm:px-10 sm:py-10">
        <Link
          href="/zorka"
          className="text-base tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-zorka-display)", fontWeight: 700 }}
        >
          {t.nav.wordmark}
        </Link>
        <div className="flex items-center gap-8 text-sm" style={{ fontFamily: "var(--font-zorka-body)" }}>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/zorka/shop?category=${c.id}`}
              className="text-black/60 transition-colors hover:text-black"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            {LOCALES.map((l, i) => (
              <span key={l.code} className="flex items-center gap-2">
                {i > 0 ? <span className="text-black/20">/</span> : null}
                <button
                  type="button"
                  onClick={() => setLocale(l.code)}
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    locale === l.code ? "text-black" : "text-black/35 hover:text-black"
                  }`}
                >
                  {l.code}
                </button>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
