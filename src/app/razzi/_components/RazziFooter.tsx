"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { razziText } from "../_i18n/translations";

export default function RazziFooter() {
  const { locale } = useLanguage();
  const t = razziText(locale);

  return (
    <footer className="border-t-[3px] border-[#1a1a1a] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4 sm:px-8">
        <div>
          <p
            className="mb-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {t.footer.shop}
          </p>
          <ul className="space-y-2 text-sm text-[#1a1a1a]/70">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/razzi/shop?category=${c.id}`} className="hover:text-[#ff3d81]">
                  {categoryTranslations[c.id][locale].label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/razzi/shop" className="hover:text-[#ff3d81]">
                {t.footer.fullCatalog}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p
            className="mb-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {t.footer.ordering}
          </p>
          <ul className="space-y-2 text-sm text-[#1a1a1a]/70">
            {t.footer.orderingLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <p
            className="mb-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {t.footer.shipping}
          </p>
          <ul className="space-y-2 text-sm text-[#1a1a1a]/70">
            {t.footer.shippingLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <p
            className="mb-3 text-lg font-bold"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {t.footer.brand}
          </p>
          <ul className="space-y-2 text-sm text-[#1a1a1a]/70">
            {t.footer.brandLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex h-3 w-full">
        <div className="flex-1 bg-[#ff3d81]" />
        <div className="flex-1 bg-[#2dd4ff]" />
        <div className="flex-1 bg-[#ffe14d]" />
      </div>
    </footer>
  );
}
