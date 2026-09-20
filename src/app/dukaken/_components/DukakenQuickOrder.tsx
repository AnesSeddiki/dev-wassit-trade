"use client";

import { useMemo, useState } from "react";
import { formatUSD, type Product } from "@/lib/products";
import { CATEGORY_THEME } from "./theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dukakenText } from "../_i18n/translations";

export default function DukakenQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = dukakenText(locale).quickOrder;
  const theme = CATEGORY_THEME[product.category];
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
  const metMoq = totalUnits >= product.moq;

  function setCell(color: string, size: string, value: number) {
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: Math.max(0, value || 0) }));
  }

  return (
    <div className="border-4 border-[#111827] bg-white" style={{ boxShadow: `6px 6px 0 ${theme.accent}` }}>
      <div
        className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-[#111827] px-4 py-3 text-white"
        style={{ backgroundColor: theme.accent }}
      >
        <span className="text-xs font-black uppercase tracking-wider" style={{ fontFamily: "var(--font-dukaken-display)" }}>
          {t.heading}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider">{product.sku}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="border-b-2 border-r-2 border-[#111827]/10 p-2 text-left text-[10px] font-bold uppercase tracking-wider text-[#111827]/50">
                {t.colorSizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b-2 border-[#111827]/10 p-2 text-center text-[10px] font-bold uppercase tracking-wider text-[#111827]/50"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color, i) => (
              <tr key={color} style={{ backgroundColor: i % 2 ? theme.tint : "white" }}>
                <td className="border-b-2 border-r-2 border-[#111827]/10 p-2 whitespace-nowrap font-semibold text-[#111827]/80">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b-2 border-[#111827]/10 p-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border-2 border-[#111827]/15 bg-white py-1 text-center font-semibold outline-none focus:border-[#111827]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-[#111827] px-4 py-3">
        <div className="text-xs font-semibold text-[#111827]/70">
          <span className="font-black text-[#111827]">{totalUnits}</span> {t.unitsSuffix} ·{" "}
          <span className="font-black text-[#111827]">{formatUSD(activeTier.price)}</span>{t.perUnit}
          {nextTier ? (
            <span className="ml-1" style={{ color: theme.accent }}>
              {t.addMoreForNext(nextTier.minQty - totalUnits, formatUSD(nextTier.price))}
            </span>
          ) : null}
          <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[#111827]/40">
            {t.moqRequired(product.moq)}
          </div>
        </div>
        <button
          type="button"
          disabled={!metMoq}
          className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
          style={{ backgroundColor: theme.accent, fontFamily: "var(--font-dukaken-display)" }}
        >
          {metMoq
            ? t.addCta(totalUnits, formatUSD(activeTier.price * totalUnits))
            : t.moqNotMet(product.moq - totalUnits)}
        </button>
      </div>
    </div>
  );
}
