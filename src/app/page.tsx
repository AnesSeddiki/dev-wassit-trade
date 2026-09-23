"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { templates, type TemplateCategory } from "@/lib/templates";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LOCALES } from "@/lib/i18n/locales";
import { translateTemplate } from "@/lib/i18n/templateTranslations";
import { templateCategoryText, CATEGORY_ORDER } from "@/lib/i18n/templateCategoryTranslations";
import { homeText } from "./_i18n/translations";
import CustomTemplateCard from "./_components/CustomTemplateCard";
import CustomTemplateModal from "@/components/shared/CustomTemplateModal";
import { customTemplateText } from "@/lib/i18n/customTemplateTranslations";

const WHATSAPP_NUMBER = "213553418288"; // +213 553 41 82 88

export default function Home() {
  const { locale, setLocale } = useLanguage();
  const t = homeText(locale);
  const ct = customTemplateText(locale);
  const ctg = templateCategoryText(locale);
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | "all">("all");
  const filteredTemplates =
    selectedCategory === "all" ? templates : templates.filter((t2) => t2.category === selectedCategory);
  const [showWaText, setShowWaText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWaText(true), 1200);
    return () => clearTimeout(timer);
  }, []);

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

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-20 sm:px-10 sm:pt-14">
        <p className="font-mono text-2xl uppercase tracking-[0.35em] text-amber-400">
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
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-b from-amber-400/[0.06] to-transparent p-5 sm:p-7">
          <h3 className="font-mono text-2xl uppercase tracking-[0.3em] text-amber-400">
            {t.results.whyTitle}
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {t.results.whyPoints.map((item, i) => (
              <details
                key={item.header}
                className="why-accordion group rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 transition-colors open:border-pink-400/30 open:bg-white/[0.04]"
                style={{ animation: "card-in 0.5s ease-out both", animationDelay: `${i * 80}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-center gap-2.5 text-[13px] font-medium leading-snug text-white/80">
                  <span aria-hidden className="shrink-0 text-base">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.header}</span>
                  <span aria-hidden className="why-chevron shrink-0 text-white/35 transition-transform duration-200">
                    ▾
                  </span>
                </summary>
                <p className="mt-2 pl-[26px] text-[12.5px] leading-relaxed text-white/55">{item.description}</p>
              </details>
            ))}
          </div>

          <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl italic text-white">
            {t.results.title}
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.results.checklist.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] leading-snug text-white/75"
                style={{ animation: "card-in 0.5s ease-out both", animationDelay: `${i * 80}ms` }}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-400">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        <h2 className="font-mono text-2xl uppercase tracking-[0.35em] text-amber-400">
          {t.highlightsTitle}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.heroHighlights.map((highlight, i) => (
            <div
              key={highlight.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              style={{
                animation: "card-in 0.5s ease-out both",
                animationDelay: `${i * 100}ms`,
              }}
            >
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-lg"
                style={{
                  animation: "fade-pulse 3s ease-in-out infinite",
                  animationDelay: `${i * 0.6}s`,
                }}
              >
                {highlight.emoji}
              </span>
              <span className="text-[13px] font-medium leading-snug text-white/80">
                {highlight.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-amber-400/15 bg-amber-400/[0.03] px-4 py-3">
          <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold text-amber-400/90">
            {t.paymentWarning.label}
          </span>
          <p className="text-[12.5px] leading-relaxed text-white/50">{t.paymentWarning.body}</p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
          <div className="relative h-[220px] w-[165px] shrink-0 self-center overflow-hidden rounded-xl border border-white/10 bg-[#e8dcc4] sm:self-auto">
            <Image
              src="/professional-personal-image.png"
              alt={t.about.name}
              width={165}
              height={220}
              className="h-full w-full object-cover object-top"
              style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.3))" }}
            />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-2xl uppercase tracking-[0.3em] text-amber-400">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl italic text-white">
              {t.about.name}
            </h2>
            <p className="mt-1 text-sm text-white/70">{t.about.role}</p>
            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/55">{t.about.note}</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-white/60">
              <a href={`tel:${t.about.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-amber-400">
                📞 {t.about.phone}
              </a>
              <a href={`mailto:${t.about.email}`} className="transition-colors hover:text-amber-400">
                ✉️ {t.about.email}
              </a>
              <span>📍 {t.about.location}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/35">
                {t.about.stackLabel}:
              </span>
              {t.about.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/35">
                {t.about.deployLabel}:
              </span>
              {t.about.deploy.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        <h2 className="font-mono text-2xl uppercase tracking-[0.35em] text-amber-400">
          {t.howItWorks.title}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-400/40 font-mono text-xs text-amber-400">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28 sm:px-10">
        <p className="mb-4 font-mono text-2xl uppercase tracking-[0.35em] text-amber-400">
          {t.templatesEyebrow}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
              selectedCategory === "all"
                ? "border-amber-400 bg-amber-400 text-[#0b0b0d]"
                : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
            }`}
          >
            {ctg.all}
          </button>
          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                selectedCategory === cat
                  ? "border-amber-400 bg-amber-400 text-[#0b0b0d]"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {ctg.categories[cat]}
            </button>
          ))}
        </div>

        {filteredTemplates.length === 0 ? (
          <p className="mb-6 text-sm text-white/50">{ctg.comingSoon}</p>
        ) : null}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((t2, i) => {
            const tt = translateTemplate(t2, locale);
            return (
              <div
                key={t2.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1 hover:border-white/25"
                style={{
                  animation: `card-in 0.5s ease-out both`,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <Link href={`/${t2.slug}`} className="flex flex-1 flex-col">
                  <div
                    className="relative h-36 w-full overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${t2.from}, ${t2.to})`,
                    }}
                  >
                    <Image
                      src={`/templates-screenshots/${t2.slug}.jpg`}
                      alt={t2.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
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

                <div className="border-t border-white/10 p-3 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
                  <CustomTemplateModal
                    templateName={t2.name}
                    initialDescription={ct.requestMessage(t2.name)}
                    trigger={(open) => (
                      <button
                        type="button"
                        onClick={open}
                        className="w-full rounded-full bg-amber-500 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-amber-400"
                      >
                        {ct.requestButton}
                      </button>
                    )}
                  />
                </div>
              </div>
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 sm:px-10">
        <div className="flex flex-col gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-4 py-3">
          <div className="flex gap-3">
            <span className="mt-0.5 font-mono text-2xl font-semibold uppercase tracking-wider text-amber-400">
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

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 sm:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-white/30">
          {t.footerNote}
        </p>
      </footer>

      <div dir="ltr" className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5">
        <span
          className="whitespace-nowrap rounded-full bg-[#1a1a1d] px-3.5 py-2 text-[12.5px] font-medium text-white/85 shadow-lg shadow-black/40 transition-all duration-500"
          style={{
            opacity: showWaText ? 1 : 0,
            transform: showWaText ? "translateX(0)" : "translateX(8px)",
            pointerEvents: showWaText ? "auto" : "none",
          }}
        >
          {t.whatsapp.inquiryText}
        </span>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.whatsapp.ariaLabel}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition-transform hover:scale-110"
          style={{ animation: "pulse-glow 2.4s ease-in-out infinite" }}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.17 0 4.21.84 5.74 2.37a8.07 8.07 0 0 1 2.38 5.74c0 4.48-3.64 8.12-8.12 8.12a8.1 8.1 0 0 1-4.14-1.13l-.3-.17-3.11.82.83-3.03-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.48 3.65-8.11 8.15-8.11zm-4.52 4.64c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28-.25-.13-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.13-.16.25-.63.79-.77.95-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.28.38-.42.13-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
