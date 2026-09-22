"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { customTemplateText } from "@/lib/i18n/customTemplateTranslations";
import { trackPixelEvent } from "@/lib/metaPixel";

type Status = "idle" | "submitting" | "success" | "error";

interface CustomTemplateModalProps {
  /** Render-prop for the trigger element; call the given function to open the modal. */
  trigger: (open: () => void) => React.ReactNode;
  /** Pre-fills the description field when the modal opens (e.g. "I want to request the Trade template..."). */
  initialDescription?: string;
}

export default function CustomTemplateModal({ trigger, initialDescription }: CustomTemplateModalProps) {
  const { locale } = useLanguage();
  const t = customTemplateText(locale);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

  function openModal() {
    setDescription(initialDescription ?? "");
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setStatus("idle");
    setName("");
    setEmail("");
    setPhone("");
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
        body: JSON.stringify({ name, email, phone, company, description }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackPixelEvent("Lead", { content_name: initialDescription ? "template_request" : "custom_template_request" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const modal = (
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                {t.modal.phoneLabel}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.modal.phonePlaceholder}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                />
              </label>
            </div>

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
  );

  return (
    <>
      {trigger(openModal)}
      {open ? createPortal(modal, document.body) : null}
    </>
  );
}
