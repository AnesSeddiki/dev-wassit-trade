"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { autoPartsText } from "../_i18n/translations";

export default function AutoFooter() {
  const { locale } = useLanguage();
  const t = autoPartsText(locale).footer;

  const columns = [
    { heading: t.ordering, lines: t.orderingLines },
    { heading: t.shipping, lines: t.shippingLines },
    { heading: t.catalog, lines: t.catalogLines },
    { heading: t.company, lines: t.companyLines },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0e0f11]">
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 text-xs text-white/50 sm:grid-cols-4 sm:px-8"
        style={{ fontFamily: "var(--font-auto-sans)" }}
      >
        {columns.map((col) => (
          <div key={col.heading}>
            <p
              className="mb-2 font-bold uppercase tracking-wider text-white/80"
              style={{ fontFamily: "var(--font-auto-display)" }}
            >
              {col.heading}
            </p>
            {col.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
