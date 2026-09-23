"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import RequestTemplateButton from "@/components/shared/RequestTemplateButton";
import AdminDashboardLink from "@/components/shared/AdminDashboardLink";
import CartButton from "@/components/shared/CartButton";
import { subtleText } from "../_i18n/translations";

export default function SubtleNav() {
  const { locale, setLocale } = useLanguage();
  const t = subtleText(locale).nav;

  return (
    <div className="sticky top-0 z-20 px-3 pt-3 sm:px-6">
      <div
        className="mx-auto max-w-6xl rounded-full text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3a3a34]/70"
        style={{ fontFamily: "var(--font-subtle-body)" }}
      >
        <span className="mb-2 inline-block rounded-full bg-[#9caf88]/20 px-4 py-1.5">
          {t.announcementPill}
        </span>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-[#3a3a34]/5 bg-white/80 px-5 py-3 shadow-[0_8px_24px_-12px_rgba(58,58,52,0.18)] backdrop-blur">
        <Link
          href="/subtle"
          className="text-xl font-semibold tracking-tight text-[#3a3a34]"
          style={{ fontFamily: "var(--font-subtle-display)" }}
        >
          subtle<span className="text-[#9caf88]">.</span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-semibold md:flex">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/subtle/shop?category=${c.id}`}
              className="rounded-full px-3.5 py-2 text-[#3a3a34]/70 transition-colors hover:bg-[#f0c9c0]/40 hover:text-[#3a3a34]"
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
          <Link
            href="/subtle/shop"
            className="rounded-full px-3.5 py-2 text-[#3a3a34]/70 transition-colors hover:bg-[#f0c9c0]/40 hover:text-[#3a3a34]"
          >
            {t.everything}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <AdminDashboardLink templateName="Subtle" />
          <div className="hidden items-center gap-0.5 rounded-full border border-[#3a3a34]/10 bg-[#f6f3ef] p-0.5 sm:flex">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-label={l.label}
                aria-pressed={locale === l.code}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                  locale === l.code
                    ? "bg-[#3a3a34] text-[#f6f3ef]"
                    : "text-[#3a3a34]/50 hover:text-[#3a3a34]"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-full border border-[#3a3a34]/10 bg-[#f6f3ef] px-3.5 py-2 text-xs font-semibold text-[#3a3a34]/70 transition-colors hover:border-[#9caf88]/50 hover:text-[#3a3a34] sm:flex"
            aria-label={t.smartListAria}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M12 21s-7.2-4.5-10-9.1C.4 8.6 1.8 5 5.3 5c2 0 3.5 1.1 4.7 2.6C11.2 6.1 12.7 5 14.7 5c3.5 0 4.9 3.6 3.3 6.9C19.2 16.5 12 21 12 21z" />
            </svg>
            {t.smartList}
          </button>
          <CartButton className="rounded-full p-2 text-[#3a3a34]/70 transition-colors hover:bg-[#f6f3ef] hover:text-[#3a3a34]" />
          <RequestTemplateButton templateName="Subtle" />
          <Link
            href="/subtle/shop"
            className="rounded-full bg-[#3a3a34] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f6f3ef] transition-colors hover:bg-[#3a3a34]/85"
          >
            {t.startOrdering}
          </Link>
        </div>
      </nav>
    </div>
  );
}
