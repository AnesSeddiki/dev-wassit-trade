import type { Locale } from "./locales";

const dict = {
  en: "Admin dashboard",
  fr: "Tableau de bord admin",
  ar: "لوحة تحكم الإدارة",
} satisfies Record<Locale, string>;

export function adminDashboardLabel(locale: Locale): string {
  return dict[locale];
}

const backToTemplatesDict = {
  en: "Back to templates",
  fr: "Retour aux modèles",
  ar: "العودة إلى النماذج",
} satisfies Record<Locale, string>;

export function backToTemplatesLabel(locale: Locale): string {
  return backToTemplatesDict[locale];
}
