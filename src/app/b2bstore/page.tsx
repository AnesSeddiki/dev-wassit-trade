import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/lib/products";
import B2BProductCard from "./_components/B2BProductCard";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Account approval",
    copy: "Submit your business license and resale certificate. Most accounts are reviewed within one business day.",
  },
  {
    step: "02",
    title: "Quote & tiered pricing",
    copy: "Request a quote on any style. Pricing steps down automatically at 12, 50 and 144 units.",
  },
  {
    step: "03",
    title: "Net terms invoicing",
    copy: "Approved accounts order on Net 30 or Net 60. Standing POs and ACH are both supported.",
  },
  {
    step: "04",
    title: "Reorder & account history",
    copy: "Every order is saved to your account. Reordering a prior quote takes one click, not a new form.",
  },
];

const ACCOUNT_TIERS = [
  { name: "Standard", detail: "Net 30 · $500 minimum" },
  { name: "Preferred", detail: "Net 30 · volume pricing" },
  { name: "Enterprise", detail: "Net 60 · dedicated manager" },
];

export default function B2BStoreHome() {
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#142433]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em] text-[#134074]"
              style={{ fontFamily: "var(--font-b2b-mono)" }}
            >
              Wholesale apparel supplier · Established accounts only
            </p>
            <h1
              className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight text-[#0b2545] sm:text-5xl"
              style={{ fontFamily: "var(--font-b2b-display)" }}
            >
              A dependable supply
              <br />
              partner for growing
              <br />
              retail accounts.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#142433]/70">
              Transparent tiered pricing, Net 30/60 terms on approved credit, and a
              catalog built for buyers who reorder — not browse. Request a quote and
              a member of our accounts team will confirm pricing within one business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/b2bstore/shop"
                className="bg-[#0b2545] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#134074]"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                Browse catalog
              </Link>
              <Link
                href="/b2bstore/shop"
                className="border border-[#0b2545]/25 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b2545] transition-colors hover:border-[#0b2545]"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                Request a quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#142433]/10 pt-6">
              {ACCOUNT_TIERS.map((t) => (
                <div key={t.name}>
                  <p
                    className="text-sm font-semibold text-[#0b2545]"
                    style={{ fontFamily: "var(--font-b2b-display)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#142433]/55" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote request preview card */}
          <div className="border border-[#142433]/12 bg-[#f7f9fb]">
            <div className="flex items-center justify-between bg-[#0b2545] px-5 py-3 text-white">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                Quote request
              </span>
              <span className="text-[11px] text-[#8da9c4]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                REF #QR-40218
              </span>
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#142433]/55">Status</span>
                <span className="rounded-sm bg-[#8da9c4]/25 px-2 py-0.5 text-xs font-medium text-[#134074]">
                  Pending review
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#142433]/55">Account tier</span>
                <span className="font-medium text-[#142433]">Preferred</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#142433]/55">Payment terms</span>
                <span className="font-medium text-[#142433]">Net 30</span>
              </div>
              <div className="border-t border-dashed border-[#142433]/15 pt-4">
                <p
                  className="mb-2 text-[11px] uppercase tracking-wider text-[#142433]/45"
                  style={{ fontFamily: "var(--font-b2b-mono)" }}
                >
                  Line items
                </p>
                <div className="space-y-1.5 text-xs" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  <div className="flex justify-between">
                    <span className="text-[#142433]/70">MN-TEE-001 &times; 144</span>
                    <span className="text-[#142433]">$7.20/u</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#142433]/70">WM-DRS-041 &times; 50</span>
                    <span className="text-[#142433]">$18.72/u</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#142433]/70">KD-TEE-011 &times; 36</span>
                    <span className="text-[#142433]">$12.75/u</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#142433]/15 pt-4">
                <span
                  className="text-xs uppercase tracking-wider text-[#142433]/55"
                  style={{ fontFamily: "var(--font-b2b-mono)" }}
                >
                  Est. total
                </span>
                <span className="text-lg font-semibold text-[#0b2545]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  $2,545.20
                </span>
              </div>
              <Link
                href="/b2bstore/shop"
                className="block bg-[#0b2545] py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#134074]"
                style={{ fontFamily: "var(--font-b2b-mono)" }}
              >
                Start your own quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2
            className="text-2xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            Shop by category
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {categories.map((c) => {
            const cover = products.find((p) => p.category === c.id)?.image;
            return (
              <Link
                key={c.id}
                href={`/b2bstore/shop?category=${c.id}`}
                className="group relative flex h-44 flex-col justify-end overflow-hidden border border-[#142433]/12 p-5"
              >
                {cover ? (
                  <Image
                    src={cover}
                    alt={c.label}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0b2545]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-[#0b2545]/15 to-transparent" />
                <span
                  className="relative text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-b2b-display)" }}
                >
                  {c.label}
                </span>
                <span className="relative text-[11px] text-white/80" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  {c.description}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between border-b border-[#142433]/10 pb-4">
          <h2
            className="text-2xl font-semibold tracking-tight text-[#0b2545]"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            Featured this season
          </h2>
          <Link
            href="/b2bstore/shop"
            className="text-xs font-medium text-[#134074] underline decoration-[#8da9c4] underline-offset-4 hover:text-[#0b2545]"
          >
            View full catalog →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <B2BProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Trust / process */}
      <section className="bg-[#0b2545]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8da9c4]" style={{ fontFamily: "var(--font-b2b-mono)" }}>
            How ordering works
          </p>
          <h2
            className="mt-2 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-b2b-display)" }}
          >
            Built around how B2B buyers actually purchase.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="relative border-t-2 border-[#8da9c4]/40 pt-5">
                <span className="text-3xl font-semibold text-[#8da9c4]/50" style={{ fontFamily: "var(--font-b2b-mono)" }}>
                  {s.step}
                </span>
                <p className="mt-3 text-sm font-semibold text-white" style={{ fontFamily: "var(--font-b2b-display)" }}>
                  {s.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}