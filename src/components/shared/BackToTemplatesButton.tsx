"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { backToTemplatesLabel } from "@/lib/i18n/adminLinkTranslations";

function BackArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Links back to the homepage template grid. Pinned top-left on every template, so a
 * visitor who doesn't like this design can get back to the others in one tap, without
 * hunting for a browser back button. */
export default function BackToTemplatesButton() {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <Link
      href="/#templates"
      className="fixed left-0 top-0 z-40 flex items-center gap-1.5 rounded-br-2xl bg-[#1e293b] px-3 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xl shadow-black/30 transition-transform hover:scale-[1.03] sm:gap-2.5 sm:px-6 sm:py-4 sm:text-base"
    >
      <BackArrowIcon className="h-4 w-4 shrink-0 sm:h-6 sm:w-6" />
      <span className="max-w-[28vw] truncate sm:max-w-none">{backToTemplatesLabel(locale)}</span>
    </Link>,
    document.body
  );
}
