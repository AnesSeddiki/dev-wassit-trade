"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { topProducts } from "@/lib/admin-data";
import { VIZ } from "./palette";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";

// One hue, light -> dark, magnitude encodes rank (sequential job).
const SHADES = ["#1c5cab", "#256abf", "#2a78d6", "#5598e7", "#86b6ef", "#9ec5f4"];

function CustomTooltip({
  active,
  payload,
  unitsSuffix,
}: {
  active?: boolean;
  payload?: { value: number; payload: { sku: string; name: string } }[];
  unitsSuffix: string;
}) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div className="rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-2 text-xs shadow-sm dark:border-white/10 dark:bg-[#1a1a19]">
      <p className="font-medium text-[#0b0b0b] dark:text-white">{p.payload.name}</p>
      <p className="text-[#898781]">{p.payload.sku}</p>
      <p className="tabular-nums text-[#2a78d6]">{p.value.toLocaleString()} {unitsSuffix}</p>
    </div>
  );
}

export default function TopProductsChart() {
  const { locale } = useLanguage();
  const t = adminText(locale).charts.topProducts;

  return (
    <div className="rounded-xl border border-[#0b0b0b]/10 bg-[#fcfcfb] p-4 dark:border-white/10 dark:bg-[#1a1a19]">
      <div className="mb-3">
        <h2 className="text-sm font-semibold">{t.title}</h2>
        <p className="text-xs text-[#898781]">{t.subtitle}</p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topProducts}
            layout="vertical"
            margin={{ top: 4, right: 24, bottom: 0, left: 0 }}
            barCategoryGap="24%"
          >
            <CartesianGrid horizontal={false} stroke={VIZ.gridline} />
            <XAxis type="number" tickLine={false} axisLine={{ stroke: VIZ.axis }} tick={{ fill: VIZ.muted, fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="name"
              tickLine={false}
              axisLine={false}
              width={140}
              tick={{ fill: VIZ.secondary, fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip unitsSuffix={t.unitsSuffix} />} cursor={{ fill: "rgba(11,11,11,0.04)" }} />
            <Bar dataKey="units" radius={[0, 3, 3, 0]} maxBarSize={16}>
              {topProducts.map((p, i) => (
                <Cell key={p.sku} fill={SHADES[i % SHADES.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
