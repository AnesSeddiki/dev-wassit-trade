"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { homeText } from "../_i18n/translations";

const DISMISS_KEY = "wholesale-templates.domainNoticeDismissed";

/**
 * Only shows when visited via the raw *.netlify.app URL (i.e. during the
 * dev.wassittrade.com outage) — self-detects via hostname so it automatically
 * stops appearing once the custom domain is back and traffic returns to it.
 * No manual cleanup needed later.
 */
export default function DomainNoticeBanner() {
  const { locale } = useLanguage();
  const t = homeText(locale).domainNotice;
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const onNetlifyDomain = window.location.hostname.endsWith("netlify.app");
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // sessionStorage unavailable — banner just won't remember dismissal
    }
    if (onNetlifyDomain && !dismissed) {
      setVisible(true);
      requestAnimationFrame(() => setEntered(true));
    }
  }, []);

  function dismiss() {
    setEntered(false);
    setTimeout(() => setVisible(false), 300);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // sessionStorage unavailable
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] flex justify-center px-4 pt-4 transition-all duration-300"
      style={{ opacity: entered ? 1 : 0, transform: entered ? "translateY(0)" : "translateY(-12px)" }}
    >
      <div className="flex max-w-xl items-start gap-3 rounded-xl border border-amber-400/25 bg-[#1a1a1d]/95 px-4 py-3 shadow-lg shadow-black/40 backdrop-blur">
        <span aria-hidden className="mt-0.5 text-lg">
          ⚠️
        </span>
        <p className="flex-1 text-[13px] leading-relaxed text-white/80">{t.message}</p>
        <button
          type="button"
          onClick={dismiss}
          aria-label={t.close}
          className="shrink-0 rounded-full px-1.5 py-0.5 text-xs text-white/40 transition-colors hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
