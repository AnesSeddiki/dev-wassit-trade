import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, formatUSD, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import RazziQuickOrder from "../../_components/RazziQuickOrder";
import RazziProductCard from "../../_components/RazziProductCard";
import { ColorDot } from "../../_components/swatch";

const TONES: Record<string, [string, string]> = {
  men: ["#2dd4ff", "#1a1a1a"],
  women: ["#ff3d81", "#1a1a1a"],
  kids: ["#ffe14d", "#ff3d81"],
};

const TAG_STYLES: Record<string, string> = {
  New: "bg-[#2dd4ff] text-[#1a1a1a]",
  Bestseller: "bg-[#ff3d81] text-white",
  "Low stock": "bg-[#1a1a1a] text-[#ffe14d]",
  Restocked: "bg-[#ffe14d] text-[#1a1a1a]",
};

const TIER_ROW_COLORS = ["#ffe14d", "#2dd4ff", "#ff3d81", "#1a1a1a"];

export default async function RazziProduct({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const [from, to] = TONES[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-[#1a1a1a]/50">
        <Link href="/razzi" className="hover:text-[#ff3d81]">
          Razzi
        </Link>
        {" / "}
        <Link href={`/razzi/shop?category=${product.category}`} className="capitalize hover:text-[#ff3d81]">
          {product.category}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] shadow-[6px_6px_0_0_#1a1a1a]">
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={from}
            colorTo={to}
            label={product.sku}
            className="h-full w-full"
          />
        </div>

        <div>
          {product.tag ? (
            <span
              className={`mb-3 inline-block rounded-full border-2 border-[#1a1a1a] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${TAG_STYLES[product.tag]}`}
            >
              {product.tag}
            </span>
          ) : null}
          <h1
            className="text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            {product.name}
          </h1>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#1a1a1a]/50">
            {product.sku} · MOQ {product.moq} units
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1a1a1a]/70">
            {product.description}
          </p>

          <div className="mt-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#1a1a1a]/50">
              Colorways
            </p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 rounded-full border-2 border-[#1a1a1a] bg-white px-2.5 py-1 text-xs font-semibold"
                >
                  <ColorDot name={c} size={14} />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#1a1a1a]/50">
              Sizes
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <span
                  key={s}
                  className="rounded-md border-2 border-[#1a1a1a] px-2 py-1 text-xs font-bold"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] shadow-[4px_4px_0_0_#1a1a1a]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="p-2.5 text-left text-xs font-bold uppercase tracking-wide">Qty</th>
                  <th className="p-2.5 text-right text-xs font-bold uppercase tracking-wide">
                    Price / unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((t, i) => (
                  <tr key={t.minQty} className="border-t-2 border-[#1a1a1a]/10">
                    <td className="p-2.5 font-semibold text-[#1a1a1a]">
                      <span
                        className="mr-2 inline-block h-2.5 w-2.5 rounded-full border border-[#1a1a1a]/30"
                        style={{ backgroundColor: TIER_ROW_COLORS[i % TIER_ROW_COLORS.length] }}
                      />
                      {t.minQty}+
                    </td>
                    <td className="p-2.5 text-right font-extrabold text-[#1a1a1a]">
                      {formatUSD(t.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <RazziQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <h2
            className="mb-5 text-2xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-razzi-display)" }}
          >
            More in {product.category}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((p) => (
              <RazziProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
