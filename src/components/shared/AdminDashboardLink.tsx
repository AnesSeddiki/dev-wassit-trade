"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminDashboardLabel } from "@/lib/i18n/adminLinkTranslations";

interface AdminDashboardLinkProps {
  className?: string;
  style?: React.CSSProperties;
  /** Name of the template this link lives on (e.g. "Trade") — carried into /admin so the request-template badge persists there. */
  templateName?: string;
}

/** Links to the shared /admin dashboard demo — each template offers it as a "here's the backend too" preview. */
export default function AdminDashboardLink({ className, style, templateName }: AdminDashboardLinkProps) {
  const { locale } = useLanguage();
  const href = templateName ? `/admin?template=${encodeURIComponent(templateName)}` : "/admin";

  return (
    <Link href={href} className={className} style={style}>
      {adminDashboardLabel(locale)}
    </Link>
  );
}
