"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, productsByCategory, type Category } from "@/lib/products";
import DukakenProductCard from "../_components/DukakenProductCard";
import { CATEGORY_THEME } from "../_components/theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { dukakenText } from "../_i18n/translations";

export default function DukakenShop() {
  return (
    <Suspense fallback={null}>
      <DukakenShopContent />
    </Suspense>
  );
}

function DukakenShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = dukakenText(locale);
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;
  const activeTheme = active ? CATEGORY_THEME[active] : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b-4 border-[#111827] pb-6">
        <div>
          <p
            className="text-xs font-black uppercase tracking-[0.2em]"
            style={{ color: activeTheme?.accent ?? "#111827" }}
          >
            {t.shop.skusInView(list.length)}
          </p>
          <h1 className="mt-1 text-3xl tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            {active ? categoryTranslations[active][locale].label : t.shop.fullCatalog}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-wider">
          <Link
            href="/dukaken/shop"
            className={`border-2 px-3.5 py-2 transition-colors ${
              !active
                ? "border-[#111827] bg-[#111827] text-white"
                : "border-[#111827]/20 text-[#111827]/60 hover:border-[#111827]"
            }`}
          >
            {t.shop.allCount(products.length)}
          </Link>
          {categories.map((c) => {
            const theme = CATEGORY_THEME[c.id];
            const isActive = active === c.id;
            const count = productsByCategory(c.id).length;
            return (
              <Link
                key={c.id}
                href={`/dukaken/shop?category=${c.id}`}
                className="border-2 px-3.5 py-2 transition-colors"
                style={
                  isActive
                    ? { backgroundColor: theme.accent, borderColor: theme.accent, color: "white" }
                    : { borderColor: `${theme.accent}40`, color: theme.accent }
                }
              >
                {t.shop.categoryCount(categoryTranslations[c.id][locale].label, count)}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((p) => (
          <DukakenProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
