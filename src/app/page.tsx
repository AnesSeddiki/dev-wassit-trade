"use client";

import Image from "next/image";
import Link from "next/link";
import { templates } from "@/lib/templates";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { translateTemplate } from "@/lib/i18n/templateTranslations";
import { homeText } from "./_i18n/translations";
import CustomTemplateCard from "./_components/CustomTemplateCard";

export default function Home() {
  const { locale, setLocale } = useLanguage();
  const t = homeText(locale);

  return (
    <div className="grain relative flex-1 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #f59e0b 0%, #db2777 45%, transparent 70%)",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pt-10 sm:px-10">
        <Image
          src="/wassit-logo.png"
          alt="Wassit Trade"
          width={1948}
          height={442}
          className="h-8 w-auto object-contain"
          priority
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full border border-white/15 px-1 py-1">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                  locale === l.code
                    ? "bg-amber-500 text-[#0b0b0d]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
          <div className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
            {t.builtBadge}
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto mt-8 max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-4 py-3">
          <div className="flex gap-3">
            <span className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
              {t.staticNotice.label}
            </span>
            <p className="text-[13px] leading-relaxed text-white/70">{t.staticNotice.body}</p>
          </div>
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white"
            style={{
              background: "linear-gradient(120deg, #059669, #06b6d4, #059669)",
              backgroundSize: "300% 300%",
              animation: "gradient-shift 5s ease infinite, pulse-glow 2.4s ease-in-out infinite",
            }}
          >
            {t.staticNotice.paymentNote}
          </div>
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-20 sm:px-10 sm:pt-14">
        <div className="flex items-start gap-6 sm:gap-8" style={{ direction: "ltr" }}>
          <div className="hidden shrink-0 flex-col gap-6 pt-3 sm:flex">
            {t.trustBadges.map((badge, i) => (
              <div key={badge.label} className="flex flex-col items-center gap-1.5">
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl backdrop-blur-sm"
                  style={{
                    animation: "fade-pulse 3s ease-in-out infinite",
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  {badge.emoji}
                </span>
                <span
                  className="whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-white/40"
                  style={{ direction: locale === "ar" ? "rtl" : "ltr" }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
          <div className="min-w-0 flex-1" style={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber-400">
              {t.eyebrow}
            </p>
            <h1
              className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] font-light italic text-white sm:text-6xl"
            >
              {t.headline1}
              <br />
              {t.headline2}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28 sm:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t2, i) => {
            const tt = translateTemplate(t2, locale);
            return (
              <Link
                key={t2.slug}
                href={`/${t2.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1 hover:border-white/25"
                style={{
                  animation: `card-in 0.5s ease-out both`,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="relative h-36 w-full overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${t2.from}, ${t2.to})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
                  <span className="absolute right-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="absolute left-4 top-4 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm"
                    style={{ background: "rgba(0,0,0,0.25)" }}
                  >
                    {tt.direction}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                      {t2.name}
                    </h2>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-white/40">
                      {t.inspiredBy} {tt.inspiredBy}
                    </p>
                  </div>
                  <p className="flex-1 text-[13px] leading-relaxed text-white/60">
                    {tt.tagline}
                  </p>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-white/70">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: t2.accent }}
                    />
                    {t.viewTemplate}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          <CustomTemplateCard
            style={{
              animation: `card-in 0.5s ease-out both`,
              animationDelay: `${templates.length * 60}ms`,
            }}
          />
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 sm:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-white/30">
          {t.footerNote}
        </p>
      </footer>
    </div>
  );
}
