"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { customTemplateText } from "@/lib/i18n/customTemplateTranslations";
import CustomTemplateModal from "@/components/shared/CustomTemplateModal";

export default function CustomTemplateCard({ style }: { style?: React.CSSProperties }) {
  const { locale } = useLanguage();
  const t = customTemplateText(locale).card;

  return (
    <CustomTemplateModal
      trigger={(open) => (
        <button
          type="button"
          onClick={open}
          style={style}
          className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-dashed border-white/20 bg-white/[0.02] text-left transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
        >
          <div className="relative flex h-36 w-full items-center justify-center overflow-hidden bg-white/[0.03]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-2xl font-light text-white/70 transition-colors group-hover:border-white/40 group-hover:text-white">
              +
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                {t.title}
              </h2>
            </div>
            <p className="flex-1 text-[13px] leading-relaxed text-white/60">{t.tagline}</p>
            <div className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {t.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </button>
      )}
    />
  );
}
