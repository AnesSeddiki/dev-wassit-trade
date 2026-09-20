"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { tradeText } from "../_i18n/translations";

export default function TradeFooter() {
  const { locale } = useLanguage();
  const t = tradeText(locale).footer;

  const columns = [
    { heading: t.ordering, lines: t.orderingLines },
    { heading: t.shipping, lines: t.shippingLines },
    { heading: t.catalog, lines: t.catalogLines },
    { heading: t.company, lines: t.companyLines },
  ];

  return (
    <footer className="border-t border-[#0f172a]/10 bg-[#f0efe9]">
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 text-xs text-[#0f172a]/60 sm:grid-cols-4 sm:px-8"
        style={{ fontFamily: "var(--font-trade-mono)" }}
      >
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-2 font-semibold text-[#0f172a]">{col.heading}</p>
            {col.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
