"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products, type Category } from "@/lib/products";
import ModivaProductCard from "../_components/ModivaProductCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categoryTranslations } from "@/lib/i18n/productTranslations";
import { modivaText } from "../_i18n/translations";

export default function ModivaShop() {
  return (
    <Suspense fallback={null}>
      <ModivaShopContent />
    </Suspense>
  );
}

function ModivaShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const { locale } = useLanguage();
  const t = modivaText(locale).shop;
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;
  const activeMeta = active ? categoryTranslations[active][locale] : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
      <div className="mb-10 border-b border-[#2b2420]/12 pb-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#c1602f]">
          {t.stylesOnFile(list.length)}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1
              className="text-5xl italic text-[#2b2420]"
              style={{ fontFamily: "var(--font-modiva-display)" }}
            >
              {activeMeta ? activeMeta.label : t.fullCollection}
            </h1>
            {activeMeta ? (
              <p className="mt-2 max-w-md text-sm text-[#2b2420]/60">{activeMeta.description}</p>
            ) : (
              <p className="mt-2 max-w-md text-sm text-[#2b2420]/60">
                {t.defaultDescription}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em]">
            <Link
              href="/modiva/shop"
              className={`border px-4 py-2 transition-colors ${
                !active
                  ? "border-[#2b2420] bg-[#2b2420] text-[#f7f1e8]"
                  : "border-[#2b2420]/25 text-[#2b2420]/60 hover:border-[#c1602f] hover:text-[#c1602f]"
              }`}
            >
              {t.allFilter}
            </Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/modiva/shop?category=${c.id}`}
                className={`border px-4 py-2 transition-colors ${
                  active === c.id
                    ? "border-[#2b2420] bg-[#2b2420] text-[#f7f1e8]"
                    : "border-[#2b2420]/25 text-[#2b2420]/60 hover:border-[#c1602f] hover:text-[#c1602f]"
                }`}
              >
                {categoryTranslations[c.id][locale].label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p, i) => (
          <ModivaProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
