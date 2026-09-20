import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    nav: {
      wordmark: "Zorka",
    },
    footer: {
      line: "Zorka — wholesale apparel. Minimum order quantities apply.",
      link: "Shop the full range →",
    },
    home: {
      eyebrow: "Wholesale apparel — men, women, kids",
      headline1: "Less catalog.",
      headline2: "More order.",
      viewFullRange: "View full range",
      valuePre: "Tiered pricing starts at",
      valueHighlight: "12 units",
      valuePost: "— order more, pay less, no negotiation required.",
      featured: "Featured",
      allProducts: "All products",
    },
    shop: {
      fullRange: "Full range",
      all: "All",
      stylesSuffix: "styles",
    },
    breadcrumbHome: "Zorka",
    moqUnits: (moq: number) => `MOQ ${moq} units`,
    tierUnitsSuffix: "units",
    sizesLabel: "Sizes",
    colorsLabel: "Colours",
    moreIn: "More in",
    productCard: { moqPrefix: "MOQ", from: "from" },
    quickOrder: {
      heading: "Quantity by size / colour",
      unitsWord: "units",
      perUnit: "/ unit",
      addMoreFor: (remaining: number, price: string) => `— ${remaining} more for ${price} / unit`,
      moqRemaining: (remaining: number) => `${remaining} more units to meet MOQ`,
      addCta: (units: number, total: string) => `Add ${units} units — ${total}`,
    },
  },
  fr: {
    nav: {
      wordmark: "Zorka",
    },
    footer: {
      line: "Zorka — vêtements de gros. Quantités minimales de commande applicables.",
      link: "Voir toute la gamme →",
    },
    home: {
      eyebrow: "Vêtements de gros — hommes, femmes, enfants",
      headline1: "Moins de catalogue.",
      headline2: "Plus de commandes.",
      viewFullRange: "Voir toute la gamme",
      valuePre: "La tarification dégressive démarre à",
      valueHighlight: "12 unités",
      valuePost: "— commandez plus, payez moins, sans négociation.",
      featured: "Sélection",
      allProducts: "Tous les produits",
    },
    shop: {
      fullRange: "Gamme complète",
      all: "Tout",
      stylesSuffix: "modèles",
    },
    breadcrumbHome: "Zorka",
    moqUnits: (moq: number) => `MOQ ${moq} unités`,
    tierUnitsSuffix: "unités",
    sizesLabel: "Tailles",
    colorsLabel: "Couleurs",
    moreIn: "Plus dans",
    productCard: { moqPrefix: "MOQ", from: "dès" },
    quickOrder: {
      heading: "Quantité par taille / couleur",
      unitsWord: "unités",
      perUnit: "/ unité",
      addMoreFor: (remaining: number, price: string) => `— ${remaining} de plus pour ${price} / unité`,
      moqRemaining: (remaining: number) => `${remaining} unités de plus pour atteindre le MOQ`,
      addCta: (units: number, total: string) => `Ajouter ${units} unités — ${total}`,
    },
  },
  ar: {
    nav: {
      wordmark: "Zorka",
    },
    footer: {
      line: "زوركا — ملابس جملة. تُطبَّق كميات الطلب الأدنى.",
      link: "تصفح التشكيلة الكاملة ←",
    },
    home: {
      eyebrow: "ملابس جملة — رجال، نساء، أطفال",
      headline1: "أقل كتالوج.",
      headline2: "أكثر طلبًا.",
      viewFullRange: "عرض التشكيلة الكاملة",
      valuePre: "التسعير التدريجي يبدأ من",
      valueHighlight: "12 وحدة",
      valuePost: "— اطلب أكثر وادفع أقل، دون تفاوض.",
      featured: "مختارات",
      allProducts: "كل المنتجات",
    },
    shop: {
      fullRange: "التشكيلة الكاملة",
      all: "الكل",
      stylesSuffix: "موديل",
    },
    breadcrumbHome: "زوركا",
    moqUnits: (moq: number) => `الحد الأدنى للطلب ${moq} وحدة`,
    tierUnitsSuffix: "وحدة",
    sizesLabel: "المقاسات",
    colorsLabel: "الألوان",
    moreIn: "المزيد من",
    productCard: { moqPrefix: "الحد الأدنى", from: "من" },
    quickOrder: {
      heading: "الكمية حسب المقاس / اللون",
      unitsWord: "وحدة",
      perUnit: "/ وحدة",
      addMoreFor: (remaining: number, price: string) => `— أضف ${remaining} أخرى للحصول على ${price} / وحدة`,
      moqRemaining: (remaining: number) => `أضف ${remaining} وحدة أخرى للوصول إلى الحد الأدنى`,
      addCta: (units: number, total: string) => `إضافة ${units} وحدة — ${total}`,
    },
  },
} satisfies Record<Locale, unknown>;

export function zorkaText(locale: Locale) {
  return dict[locale];
}
