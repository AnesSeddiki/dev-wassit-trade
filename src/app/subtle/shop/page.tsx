"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import SubtleProductCard from "../_components/SubtleProductCard";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { subtleText } from "../_i18n/translations";

export default function SubtleShop() {
  return (
    <Suspense fallback={null}>
      <SubtleShopContent />
    </Suspense>
  );
}

function SubtleShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = subtleText(locale);
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 rounded-[2rem] bg-white p-6 shadow-[0_10px_30px_-20px_rgba(58,58,52,0.3)] sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9caf88]">
              {t.shop.stylesReady(list.length)}
            </p>
            <h1
              className="mt-1 text-3xl text-[#3a3a34]"
              style={{ fontFamily: "var(--font-subtle-display)", fontWeight: 600 }}
            >
              {active ? categoryTranslations[active][locale].label : t.shop.fullRange}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link
              href="/subtle/shop"
              className={`rounded-full px-4 py-2 transition-colors ${
                !active
                  ? "bg-[#3a3a34] text-white"
                  : "bg-[#f6f3ef] text-[#3a3a34]/60 hover:bg-[#9caf88]/20 hover:text-[#3a3a34]"
              }`}
            >
              {t.shop.all}
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/subtle/shop?category=${c.id}`}
                className={`rounded-full px-4 py-2 transition-colors ${
                  active === c.id
                    ? "bg-[#3a3a34] text-white"
                    : "bg-[#f6f3ef] text-[#3a3a34]/60 hover:bg-[#9caf88]/20 hover:text-[#3a3a34]"
                }`}
              >
                {categoryTranslations[c.id][locale].label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-3 max-w-lg text-xs leading-relaxed text-[#3a3a34]/55">
          {t.shop.filterNote}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <SubtleProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
