"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { landingExampleText } from "@/lib/i18n/landingExampleTranslations";

const WHATSAPP_NUMBER = "213553418288";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.17 0 4.21.84 5.74 2.37a8.07 8.07 0 0 1 2.38 5.74c0 4.48-3.64 8.12-8.12 8.12a8.1 8.1 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.48 3.65-8.11 8.15-8.11zm-4.52 4.64c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28-.25-.13-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.13-.16.25-.63.79-.77.95-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.28.38-.42.13-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47z" />
    </svg>
  );
}

interface LandingExamplePreviewProps {
  /** Hide the "back to homepage" footer link — omit it when this renders inside a popup
   * that already has its own close button, since a full navigation link doesn't apply there. */
  hideBackLink?: boolean;
}

/** The Tier-1 "landing page package" example storefront. Shared between the standalone
 * /landing-page-example route and the in-popup preview opened from the offer calculator. */
export default function LandingExamplePreview({ hideBackLink }: LandingExamplePreviewProps) {
  const { locale } = useLanguage();
  const t = landingExampleText(locale);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function waLink(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="bg-[#faf6f0] text-[#2b2420]">
      <div className="border-b border-[#e8ddd0] bg-amber-400/10 px-4 py-2 text-center text-[12px] text-[#7a5a3a]">
        {t.demoNotice}
      </div>

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#c1602f]">{t.businessName}</h1>
          <p className="text-xs text-[#8a7c6c]">{t.tagline}</p>
        </div>
        <a
          href={waLink(t.heroCta)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105"
          aria-label={t.heroCta}
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-14 pt-6 text-center sm:px-10">
        <h2 className="text-4xl font-bold tracking-tight text-[#2b2420] sm:text-5xl">{t.heroHeadline}</h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#6b5d4d]">{t.heroSub}</p>
        <a
          href={waLink(t.heroCta)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c1602f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {t.heroCta}
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-10">
        <h3 className="mb-6 text-center text-2xl font-bold text-[#2b2420]">{t.productsTitle}</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {t.products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#e8ddd0] bg-white shadow-sm"
            >
              <div className="relative aspect-square w-full">
                <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                <p className="text-sm font-medium text-[#2b2420]">{product.name}</p>
                <p className="font-mono text-sm text-[#c1602f]">
                  {product.price} {t.daSuffix}
                </p>
                <button
                  type="button"
                  onClick={() => setOrderConfirmed(true)}
                  className="mt-auto rounded-full bg-[#c1602f] py-2 text-[12px] font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  {t.orderButton}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

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
              onClick={() => setOrderConfirmed(false)}
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
