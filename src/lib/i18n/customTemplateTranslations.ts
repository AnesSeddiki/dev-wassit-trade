import type { Locale } from "./locales";

const dict = {
  en: {
    card: {
      title: "Custom template",
      tagline: "Tell us about your business and we'll design a storefront around it.",
      cta: "Start custom template",
    },
    requestButton: "Request this template",
    requestMessage: (templateName: string) =>
      `I want to send a request for the website template "${templateName}" and I'd like to arrange a meeting to talk more about my requirements for my website.`,
    modal: {
      heading: "Request a custom template",
      subheading: "Describe your website and we'll get back to you with a plan.",
      nameLabel: "Full name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "jane@yourcompany.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "+213 5XX XX XX XX",
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
  fr: {
    card: {
      title: "Modèle personnalisé",
      tagline: "Décrivez votre activité et nous concevrons une boutique sur mesure.",
      cta: "Démarrer un modèle personnalisé",
    },
    requestButton: "Demander ce modèle",
    requestMessage: (templateName: string) =>
      `Je souhaite envoyer une demande pour le modèle de site "${templateName}" et j'aimerais organiser une réunion pour discuter davantage de mes besoins pour mon site.`,
    modal: {
      heading: "Demander un modèle personnalisé",
      subheading: "Décrivez votre site et nous vous recontacterons avec une proposition.",
      nameLabel: "Nom complet",
      namePlaceholder: "Jeanne Dupont",
      emailLabel: "E-mail",
      emailPlaceholder: "jeanne@votreentreprise.com",
      phoneLabel: "Téléphone (facultatif)",
      phonePlaceholder: "+213 5XX XX XX XX",
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
  ar: {
    card: {
      title: "نموذج مخصص",
      tagline: "أخبرنا عن نشاطك التجاري وسنصمم لك متجرًا يناسبه.",
      cta: "ابدأ نموذجًا مخصصًا",
    },
    requestButton: "اطلب هذا النموذج",
    requestMessage: (templateName: string) =>
      `أرغب في إرسال طلب بخصوص نموذج الموقع "${templateName}" وأود تحديد موعد اجتماع لمناقشة متطلبات موقعي بمزيد من التفصيل.`,
    modal: {
      heading: "طلب نموذج مخصص",
      subheading: "صف موقعك وسنعاود التواصل معك باقتراح.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: سارة أحمد",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "sara@yourcompany.com",
      phoneLabel: "رقم الهاتف (اختياري)",
      phonePlaceholder: "+213 5XX XX XX XX",
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
} satisfies Record<Locale, unknown>;

export function customTemplateText(locale: Locale) {
  return dict[locale];
}
