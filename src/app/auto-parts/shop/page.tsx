"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { autoPartCategories, autoParts, type AutoPartCategory } from "@/lib/autoParts";
import ProductCard from "../_components/ProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { autoPartCategoryTranslations } from "@/lib/i18n/autoPartTranslations";
import { autoPartsText } from "../_i18n/translations";

export default function AutoPartsShop() {
  return (
    <Suspense fallback={null}>
      <AutoPartsShopContent />
    </Suspense>
  );
}

function AutoPartsShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = autoPartsText(locale);
  const active = autoPartCategories.find((c) => c.id === category)?.id as AutoPartCategory | undefined;
  const list = active ? autoParts.filter((p) => p.category === active) : autoParts;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#ff7a1a]"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {list.length} {t.shop.skuSuffix}
          </p>
          <h1
            className="mt-1 text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-auto-display)" }}
          >
            {active ? autoPartCategoryTranslations[active][locale].label : t.shop.fullCatalog}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 text-xs" style={{ fontFamily: "var(--font-auto-display)" }}>
          <Link
            href="/auto-parts/shop"
            className={`border px-3 py-1.5 uppercase tracking-wider transition-colors ${
              !active
                ? "border-[#ff7a1a] bg-[#ff7a1a] text-[#16181c]"
                : "border-white/15 text-white/60 hover:border-white/40"
            }`}
          >
            {t.shop.all}
          </Link>
          {autoPartCategories.map((c) => (
            <Link
              key={c.id}
              href={`/auto-parts/shop?category=${c.id}`}
              className={`border px-3 py-1.5 uppercase tracking-wider transition-colors ${
                active === c.id
                  ? "border-[#ff7a1a] bg-[#ff7a1a] text-[#16181c]"
                  : "border-white/15 text-white/60 hover:border-white/40"
              }`}
            >
              {autoPartCategoryTranslations[c.id][locale].label}
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
