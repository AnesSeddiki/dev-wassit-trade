"use client";

import { recentOrders } from "@/lib/admin-data";
import { STATUS_STYLES } from "./palette";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { adminText } from "../_i18n/translations";

const CATEGORY_KEY = { Men: "men", Women: "women", Kids: "kids" } as const;

export default function RecentOrdersTable() {
  const { locale } = useLanguage();
  const t = adminText(locale);
  const c = t.charts.recentOrders;

  return (
    <div className="rounded-xl border border-[#0b0b0b]/10 bg-[#fcfcfb] p-4 dark:border-white/10 dark:bg-[#1a1a19]">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">{c.title}</h2>
          <p className="text-xs text-[#898781]">{c.subtitle}</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#0b0b0b]/10 text-left text-xs uppercase tracking-wide text-[#898781] dark:border-white/10">
              <th className="py-2 pr-3 font-medium">{c.columns.order}</th>
              <th className="py-2 pr-3 font-medium">{c.columns.account}</th>
              <th className="py-2 pr-3 font-medium">{c.columns.category}</th>
              <th className="py-2 pr-3 text-right font-medium">{c.columns.units}</th>
              <th className="py-2 pr-3 text-right font-medium">{c.columns.total}</th>
              <th className="py-2 pr-3 font-medium">{c.columns.status}</th>
              <th className="py-2 font-medium">{c.columns.placed}</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((o) => {
              const status = STATUS_STYLES[o.status];
              const categoryLabel =
                o.category === "Mixed"
                  ? t.mixedCategory
                  : categoryTranslations[CATEGORY_KEY[o.category]][locale].label;
              return (
                <tr
                  key={o.id}
                  className="border-b border-[#0b0b0b]/5 last:border-0 dark:border-white/5"
                >
                  <td className="py-2.5 pr-3 font-medium tabular-nums">{o.id}</td>
                  <td className="py-2.5 pr-3 text-[#52514e] dark:text-[#c3c2b7]">{o.account}</td>
                  <td className="py-2.5 pr-3 text-[#52514e] dark:text-[#c3c2b7]">{categoryLabel}</td>
                  <td className="py-2.5 pr-3 text-right tabular-nums">{o.units}</td>
                  <td className="py-2.5 pr-3 text-right tabular-nums">{o.total.toLocaleString("en-US")} DA</td>
                  <td className="py-2.5 pr-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: status.color }}
                      />
                      {t.orderStatusDashboard[o.status]}
                    </span>
                  </td>
                  <td className="py-2.5 text-xs text-[#898781]">{o.placed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
