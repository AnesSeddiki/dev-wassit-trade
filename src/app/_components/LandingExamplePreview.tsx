"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { landingExampleText, type LandingExampleProduct } from "@/lib/i18n/landingExampleTranslations";
import LandingExampleLogo from "./LandingExampleLogo";

function AdminIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <rect x="3" y="3" width="7" height="9" rx="1.4" />
      <rect x="14" y="3" width="7" height="5" rx="1.4" />
      <rect x="14" y="12" width="7" height="9" rx="1.4" />
      <rect x="3" y="16" width="7" height="5" rx="1.4" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "213553418288";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.17 0 4.21.84 5.74 2.37a8.07 8.07 0 0 1 2.38 5.74c0 4.48-3.64 8.12-8.12 8.12a8.1 8.1 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.48 3.65-8.11 8.15-8.11zm-4.52 4.64c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28-.25-.13-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.13-.16.25-.63.79-.77.95-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.28.38-.42.13-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47z" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface CartItem {
  product: LandingExampleProduct;
  size: string;
  color: string;
  qty: number;
}

interface LandingExamplePreviewProps {
  /** Hide the "back to homepage" footer link — omit it when this renders inside a popup
   * that already has its own close button, since a full navigation link doesn't apply there. */
  hideBackLink?: boolean;
  /** Overrides the demo store name with the name the visitor actually typed into the offer
   * calculator's contact form — the one thing made dynamic, so "see an example" reads as
   * their own store. Everything else in the example stays the generic placeholder content. */
  businessName?: string;
}

type View = "store" | "product" | "cart";

/** The Tier-1 "landing page package" example storefront. Shared between the standalone
 * /landing-page-example route and the in-popup preview opened from the offer calculator.
 * Product detail and cart are internal view states, not real routes/pages — this component
 * renders inside a small popup in one context, and a real navigation would break out of it. */
