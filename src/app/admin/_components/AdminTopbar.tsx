"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { adminText } from "../_i18n/translations";
import AdminBackLink, { adminBackLinkClass } from "./AdminBackLink";

export default function AdminTopbar() {
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const t = adminText(locale);

  const PAGE_TITLES: Record<string, string> = {
    "/admin": t.sidebar.nav.dashboard,
    "/admin/orders": t.sidebar.nav.orders,
    "/admin/products": t.sidebar.nav.products,
    "/admin/accounts": t.sidebar.nav.accounts,
    "/admin/settings": t.sidebar.nav.settings,
  };
  const pageTitle =
    PAGE_TITLES[pathname] ??
    Object.entries(PAGE_TITLES).find(([href]) => href !== "/admin" && pathname.startsWith(href))?.[1] ??
    t.sidebar.nav.dashboard;

  return (
    <header className="flex items-center justify-between border-b border-[#0b0b0b]/10 bg-[#fcfcfb] px-4 py-3 sm:px-8 dark:border-white/10 dark:bg-[#1a1a19]">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">{pageTitle}</h1>
        <p className="text-xs text-[#898781]">{t.topbar.lastUpdated}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-md border border-[#0b0b0b]/15 px-1 py-1 dark:border-white/15">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLocale(l.code)}
              className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-colors ${
                locale === l.code
                  ? "bg-[#2a78d6] text-white"
                  : "text-[#898781] hover:text-[#0b0b0b] dark:hover:text-white"
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>
        <Suspense fallback={<Link href="/#templates" className={adminBackLinkClass}>{t.topbar.backToTemplates}</Link>}>
          <AdminBackLink />
        </Suspense>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eb6834] text-xs font-semibold text-white">
          QT
        </div>
      </div>
    </header>
  );
}
