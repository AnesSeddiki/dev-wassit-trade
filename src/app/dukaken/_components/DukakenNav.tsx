"use client";

import Link from "next/link";
import { categories, productsByCategory } from "@/lib/products";
import { CATEGORY_THEME } from "./theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { dukakenText } from "../_i18n/translations";

export default function DukakenNav() {
  const { locale, setLocale } = useLanguage();
  const t = dukakenText(locale);

  return (
    <div className="sticky top-0 z-30 border-b-4 border-[#111827] bg-white">
      {/* dense utility ticker */}
      <div
        className="flex flex-wrap items-center gap-x-5 gap-y-1 border-b border-white/10 bg-[#111827] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white sm:px-8"
        style={{ fontFamily: "var(--font-dukaken-body)" }}
      >
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: CATEGORY_THEME.men.accent }} />
          {t.ticker.men}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: CATEGORY_THEME.women.accent }} />
          {t.ticker.women}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: CATEGORY_THEME.kids.accent }} />
          {t.ticker.kids}
        </span>
        <span className="hidden text-white/55 sm:inline">{t.ticker.trailing}</span>

        <div className="ml-auto flex items-center gap-3">
          <AdminDashboardLink className="hidden text-white/55 normal-case tracking-normal transition-colors hover:text-white sm:inline" />
          <div className="flex items-center gap-1 border-l border-white/20 pl-3">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLocale(l.code)}
              aria-label={l.label}
              className="px-1.5 py-0.5 text-[9px] font-black tracking-wider transition-colors"
              style={
                locale === l.code
                  ? { backgroundColor: CATEGORY_THEME.kids.accent, color: "#111827" }
                  : { color: "rgba(255,255,255,0.55)" }
              }
            >
              {l.code.toUpperCase()}
            </button>
          ))}
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <Link href="/dukaken" className="shrink-0" style={{ fontFamily: "var(--font-dukaken-display)" }}>
          <span className="text-2xl leading-none tracking-tight text-[#111827]">DUKA</span>
          <span className="text-2xl leading-none tracking-tight" style={{ color: CATEGORY_THEME.men.accent }}>
            KEN
          </span>
        </Link>

        {/* mega menu */}
        <div className="group relative hidden md:block">
          <button
            type="button"
            className="flex items-center gap-2 border-2 border-[#111827] bg-[#111827] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            {t.megaMenu.allCategories}
            <span aria-hidden className="text-[9px]">
              ▾
            </span>
          </button>
          <div className="invisible absolute left-0 top-full z-40 w-[680px] translate-y-1 border-4 border-[#111827] bg-white opacity-0 shadow-[8px_8px_0_#111827] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="grid grid-cols-3 divide-x-2 divide-[#111827]/10">
              {categories.map((c) => {
                const theme = CATEGORY_THEME[c.id];
                const ct = categoryTranslations[c.id][locale];
                const items = productsByCategory(c.id).slice(0, 4);
                return (
                  <div key={c.id} className="p-4" style={{ backgroundColor: theme.tint }}>
                    <Link
                      href={`/dukaken/shop?category=${c.id}`}
                      className="mb-1 inline-block text-base tracking-tight"
                      style={{ fontFamily: "var(--font-dukaken-display)", color: theme.accent }}
                    >
                      {ct.label}
                    </Link>
                    <p className="mb-3 text-[11px] leading-snug text-[#111827]/55">{ct.description}</p>
                    <ul className="space-y-1.5">
                      {items.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/dukaken/product/${p.slug}`}
                            className="text-xs font-medium text-[#111827]/75 hover:text-[#111827] hover:underline"
                          >
                            {translateProduct(p, locale).name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/dukaken/shop?category=${c.id}`}
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider"
                      style={{ color: theme.accent }}
                    >
                      {t.megaMenu.shopAll(ct.label)}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-wide md:flex">
          {categories.map((c) => {
            const theme = CATEGORY_THEME[c.id];
            return (
              <Link
                key={c.id}
                href={`/dukaken/shop?category=${c.id}`}
                className="flex items-center gap-1.5 text-[#111827]/70 transition-colors hover:text-[#111827]"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.accent }} />
                {categoryTranslations[c.id][locale].label}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <CartButton
            className="border-2 border-[#111827] p-2 text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
            badgeClassName="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full border-2 border-[#111827] bg-white px-1 text-[9px] font-black leading-none text-[#111827]"
          />
          <RequestTemplateButton templateName="Dukaken" />
          <Link
            href="/dukaken/shop"
            className="border-2 border-[#111827] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
          >
            {t.shopAllTop}
          </Link>
        </div>
      </nav>
    </div>
  );
}
