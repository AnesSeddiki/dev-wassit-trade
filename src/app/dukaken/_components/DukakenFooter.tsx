"use client";

import Link from "next/link";
import { categories, productsByCategory } from "@/lib/products";
import { CATEGORY_THEME } from "./theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations, translateProduct } from "@/lib/i18n/productTranslations";
import { dukakenText } from "../_i18n/translations";

export default function DukakenFooter() {
  const { locale } = useLanguage();
  const t = dukakenText(locale);

  return (
    <footer className="border-t-4 border-[#111827] bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const theme = CATEGORY_THEME[c.id];
            const ct = categoryTranslations[c.id][locale];
            const items = productsByCategory(c.id).slice(0, 5);
            return (
              <div key={c.id}>
                <p
                  className="mb-3 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider"
                  style={{ color: theme.accent }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.accent }} />
                  {ct.label}
                </p>
                <ul className="space-y-1.5">
                  {items.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/dukaken/product/${p.slug}`}
                        className="text-xs text-white/60 transition-colors hover:text-white"
                      >
                        {translateProduct(p, locale).name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/dukaken/shop?category=${c.id}`}
                  className="mt-2 inline-block text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-white"
                >
                  {t.footer.viewAll}
                </Link>
              </div>
            );
          })}

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-wider text-white/90">{t.footer.ordering}</p>
            <ul className="space-y-1.5 text-xs text-white/60">
              {t.footer.orderingLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-wider text-white/90">{t.footer.company}</p>
            <ul className="space-y-1.5 text-xs text-white/60">
              {t.footer.companyLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-[11px] uppercase tracking-wider text-white/45 sm:flex-row sm:items-center">
          <span style={{ fontFamily: "var(--font-dukaken-display)" }} className="text-sm normal-case tracking-tight text-white/80">
            {t.footer.brand}
          </span>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
