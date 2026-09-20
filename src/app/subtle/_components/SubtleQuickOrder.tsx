"use client";

import { useMemo, useState } from "react";
import { formatUSD, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { subtleText } from "../_i18n/translations";

export default function SubtleQuickOrder({ product }: { product: Product }) {
  const [qty, setQty] = useState<Record<string, number>>({});
  const { locale } = useLanguage();
  const t = subtleText(locale).quickOrder;

  const totalUnits = useMemo(
    () => Object.values(qty).reduce((sum, n) => sum + (n || 0), 0),
    [qty]
  );

  const sortedTiers = useMemo(
    () => [...product.tierPricing].sort((a, b) => a.minQty - b.minQty),
    [product.tierPricing]
  );

  const activeTier = useMemo(() => {
    const descending = [...sortedTiers].sort((a, b) => b.minQty - a.minQty);
    return descending.find((t) => totalUnits >= t.minQty) ?? sortedTiers[0];
  }, [totalUnits, sortedTiers]);

  const nextTier = sortedTiers.find((t) => t.minQty > totalUnits);
  const meetsMoq = totalUnits >= product.moq;

  function setCell(color: string, size: string, value: number) {
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: Math.max(0, value) }));
  }

  const progressToNext = nextTier
    ? Math.min(100, Math.round((totalUnits / nextTier.minQty) * 100))
    : 100;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_-22px_rgba(58,58,52,0.35)]">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#3a3a34] px-6 py-4">
        <span
          className="text-sm font-semibold text-white"
          style={{ fontFamily: "var(--font-subtle-display)" }}
        >
          {t.heading}
        </span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
          {t.unitsSoFar(totalUnits)}
        </span>
      </div>

      <div className="overflow-x-auto px-6 pt-5">
        <table className="w-full border-separate border-spacing-1.5 text-xs">
          <thead>
            <tr>
              <th className="p-1 text-left font-semibold text-[#3a3a34]/50">{t.colorSizeHeader}</th>
              {product.sizes.map((size) => (
                <th key={size} className="p-1 text-center font-semibold text-[#3a3a34]/50">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="whitespace-nowrap rounded-xl bg-[#f6f3ef] p-2 font-semibold text-[#3a3a34]/80">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="p-0.5 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 rounded-lg border border-[#3a3a34]/10 bg-[#f6f3ef] py-1.5 text-center outline-none transition-colors focus:border-[#9caf88] focus:bg-white"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-6 mt-5 rounded-2xl bg-[#f6f3ef] p-4">
        <div className="flex items-center justify-between text-xs font-semibold text-[#3a3a34]/70">
          <span>
            {t.currentPricePrefix}{" "}
            <span className="text-[#3a3a34]">
              {formatUSD(activeTier.price)}
              {t.perUnit}
            </span>
          </span>
          {nextTier ? (
            <span className="text-[#9caf88]">
              {t.moreUnitsUnlocks(nextTier.minQty - totalUnits, formatUSD(nextTier.price))}
            </span>
          ) : (
            <span className="text-[#9caf88]">{t.bestPriceReached}</span>
          )}
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#3a3a34]/10">
          <div
            className="h-full rounded-full bg-[#9caf88] transition-all duration-300"
            style={{ width: `${progressToNext}%` }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
        <p className="text-xs text-[#3a3a34]/55">
          {meetsMoq
            ? t.moqMetMessage
            : t.moqNotMetMessage(product.moq, product.moq - totalUnits)}
        </p>
        <button
          type="button"
          disabled={!meetsMoq || totalUnits === 0}
          className="rounded-full bg-[#3a3a34] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors enabled:hover:bg-[#9caf88] disabled:cursor-not-allowed disabled:opacity-35"
        >
          {meetsMoq && totalUnits > 0
            ? t.ctaAdd(totalUnits, formatUSD(activeTier.price * totalUnits))
            : t.ctaMoqNotMet(Math.max(product.moq - totalUnits, 0))}
        </button>
      </div>
    </div>
  );
}
