"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cartText } from "@/lib/i18n/cartTranslations";
import { useCart } from "@/lib/cart/CartContext";

interface CartButtonProps {
  className?: string;
  style?: React.CSSProperties;
  badgeClassName?: string;
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 8h12l-1 12H7L6 8Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CartButton({ className, style, badgeClassName }: CartButtonProps) {
  const { locale } = useLanguage();
  const t = cartText(locale);
  const { totalUnits, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={t.cartLabel}
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}
      style={style}
    >
      <BagIcon className="h-5 w-5" />
      {totalUnits > 0 ? (
        <span
          className={
            badgeClassName ??
            "absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold leading-none text-white"
          }
        >
          {totalUnits}
        </span>
      ) : null}
    </button>
  );
}
