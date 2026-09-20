"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { subtleText } from "../_i18n/translations";

export default function SubtleFooter() {
  const { locale } = useLanguage();
  const t = subtleText(locale).footer;

  return (
    <footer className="mt-16 bg-[#efe8de]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.reassurances.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl bg-white/70 p-5 shadow-[0_10px_30px_-18px_rgba(58,58,52,0.25)]"
            >
              <p
                className="text-sm font-semibold text-[#3a3a34]"
                style={{ fontFamily: "var(--font-subtle-display)" }}
              >
                {r.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#3a3a34]/65">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#3a3a34]/10 pt-8 text-xs text-[#3a3a34]/60 sm:flex-row sm:items-center">
          <p style={{ fontFamily: "var(--font-subtle-display)" }} className="text-base font-semibold text-[#3a3a34]">
            subtle<span className="text-[#9caf88]">.</span>
          </p>
          <p>{t.tagline}</p>
          <p>{t.minOrderNote}</p>
        </div>
      </div>
    </footer>
  );
}
