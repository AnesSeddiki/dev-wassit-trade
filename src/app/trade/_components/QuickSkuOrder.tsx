"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { tradeText } from "../_i18n/translations";

interface Row {
  id: number;
  sku: string;
  qty: number;
}

let nextId = 1;

export default function QuickSkuOrder() {
  const { locale } = useLanguage();
  const t = tradeText(locale).quickSkuOrder;
  const [rows, setRows] = useState<Row[]>([
    { id: nextId++, sku: products[0].sku, qty: 24 },
  ]);

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
    <div className="border border-[#0f172a]/15 bg-white">
      <div
        className="flex items-center justify-between border-b border-[#0f172a]/15 bg-[#0f172a] px-4 py-2 text-[11px] uppercase tracking-wider text-white"
        style={{ fontFamily: "var(--font-trade-mono)" }}
      >
        <span>{t.heading}</span>
        <span className="text-amber-400">{totalUnits} {t.unitsSuffix}</span>
      </div>
      <div className="divide-y divide-[#0f172a]/10">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-2 px-4 py-2">
            <input
              value={row.sku}
              onChange={(e) => updateRow(row.id, { sku: e.target.value })}
              placeholder={t.skuPlaceholder}
              className="min-w-0 flex-1 border border-[#0f172a]/15 bg-[#f7f6f2] px-2 py-1.5 text-xs outline-none focus:border-amber-500"
              style={{ fontFamily: "var(--font-trade-mono)" }}
            />
            <input
              type="number"
              min={0}
              value={row.qty}
              onChange={(e) => updateRow(row.id, { qty: Number(e.target.value) })}
              className="w-20 border border-[#0f172a]/15 bg-[#f7f6f2] px-2 py-1.5 text-right text-xs outline-none focus:border-amber-500"
              style={{ fontFamily: "var(--font-trade-mono)" }}
            />
            <button
              type="button"
              onClick={() => removeRow(row.id)}
              className="px-1 text-[#0f172a]/40 hover:text-[#0f172a]"
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
          className="text-xs font-medium text-[#0f172a]/60 underline decoration-dotted underline-offset-4 hover:text-[#0f172a]"
        >
          {t.addLine}
        </button>
        <button
          type="button"
          className="bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0f172a] transition-colors hover:bg-amber-400"
          style={{ fontFamily: "var(--font-trade-mono)" }}
        >
          {t.requestQuote}
        </button>
      </div>
    </div>
  );
}
