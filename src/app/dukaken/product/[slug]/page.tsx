import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, formatUSD, products } from "@/lib/products";
import GarmentPlaceholder from "@/components/shared/GarmentPlaceholder";
import DukakenQuickOrder from "../../_components/DukakenQuickOrder";
import DukakenProductCard from "../../_components/DukakenProductCard";
import { CATEGORY_THEME } from "../../_components/theme";

export default async function DukakenProduct({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const theme = CATEGORY_THEME[product.category];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
      <p className="mb-6 text-xs font-bold uppercase tracking-wider text-[#111827]/45">
        <Link href="/dukaken" className="hover:text-[#111827]">
          Dukaken
        </Link>
        {" / "}
        <Link
          href={`/dukaken/shop?category=${product.category}`}
          className="capitalize hover:text-[#111827]"
          style={{ color: theme.accent }}
        >
          {product.category}
        </Link>
        {" / "}
        {product.sku}
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div
          className="aspect-square border-4 border-[#111827]"
          style={{ boxShadow: `6px 6px 0 ${theme.accent}` }}
        >
          <GarmentPlaceholder
            category={product.category}
            seed={product.id}
            image={product.image}
            colorFrom={theme.from}
            colorTo={theme.to}
            label={product.sku}
            className="h-full w-full"
          />
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span
              className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white"
              style={{ backgroundColor: theme.accent, fontFamily: "var(--font-dukaken-display)" }}
            >
              {product.category}
            </span>
            {product.tag ? (
              <span
                className="bg-[#111827] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-dukaken-display)" }}
              >
                {product.tag}
              </span>
            ) : null}
          </div>
          <h1 className="text-3xl tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            {product.name}
          </h1>
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#111827]/45">
            {product.sku} · MOQ {product.moq} units
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#111827]/70">{product.description}</p>

          <div className="mt-6 overflow-hidden border-2 border-[#111827]">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: theme.accent }}>
                  <th className="p-2 text-left text-xs font-black uppercase tracking-wider text-white">Qty</th>
                  <th className="p-2 text-right text-xs font-black uppercase tracking-wider text-white">
                    Price / unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.tierPricing.map((t, i) => (
                  <tr key={t.minQty} style={{ backgroundColor: i % 2 ? theme.tint : "white" }}>
                    <td className="p-2 font-semibold text-[#111827]/70">{t.minQty}+</td>
                    <td className="p-2 text-right font-black text-[#111827]">{formatUSD(t.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#111827]/60">
            <span>Sizes: {product.sizes.join(", ")}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-[#111827]/60">
            <span>Colors: {product.colors.join(", ")}</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <DukakenQuickOrder product={product} />
      </div>

      {related.length ? (
        <div className="mt-16">
          <h2 className="mb-5 text-2xl tracking-tight" style={{ fontFamily: "var(--font-dukaken-display)" }}>
            More in <span style={{ color: theme.accent }}>{product.category}</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <DukakenProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
