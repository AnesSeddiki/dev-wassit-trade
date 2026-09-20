"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import WSProductCard from "../_components/WSProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { wsText } from "../_i18n/translations";

export default function WholesaleStoresShop() {
  return (
    <Suspense fallback={null}>
      <WholesaleStoresShopContent />
    </Suspense>
  );
}

function WholesaleStoresShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = wsText(locale);
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-4 border-[#1c1c1c] pb-6">
        <div>
          <p
            className="border-2 border-[#1c1c1c] bg-[#ff5a1f] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1c1c1c]"
            style={{ fontFamily: "var(--font-ws-mono)" }}
          >
            {t.shop.skusOnFile(list.length)}
          </p>
          <h1
            className="mt-3 text-4xl font-bold uppercase tracking-tight"
            style={{ fontFamily: "var(--font-ws-display)" }}
          >
            {active ? categoryTranslations[active][locale].label : t.shop.fullInventory}
          </h1>
        </div>
        <div
          className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-ws-display)" }}
        >
          <Link
            href="/wholesale-stores/shop"
            className={`border-[3px] px-3 py-1.5 transition-colors ${
              !active
                ? "border-[#1c1c1c] bg-[#1c1c1c] text-[#e5e2da]"
                : "border-[#1c1c1c]/30 text-[#1c1c1c]/60 hover:border-[#1c1c1c]"
            }`}
          >
            {t.shop.all}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/wholesale-stores/shop?category=${c.id}`}
              className={`border-[3px] px-3 py-1.5 transition-colors ${
                active === c.id
                  ? "border-[#1c1c1c] bg-[#1c1c1c] text-[#e5e2da]"
                  : "border-[#1c1c1c]/30 text-[#1c1c1c]/60 hover:border-[#1c1c1c]"
              }`}
            >
              {categoryTranslations[c.id][locale].label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {list.map((p) => (
          <WSProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
