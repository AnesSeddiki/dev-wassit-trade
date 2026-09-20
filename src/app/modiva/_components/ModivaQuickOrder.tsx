"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { modivaText } from "../_i18n/translations";

export default function ModivaQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = modivaText(locale).quickOrder;
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
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: value }));
  }

  return (
    <div className="border border-[#2b2420]/15 bg-[#fbf7f0]">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#2b2420]/15 px-5 py-4">
        <p
          className="text-xl italic text-[#2b2420]"
          style={{ fontFamily: "var(--font-modiva-display)" }}
        >
          {t.heading}
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#2b2420]/50">
          {t.subheading}
        </p>
      </div>

      <div className="overflow-x-auto px-5 pt-5">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="border-b border-[#2b2420]/12 py-2 pr-3 text-left text-[10px] uppercase tracking-[0.16em] text-[#2b2420]/45">
                {t.colorwayHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b border-[#2b2420]/12 px-1 py-2 text-center text-[10px] uppercase tracking-[0.16em] text-[#2b2420]/45"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="border-b border-[#2b2420]/10 py-2 pr-3 text-[#2b2420]/80">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-[#2b2420]/10 px-1 py-2 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border border-[#2b2420]/15 bg-white py-1 text-center text-[#2b2420] outline-none focus:border-[#c1602f]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5">
        <div className="text-xs text-[#2b2420]/65">
          <span className="font-medium text-[#2b2420]">{totalUnits} {t.unitsSuffix}</span>
          {" · "}
          <span>{formatPrice(activeTier.price, locale)} {t.perUnit}</span>
          {nextTier ? (
            <div className="mt-1 text-[#c1602f]">
              {t.unlockMessage(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
            </div>
          ) : null}
        </div>
        <button
          type="button"
          disabled={!metMoq}
          className="bg-[#c1602f] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f7f1e8] transition-colors enabled:hover:bg-[#a34f26] disabled:cursor-not-allowed disabled:bg-[#2b2420]/20 disabled:text-[#2b2420]/50"
        >
          {metMoq
            ? t.addCta(totalUnits, formatPrice(activeTier.price * totalUnits, locale))
            : t.moqNotMet(product.moq - totalUnits)}
        </button>
      </div>
    </div>
  );
}