export default function LandingExamplePreview({ hideBackLink, businessName }: LandingExamplePreviewProps) {
  const { locale } = useLanguage();
  const t = landingExampleText(locale);
  const storeName = businessName?.trim() || t.businessName;

  const [view, setView] = useState<View>("store");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [chosenSize, setChosenSize] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  const [chosenQty, setChosenQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  function waLink(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const selectedProduct = t.products.find((p) => p.slug === selectedSlug) ?? null;
  const filteredProducts =
    selectedCategory === "all" ? t.products : t.products.filter((p) => p.category === selectedCategory);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.product.price, 0);

  function openProduct(product: LandingExampleProduct) {
    setSelectedSlug(product.slug);
    setChosenSize(product.sizes[0] ?? "");
    setChosenColor(product.colors[0] ?? "");
    setChosenQty(1);
    setJustAdded(false);
    setView("product");
  }

  function addToCart() {
    if (!selectedProduct) return;
    setCart((prev) => [...prev, { product: selectedProduct, size: chosenSize, color: chosenColor, qty: chosenQty }]);
    setJustAdded(true);
  }

  function removeFromCart(index: number) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function confirmOrder() {
    setCart([]);
    setOrderConfirmed(true);
  }

  return (
    <div className="bg-[#faf6f0] text-[#2b2420]">
      <div className="border-b border-[#e8ddd0] bg-amber-400/10 px-4 py-2 text-center text-[12px] text-[#7a5a3a]">
        {t.demoNotice}
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <button type="button" onClick={() => setView("store")} className="text-start">
          <LandingExampleLogo businessName={storeName} />
        </button>
        <div className="flex items-center gap-2">
          <Link
            href="/admin"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8ddd0] bg-white text-[#6b5d4d] shadow-sm transition-transform hover:scale-105 hover:text-[#c1602f]"
            aria-label="Admin"
          >
            <AdminIcon className="h-4.5 w-4.5" />
          </Link>
          <button
            type="button"
            onClick={() => setView("cart")}
            aria-label={t.cartButton}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#e8ddd0] bg-white text-[#c1602f] shadow-sm transition-transform hover:scale-105"
          >
            <CartIcon className="h-5 w-5" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#c1602f] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            ) : null}
          </button>
          <a
            href={waLink(t.heroHeadline)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105"
            aria-label={t.contactTitle}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </header>

      {view === "store" ? (
        <>
          <section className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="grid grid-cols-3 gap-1">
                {[t.products[1], t.products[3], t.products[5]].map((p) => (
                  <div key={p.slug} className="relative aspect-[3/4]">
                    <Image src={p.image} alt="" fill className="object-cover" sizes="33vw" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.heroHeadline}</h2>
                <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-white/85">{t.heroSub}</p>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-6 py-8 text-center sm:grid-cols-3 sm:px-10">
            <div className="rounded-xl border border-[#e8ddd0] bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#c1602f]">{t.aboutTitle}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#6b5d4d]">{t.aboutText}</p>
            </div>
            <div className="rounded-xl border border-[#e8ddd0] bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#c1602f]">📍 {t.locationTitle}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#6b5d4d]">{t.locationText}</p>
            </div>
            <div className="rounded-xl border border-[#e8ddd0] bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#c1602f]">{t.contactTitle}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#6b5d4d]">
                📞 {t.phone}
                <br />
                ✉️ {t.email}
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-10">
            <h3 className="mb-4 text-center text-2xl font-bold text-[#2b2420]">{t.productsTitle}</h3>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "border-[#c1602f] bg-[#c1602f] text-white"
                    : "border-[#e8ddd0] bg-white text-[#6b5d4d] hover:border-[#c1602f]/50"
                }`}
              >
                {t.allCategoriesLabel}
              </button>
              {t.categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? "border-[#c1602f] bg-[#c1602f] text-white"
                      : "border-[#e8ddd0] bg-white text-[#6b5d4d] hover:border-[#c1602f]/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => openProduct(product)}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#e8ddd0] bg-white text-start shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <div className="relative aspect-square w-full">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
                    <p className="text-sm font-medium text-[#2b2420]">{product.name}</p>
                    <p className="font-mono text-sm text-[#c1602f]">
                      {product.price.toLocaleString("en-US")} {t.daSuffix}
                    </p>
                    <span className="mt-auto text-[11px] font-semibold text-[#c1602f] underline underline-offset-2">
                      {t.viewProductButton}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </>
      ) : view === "product" && selectedProduct ? (
        <section className="mx-auto max-w-3xl px-6 py-8 sm:px-10">
          <button
            type="button"
            onClick={() => setView("store")}
            className="mb-5 text-[12px] font-medium text-[#c1602f] underline underline-offset-2"
          >
            ← {t.backToStore}
          </button>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl border border-[#e8ddd0] sm:w-72">
              <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 288px" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold text-[#2b2420]">{selectedProduct.name}</h2>
              <p className="mt-1 font-mono text-lg text-[#c1602f]">
                {selectedProduct.price.toLocaleString("en-US")} {t.daSuffix}
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#6b5d4d]">{selectedProduct.description}</p>

              <div className="mt-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#8a7c6c]">{t.sizeLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setChosenSize(size)}
                      className={`rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                        chosenSize === size
                          ? "border-[#c1602f] bg-[#c1602f] text-white"
                          : "border-[#e8ddd0] bg-white text-[#6b5d4d]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#8a7c6c]">{t.colorLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setChosenColor(color)}
                      className={`rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                        chosenColor === color
                          ? "border-[#c1602f] bg-[#c1602f] text-white"
                          : "border-[#e8ddd0] bg-white text-[#6b5d4d]"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#8a7c6c]">{t.quantityLabel}</p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChosenQty((q) => Math.max(1, q - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e8ddd0] bg-white text-[#6b5d4d]"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-medium">{chosenQty}</span>
                  <button
                    type="button"
                    onClick={() => setChosenQty((q) => q + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e8ddd0] bg-white text-[#6b5d4d]"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={addToCart}
                className="mt-6 w-full rounded-full bg-[#c1602f] py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] sm:w-auto sm:px-8"
              >
                {t.addToCartButton}
              </button>
              {justAdded ? <p className="mt-2 text-[12.5px] font-medium text-emerald-700">{t.addedToCartMessage}</p> : null}
            </div>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-2xl px-6 py-8 sm:px-10">
          <button
            type="button"
            onClick={() => setView("store")}
            className="mb-5 text-[12px] font-medium text-[#c1602f] underline underline-offset-2"
          >
            ← {t.backToStore}
          </button>
          <h2 className="text-2xl font-bold text-[#2b2420]">{t.cartTitle}</h2>

          {cart.length === 0 ? (
            <p className="mt-4 text-sm text-[#8a7c6c]">{t.cartEmpty}</p>
          ) : (
            <div className="mt-4 flex flex-col gap-3">
              {cart.map((item, i) => (
                <div
                  key={`${item.product.slug}-${item.size}-${item.color}-${i}`}
                  className="flex items-center gap-3 rounded-xl border border-[#e8ddd0] bg-white p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[#2b2420]">{item.product.name}</p>
                    <p className="text-[12px] text-[#8a7c6c]">
                      {item.size} · {item.color} · x{item.qty}
                    </p>
                  </div>
                  <p className="font-mono text-sm text-[#c1602f]">
                    {(item.product.price * item.qty).toLocaleString("en-US")} {t.daSuffix}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeFromCart(i)}
                    className="shrink-0 text-[11px] font-medium text-rose-600 underline underline-offset-2"
                  >
                    {t.removeButton}
                  </button>
                </div>
              ))}

              <div className="mt-2 flex items-center justify-between border-t border-[#e8ddd0] pt-3">
                <span className="text-sm font-semibold text-[#2b2420]">{t.totalLabel}</span>
                <span className="font-mono text-base font-semibold text-[#c1602f]">
                  {cartTotal.toLocaleString("en-US")} {t.daSuffix}
                </span>
              </div>

              <button
                type="button"
                onClick={confirmOrder}
                className="mt-2 w-full rounded-full bg-[#c1602f] py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
              >
                {t.confirmOrderButton}
              </button>
            </div>
          )}
        </section>
      )}

      <footer className="border-t border-[#e8ddd0] px-6 py-6 text-center sm:px-10">
        <p className="text-[11px] text-[#a89a89]">{t.footerNote}</p>
        {hideBackLink ? null : (
          <Link href="/" className="mt-2 inline-block text-[12px] text-[#c1602f] underline underline-offset-2">
            {t.backLink}
          </Link>
        )}
      </footer>

      {orderConfirmed ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOrderConfirmed(false)}
        >
          <div
            className="flex w-full max-w-xs flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
              ✓
            </span>
            <p className="text-[15px] font-medium text-[#2b2420]">{t.orderConfirmedMessage}</p>
            <button
              type="button"
              onClick={() => {
                setOrderConfirmed(false);
                setView("store");
              }}
              className="mt-1 rounded-full border border-[#e8ddd0] px-4 py-1.5 text-[12px] font-medium text-[#6b5d4d] transition-colors hover:border-[#c1602f]/50 hover:text-[#c1602f]"
            >
              {t.orderConfirmedClose}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
