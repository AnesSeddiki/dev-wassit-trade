"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { b2bText } from "../_i18n/translations";

export default function B2BFooter() {
  const { locale } = useLanguage();
  const t = b2bText(locale).footer;
  const columns = [t.paymentTerms, t.accountOrdering, t.certifications, t.contact];

  return (
    <footer className="border-t border-[#142433]/10 bg-[#0b2545] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 text-xs sm:grid-cols-4 sm:px-8">
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-3 text-sm font-semibold" style={{ fontFamily: "var(--font-b2b-display)" }}>
              {col.heading}
            </p>
            <ul className="space-y-1.5 text-white/70">
              {col.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="border-t border-white/10 px-4 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/40 sm:px-8"
        style={{ fontFamily: "var(--font-b2b-mono)" }}
      >
        {t.bottomBar}
      </div>
    </footer>
  );
}
