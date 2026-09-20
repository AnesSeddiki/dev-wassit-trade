"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { hyperText } from "../_i18n/translations";

export default function HyperFooter() {
  const { locale } = useLanguage();
  const t = hyperText(locale).footer;

  return (
    <footer className="border-t border-[#d4af37]/15 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-14 text-xs leading-relaxed text-[#f5f2ea]/55 sm:grid-cols-4 sm:px-10">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#d4af37]">{t.wholesale.heading}</p>
          {t.wholesale.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#d4af37]">{t.global.heading}</p>
          {t.global.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#d4af37]">{t.collection.heading}</p>
          {t.collection.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#d4af37]">{t.hyper.heading}</p>
          <p className="text-sm text-[#f5f2ea]/80" style={{ fontFamily: "var(--font-hyper-display)" }}>
            {t.hyper.tagline}
          </p>
          <p className="mt-3">{t.hyper.email}</p>
        </div>
      </div>
      <div className="border-t border-[#d4af37]/10 px-4 py-5 text-center text-[10px] uppercase tracking-[0.3em] text-[#f5f2ea]/30 sm:px-10">
        {t.bottomBar}
      </div>
    </footer>
  );
}
