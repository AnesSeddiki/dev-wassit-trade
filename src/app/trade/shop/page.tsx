"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import ProductCard from "../_components/ProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { tradeText } from "../_i18n/translations";

export default function TradeShop() {
  return (
    <Suspense fallback={null}>
      <TradeShopContent />
    </Suspense>
  );
}

function TradeShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = tradeText(locale);
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#0f172a]/12 pb-6">
        <div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-amber-600"
            style={{ fontFamily: "var(--font-trade-mono)" }}
          >
            {list.length} {t.shop.skuSuffix}
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            {active ? categoryTranslations[active][locale].label : t.shop.fullCatalog}
          </h1>
        </div>
        <div
          className="flex flex-wrap gap-2 text-xs"
          style={{ fontFamily: "var(--font-trade-mono)" }}
        >
          <Link
            href="/trade/shop"
            className={`border px-3 py-1.5 uppercase tracking-wider transition-colors ${
              !active
                ? "border-[#0f172a] bg-[#0f172a] text-white"
                : "border-[#0f172a]/20 text-[#0f172a]/60 hover:border-[#0f172a]"
            }`}
          >
            {t.shop.all}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/trade/shop?category=${c.id}`}
              className={`border px-3 py-1.5 uppercase tracking-wider transition-colors ${
                active === c.id
                  ? "border-[#0f172a] bg-[#0f172a] text-white"
                  : "border-[#0f172a]/20 text-[#0f172a]/60 hover:border-[#0f172a]"
              }`}
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
