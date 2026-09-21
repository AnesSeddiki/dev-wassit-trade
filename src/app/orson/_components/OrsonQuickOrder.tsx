"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCart } from "@/lib/cart/CartContext";
import { orsonText } from "../_i18n/translations";

export default function OrsonQuickOrder({ product }: { product: Product }) {
  const { locale } = useLanguage();
  const { addItems } = useCart();
  const t = orsonText(locale).quickOrder;
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
    <div className="overflow-hidden rounded-md border-2 border-[#3b2a1a]/20 bg-[#fbf2df]">
      <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-[#3b2a1a]/25 bg-[#ead9b4] px-4 py-3">
        <span
          className="text-lg tracking-tight text-[#a8442e]"
          style={{ fontFamily: "var(--font-orson-display)" }}
        >
          {t.heading}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#3b2a1a]/60">
          {t.subheading}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b border-r border-[#3b2a1a]/15 p-2 text-left text-xs uppercase tracking-wide text-[#3b2a1a]/50">
                {t.colorSizeHeader}
              </th>
              {product.sizes.map((size) => (
                <th
                  key={size}
                  className="border-b border-[#3b2a1a]/15 p-2 text-center text-xs uppercase tracking-wide text-[#3b2a1a]/50"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.colors.map((color, i) => (
              <tr key={color} className={i % 2 ? "bg-[#f4e8d0]/50" : ""}>
                <td className="border-r border-b border-[#3b2a1a]/15 p-2 whitespace-nowrap text-[#3b2a1a]/85">
                  {color}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="border-b border-[#3b2a1a]/15 p-1 text-center">
                    <input
                      type="number"
                      min={0}
                      value={qty[`${color}__${size}`] ?? ""}
                      onChange={(e) => setCell(color, size, Number(e.target.value))}
                      placeholder="0"
                      className="w-12 rounded-sm border border-[#3b2a1a]/20 bg-white py-1 text-center outline-none focus:border-[#d9a441] focus:ring-1 focus:ring-[#d9a441]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-[#3b2a1a]/25 px-4 py-3">
        <div className="text-sm text-[#3b2a1a]/70">
          <span className="font-semibold text-[#3b2a1a]">
            {totalUnits} {t.unitsWord}
          </span>{" "}
          {t.atPerUnit(formatPrice(activeTier.price, locale))}
          {nextTier ? (
            <span className="text-[#a8442e]"> {t.moreGetsYou(nextTier.minQty - totalUnits, formatPrice(nextTier.price, locale))}</span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={totalUnits < product.moq}
          className="rounded-full bg-[#a8442e] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#f4e8d0] transition-colors enabled:hover:bg-[#8f3624] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {totalUnits < product.moq
            ? t.moqNotMet(product.moq - totalUnits)
            : t.addCta(totalUnits, formatPrice(activeTier.price * totalUnits, locale))}
        </button>
      </div>
    </div>
  );
}
