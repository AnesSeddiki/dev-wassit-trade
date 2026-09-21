import type { Locale } from "./locales";

const dict = {
  en: "Admin dashboard",
  fr: "Tableau de bord admin",
  ar: "لوحة تحكم الإدارة",
} satisfies Record<Locale, string>;

export function adminDashboardLabel(locale: Locale): string {
  return dict[locale];
}
