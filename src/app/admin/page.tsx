"use client";

import { kpis } from "@/lib/admin-data";
import StatTile from "./_components/StatTile";
import RevenueChart from "./_components/RevenueChart";
import CategoryBarChart from "./_components/CategoryBarChart";
import TopProductsChart from "./_components/TopProductsChart";
import RecentOrdersTable from "./_components/RecentOrdersTable";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "./_i18n/translations";

export default function AdminDashboard() {
  const { locale } = useLanguage();
  const t = adminText(locale);

  return (
    <div className="mx-auto max-w-6xl">
      <p className="mb-4 rounded-md border border-[#eb6834]/25 bg-[#eb6834]/5 px-3 py-2 text-xs text-[#a3521f] dark:border-[#d95926]/30 dark:bg-[#d95926]/10 dark:text-[#f0a374]">
        {t.dashboard.demoBanner}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <StatTile
            key={k.id}
            label={t.dashboard.kpis[k.id]}
            value={k.value}
            delta={k.delta}
            trend={k.trend}
            sparkline={k.sparkline}
            trendSuffix={t.dashboard.vsLastMonth}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RevenueChart />
        <CategoryBarChart />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.4fr]">
        <TopProductsChart />
        <RecentOrdersTable />
      </div>
    </div>
  );
}
