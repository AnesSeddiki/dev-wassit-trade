import Link from "next/link";
import { categories, products, type Category } from "@/lib/products";
import RazziProductCard from "../_components/RazziProductCard";

const PILL_COLORS = ["#ff3d81", "#2dd4ff", "#ffe14d"];

export default async function RazziShop({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = categories.find((c) => c.id === category)?.id as Category | undefined;
  const list = active ? products.filter((p) => p.category === active) : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-[#1a1a1a] pb-6">
        <div>
          <span className="inline-block rounded-full border-2 border-[#1a1a1a] bg-[#ffe14d] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide">
            {list.length} styles
          </span>
          <h1
            className="mt-2 text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {active ? categories.find((c) => c.id === active)?.label : "Full catalog"}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/razzi/shop"
            className={`rounded-full border-2 border-[#1a1a1a] px-4 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
              !active ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
            }`}
          >
            All
          </Link>
          {categories.map((c, i) => (
            <Link
              key={c.id}
              href={`/razzi/shop?category=${c.id}`}
              className="rounded-full border-2 border-[#1a1a1a] px-4 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: active === c.id ? PILL_COLORS[i % PILL_COLORS.length] : "#ffffff",
                color: "#1a1a1a",
              }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <RazziProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
