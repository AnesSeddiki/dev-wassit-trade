"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { homeText } from "../_i18n/translations";

type Status = "idle" | "submitting" | "success" | "error";

export default function CustomTemplateCard({ style }: { style?: React.CSSProperties }) {
  const { locale } = useLanguage();
  const t = homeText(locale).customTemplate;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    setStatus("idle");
    setName("");
    setEmail("");
    setCompany("");
    setDescription("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-custom-template-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, description }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={style}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-dashed border-white/20 bg-white/[0.02] text-left transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
      >
        <div className="relative flex h-36 w-full items-center justify-center overflow-hidden bg-white/[0.03]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-2xl font-light text-white/70 transition-colors group-hover:border-white/40 group-hover:text-white">
            +
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
              {t.card.title}
            </h2>
          </div>
          <p className="flex-1 text-[13px] leading-relaxed text-white/60">{t.card.tagline}</p>
          <div className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {t.card.cta}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </button>

      {open ? (
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
                  {t.modal.successTitle}
                </h2>
                <p className="max-w-sm text-sm text-white/60">{t.modal.successMessage}</p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  {t.modal.close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                      {t.modal.heading}
                    </h2>
                    <p className="mt-1 text-sm text-white/60">{t.modal.subheading}</p>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label={t.modal.close}
                    className="shrink-0 rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <label className="flex flex-col gap-1.5 text-xs text-white/60">
                  {t.modal.nameLabel}
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.modal.namePlaceholder}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-xs text-white/60">
                  {t.modal.emailLabel}
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.modal.emailPlaceholder}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-xs text-white/60">
                  {t.modal.companyLabel}
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.modal.companyPlaceholder}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-xs text-white/60">
                  {t.modal.descriptionLabel}
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t.modal.descriptionPlaceholder}
                    className="resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                  />
                </label>

                {status === "error" ? (
                  <p className="text-xs text-rose-400">{t.modal.errorMessage}</p>
                ) : null}

                <div className="mt-1 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {t.modal.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-full bg-amber-500 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-amber-400 disabled:opacity-60"
                  >
                    {status === "submitting" ? t.modal.sending : t.modal.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
