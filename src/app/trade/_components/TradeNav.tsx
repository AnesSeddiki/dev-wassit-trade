"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { tradeText } from "../_i18n/translations";

export default function TradeNav() {
  const { locale, setLocale } = useLanguage();
  const t = tradeText(locale);

  return (
    <div className="sticky top-0 z-20 border-b border-[#0f172a]/10 bg-[#f7f6f2]/95 backdrop-blur">
      <div
        className="flex items-center justify-between gap-3 bg-[#0f172a] px-4 py-1.5 text-[11px] text-white/70 sm:px-8"
        style={{ fontFamily: "var(--font-trade-mono)" }}
      >
        <span className="truncate">{t.termsNotice}</span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">{t.acctNotice}</span>
          <AdminDashboardLink className="hidden text-white/60 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white sm:inline" />
          <div className="flex items-center gap-1 border-l border-white/20 pl-3">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                className={`px-1.5 py-0.5 text-[10px] uppercase tracking-wider transition-colors ${
                  locale === l.code ? "bg-amber-500 text-[#0f172a]" : "text-white/60 hover:text-white"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link
          href="/trade"
          className="text-lg font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-trade-mono)" }}
        >
          [ TRADE&nbsp;<span className="text-amber-600">CO.</span> ]
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/trade/shop?category=${c.id}`}
              className="text-[#0f172a]/70 transition-colors hover:text-[#0f172a]"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link href="/trade/shop" className="text-[#0f172a]/70 transition-colors hover:text-[#0f172a]">
            {t.fullCatalog}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <CartButton className="rounded-sm p-1.5 text-[#0f172a]/70 transition-colors hover:text-[#0f172a]" />
          <RequestTemplateButton templateName="Trade" />
          <Link
            href="/trade/shop"
            className="rounded-sm border border-[#0f172a] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#0f172a] hover:text-white"
            style={{ fontFamily: "var(--font-trade-mono)" }}
          >
            {t.quickOrder}
          </Link>
        </div>
      </nav>
    </div>
  );
}
