"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { wsText } from "../_i18n/translations";

const HAZARD_STRIPES = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #1c1c1c 0px, #1c1c1c 10px, #ff5a1f 10px, #ff5a1f 20px)",
};

export default function WSFooter() {
  const { locale } = useLanguage();
  const t = wsText(locale).footer;
  const columns = [t.ordering, t.shipping, t.inventory, t.company];

  return (
    <footer className="border-t-4 border-[#1c1c1c] bg-[#e5e2da]">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-8">
        <div className="flex items-center justify-between border-b-2 border-dashed border-[#1c1c1c]/40 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#1c1c1c]/60">
          <span style={{ fontFamily: "var(--font-ws-mono)" }}>{t.packingSlip}</span>
        </div>
      </div>
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-8 text-xs sm:grid-cols-4 sm:px-8"
        style={{ fontFamily: "var(--font-ws-mono)" }}
      >
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-2 font-bold uppercase tracking-widest text-[#1c1c1c]">{col.title}</p>
            {col.lines.map((line) => (
              <p key={line} className="text-[#1c1c1c]/70">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div aria-hidden className="h-2" style={HAZARD_STRIPES} />
    </footer>
  );
}
