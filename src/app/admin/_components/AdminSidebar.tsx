"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const t = adminText(locale).sidebar;

  const NAV = [
    { key: "dashboard" as const, label: t.nav.dashboard, href: "/admin" },
    { key: "orders" as const, label: t.nav.orders, href: "/admin/orders" },
    { key: "products" as const, label: t.nav.products, href: "/admin/products" },
    { key: "accounts" as const, label: t.nav.accounts, href: "/admin/accounts" },
    { key: "settings" as const, label: t.nav.settings, href: "/admin/settings" },
  ];

  return (
    <aside className="hidden w-56 shrink-0 border-r border-[#0b0b0b]/10 bg-[#fcfcfb] sm:flex sm:flex-col dark:border-white/10 dark:bg-[#1a1a19]">
      <div className="flex items-center gap-2 px-5 py-5">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2a78d6] text-xs font-bold text-white">
          Q
        </span>
        <span className="text-sm font-semibold tracking-tight">{t.storeAdmin}</span>
      </div>
      <nav className="flex-1 px-3 py-2">
        {NAV.map((item) => {
          // Check if current route matches item href exactly (or handles sub-routes)
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`mb-1 flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#2a78d6]/10 text-[#2a78d6] dark:bg-[#3987e5]/15 dark:text-[#3987e5]"
                  : "text-[#52514e] hover:bg-[#0b0b0b]/5 dark:text-[#c3c2b7] dark:hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-[#0b0b0b]/10 px-5 py-4 text-xs text-[#898781] dark:border-white/10">
        {t.demoNote}
      </div>
    </aside>
  );
}