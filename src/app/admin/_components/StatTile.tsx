"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { VIZ } from "./palette";

interface StatTileProps {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  sparkline: number[];
  trendSuffix: string;
}

export default function StatTile({ label, value, delta, trend, sparkline, trendSuffix }: StatTileProps) {
  const data = sparkline.map((v, i) => ({ i, v }));
  const color = trend === "up" ? VIZ.statusGood : VIZ.statusCritical;

  return (
    <div className="rounded-xl border border-[#0b0b0b]/10 bg-[#fcfcfb] p-4 dark:border-white/10 dark:bg-[#1a1a19]">
      <p className="text-xs font-medium text-[#898781]">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <div>
          <p className="text-2xl font-semibold tabular-nums tracking-tight">{value}</p>
          <p
            className="mt-1 text-xs font-medium tabular-nums"
            style={{ color }}
          >
            {trend === "up" ? "▲" : "▼"} {delta} {trendSuffix}
          </p>
        </div>
        <div className="h-10 w-20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
              <Line
                type="monotone"
                dataKey="v"
                stroke={color}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
