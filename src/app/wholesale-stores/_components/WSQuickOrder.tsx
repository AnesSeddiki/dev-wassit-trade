"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCart } from "@/lib/cart/CartContext";
import { wsText } from "../_i18n/translations";

export default function WSQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const { addItems } = useCart();
  const t = wsText(locale).quickOrder;
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
    setQty((prev) => ({ ...prev, [`${color}__${size}`]: Math.max(0, value || 0) }));
  }

  function clearAll() {
    setQty({});
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
    <div className="border-4 border-[#1c1c1c] bg-[#e5e2da]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-[#1c1c1c] bg-[#1c1c1c] px-4 py-2.5">
        <span
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5e2da]"
          style={{ fontFamily: "var(--font-ws-display)" }}
        >
          {t.heading}
        </span>
        <span
          className="text-xs font-bold uppercase tracking-widest text-[#ff5a1f]"
          style={{ fontFamily: "var(--font-ws-mono)" }}
        >
          SKU {product.sku}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs" style={{ fontFamily: "var(--font-ws-mono)" }}>
          <thead>
            <tr>
              <th className="border-b-[3px] border-r-[3px] border-[#1c1c1c] bg-[#1c1c1c]/5 p-2 text-left uppercase tracking-wider text-[#1c1c1c]/60">
                {t.colorSizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b-[3px] border-l border-[#1c1c1c]/20 bg-[#1c1c1c]/5 p-2 text-center uppercase tracking-wider text-[#1c1c1c]/60"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color) => (
              <tr key={color}>
                <td className="border-b border-r-[3px] border-[#1c1c1c]/20 p-2 whitespace-nowrap font-bold uppercase text-[#1c1c1c]">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-l border-[#1c1c1c]/20 p-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 border-2 border-[#1c1c1c]/30 bg-[#e5e2da] py-1 text-center font-bold outline-none focus:border-[#ff5a1f]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t-4 border-[#1c1c1c] px-4 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="border-2 border-[#1c1c1c] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#1c1c1c]"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {t.unitsTotal(totalUnits)}
          </span>
          <span className="text-xs text-[#1c1c1c]/70" style={{ fontFamily: "var(--font-ws-mono)" }}>
            {t.tierPrice(formatPrice(activeTier.price, locale))}
            {nextTier ? (
              <span className="text-[#ff5a1f]">
                {" "}
                {t.moreForNext(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}
              </span>
            ) : null}
          </span>
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] font-bold uppercase tracking-wider text-[#1c1c1c]/50 underline decoration-dotted underline-offset-4 hover:text-[#1c1c1c]"
          >
            {t.clearForm}
          </button>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!moqMet}
          className="border-[3px] border-[#1c1c1c] bg-[#ff5a1f] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1c1c1c] transition-colors enabled:hover:bg-[#1c1c1c] enabled:hover:text-[#ff5a1f] disabled:cursor-not-allowed disabled:border-[#1c1c1c]/30 disabled:bg-[#1c1c1c]/10 disabled:text-[#1c1c1c]/40"
          style={{ fontFamily: "var(--font-ws-display)" }}
        >
          {moqMet
            ? t.addUnits(totalUnits, formatPrice(activeTier.price * totalUnits, locale))
            : t.moqNotMet(product.moq - totalUnits)}
        </button>
      </div>
    </div>
  );
}
