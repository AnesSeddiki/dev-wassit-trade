"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getCatalogItem, formatPrice } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translateProduct } from "@/lib/i18n/productTranslations";
import { cartText } from "@/lib/i18n/cartTranslations";

export interface CartLine {
  color: string;
  size: string;
  quantity: number;
}

export interface CartItem {
  id: string;
  productId: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  totalUnits: number;
  addItems: (productId: string, lines: CartLine[]) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "wholesale-templates.cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const t = cartText(locale);
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // localStorage unavailable — cart just won't persist
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage unavailable — cart just won't persist
    }
  }, [items]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const addItems = useCallback(
    (productId: string, lines: CartLine[]) => {
      const additions = lines.filter((l) => l.quantity > 0);
      if (additions.length === 0) return;

      setItems((prev) => {
        const next = [...prev];
        for (const line of additions) {
          const id = `${productId}::${line.color}::${line.size}`;
          const existingIndex = next.findIndex((i) => i.id === id);
          if (existingIndex >= 0) {
            next[existingIndex] = {
              ...next[existingIndex],
              quantity: next[existingIndex].quantity + line.quantity,
            };
          } else {
            next.push({ id, productId, color: line.color, size: line.size, quantity: line.quantity });
          }
        }
        return next;
      });
      setToast(t.addedToast);
    },
    [t.addedToast]
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const setQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id);
        return;
      }
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
    },
    [removeItem]
  );

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totalUnits = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalUnits,
      addItems,
      removeItem,
      setQuantity,
      isOpen,
      openCart,
      closeCart,
    }),
    [items, totalUnits, addItems, removeItem, setQuantity, isOpen, openCart, closeCart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {isOpen ? <CartPanel /> : null}
      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
          <div className="pointer-events-auto rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30">
            {toast}
          </div>
        </div>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

function CartPanel() {
  const { locale } = useLanguage();
  const t = cartText(locale);
  const { items, totalUnits, removeItem, setQuantity, closeCart } = useCart();

  const unitsByProduct = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.productId] = (acc[item.productId] ?? 0) + item.quantity;
    return acc;
  }, {});

  const lines = items.map((item) => {
    const product = getCatalogItem(item.productId);
    const text = product ? translateProduct(product, locale) : null;
    let unitPrice = product?.tierPricing[0]?.price ?? 0;
    if (product) {
      const productUnits = unitsByProduct[item.productId] ?? item.quantity;
      const sorted = [...product.tierPricing].sort((a, b) => b.minQty - a.minQty);
      const tier = sorted.find((t) => productUnits >= t.minQty) ?? product.tierPricing[0];
      unitPrice = tier.price;
    }
    return { item, product, name: text?.name ?? item.productId, unitPrice };
  });

  const subtotal = lines.reduce((sum, l) => sum + l.unitPrice * l.item.quantity, 0);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={closeCart}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131316] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl italic">{t.heading}</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label={t.close}
            className="shrink-0 rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
          >
            ✕
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-14 text-center">
            <p className="text-sm text-white/70">{t.empty}</p>
            <p className="max-w-xs text-xs text-white/40">{t.emptyHint}</p>
          </div>
        ) : (
          <div className="flex-1 divide-y divide-white/10 overflow-y-auto">
            {lines.map(({ item, name, unitPrice }) => (
              <div key={item.id} className="flex items-center gap-3 px-6 py-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">{name}</p>
                  <p className="mt-0.5 text-xs text-white/50">
                    {t.colorLabel}: {item.color} &middot; {t.sizeLabel}: {item.size}
                  </p>
                  <p className="mt-1 text-xs text-white/60">{formatPrice(unitPrice, locale)}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-1 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(item.id, item.quantity - 1)}
                    aria-label={t.quantityDecrease}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm tabular-nums">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(item.id, item.quantity + 1)}
                    aria-label={t.quantityIncrease}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  aria-label={t.remove}
                  className="shrink-0 rounded-full px-2 py-1 text-xs text-white/40 transition-colors hover:text-rose-400"
                >
                  {t.remove}
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-3 border-t border-white/10 px-6 py-4">
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>{t.totalUnitsLabel}</span>
            <span className="tabular-nums">{totalUnits}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-white">
            <span>{t.subtotalLabel}</span>
            <span className="tabular-nums">{formatPrice(subtotal, locale)}</span>
          </div>
          <button
            type="button"
            disabled
            aria-disabled="true"
            title={t.checkoutHint}
            className="w-full cursor-not-allowed rounded-full bg-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white/40"
          >
            {t.checkout}
          </button>
          <p className="text-center text-[11px] text-white/30">{t.checkoutHint}</p>
        </div>
      </div>
    </div>
  );
}
