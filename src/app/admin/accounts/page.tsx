"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";
import type { Locale } from "@/lib/i18n/locales";

// Types
interface Account {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Customer" | "Support";
  status: "Active" | "Pending" | "Suspended";
  joinedDate: string;
  totalSpent: string;
}

// Demo data matching the sidebar aesthetic
const accounts: Account[] = [
  {
    id: "USR-001",
    name: "Alex Morgan",
    email: "alex.m@example.com",
    role: "Admin",
    status: "Active",
    joinedDate: "Jan 12, 2025",
    totalSpent: "98,600 DA",
  },
  {
    id: "USR-002",
    name: "David Kim",
    email: "david.k@example.com",
    role: "Manager",
    status: "Active",
    joinedDate: "Mar 04, 2025",
    totalSpent: "55,800 DA",
  },
  {
    id: "USR-003",
    name: "Elena Rostova",
    email: "elena.r@example.com",
    role: "Customer",
    status: "Active",
    joinedDate: "Jul 19, 2025",
    totalSpent: "212,000 DA",
  },
  {
    id: "USR-004",
    name: "Marcus Vance",
    email: "m.vance@example.com",
    role: "Support",
    status: "Pending",
    joinedDate: "Sep 01, 2026",
    totalSpent: "0 DA",
  },
  {
    id: "USR-005",
    name: "Chloe Bennett",
    email: "chloe.b@example.com",
    role: "Customer",
    status: "Suspended",
    joinedDate: "Feb 11, 2026",
    totalSpent: "9,670 DA",
  },
];

