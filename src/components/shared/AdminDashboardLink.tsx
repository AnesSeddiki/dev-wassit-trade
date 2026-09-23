"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminDashboardLabel } from "@/lib/i18n/adminLinkTranslations";

interface AdminDashboardLinkProps {
  /** Name of the template this link lives on (e.g. "Trade") — carried into /admin so the request-template badge persists there. */
  templateName?: string;
}

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <rect x="3" y="3" width="7" height="9" rx="1.4" />
      <rect x="14" y="3" width="7" height="5" rx="1.4" />
      <rect x="14" y="12" width="7" height="9" rx="1.4" />
      <rect x="3" y="16" width="7" height="5" rx="1.4" />
    </svg>
  );
}

/** Links to the shared /admin dashboard demo. Pinned top-left on every template, always
 * visible on mobile and desktop, mirroring the top-right "Request this template" badge. */
export default function AdminDashboardLink({ templateName }: AdminDashboardLinkProps) {
  const { locale } = useLanguage();
  const href = templateName ? `/admin?template=${encodeURIComponent(templateName)}` : "/admin";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <Link
      href={href}
      className="fixed left-0 top-0 z-40 flex items-center gap-2 rounded-br-2xl bg-[#1e293b] px-5 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-black/30 transition-transform hover:scale-[1.03] sm:gap-2.5 sm:px-6 sm:py-4 sm:text-base"
    >
      <DashboardIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
      {adminDashboardLabel(locale)}
    </Link>,
    document.body
  );
}
