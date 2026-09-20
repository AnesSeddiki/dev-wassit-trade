"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { zorkaText } from "../_i18n/translations";

export default function ZorkaQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = zorkaText(locale);
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
    <div>
      <p
        className="mb-6 text-xs uppercase tracking-[0.2em] text-black/40"
        style={{ fontFamily: "var(--font-zorka-body)" }}
      >
        {t.quickOrder.heading}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm" style={{ fontFamily: "var(--font-zorka-body)" }}>
          <thead>
            <tr>
              <th className="border-b border-black/10 py-2 pr-4 text-left font-normal text-black/40">—</th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b border-black/10 px-2 py-2 text-center font-normal text-black/40"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="whitespace-nowrap border-b border-black/5 py-2 pr-4 text-black/70">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-black/5 px-1 py-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border-0 border-b border-transparent bg-transparent py-1 text-center outline-none focus:border-black/30"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black/60" style={{ fontFamily: "var(--font-zorka-body)" }}>
          {totalUnits} {t.quickOrder.unitsWord} · {formatPrice(activeTier.price, locale)} {t.quickOrder.perUnit}
          {nextTier ? (
            <span className="block text-black/40 sm:inline">
              {" "}
              {t.quickOrder.addMoreFor(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
            </span>
          ) : null}
        </p>
        <button
          type="button"
          disabled={!metMoq}
          className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
            metMoq
              ? "bg-[#ff2d2d] text-white hover:bg-[#e02222]"
              : "cursor-not-allowed bg-black/5 text-black/30"
          }`}
          style={{ fontFamily: "var(--font-zorka-body)" }}
        >
          {metMoq
            ? t.quickOrder.addCta(totalUnits, formatPrice(activeTier.price * totalUnits, locale))
            : t.quickOrder.moqRemaining(product.moq - totalUnits)}
        </button>
      </div>
    </div>
  );
}
