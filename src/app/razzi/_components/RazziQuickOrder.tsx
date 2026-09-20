"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { ColorDot } from "./swatch";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { razziText } from "../_i18n/translations";

export default function RazziQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = razziText(locale).quickOrder;
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
    <div className="overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] bg-white shadow-[5px_5px_0_0_#1a1a1a]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-[#1a1a1a] bg-[#ff3d81] px-4 py-3">
        <p
          className="text-sm font-extrabold uppercase tracking-wide text-white"
          style={{ fontFamily: "var(--font-razzi-display)" }}
        >
          {t.heading}
        </p>
        <span className="rounded-full border-2 border-[#1a1a1a] bg-white px-2.5 py-0.5 text-xs font-bold text-[#1a1a1a]">
          {totalUnits} {t.unitsSuffix}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-r-2 border-[#1a1a1a]/15 p-2.5 text-left text-[11px] font-bold uppercase tracking-wide text-[#1a1a1a]/50">
                {t.colorSizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b-2 border-[#1a1a1a]/15 p-2.5 text-center text-[11px] font-bold uppercase tracking-wide text-[#1a1a1a]/50"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="border-b-2 border-r-2 border-[#1a1a1a]/15 p-2.5 whitespace-nowrap">
                  <span className="flex items-center gap-2 font-semibold text-[#1a1a1a]">
                    <ColorDot name={color} />
                    {color}
                  </span>
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b-2 border-[#1a1a1a]/15 p-1.5 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 rounded-md border-2 border-[#1a1a1a]/15 bg-[#fafafa] py-1 text-center font-semibold outline-none focus:border-[#2dd4ff] focus:bg-white"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-[#1a1a1a] bg-[#fafafa] px-4 py-4">
        <div className="text-sm text-[#1a1a1a]/70">
          <span className="font-extrabold text-[#1a1a1a]">
            {totalUnits} {t.unitsSuffix}
          </span>
          {" · "}
          <span className="font-extrabold text-[#ff3d81]">
            {formatPrice(activeTier.price, locale)}
            {t.perUnit}
          </span>
          {nextTier ? (
            <span className="block text-xs font-semibold text-[#1a1a1a]/50 sm:inline sm:pl-1">
              {t.addMoreForNext(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          disabled={!metMoq}
          className="rounded-full border-[3px] border-[#1a1a1a] bg-[#ffe14d] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-[#1a1a1a] shadow-[3px_3px_0_0_#1a1a1a] transition-transform enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:border-[#1a1a1a]/20 disabled:bg-[#eee] disabled:text-[#1a1a1a]/40 disabled:shadow-none"
        >
          {metMoq
            ? t.addCta(totalUnits, formatPrice(activeTier.price * totalUnits, locale))
            : t.moqNotMet(product.moq - totalUnits, product.moq)}
        </button>
      </div>
    </div>
  );
}
