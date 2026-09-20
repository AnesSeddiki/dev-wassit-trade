import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    eyebrow: "For men's, women's & kids' wholesale",
    headline1: "Ten storefronts,",
    headline2: "one catalog of styles.",
    description:
      "Wassit TradeDEV presents our suppliers' storefronts — each concept below is inspired by a leading wholesale & B2B commerce theme, rebuilt from scratch in React so we can reskin fast and hand a finished site to a client without licensing anything. Pick a direction, we build the backend once you're in.",
    adminDashboard: "Admin dashboard →",
    builtBadge: "10 / 10 built",
    inspiredBy: "Inspired by",
    viewTemplate: "View template",
    footerNote: "Frontend only — pricing, accounts & inventory connect once a client signs.",
    customTemplate: {
      card: {
        title: "Custom template",
        tagline: "Tell us about your business and we'll design a storefront around it.",
        cta: "Start custom template",
      },
      modal: {
        heading: "Request a custom template",
        subheading: "Describe your website and we'll get back to you with a plan.",
        nameLabel: "Full name",
        namePlaceholder: "Jane Doe",
        emailLabel: "Email",
        emailPlaceholder: "jane@yourcompany.com",
        companyLabel: "Company (optional)",
        companyPlaceholder: "Your company name",
        descriptionLabel: "Describe your website",
        descriptionPlaceholder:
          "Tell us about your products, your buyers, the look you're after, and any must-have features...",
        cancel: "Cancel",
        submit: "Send request",
        sending: "Sending…",
        successTitle: "Request sent",
        successMessage: "Thanks — we'll review your request and get back to you shortly.",
        close: "Close",
        errorMessage: "Something went wrong. Please try again.",
      },
    },
  },
  fr: {
    eyebrow: "Vente en gros pour hommes, femmes & enfants",
    headline1: "Dix boutiques,",
    headline2: "un seul catalogue de styles.",
    description:
      "Wassit TradeDEV présente les boutiques de nos fournisseurs — chaque concept ci-dessous s'inspire d'un thème e-commerce B2B et grossiste de référence, reconstruit de zéro en React afin de pouvoir le reskinner rapidement et livrer un site terminé à un client sans aucune licence à payer. Choisissez une direction, nous construisons le backend une fois que vous êtes prêt.",
    adminDashboard: "Tableau de bord admin →",
    builtBadge: "10 / 10 réalisés",
    inspiredBy: "Inspiré de",
    viewTemplate: "Voir le modèle",
    footerNote: "Frontend uniquement — tarifs, comptes & inventaire connectés dès qu'un client signe.",
    customTemplate: {
      card: {
        title: "Modèle personnalisé",
        tagline: "Décrivez votre activité et nous concevrons une boutique sur mesure.",
        cta: "Démarrer un modèle personnalisé",
      },
      modal: {
        heading: "Demander un modèle personnalisé",
        subheading: "Décrivez votre site et nous vous recontacterons avec une proposition.",
        nameLabel: "Nom complet",
        namePlaceholder: "Jeanne Dupont",
        emailLabel: "E-mail",
        emailPlaceholder: "jeanne@votreentreprise.com",
        companyLabel: "Entreprise (facultatif)",
        companyPlaceholder: "Nom de votre entreprise",
        descriptionLabel: "Décrivez votre site",
        descriptionPlaceholder:
          "Parlez-nous de vos produits, de vos acheteurs, du style recherché et des fonctionnalités indispensables...",
        cancel: "Annuler",
        submit: "Envoyer la demande",
        sending: "Envoi en cours…",
        successTitle: "Demande envoyée",
        successMessage: "Merci — nous allons examiner votre demande et revenir vers vous rapidement.",
        close: "Fermer",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      },
    },
  },
  ar: {
    eyebrow: "لتجارة الجملة للرجال والنساء والأطفال",
    headline1: "عشرة متاجر،",
    headline2: "كتالوج واحد من الأنماط.",
    description:
      "واسط ترايد ديف تقدّم متاجر موردينا — كل نموذج أدناه مستوحى من قالب تجارة جملة أو B2B رائد، أُعيد بناؤه بالكامل باستخدام React لنتمكن من تغيير مظهره بسرعة وتسليم موقع جاهز للعميل دون أي رسوم ترخيص. اختر اتجاهًا، ونحن نبني الواجهة الخلفية بمجرد انضمامك.",
    adminDashboard: "← لوحة تحكم الإدارة",
    builtBadge: "10 / 10 مكتمل",
    inspiredBy: "مستوحى من",
    viewTemplate: "عرض النموذج",
    footerNote: "الواجهة الأمامية فقط — يتم ربط الأسعار والحسابات والمخزون بمجرد توقيع العميل.",
    customTemplate: {
      card: {
        title: "نموذج مخصص",
        tagline: "أخبرنا عن نشاطك التجاري وسنصمم لك متجرًا يناسبه.",
        cta: "ابدأ نموذجًا مخصصًا",
      },
      modal: {
        heading: "طلب نموذج مخصص",
        subheading: "صف موقعك وسنعاود التواصل معك باقتراح.",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "مثال: سارة أحمد",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "sara@yourcompany.com",
        companyLabel: "الشركة (اختياري)",
        companyPlaceholder: "اسم شركتك",
        descriptionLabel: "صف موقعك",
        descriptionPlaceholder:
          "أخبرنا عن منتجاتك، وعملائك، والمظهر الذي تريده، وأي ميزات أساسية لا يمكن الاستغناء عنها...",
        cancel: "إلغاء",
        submit: "إرسال الطلب",
        sending: "جارٍ الإرسال…",
        successTitle: "تم إرسال الطلب",
        successMessage: "شكرًا لك — سنراجع طلبك ونعاود التواصل معك قريبًا.",
        close: "إغلاق",
        errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      },
    },
  },
} satisfies Record<Locale, unknown>;

export function homeText(locale: Locale) {
  return dict[locale];
}
