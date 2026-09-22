"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/products";
import type { AutoPart } from "@/lib/autoParts";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCart } from "@/lib/cart/CartContext";
import { autoPartsText } from "../_i18n/translations";

export default function QuickOrderMatrix({ product }: { product: AutoPart }) {
  const { locale } = useLanguage();
  const { addItems } = useCart();
  const t = autoPartsText(locale).quickOrderMatrix;
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

  function setCell(grade: string, packSize: string, value: number) {
    setQty((prev) => ({ ...prev, [`${grade}__${packSize}`]: value }));
  }

  function handleAddToCart() {
    const lines = Object.entries(qty)
      .map(([key, quantity]) => {
        const [color, size] = key.split("__");
        return { color, size, quantity: quantity || 0 };
      })
      .filter((l) => l.quantity > 0);
    if (lines.length === 0) return;
    addItems(product.id, lines);
    setQty({});
  }

  return (
    <div className="border border-white/10 bg-[#1c1f24]">
      <div
        className="border-b border-white/10 bg-[#0e0f11] px-4 py-2 text-[11px] uppercase tracking-wider text-white"
        style={{ fontFamily: "var(--font-auto-display)" }}
      >
        {t.heading}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="border-b border-r border-white/10 p-2 text-left text-white/45">
                {t.gradePackHeader}
              </th>
              {product.packSizes.map((size) => (
                <th key={size} className="border-b border-white/10 p-2 text-center text-white/45">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.grades.map((grade) => (
              <tr key={grade}>
                <td className="border-r border-b border-white/10 p-2 whitespace-nowrap text-white/75">
                  {grade}
                </td>
                {product.packSizes.map((size) => (
                  <td key={size} className="border-b border-white/10 p-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${grade}__${size}`] ?? ""}
                      onChange={(e) => setCell(grade, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-14 border border-white/10 bg-[#16181c] py-1 text-center text-white outline-none focus:border-[#ff7a1a]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <div className="text-xs text-white/60">
          {totalUnits} {t.unitsSuffix} · {formatPrice(activeTier.price, locale)}
          {t.perUnit}
          {nextTier ? (
            <span className="text-[#ff7a1a]">
              {" "}
              {t.addMoreForNext(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={totalUnits < product.moq}
          className="bg-[#ff7a1a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#16181c] transition-colors enabled:hover:bg-[#ff9142] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ fontFamily: "var(--font-auto-display)" }}
        >
          {totalUnits < product.moq
            ? t.moqNotMet(product.moq - totalUnits)
            : t.addCta(totalUnits, formatPrice(activeTier.price * totalUnits, locale))}
        </button>
      </div>
    </div>
  );
}
