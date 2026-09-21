"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminDashboardLabel } from "@/lib/i18n/adminLinkTranslations";

interface AdminDashboardLinkProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Links to the shared /admin dashboard demo — each template offers it as a "here's the backend too" preview. */
export default function AdminDashboardLink({ className, style }: AdminDashboardLinkProps) {
  const { locale } = useLanguage();

  return (
    <Link href="/admin" className={className} style={style}>
      {adminDashboardLabel(locale)}
    </Link>
  );
}
