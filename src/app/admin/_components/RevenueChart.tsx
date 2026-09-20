"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueSeries } from "@/lib/admin-data";
import { VIZ } from "./palette";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-2 text-xs shadow-sm dark:border-white/10 dark:bg-[#1a1a19]">
      <p className="font-medium text-[#0b0b0b] dark:text-white">{label}</p>
      <p className="tabular-nums text-[#2a78d6]">${payload[0].value.toLocaleString()}</p>
    </div>
  );
}

export default function RevenueChart() {
  const { locale } = useLanguage();
  const t = adminText(locale).charts.revenue;

  return (
    <div className="rounded-xl border border-[#0b0b0b]/10 bg-[#fcfcfb] p-4 dark:border-white/10 dark:bg-[#1a1a19]">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">{t.title}</h2>
          <p className="text-xs text-[#898781]">{t.subtitle}</p>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueSeries} margin={{ top: 4, right: 12, bottom: 0, left: -12 }}>
            <CartesianGrid vertical={false} stroke={VIZ.gridline} strokeDasharray="0" />
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
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: VIZ.axis, strokeWidth: 1 }} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={VIZ.men}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
