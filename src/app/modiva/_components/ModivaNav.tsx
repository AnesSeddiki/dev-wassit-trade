"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { modivaText } from "../_i18n/translations";

export default function ModivaNav() {
  const { locale, setLocale } = useLanguage();
  const t = modivaText(locale).nav;

  return (
    <div className="sticky top-0 z-20 border-b border-[#2b2420]/12 bg-[#f7f1e8]/95 backdrop-blur">
      <div className="flex items-center justify-between gap-3 border-b border-[#2b2420]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#2b2420]/55 sm:px-8">
        <span className="truncate">{t.issueLine}</span>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">{t.buyersLine}</span>
          <AdminDashboardLink templateName="Modiva" className="hidden normal-case tracking-normal text-[#2b2420]/50 transition-colors hover:text-[#c1602f] sm:inline" />
          <div className="flex items-center gap-2 border-l border-[#2b2420]/15 pl-4 normal-case tracking-normal">
            {LOCALES.map((l, i) => (
              <span key={l.code} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLocale(l.code)}
                  className={`italic transition-colors ${
                    locale === l.code
                      ? "text-[#c1602f]"
                      : "text-[#2b2420]/45 hover:text-[#2b2420]"
                  }`}
                  style={{ fontFamily: "var(--font-modiva-display)" }}
                >
                  {l.code.toUpperCase()}
                </button>
                {i < LOCALES.length - 1 ? <span className="text-[#2b2420]/25">/</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5 sm:px-8">
        <Link href="/modiva" className="shrink-0">
          <span
            className="text-2xl italic tracking-tight text-[#2b2420]"
            style={{ fontFamily: "var(--font-modiva-display)" }}
          >
            Modiva
          </span>
          <span className="ml-2 hidden align-super text-[9px] not-italic uppercase tracking-[0.3em] text-[#c1602f] sm:inline">
            {t.tradeLabel}
          </span>
        </Link>
        <div
          className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-[#2b2420]/70 md:flex"
        >
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/modiva/shop?category=${c.id}`}
              className="transition-colors hover:text-[#c1602f]"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link href="/modiva/shop" className="transition-colors hover:text-[#c1602f]">
            {t.fullCollection}
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <CartButton className="rounded p-1.5 text-[#2b2420]/70 transition-colors hover:text-[#c1602f]" />
          <RequestTemplateButton templateName="Modiva" />
          <Link
            href="/modiva/shop"
            className="border border-[#2b2420] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#2b2420] transition-colors hover:border-[#c1602f] hover:text-[#c1602f]"
          >
            {t.placeOrder}
          </Link>
        </div>
      </nav>
    </div>
  );
}
