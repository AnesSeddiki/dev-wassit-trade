import Link from "next/link";
import { categories, products, type Category } from "@/lib/products";
import OrsonProductCard from "../_components/OrsonProductCard";

export default async function OrsonShop({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-[#3b2a1a] pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#a8442e]">
            {list.length} styles in the ledger
          </p>
          <h1
            className="mt-1 text-3xl tracking-tight text-[#3b2a1a] sm:text-4xl"
            style={{ fontFamily: "var(--font-orson-display)" }}
          >
            {active ? categories.find((c) => c.id === active)?.label : "The full catalog"}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link
            href="/orson/shop"
            className={`rounded-full border-2 px-4 py-1.5 uppercase tracking-wider transition-colors ${
              !active
                ? "border-[#a8442e] bg-[#a8442e] text-[#f4e8d0]"
                : "border-[#3b2a1a]/25 text-[#3b2a1a]/65 hover:border-[#3b2a1a]"
            }`}
          >
            All departments
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/orson/shop?category=${c.id}`}
              className={`rounded-full border-2 px-4 py-1.5 uppercase tracking-wider transition-colors ${
                active === c.id
                  ? "border-[#a8442e] bg-[#a8442e] text-[#f4e8d0]"
                  : "border-[#3b2a1a]/25 text-[#3b2a1a]/65 hover:border-[#3b2a1a]"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <OrsonProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
