"use client";

import { useMemo, useState } from "react";
import { autoParts } from "@/lib/autoParts";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { autoPartsText } from "../_i18n/translations";

interface Row {
  id: number;
  sku: string;
  qty: number;
}

let nextId = 1;

export default function QuickSkuOrder() {
  const { locale } = useLanguage();
  const t = autoPartsText(locale).quickSkuOrder;
  const [rows, setRows] = useState<Row[]>([{ id: nextId++, sku: autoParts[0].sku, qty: 24 }]);

  const totalUnits = useMemo(() => rows.reduce((sum, r) => sum + (r.qty || 0), 0), [rows]);

  function updateRow(id: number, patch: Partial<Row>) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  function addRow() {
    setRows((prev) => [...prev, { id: nextId++, sku: "", qty: 12 }]);
  }

  function removeRow(id: number) {
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  }

  return (
    <div className="border border-white/10 bg-[#1c1f24]">
      <div
        className="flex items-center justify-between border-b border-white/10 bg-[#0e0f11] px-4 py-2 text-[11px] uppercase tracking-wider text-white"
        style={{ fontFamily: "var(--font-auto-display)" }}
      >
        <span>{t.heading}</span>
        <span className="text-[#ff7a1a]">
          {totalUnits} {t.unitsSuffix}
        </span>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-2 px-4 py-2">
            <input
              value={row.sku}
              onChange={(e) => updateRow(row.id, { sku: e.target.value })}
              placeholder={t.skuPlaceholder}
              className="min-w-0 flex-1 border border-white/10 bg-[#16181c] px-2 py-1.5 text-xs text-white outline-none placeholder-white/30 focus:border-[#ff7a1a]"
            />
            <input
              type="number"
              min={0}
              value={row.qty}
              onChange={(e) => updateRow(row.id, { qty: Number(e.target.value) })}
              className="w-20 border border-white/10 bg-[#16181c] px-2 py-1.5 text-right text-xs text-white outline-none focus:border-[#ff7a1a]"
            />
            <button
              type="button"
              onClick={() => removeRow(row.id)}
              className="px-1 text-white/40 hover:text-white"
              aria-label="Remove row"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <button
          type="button"
          onClick={addRow}
          className="text-xs font-medium text-white/50 underline decoration-dotted underline-offset-4 hover:text-white"
        >
          {t.addLine}
        </button>
        <button
          type="button"
          className="bg-[#ff7a1a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#16181c] transition-colors hover:bg-[#ff9142]"
          style={{ fontFamily: "var(--font-auto-display)" }}
        >
          {t.requestQuote}
        </button>
      </div>
    </div>
  );
}
