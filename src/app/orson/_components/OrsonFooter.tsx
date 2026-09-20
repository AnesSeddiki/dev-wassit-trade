"use client";

import EstStamp from "./EstStamp";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { orsonText } from "../_i18n/translations";

export default function OrsonFooter() {
  const { locale } = useLanguage();
  const t = orsonText(locale).footer;

  return (
    <footer className="border-t-[3px] border-[#3b2a1a] bg-[#ead9b4]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
        <div className="grid grid-cols-2 gap-8 text-sm text-[#3b2a1a]/75 sm:grid-cols-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a8442e]">
              {t.ordering}
            </p>
            {t.orderingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a8442e]">
              {t.shipping}
            </p>
            {t.shippingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a8442e]">
              {t.catalog}
            </p>
            {t.catalogLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a8442e]">
              {t.company}
            </p>
            {t.companyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-dashed border-[#3b2a1a]/30" />

        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <EstStamp size={40} />
            <p className="text-xs uppercase tracking-[0.22em] text-[#3b2a1a]/60">
              {t.tagline}
            </p>
          </div>
          <p className="text-xs text-[#3b2a1a]/50">{t.copyright(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
