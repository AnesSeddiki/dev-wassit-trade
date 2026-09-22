"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";
import type { Locale } from "@/lib/i18n/locales";

// Types
interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  total: string;
  status: "Completed" | "Processing" | "Cancelled" | "Pending";
  items: number;
}

// Demo data matching the sidebar aesthetic
const orders: Order[] = [
  {
    id: "ORD-9482",
    customer: "Sarah Jenkins",
    email: "sarah.j@example.com",
    date: "Oct 24, 2026",
    total: "42,800 DA",
    status: "Completed",
    items: 3,
  },
  {
    id: "ORD-9481",
    customer: "Michael Chen",
    email: "m.chen@example.com",
    date: "Oct 24, 2026",
    total: "91,200 DA",
    status: "Processing",
    items: 1,
  },
  {
    id: "ORD-9480",
    customer: "Emma Watson",
    email: "emma.w@example.com",
    date: "Oct 23, 2026",
    total: "24,600 DA",
    status: "Completed",
    items: 2,
  },
  {
    id: "ORD-9479",
    customer: "Liam Thorne",
    email: "liam.t@example.com",
    date: "Oct 23, 2026",
    total: "156,400 DA",
    status: "Pending",
    items: 5,
  },
  {
    id: "ORD-9478",
    customer: "Sofia Rodriguez",
    email: "s.rodriguez@example.com",
    date: "Oct 22, 2026",
    total: "18,900 DA",
    status: "Cancelled",
    items: 1,
  },
];

export default function OrdersPage() {
  const { locale } = useLanguage();
  const t = adminText(locale).orders;
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
            {t.exportCsv}
          </button>
          <button className="rounded-md bg-[#2a78d6] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2263b3]">
            {t.createOrder}
          </button>
        </div>
      </div>

      {/* Stats Quick Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label={t.stats.totalOrders.label} value="1,248" change={t.stats.totalOrders.change} />
        <StatCard label={t.stats.pendingFulfillment.label} value="18" change={t.stats.pendingFulfillment.change} warning />
        <StatCard label={t.stats.completedToday.label} value="24" change={t.stats.completedToday.change} />
        <StatCard label={t.stats.cancelled.label} value="3" change={t.stats.cancelled.change} />
      </div>

      {/* Orders Table Container */}
      <div className="mt-8 rounded-lg border border-[#0b0b0b]/10 bg-white dark:border-white/10 dark:bg-[#20201f] shadow-sm">
        {/* Table Filters / Search Bar */}
        <div className="flex flex-col gap-3 border-b border-[#0b0b0b]/10 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-1.5 text-xs text-[#0b0b0b] placeholder-[#898781] outline-none focus:border-[#2a78d6] sm:w-72 dark:border-white/10 dark:bg-[#1a1a19] dark:text-white dark:placeholder-[#a09e96]"
          />
          <div className="flex items-center gap-2">
            <select className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-2.5 py-1.5 text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]">
              <option value="all">{common.allStatuses}</option>
              <option value="completed">{t.statuses.Completed}</option>
              <option value="processing">{t.statuses.Processing}</option>
              <option value="pending">{t.statuses.Pending}</option>
              <option value="cancelled">{t.statuses.Cancelled}</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#0b0b0b]/10 bg-[#fcfcfb] text-[#898781] dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#a09e96]">
              <tr>
                <th className="px-5 py-3 font-medium">{t.columns.orderId}</th>
                <th className="px-5 py-3 font-medium">{t.columns.customer}</th>
                <th className="px-5 py-3 font-medium">{t.columns.date}</th>
                <th className="px-5 py-3 font-medium">{t.columns.items}</th>
                <th className="px-5 py-3 font-medium">{t.columns.status}</th>
                <th className="px-5 py-3 font-medium text-right">{t.columns.total}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0b0b0b]/5 dark:divide-white/5">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="transition-colors hover:bg-[#0b0b0b]/[0.02] dark:hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3.5 font-medium text-[#2a78d6] dark:text-[#3987e5]">
                    {order.id}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="font-medium text-[#0b0b0b] dark:text-white">
                      {order.customer}
                    </div>
                    <div className="text-[11px] text-[#898781] dark:text-[#a09e96]">
                      {order.email}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[#52514e] dark:text-[#c3c2b7]">
                    {order.date}
                  </td>
                  <td className="px-5 py-3.5 text-[#52514e] dark:text-[#c3c2b7]">
                    {order.items} {order.items === 1 ? t.item : t.items}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={order.status} locale={locale} />
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-[#0b0b0b] dark:text-white">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex items-center justify-between border-t border-[#0b0b0b]/10 px-5 py-3 text-xs text-[#898781] dark:border-white/10 dark:text-[#a09e96]">
          <span>{t.showing(orders.length, "1,248")}</span>
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

// Component: Status Badge matching sidebar aesthetic
function StatusBadge({ status, locale }: { status: Order["status"]; locale: Locale }) {
  const t = adminText(locale).orders.statuses;
  const styles = {
    Completed:
      "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
    Processing:
      "bg-[#2a78d6]/10 text-[#2a78d6] dark:bg-[#3987e5]/20 dark:text-[#3987e5]",
    Pending:
      "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
    Cancelled:
      "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${
        styles[status]
      }`}
    >
      {t[status]}
    </span>
  );
}

// Component: Simple Stat Card matching design system
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
