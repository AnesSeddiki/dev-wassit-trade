"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="9" rx="1.2" />
      <rect x="14" y="3" width="7" height="5" rx="1.2" />
      <rect x="14" y="12" width="7" height="9" rx="1.2" />
      <rect x="3" y="16" width="7" height="5" rx="1.2" />
    </svg>
  );
}

function OrdersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7h18M3 12h18M3 17h12" strokeLinecap="round" />
    </svg>
  );
}

function ProductsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 7 12 3 4 7v10l8 4 8-4V7Z" strokeLinejoin="round" />
      <path d="M4 7l8 4 8-4M12 11v10" strokeLinejoin="round" />
    </svg>
  );
}

function AccountsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      <path d="M16 14.5c2.3.4 4 2.4 4 4.8" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19.4 13a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V19a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H4a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H10a1.7 1.7 0 0 0 1-1.55V4a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V10a1.7 1.7 0 0 0 1.55 1H20a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AdminBottomNav() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const t = adminText(locale).sidebar;

  const NAV = [
    { key: "dashboard" as const, label: t.nav.dashboard, href: "/admin", Icon: DashboardIcon },
    { key: "orders" as const, label: t.nav.orders, href: "/admin/orders", Icon: OrdersIcon },
    { key: "products" as const, label: t.nav.products, href: "/admin/products", Icon: ProductsIcon },
    { key: "accounts" as const, label: t.nav.accounts, href: "/admin/accounts", Icon: AccountsIcon },
    { key: "settings" as const, label: t.nav.settings, href: "/admin/settings", Icon: SettingsIcon },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-[#0b0b0b]/10 bg-[#fcfcfb] pb-[env(safe-area-inset-bottom)] sm:hidden dark:border-white/10 dark:bg-[#1a1a19]">
      {NAV.map((item) => {
        const isActive = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        const Icon = item.Icon;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${
              isActive
                ? "text-[#2a78d6] dark:text-[#3987e5]"
                : "text-[#898781] dark:text-[#a09e96]"
            }`}
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
