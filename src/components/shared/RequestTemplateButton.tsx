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

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
            className="fixed right-0 top-0 z-40 flex items-center gap-2 rounded-bl-2xl px-5 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-black/30 transition-transform hover:scale-[1.03] sm:gap-2.5 sm:px-6 sm:py-4 sm:text-base"
            style={{
              background:
                "linear-gradient(120deg, #f59e0b, #ec4899, #8b5cf6, #06b6d4, #f59e0b)",
              backgroundSize: "300% 300%",
              animation: "gradient-shift 5s ease infinite",
            }}
          >
            <MessageIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            {t.requestButton}
          </button>,
          document.body
        );
      }}
    />
  );
}
