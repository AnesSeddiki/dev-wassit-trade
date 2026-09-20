"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import HyperProductCard from "../_components/HyperProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { hyperText } from "../_i18n/translations";

export default function HyperShop() {
  return (
    <Suspense fallback={null}>
      <HyperShopContent />
    </Suspense>
  );
}

function HyperShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = hyperText(locale).shop;
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-[#d4af37]/15 pb-7">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
            {t.stylesAvailable(list.length)}
          </p>
          <h1
            className="mt-2 text-4xl leading-none"
            style={{ fontFamily: "var(--font-hyper-display)" }}
          >
            {active ? categoryTranslations[active][locale].label : t.fullCollectionHeading}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em]">
          <Link
            href="/hyper/shop"
            className={`border px-4 py-2 transition-colors ${
              !active
                ? "border-[#d4af37] bg-[#d4af37] text-[#0a0a0a]"
                : "border-[#d4af37]/25 text-[#f5f2ea]/55 hover:border-[#d4af37]"
            }`}
          >
            {t.all}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/hyper/shop?category=${c.id}`}
              className={`border px-4 py-2 transition-colors ${
                active === c.id
                  ? "border-[#d4af37] bg-[#d4af37] text-[#0a0a0a]"
                  : "border-[#d4af37]/25 text-[#f5f2ea]/55 hover:border-[#d4af37]"
              }`}
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <HyperProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
