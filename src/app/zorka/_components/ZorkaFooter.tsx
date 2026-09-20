"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { zorkaText } from "../_i18n/translations";

export default function ZorkaFooter() {
  const { locale } = useLanguage();
  const t = zorkaText(locale);

  return (
    <footer className="w-full border-t border-black/10">
      <div
        className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-10 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between sm:px-10"
        style={{ fontFamily: "var(--font-zorka-body)" }}
      >
        <p>{t.footer.line}</p>
        <Link href="/zorka/shop" className="transition-colors hover:text-black">
          {t.footer.link}
        </Link>
      </div>
    </footer>
  );
}
