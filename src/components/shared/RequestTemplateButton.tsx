"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { customTemplateText } from "@/lib/i18n/customTemplateTranslations";
import CustomTemplateModal from "./CustomTemplateModal";

interface RequestTemplateButtonProps {
  /** Display name of the template this button lives on (e.g. "Trade", "Hyper"). */
  templateName: string;
}

function DevIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M8.5 7 3 12l5.5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 7 21 12l-5.5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.2 4.5 10.8 19.5" strokeLinecap="round" />
    </svg>
  );
}

export default function RequestTemplateButton({ templateName }: RequestTemplateButtonProps) {
  const { locale } = useLanguage();
  const t = customTemplateText(locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <CustomTemplateModal
      initialDescription={t.requestMessage(templateName)}
      templateName={templateName}
      trigger={(open) => {
        if (!mounted) return null;
        return createPortal(
          <button
            type="button"
            onClick={open}
            className="fixed left-0 top-0 z-40 flex items-center gap-2.5 rounded-br-2xl px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-black/30 transition-transform hover:scale-[1.03] sm:text-base"
            style={{
              background:
                "linear-gradient(120deg, #f59e0b, #ec4899, #8b5cf6, #06b6d4, #f59e0b)",
              backgroundSize: "300% 300%",
              animation: "gradient-shift 5s ease infinite",
            }}
          >
            <DevIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            {t.requestButton}
          </button>,
          document.body
        );
      }}
    />
  );
}
