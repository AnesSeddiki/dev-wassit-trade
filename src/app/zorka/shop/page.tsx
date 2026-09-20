"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import ZorkaProductCard from "../_components/ZorkaProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { zorkaText } from "../_i18n/translations";

export default function ZorkaShop() {
  return (
    <Suspense fallback={null}>
      <ZorkaShopContent />
    </Suspense>
  );
}

function ZorkaShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = zorkaText(locale);
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <h1
          className="text-5xl leading-[0.95] tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-zorka-display)", fontWeight: 600 }}
        >
          {active ? categoryTranslations[active][locale].label : t.shop.fullRange}
        </h1>
        <nav className="flex gap-6 text-sm" style={{ fontFamily: "var(--font-zorka-body)" }}>
          <Link
            href="/zorka/shop"
            className={!active ? "underline underline-offset-4" : "text-black/50 hover:text-black"}
          >
            {t.shop.all}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/zorka/shop?category=${c.id}`}
              className={
                active === c.id ? "underline underline-offset-4" : "text-black/50 hover:text-black"
              }
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
        </nav>
      </div>

      <p className="mb-10 text-xs text-black/40" style={{ fontFamily: "var(--font-zorka-body)" }}>
        {list.length} {t.shop.stylesSuffix}
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ZorkaProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
