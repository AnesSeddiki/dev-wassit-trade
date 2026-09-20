"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { b2bText } from "../_i18n/translations";

export default function B2BQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const t = b2bText(locale).quickOrder;
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
  const moqMet = totalUnits >= product.moq;

  function setCell(color: string, size: string, value: number) {
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: value }));
  }

  return (
    <div className="border border-[#142433]/15">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#0b2545] px-5 py-3 text-white">
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-b2b-mono)" }}
        >
          {t.heading}
        </span>
        <span className="text-xs text-[#8da9c4]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
          {t.moqPrefix} {product.moq}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs" style={{ fontFamily: "var(--font-b2b-mono)" }}>
          <thead>
            <tr>
              <th className="border-b border-r border-[#142433]/10 bg-[#f7f9fb] p-2 text-left text-[#142433]/50">
                {t.colorSizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b border-[#142433]/10 bg-[#f7f9fb] p-2 text-center text-[#142433]/50"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="border-r border-b border-[#142433]/10 p-2 whitespace-nowrap text-[#142433]/80">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-[#142433]/10 p-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border border-[#142433]/12 bg-white py-1 text-center outline-none focus:border-[#134074]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#142433]/15 bg-[#f7f9fb] px-5 py-4">
        <div className="text-xs text-[#142433]/70" style={{ fontFamily: "var(--font-b2b-mono)" }}>
          <span className="font-semibold text-[#0b2545]">
            {totalUnits} {t.unitsSuffix}
          </span>{" "}
          {formatPrice(activeTier.price, locale)}{t.perUnit}
          {nextTier ? (
            <span className="text-[#134074]">
              {" "}
              {t.addMoreForNext(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
            </span>
          ) : null}
          {!moqMet ? (
            <span className="block text-[#142433]/45">{t.moqNotMet(product.moq)}</span>
          ) : null}
        </div>
        <button
          type="button"
          disabled={!moqMet}
          className="bg-[#0b2545] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors enabled:hover:bg-[#134074] disabled:cursor-not-allowed disabled:opacity-40"
          style={{ fontFamily: "var(--font-b2b-mono)" }}
        >
          {moqMet
            ? t.addCta(formatPrice(activeTier.price * totalUnits, locale))
            : t.needMoreCta(product.moq - totalUnits)}
        </button>
      </div>
    </div>
  );
}
