"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import B2BProductCard from "../_components/B2BProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { b2bText } from "../_i18n/translations";

export default function B2BStoreShop() {
  return (
    <Suspense fallback={null}>
      <B2BStoreShopContent />
    </Suspense>
  );
}

function B2BStoreShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = b2bText(locale);
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#142433]/12 pb-6">
        <div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#134074]"
            style={{ fontFamily: "var(--font-b2b-mono)" }}
          >
            {t.shop.stylesAvailable(list.length)}
          </p>
          <h1
            className="mt-1 text-3xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            {active ? categoryTranslations[active][locale].label : t.shop.fullCatalog}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 text-xs" style={{ fontFamily: "var(--font-b2b-mono)" }}>
          <Link
            href="/b2bstore/shop"
            className={`border px-3 py-1.5 uppercase tracking-wider transition-colors ${
              !active
                ? "border-[#0b2545] bg-[#0b2545] text-white"
                : "border-[#142433]/20 text-[#142433]/60 hover:border-[#0b2545]"
            }`}
          >
            {t.shop.all}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/b2bstore/shop?category=${c.id}`}
              className={`border px-3 py-1.5 uppercase tracking-wider transition-colors ${
                active === c.id
                  ? "border-[#0b2545] bg-[#0b2545] text-white"
                  : "border-[#142433]/20 text-[#142433]/60 hover:border-[#0b2545]"
              }`}
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <B2BProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