export default function AccountsPage() {
  const { locale } = useLanguage();
  const t = adminText(locale).accounts;
  const common = adminText(locale).common;

  return (
    <div className="min-h-screen bg-[#fcfcfb] p-6 sm:p-8 dark:bg-[#1a1a19] text-[#0b0b0b] dark:text-white">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#0b0b0b]/10 pb-5 dark:border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight">{t.title}</h1>
          <p className="mt-1 text-xs text-[#898781] dark:text-[#a09e96]">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-[#0b0b0b]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#52514e] transition-colors hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:bg-[#242423] dark:text-[#c3c2b7] dark:hover:bg-white/5">
            {t.exportUsers}
          </button>
          <button className="rounded-md bg-[#2a78d6] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2263b3]">
            {t.invite}
          </button>
        </div>
      </div>

      {/* Stats Quick Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label={t.stats.totalUsers.label} value="2,840" change={t.stats.totalUsers.change} />
        <StatCard label={t.stats.activeNow.label} value="312" change={t.stats.activeNow.change} />
        <StatCard label={t.stats.pendingInvites.label} value="4" change={t.stats.pendingInvites.change} warning />
        <StatCard label={t.stats.suspended.label} value="2" change={t.stats.suspended.change} />
      </div>

      {/* Accounts Table Container */}
      <div className="mt-8 rounded-lg border border-[#0b0b0b]/10 bg-white dark:border-white/10 dark:bg-[#20201f] shadow-sm">
        {/* Search and Filters */}
        <div className="flex flex-col gap-3 border-b border-[#0b0b0b]/10 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-1.5 text-xs text-[#0b0b0b] placeholder-[#898781] outline-none focus:border-[#2a78d6] sm:w-80 dark:border-white/10 dark:bg-[#1a1a19] dark:text-white dark:placeholder-[#a09e96]"
          />
          <div className="flex items-center gap-2">
            <select className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-2.5 py-1.5 text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]">
              <option value="all">{t.allRoles}</option>
              <option value="admin">{t.roles.Admin}</option>
              <option value="manager">{t.roles.Manager}</option>
              <option value="support">{t.roles.Support}</option>
              <option value="customer">{t.roles.Customer}</option>
            </select>
            <select className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-2.5 py-1.5 text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]">
              <option value="all">{common.allStatuses}</option>
              <option value="active">{t.statuses.Active}</option>
              <option value="pending">{t.statuses.Pending}</option>
              <option value="suspended">{t.statuses.Suspended}</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#0b0b0b]/10 bg-[#fcfcfb] text-[#898781] dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#a09e96]">
              <tr>
                <th className="px-5 py-3 font-medium">{t.columns.userProfile}</th>
                <th className="px-5 py-3 font-medium">{t.columns.role}</th>
                <th className="px-5 py-3 font-medium">{t.columns.status}</th>
                <th className="px-5 py-3 font-medium">{t.columns.joined}</th>
                <th className="px-5 py-3 font-medium text-right">{t.columns.lifetimeValue}</th>
                <th className="px-5 py-3 font-medium text-right">{t.columns.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0b0b0b]/5 dark:divide-white/5">
              {accounts.map((account) => (
                <tr
                  key={account.id}
                  className="transition-colors hover:bg-[#0b0b0b]/[0.02] dark:hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0b0b0b]/5 text-[11px] font-semibold text-[#52514e] dark:bg-white/10 dark:text-[#c3c2b7]">
                        {account.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-[#0b0b0b] dark:text-white">
                          {account.name}
                        </div>
                        <div className="text-[11px] text-[#898781] dark:text-[#a09e96]">
                          {account.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <RoleBadge role={account.role} locale={locale} />
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={account.status} locale={locale} />
                  </td>
                  <td className="px-5 py-3.5 text-[#52514e] dark:text-[#c3c2b7]">
                    {account.joinedDate}
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-[#0b0b0b] dark:text-white">
                    {account.totalSpent}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="text-[#898781] hover:text-[#0b0b0b] dark:text-[#a09e96] dark:hover:text-white transition-colors">
                      {common.edit}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex items-center justify-between border-t border-[#0b0b0b]/10 px-5 py-3 text-xs text-[#898781] dark:border-white/10 dark:text-[#a09e96]">
          <span>{t.showing(accounts.length, "2,840")}</span>
          <div className="flex gap-1">
            <button className="rounded px-2.5 py-1 border border-[#0b0b0b]/10 hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:hover:bg-white/5">
              {common.previous}
            </button>
            <button className="rounded px-2.5 py-1 border border-[#0b0b0b]/10 hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:hover:bg-white/5">
              {common.next}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Role Badge Component
function RoleBadge({ role, locale }: { role: Account["role"]; locale: Locale }) {
  const t = adminText(locale).accounts.roles;
  const styles = {
    Admin: "bg-[#2a78d6]/10 text-[#2a78d6] dark:bg-[#3987e5]/20 dark:text-[#3987e5]",
    Manager: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    Support: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400",
    Customer: "bg-[#0b0b0b]/5 text-[#52514e] dark:bg-white/10 dark:text-[#c3c2b7]",
  };

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${styles[role]}`}>
      {t[role]}
    </span>
  );
}

// Status Badge Component
function StatusBadge({ status, locale }: { status: Account["status"]; locale: Locale }) {
  const t = adminText(locale).accounts.statuses;
  const styles = {
    Active: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
    Pending: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
    Suspended: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  };

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${styles[status]}`}>
      {t[status]}
    </span>
  );
}

// Stat Card Component
function StatCard({
  label,
  value,
  change,
  warning = false,
}: {
  label: string;
  value: string;
  change: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[#0b0b0b]/10 bg-white p-4 dark:border-white/10 dark:bg-[#20201f]">
      <div className="text-xs text-[#898781] dark:text-[#a09e96]">{label}</div>
      <div className="mt-1 text-xl font-bold tracking-tight text-[#0b0b0b] dark:text-white">
        {value}
      </div>
      <div
        className={`mt-1 text-[11px] ${
          warning ? "text-amber-600 dark:text-amber-400" : "text-[#898781] dark:text-[#a09e96]"
        }`}
      >
        {change}
      </div>
    </div>
  );
}
