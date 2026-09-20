import type { Locale } from "./locales";
import type { TemplateMeta } from "../templates";

interface TemplateTextPair {
  tagline: string;
  direction: string;
  inspiredBy: string;
}

const fr: Record<string, TemplateTextPair> = {
  trade: {
    tagline: "Une commande aussi rapide qu'un tableur, pour des acheteurs qui savent déjà ce qu'ils veulent.",
    direction: "B2B utilitaire, dense en données",
    inspiredBy: "Le thème Trade de Shopify",
  },
  hyper: {
    tagline: "Une boutique sombre et éditoriale pour les marques qui vendent à des acheteurs exigeants.",
    direction: "Maximaliste premium / luxe sombre",
    inspiredBy: "Hyper par FoxEcom (Shopify Plus)",
  },
  modiva: {
    tagline: "Des mises en page façon magazine pour des acheteurs de mode qui achètent avec les yeux.",
    direction: "Mode éditoriale",
    inspiredBy: "Modiva (thème boutique de mode)",
  },
  subtle: {
    tagline: "Une interface calme et arrondie qui rend la commande en gros facile.",
    direction: "Pastel doux",
    inspiredBy: "Subtle (thème boîte à outils B2B Shopify)",
  },
  dukaken: {
    tagline: "Une marketplace dense et codée par couleurs, conçue pour de très grands catalogues.",
    direction: "Marketplace maximaliste",
    inspiredBy: "Dukaken (thème WooCommerce polyvalent)",
  },
  razzi: {
    tagline: "Une boutique haute en couleur, pilotée par les nuanciers, qui rend le filtrage amusant.",
    direction: "Pop-art ludique",
    inspiredBy: "Razzi (WooCommerce + Elementor)",
  },
  "wholesale-stores": {
    tagline: "Une commande sans fioritures, honnête comme un entrepôt, pour des acheteurs qui veulent juste la référence.",
    direction: "Industriel / brutaliste",
    inspiredBy: "Wholesale Stores (thème WP de vente en gros)",
  },
  b2bstore: {
    tagline: "Une boutique corporate construite autour des devis, des conditions et de la confiance.",
    direction: "B2B corporate",
    inspiredBy: "B2Bstore (thème PrestaShop)",
  },
  zorka: {
    tagline: "Un espace blanc radical et une typographie surdimensionnée pour un catalogue façon galerie.",
    direction: "Minimalisme radical",
    inspiredBy: "Zorka (thème WooCommerce mode)",
  },
  orson: {
    tagline: "Une ambiance chaleureuse de bazar général pour un catalogue qui s'adresse à tous.",
    direction: "Rétro / bazar vintage",
    inspiredBy: "Orson (thème boutique WordPress)",
  },
};

const ar: Record<string, TemplateTextPair> = {
  trade: {
    tagline: "طلب سريع كجدول بيانات، لمشترين يعرفون بالفعل ما يريدون.",
    direction: "بي2بي وظيفي وكثيف البيانات",
    inspiredBy: "قالب Trade من Shopify",
  },
  hyper: {
    tagline: "متجر داكن بطابع تحريري للعلامات التي تبيع لمشترين ذوي معايير عالية.",
    direction: "فخم مبالغ فيه / رفاهية داكنة",
    inspiredBy: "Hyper من FoxEcom (Shopify Plus)",
  },
  modiva: {
    tagline: "تصاميم على طراز المجلات لمشتري الأزياء الذين يشترون بعيونهم.",
    direction: "أزياء تحريرية",
    inspiredBy: "Modiva (قالب بوتيك أزياء)",
  },
  subtle: {
    tagline: "واجهة هادئة بحواف دائرية تجعل الطلب بالجملة يبدو سهلاً.",
    direction: "ألوان باستيل هادئة",
    inspiredBy: "Subtle (قالب أدوات B2B من Shopify)",
  },
  dukaken: {
    tagline: "سوق إلكتروني كثيف ومرمّز بالألوان، مصمم لكتالوجات ضخمة جدًا.",
    direction: "سوق إلكتروني مكثف",
    inspiredBy: "Dukaken (قالب WooCommerce متعدد الاستخدامات)",
  },
  razzi: {
    tagline: "متجر صاخب يعتمد على عيّنات الألوان ويجعل التصفية ممتعة.",
    direction: "بوب آرت مرح",
    inspiredBy: "Razzi (WooCommerce + Elementor)",
  },
  "wholesale-stores": {
    tagline: "طلب بسيط وصريح كصالة مستودع، لمشترين يريدون فقط رقم المنتج.",
    direction: "صناعي / وحشي (Brutalist)",
    inspiredBy: "Wholesale Stores (قالب WordPress للبيع بالجملة)",
  },
  b2bstore: {
    tagline: "متجر بطابع مؤسسي مبني حول عروض الأسعار والشروط والثقة.",
    direction: "بي2بي للشركات",
    inspiredBy: "B2Bstore (قالب PrestaShop)",
  },
  zorka: {
    tagline: "فراغ أبيض جذري وخطوط ضخمة لكتالوج أشبه بمعرض فني.",
    direction: "حد أدنى جذري",
    inspiredBy: "Zorka (قالب WooCommerce للأزياء)",
  },
  orson: {
    tagline: "أجواء دافئة أشبه بمتجر عام يلبي احتياجات الجميع.",
    direction: "متجر عام بطابع كلاسيكي",
    inspiredBy: "Orson (قالب متجر WordPress)",
  },
};

const byLocale: Record<Exclude<Locale, "en">, Record<string, TemplateTextPair>> = { fr, ar };

export function translateTemplate(template: TemplateMeta, locale: Locale): TemplateTextPair {
  if (locale === "en") {
    return { tagline: template.tagline, direction: template.direction, inspiredBy: template.inspiredBy };
  }
  return (
    byLocale[locale][template.slug] ?? {
      tagline: template.tagline,
      direction: template.direction,
      inspiredBy: template.inspiredBy,
    }
  );
}
