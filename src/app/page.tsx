"use client";

import Image from "next/image";
import Link from "next/link";
import { templates } from "@/lib/templates";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { translateTemplate } from "@/lib/i18n/templateTranslations";
import { homeText } from "./_i18n/translations";
import CustomTemplateCard from "./_components/CustomTemplateCard";

const WHATSAPP_NUMBER = "213553418288"; // +213 553 41 82 88

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

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp.ariaLabel}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition-transform hover:scale-110"
        style={{ animation: "pulse-glow 2.4s ease-in-out infinite" }}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.17 0 4.21.84 5.74 2.37a8.07 8.07 0 0 1 2.38 5.74c0 4.48-3.64 8.12-8.12 8.12a8.1 8.1 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.48 3.65-8.11 8.15-8.11zm-4.52 4.64c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28-.25-.13-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.13-.16.25-.63.79-.77.95-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.28.38-.42.13-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47z" />
        </svg>
      </a>
    </div>
  );
}
