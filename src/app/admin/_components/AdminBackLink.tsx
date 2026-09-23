"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { slugFromDisplayName } from "@/lib/templates";
import { adminText } from "../_i18n/translations";
import { useExploringTemplate } from "../_hooks/useExploringTemplate";

const LINK_CLASS =
  "rounded-md border border-[#0b0b0b]/15 px-3 py-1.5 text-xs font-medium text-[#52514e] transition-colors hover:border-[#0b0b0b]/30 dark:border-white/15 dark:text-[#c3c2b7]";

/** Goes back to the specific template the visitor came from when known (singular
 * copy: "back to this template"), falling back to the general list otherwise. */
export default function AdminBackLink() {
  const { locale } = useLanguage();
  const t = adminText(locale).topbar;
  const templateName = useExploringTemplate();
  const slug = templateName ? slugFromDisplayName(templateName) : undefined;

  return (
    <Link href={slug ? `/${slug}` : "/#templates"} className={LINK_CLASS}>
      {slug ? t.backToTemplate : t.backToTemplates}
    </Link>
  );
}

export { LINK_CLASS as adminBackLinkClass };
