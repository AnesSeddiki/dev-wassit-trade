"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { modivaText } from "../_i18n/translations";

export default function ModivaFooter() {
  const { locale } = useLanguage();
  const t = modivaText(locale).footer;
  const columns = [t.ordering, t.shipping, t.collection, t.company];

  return (
    <footer className="border-t border-[#2b2420]/12 bg-[#efe3d3]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <p
          className="max-w-xl text-2xl italic leading-snug text-[#2b2420]"
          style={{ fontFamily: "var(--font-modiva-display)" }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#2b2420]/12 pt-8 text-[11px] uppercase tracking-[0.14em] text-[#2b2420]/60 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-2 font-medium text-[#2b2420]">{col.heading}</p>
              {col.lines.map((line) => (
                <p key={line} className="normal-case tracking-normal text-[#2b2420]/55">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
