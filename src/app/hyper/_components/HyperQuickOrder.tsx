"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { hyperText } from "../_i18n/translations";

export default function HyperQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = hyperText(locale).quickOrder;
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
  const meetsMoq = totalUnits >= product.moq;

  function setCell(color: string, size: string, value: number) {
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: value }));
  }

  return (
    <div className="border border-[#d4af37]/20 bg-[#0f0a0a]">
      <div className="flex items-center justify-between border-b border-[#d4af37]/20 bg-[#2b0f1f] px-5 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5f2ea]">
          {t.heading}
        </span>
        <span className="text-[11px] uppercase tracking-[0.15em] text-[#d4af37]">
          {totalUnits} {t.unitsSuffix}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="border-b border-r border-[#d4af37]/10 p-3 text-left text-[10px] uppercase tracking-[0.15em] text-[#f5f2ea]/40">
                {t.colorwaySizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b border-[#d4af37]/10 p-3 text-center text-[10px] uppercase tracking-[0.15em] text-[#f5f2ea]/40"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color, i) => (
              <tr key={color} className={i % 2 ? "bg-[#f5f2ea]/[0.02]" : ""}>
                <td className="border-r border-b border-[#d4af37]/10 p-3 whitespace-nowrap text-[#f5f2ea]/80">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-[#d4af37]/10 p-1.5 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border border-[#d4af37]/15 bg-[#0a0a0a] py-1.5 text-center text-[#f5f2ea] outline-none focus:border-[#d4af37]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#d4af37]/20 px-5 py-4">
        <div className="text-xs uppercase tracking-[0.1em] text-[#f5f2ea]/60">
          {totalUnits} {t.unitsSuffix} &middot;{" "}
          <span className="text-[#d4af37]">
            {formatPrice(activeTier.price, locale)}
            {t.perUnit}
          </span>
          {nextTier ? (
            <span className="ml-1 text-[#f5f2ea]/40">
              {t.addMoreForNext(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          disabled={!meetsMoq}
          className="bg-[#d4af37] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] transition-colors enabled:hover:bg-[#e8c869] disabled:cursor-not-allowed disabled:bg-[#d4af37]/25 disabled:text-[#f5f2ea]/40"
        >
          {meetsMoq
            ? t.addCta(totalUnits, formatPrice(activeTier.price * totalUnits, locale))
            : t.moqNotMet(product.moq - totalUnits)}
        </button>
      </div>
    </div>
  );
}
