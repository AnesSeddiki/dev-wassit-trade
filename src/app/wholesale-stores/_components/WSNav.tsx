"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { wsText } from "../_i18n/translations";

const HAZARD_STRIPES = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #1c1c1c 0px, #1c1c1c 10px, #ff5a1f 10px, #ff5a1f 20px)",
};

export default function WSNav() {
  const { locale, setLocale } = useLanguage();
  const t = wsText(locale).nav;

  return (
    <div className="sticky top-0 z-20 bg-[#e5e2da]">
      <div aria-hidden className="h-2" style={HAZARD_STRIPES} />
      <div
        className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-[#1c1c1c] bg-[#1c1c1c] px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#e5e2da] sm:px-8"
        style={{ fontFamily: "var(--font-ws-mono)" }}
      >
        <span>{t.manifestLine1}</span>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">{t.manifestLine2}</span>
          <AdminDashboardLink className="hidden text-[#e5e2da]/70 normal-case tracking-normal transition-colors hover:text-[#e5e2da] sm:inline" />
          <div className="flex items-center gap-1 border-l-2 border-[#e5e2da]/25 pl-2">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                className={`flex h-5 w-7 items-center justify-center border-2 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                  locale === l.code
                    ? "border-[#ff5a1f] bg-[#ff5a1f] text-[#1c1c1c]"
                    : "border-[#e5e2da]/40 text-[#e5e2da]/70 hover:border-[#e5e2da] hover:text-[#e5e2da]"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b-4 border-[#1c1c1c] px-4 py-4 sm:px-8">
        <Link href="/wholesale-stores" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center border-[3px] border-[#1c1c1c] bg-[#ff5a1f] text-sm font-bold text-[#1c1c1c]">
            WS
          </span>
          <span
            className="text-xl font-bold uppercase tracking-tight"
            style={{ fontFamily: "var(--font-ws-display)" }}
          >
            Wholesale Stores
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-1 text-xs font-bold uppercase tracking-wider md:gap-2">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/wholesale-stores/shop?category=${c.id}`}
              className="border-[3px] border-[#1c1c1c] px-3 py-1.5 text-[#1c1c1c] transition-colors hover:bg-[#1c1c1c] hover:text-[#e5e2da]"
              style={{ fontFamily: "var(--font-ws-display)" }}
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link
            href="/wholesale-stores/shop"
            className="border-[3px] border-[#1c1c1c] px-3 py-1.5 text-[#1c1c1c] transition-colors hover:bg-[#1c1c1c] hover:text-[#e5e2da]"
            style={{ fontFamily: "var(--font-ws-display)" }}
          >
            {t.fullInventory}
          </Link>
          <CartButton
            className="border-[3px] border-[#1c1c1c] p-1.5 text-[#1c1c1c] transition-colors hover:bg-[#1c1c1c] hover:text-[#e5e2da]"
            badgeClassName="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center border-2 border-[#1c1c1c] bg-[#ff5a1f] px-1 text-[9px] font-bold leading-none text-[#1c1c1c]"
          />
          <RequestTemplateButton templateName="Wholesale Stores" />
        </div>
      </nav>
    </div>
  );
}
