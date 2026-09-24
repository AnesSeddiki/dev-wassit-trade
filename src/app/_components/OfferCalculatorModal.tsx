"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { offerCalculatorText, type OfferStepText } from "@/lib/i18n/offerCalculatorTranslations";
import {
  calculateOffer,
  formatDA,
  getNextStep,
  type OfferAnswers,
  type OfferStepId,
} from "@/lib/offerCalculator";
import { trackPixelEvent } from "@/lib/metaPixel";
import LandingExamplePreview from "./LandingExamplePreview";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function OfferCalculatorModal() {
  const { locale } = useLanguage();
  const t = offerCalculatorText(locale);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<OfferStepId>("type");
  const [answers, setAnswers] = useState<OfferAnswers>({});
  const [history, setHistory] = useState<OfferStepId[]>([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (showExample) setShowExample(false);
      else close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, showExample]);

  function openModal() {
    setStep("type");
    setAnswers({});
    setHistory([]);
    setPhone("");
    setEmail("");
    setBusinessName("");
    setStatus("idle");
    setShowExample(false);
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  function selectOption(stepId: Exclude<OfferStepId, "results">, value: string) {
    const nextAnswers = { ...answers, [stepId]: value } as OfferAnswers;
    setAnswers(nextAnswers);
    setHistory((h) => [...h, stepId]);
    setStep(getNextStep(stepId, nextAnswers));
  }

  function goBack() {
    setHistory((h) => {
      if (h.length === 0) return h;
      const next = h.slice(0, -1);
      setStep(h[h.length - 1]);
      return next;
    });
  }

  function restart() {
    setStep("type");
    setAnswers({});
    setHistory([]);
    setPhone("");
    setEmail("");
    setBusinessName("");
    setStatus("idle");
  }

  const stepText: OfferStepText | null = step === "results" ? null : t.steps[step];
  const result = step === "results" ? calculateOffer(answers) : null;

  const tierInfo = result
    ? result.tier === 1
      ? t.results.tier1
      : result.tier === 2
        ? t.results.tier2
        : t.results.tier3
    : null;

  const summaryMessage =
    result && tierInfo ? t.results.summaryMessage(tierInfo.name, formatDA(result.total)) : "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-custom-template-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: businessName, email, phone, description: summaryMessage }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackPixelEvent("Lead", { content_name: "Offer Calculator", content_category: "offer_calculator" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const modal = (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={close}
      >
        <div
          className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#131316] p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-2xl text-emerald-400">
              ✓
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
              {t.results.successTitle}
            </h2>
            <p className="max-w-sm text-sm text-white/60">{t.results.successMessage}</p>
            <button
              type="button"
              onClick={close}
              className="mt-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              {t.results.close}
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                  {step === "results" ? t.results.title : t.modalTitle}
                </h2>
                {step !== "results" ? <p className="mt-1 text-sm text-white/60">{t.modalSubtitle}</p> : null}
              </div>
              <button
                type="button"
                onClick={close}
                aria-label={t.nav.close}
                className="shrink-0 rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                ✕
              </button>
            </div>

            {stepText ? (
              <div className="mt-6 flex flex-col gap-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-amber-400">
                  {t.stepLabel(history.length + 1)}
                </p>
                <p className="text-[15px] leading-relaxed text-white/85">{stepText.question}</p>
                <div className="flex flex-col gap-2.5">
                  {Object.entries(stepText.options).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => selectOption(step as Exclude<OfferStepId, "results">, value)}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-start text-sm text-white/85 transition-colors hover:border-amber-400/50 hover:bg-amber-400/[0.06]"
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {history.length > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-1 self-start rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    ← {t.nav.back}
                  </button>
                ) : null}
              </div>
            ) : result && tierInfo ? (
              <div className="mt-6 flex flex-col gap-5">
                <div className="rounded-xl border border-amber-400/25 bg-amber-400/[0.05] p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-xl italic text-white">
                    {tierInfo.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/65">{tierInfo.description}</p>
                </div>

                <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                  <div className="flex items-center justify-between text-white/70">
                    <span>{t.results.baseLabel}</span>
                    <span className="font-mono">
                      {formatDA(result.basePrice)} {t.results.daSuffix}
                    </span>
                  </div>
                  {result.domainFee ? (
                    <div className="flex items-center justify-between text-white/70">
                      <span>{t.results.domainAddOnLabel}</span>
                      <span className="font-mono">
                        +{formatDA(result.domainFee)} {t.results.daSuffix}
                      </span>
                    </div>
                  ) : result.tier !== 3 ? (
                    <div className="flex items-center justify-between text-white/50">
                      <span>{t.results.freeSubdomainNote}</span>
                    </div>
                  ) : null}
                  <div className="mt-1 flex items-center justify-between border-t border-white/10 pt-2 text-base font-semibold text-white">
                    <span>{t.results.totalLabel}</span>
                    <span className="font-mono text-amber-400">
                      {formatDA(result.total)} {t.results.daSuffix}
                    </span>
                  </div>
                  {result.tier === 3 ? <p className="text-[12px] text-white/45">{t.results.customQuoteNote}</p> : null}
                </div>

                {result.tier === 1 ? (
                  <button
                    type="button"
                    onClick={() => setShowExample(true)}
                    className="rounded-full border border-white/15 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wider text-white/80 transition-colors hover:border-amber-400/50 hover:text-amber-400"
                  >
                    {t.results.exampleButton}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      close();
                      document.getElementById("templates")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="rounded-full border border-white/15 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-wider text-white/80 transition-colors hover:border-amber-400/50 hover:text-amber-400"
                  >
                    {t.results.exampleButton}
                  </button>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-t border-white/10 pt-4">
                  <p className="text-sm text-white/70">{t.results.formIntro}</p>

                  <label className="flex flex-col gap-1.5 text-xs text-white/60">
                    {t.results.businessNameLabel}
                    <input
                      required
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder={t.results.businessNamePlaceholder}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                    />
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-xs text-white/60">
                      {t.results.phoneLabel}
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.results.phonePlaceholder}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5 text-xs text-white/60">
                      {t.results.emailLabel}
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.results.emailPlaceholder}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                      />
                    </label>
                  </div>

                  {status === "error" ? <p className="text-xs text-rose-400">{t.results.errorMessage}</p> : null}

                  <div className="mt-1 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
                    >
                      ← {t.nav.back}
                    </button>
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={restart}
                        className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
                      >
                        {t.results.restartButton}
                      </button>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="rounded-full bg-amber-500 px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-amber-400 disabled:opacity-60"
                      >
                        {status === "submitting" ? t.results.sending : t.results.ctaButton}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </>
        )}
        </div>
      </div>

      {showExample ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowExample(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 shadow-2xl sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowExample(false)}
              aria-label={t.results.close}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-sm text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            >
              ✕
            </button>
            <LandingExamplePreview hideBackLink />
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-mono text-[12px] font-bold uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-amber-400"
      >
        <span aria-hidden>💵</span>
        {t.triggerButton}
        <span aria-hidden>💡</span>
      </button>
      {open ? createPortal(modal, document.body) : null}
    </>
  );
}
