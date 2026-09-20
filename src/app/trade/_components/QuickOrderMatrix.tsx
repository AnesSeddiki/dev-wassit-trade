"use client";

import { useMemo, useState } from "react";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { tradeText } from "../_i18n/translations";

export default function QuickOrderMatrix({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = tradeText(locale).quickOrderMatrix;
  const [qty, setQty] = useState<Record<string, number>>({});

  const totalUnits = useMemo(
    () => Object.values(qty).reduce((sum, n) => sum + (n || 0), 0),
    [qty]
  );

  const activeTier = useMemo(() => {
    const sorted = [...product.tierPricing].sort((a, b) => b.minQty - a.minQty);
    return sorted.find((t) => totalUnits >= t.minQty) ?? product.tierPricing[0];
  }, [totalUnits, product.tierPricing]);

  const nextTier = product.tierPricing.find((t) => t.minQty > totalUnits);

  function setCell(color: string, size: string, value: number) {
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: value }));
  }

  return (
    <div className="border border-[#0f172a]/15 bg-white">
      <div
        className="border-b border-[#0f172a]/15 bg-[#0f172a] px-4 py-2 text-[11px] uppercase tracking-wider text-white"
        style={{ fontFamily: "var(--font-trade-mono)" }}
      >
        {t.heading}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs" style={{ fontFamily: "var(--font-trade-mono)" }}>
          <thead>
            <tr>
              <th className="border-b border-r border-[#0f172a]/10 p-2 text-left text-[#0f172a]/50">
                {t.colorSizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th key={size} className="border-b border-[#0f172a]/10 p-2 text-center text-[#0f172a]/50">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="border-r border-b border-[#0f172a]/10 p-2 whitespace-nowrap text-[#0f172a]/80">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-[#0f172a]/10 p-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border border-[#0f172a]/10 bg-[#f7f6f2] py-1 text-center outline-none focus:border-amber-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#0f172a]/15 px-4 py-3">
        <div className="text-xs text-[#0f172a]/60" style={{ fontFamily: "var(--font-trade-mono)" }}>
          {totalUnits} {t.unitsSuffix} · {formatUSD(activeTier.price)}{t.perUnit}
          {nextTier ? (
            <span className="text-amber-600">
              {" "}
              {t.addMoreForNext(nextTier.minQty - totalUnits, formatUSD(nextTier.price))}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          disabled={totalUnits < product.moq}
          className="bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0f172a] transition-colors enabled:hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
          style={{ fontFamily: "var(--font-trade-mono)" }}
        >
          {totalUnits < product.moq
            ? t.moqNotMet(product.moq - totalUnits)
            : t.addCta(totalUnits, formatUSD(activeTier.price * totalUnits))}
        </button>
      </div>
    </div>
  );
}
