"use client";

import Link from "next/link";
import { autoPartCategories } from "@/lib/autoParts";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { autoPartCategoryTranslations } from "@/lib/i18n/autoPartTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { autoPartsText } from "../_i18n/translations";

export default function AutoNav() {
  const { locale, setLocale } = useLanguage();
  const t = autoPartsText(locale);

  return (
    <div className="sticky top-0 z-20 border-b border-white/10 bg-[#16181c]/95 backdrop-blur">
      <div
        className="flex items-center justify-between gap-3 bg-[#0e0f11] px-4 py-1.5 text-[11px] text-white/60 sm:px-8"
        style={{ fontFamily: "var(--font-auto-display)" }}
      >
        <span className="truncate uppercase tracking-wider">{t.topBarNotice}</span>
        <div className="flex items-center gap-3">
          <AdminDashboardLink
            templateName="Auto Parts"
            className="hidden text-white/50 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white sm:inline"
          />
          <div className="flex items-center gap-1 border-l border-white/15 pl-3">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                className={`px-1.5 py-0.5 text-[10px] uppercase tracking-wider transition-colors ${
                  locale === l.code ? "bg-[#ff7a1a] text-[#16181c]" : "text-white/50 hover:text-white"
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
          href="/auto-parts"
          className="text-lg font-bold tracking-tight text-white"
          style={{ fontFamily: "var(--font-auto-display)" }}
        >
          {t.brand}
          <span className="text-[#ff7a1a]">.</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {autoPartCategories.map((c) => (
            <Link
              key={c.id}
              href={`/auto-parts/shop?category=${c.id}`}
              className="text-white/60 transition-colors hover:text-white"
            >
              {autoPartCategoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link href="/auto-parts/shop" className="text-white/60 transition-colors hover:text-white">
            {t.fullCatalog}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <CartButton className="rounded-sm p-1.5 text-white/60 transition-colors hover:text-white" />
          <RequestTemplateButton templateName="Auto Parts" />
          <Link
            href="/auto-parts/shop"
            className="rounded-sm border border-[#ff7a1a] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff7a1a] transition-colors hover:bg-[#ff7a1a] hover:text-[#16181c]"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {t.quickOrder}
          </Link>
        </div>
      </nav>
    </div>
  );
}
