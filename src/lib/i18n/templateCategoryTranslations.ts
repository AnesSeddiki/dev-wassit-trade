import type { Locale } from "./locales";
import type { TemplateCategory } from "../templates";

const dict: Record<Locale, { all: string; categories: Record<TemplateCategory, string>; comingSoon: string }> = {
  en: {
    all: "All",
    categories: {
      apparel: "Apparel",
      "auto-parts": "Auto parts",
      food: "Food & grocery",
      construction: "Construction materials",
      cosmetics: "Cosmetics & beauty",
      electronics: "Electronics & appliances",
      stationery: "Stationery & school supplies",
    },
    comingSoon: "Templates for this category are coming soon.",
  },
  fr: {
    all: "Tous",
    categories: {
      apparel: "Vêtements",
      "auto-parts": "Pièces auto",
      food: "Alimentation & épicerie",
      construction: "Matériaux de construction",
      cosmetics: "Cosmétiques & beauté",
      electronics: "Électronique & électroménager",
      stationery: "Papeterie & fournitures scolaires",
    },
    comingSoon: "Les modèles de cette catégorie arrivent bientôt.",
  },
  ar: {
    all: "الكل",
    categories: {
      apparel: "الملابس",
      "auto-parts": "قطع غيار السيارات",
      food: "المواد الغذائية",
      construction: "مواد البناء",
      cosmetics: "مستحضرات التجميل",
      electronics: "الإلكترونيات والأجهزة المنزلية",
      stationery: "القرطاسية واللوازم المدرسية",
    },
    comingSoon: "قوالب هذه الفئة قادمة قريبًا.",
  },
};

export function templateCategoryText(locale: Locale) {
  return dict[locale];
}

export const CATEGORY_ORDER: TemplateCategory[] = [
  "apparel",
  "auto-parts",
  "food",
  "construction",
  "cosmetics",
  "electronics",
  "stationery",
];
