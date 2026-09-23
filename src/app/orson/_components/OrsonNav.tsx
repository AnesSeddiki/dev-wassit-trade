"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import EstStamp from "./EstStamp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { orsonText } from "../_i18n/translations";

export default function OrsonNav() {
  const { locale, setLocale } = useLanguage();
  const t = orsonText(locale);

  return (
    <div className="sticky top-0 z-20 border-b-[3px] border-[#3b2a1a] bg-[#f4e8d0]/95 backdrop-blur">
      <div
        className="flex items-center justify-center gap-3 bg-[#3b2a1a] px-4 py-1.5 text-center text-[11px] uppercase tracking-[0.2em] text-[#f4e8d0] sm:px-8"
        style={{ fontFamily: "var(--font-orson-serif)" }}
      >
        <span>{t.topBar.welcome}</span>
        <span className="text-[#d9a441]">★</span>
        <span className="hidden sm:inline">{t.topBar.tagline}</span>
        <AdminDashboardLink templateName="Orson" />
        <div className="flex items-center gap-1 border-l border-[#f4e8d0]/25 pl-3">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLocale(l.code)}
              aria-pressed={locale === l.code}
              className={`rounded-full border px-2 py-0.5 text-[9px] uppercase tracking-wider normal-case transition-colors ${
                locale === l.code
                  ? "border-[#d9a441] bg-[#d9a441] text-[#3b2a1a]"
                  : "border-[#f4e8d0]/40 text-[#f4e8d0]/70 hover:border-[#f4e8d0] hover:text-[#f4e8d0]"
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link href="/orson" className="flex items-center gap-3">
          <EstStamp size={46} />
          <span className="flex flex-col leading-none">
            <span
              className="text-xl tracking-tight text-[#a8442e] sm:text-2xl"
              style={{ fontFamily: "var(--font-orson-display)" }}
            >
              Orson &amp; Co.
            </span>
            <span
              className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#3b2a1a]/60"
              style={{ fontFamily: "var(--font-orson-serif)" }}
            >
              {t.nav.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-[15px] font-medium md:flex">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/orson/shop?category=${c.id}`}
              className="text-[#3b2a1a]/75 transition-colors hover:text-[#a8442e]"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link href="/orson/shop" className="text-[#3b2a1a]/75 transition-colors hover:text-[#a8442e]">
            {t.nav.fullCatalog}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <CartButton className="rounded-full p-1.5 text-[#a8442e] transition-colors hover:text-[#8f3624]" />
          <RequestTemplateButton templateName="Orson" />
          <Link
            href="/orson/shop"
            className="rounded-full border-2 border-[#a8442e] bg-[#a8442e] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f4e8d0] transition-colors hover:bg-[#8f3624]"
          >
            {t.nav.shopCatalog}
          </Link>
        </div>
      </nav>
    </div>
  );
}
