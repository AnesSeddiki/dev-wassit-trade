"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { categorySeries } from "@/lib/admin-data";
import { VIZ } from "./palette";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { adminText } from "../_i18n/translations";
import type { Locale } from "@/lib/i18n/locales";

function seriesFor(locale: Locale) {
  return [
    { key: "men", label: categoryTranslations.men[locale].label, color: VIZ.men },
    { key: "women", label: categoryTranslations.women[locale].label, color: VIZ.women },
    { key: "kids", label: categoryTranslations.kids[locale].label, color: VIZ.kids },
  ];
}

function CustomTooltip({
  active,
  payload,
  label,
  series,
}: {
  active?: boolean;
  payload?: { value: number; dataKey: string }[];
  label?: string;
  series: ReturnType<typeof seriesFor>;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-2 text-xs shadow-sm dark:border-white/10 dark:bg-[#1a1a19]">
      <p className="mb-1 font-medium text-[#0b0b0b] dark:text-white">{label}</p>
      {payload.map((p) => {
        const s = series.find((s) => s.key === p.dataKey);
        return (
          <p key={p.dataKey} className="flex items-center gap-1.5 tabular-nums">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: s?.color }} />
            {s?.label}: ${p.value.toLocaleString()}
          </p>
        );
      })}
    </div>
  );
}

export default function CategoryBarChart() {
  const { locale } = useLanguage();
  const t = adminText(locale).charts.category;
  const series = seriesFor(locale);

  return (
    <div className="rounded-xl border border-[#0b0b0b]/10 bg-[#fcfcfb] p-4 dark:border-white/10 dark:bg-[#1a1a19]">
      <div className="mb-3">
        <h2 className="text-sm font-semibold">{t.title}</h2>
        <p className="text-xs text-[#898781]">{t.subtitle}</p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categorySeries} margin={{ top: 4, right: 12, bottom: 0, left: -12 }} barGap={4} barCategoryGap="20%">
            <CartesianGrid vertical={false} stroke={VIZ.gridline} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={{ stroke: VIZ.axis }}
              tick={{ fill: VIZ.muted, fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: VIZ.muted, fontSize: 12 }}
              tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
              width={48}
            />
            <Tooltip content={<CustomTooltip series={series} />} cursor={{ fill: "rgba(11,11,11,0.04)" }} />
            <Legend
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => (
                <span className="text-xs text-[#52514e] dark:text-[#c3c2b7]">{value}</span>
              )}
            />
            {series.map((s) => (
              <Bar key={s.key} dataKey={s.key} name={s.label} fill={s.color} radius={[3, 3, 0, 0]} maxBarSize={16} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
