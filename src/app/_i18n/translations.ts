import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    eyebrow: "For men's, women's & kids' wholesale",
    headline1: "Ten storefronts,",
    headline2: "one catalog of styles.",
    description:
      "Wassit TradeDEV presents our suppliers' storefronts — each concept below is inspired by a leading wholesale & B2B commerce theme, rebuilt from scratch in React so we can reskin fast and hand a finished site to a client without licensing anything. Pick a direction, we build the backend once you're in.",
    builtBadge: "10 / 10 built",
    inspiredBy: "Inspired by",
    viewTemplate: "View template",
    footerNote: "Frontend only — pricing, accounts & inventory connect once a client signs.",
    staticNotice: {
      label: "Note",
      body: "This is a static preview only, so you can get a feel for the look and direction of your future website. As soon as we start working together, we'll build out your database, your ordering workflow, and take care of component layouts, styling, colors, payment integration, AI features, and anything else you'd like to add or change.",
      paymentNote: "🚀 We build your website before you pay a single fee — payment is only requested after your site is delivered. ✅",
    },
    trustBadges: [
      { emoji: "🤝", label: "Trust" },
      { emoji: "🛠️", label: "Maintenance" },
      { emoji: "🎧", label: "Support & tracking" },
    ],
    whatsapp: {
      ariaLabel: "Chat on WhatsApp",
      message: "Hello! I'd like to know more about your wholesale website service.",
    },
  },
  fr: {
    eyebrow: "Vente en gros pour hommes, femmes & enfants",
    headline1: "Dix boutiques,",
    headline2: "un seul catalogue de styles.",
    description:
      "Wassit TradeDEV présente les boutiques de nos fournisseurs — chaque concept ci-dessous s'inspire d'un thème e-commerce B2B et grossiste de référence, reconstruit de zéro en React afin de pouvoir le reskinner rapidement et livrer un site terminé à un client sans aucune licence à payer. Choisissez une direction, nous construisons le backend une fois que vous êtes prêt.",
    builtBadge: "10 / 10 réalisés",
    inspiredBy: "Inspiré de",
    viewTemplate: "Voir le modèle",
    footerNote: "Frontend uniquement — tarifs, comptes & inventaire connectés dès qu'un client signe.",
    staticNotice: {
      label: "Remarque",
      body: "Ceci n'est qu'un aperçu statique, pour vous donner une idée du style et de la direction de votre futur site. Dès que nous commencerons à travailler ensemble, nous mettrons en place votre base de données, votre flux de commande, et nous nous chargerons de la disposition des composants, du style, des couleurs, de l'intégration des paiements, des fonctionnalités IA et de tout ce que vous souhaiterez ajouter ou modifier.",
      paymentNote: "🚀 Nous construisons votre site avant que vous ne payiez le moindre frais — le paiement n'est demandé qu'après la livraison de votre site. ✅",
    },
    trustBadges: [
      { emoji: "🤝", label: "Confiance" },
      { emoji: "🛠️", label: "Maintenance" },
      { emoji: "🎧", label: "Assistance & suivi" },
    ],
    whatsapp: {
      ariaLabel: "Discuter sur WhatsApp",
      message: "Bonjour ! J'aimerais en savoir plus sur votre service de sites de vente en gros.",
    },
  },
  ar: {
    eyebrow: "لتجارة الجملة للرجال والنساء والأطفال",
    headline1: "عشرة متاجر،",
    headline2: "كتالوج واحد من الأنماط.",
    description:
      "واسط ترايد ديف تقدّم متاجر موردينا — كل نموذج أدناه مستوحى من قالب تجارة جملة أو B2B رائد، أُعيد بناؤه بالكامل باستخدام React لنتمكن من تغيير مظهره بسرعة وتسليم موقع جاهز للعميل دون أي رسوم ترخيص. اختر اتجاهًا، ونحن نبني الواجهة الخلفية بمجرد انضمامك.",
    builtBadge: "10 / 10 مكتمل",
    inspiredBy: "مستوحى من",
    viewTemplate: "عرض النموذج",
    footerNote: "الواجهة الأمامية فقط — يتم ربط الأسعار والحسابات والمخزون بمجرد توقيع العميل.",
    staticNotice: {
      label: "ملاحظة",
      body: "هذا مجرد عرض ثابت، ليعطيكم فكرة عن الشكل والاتجاه العام لموقعكم المستقبلي. بمجرد أن نبدأ العمل معكم، سنعمل على بناء قاعدة بياناتكم، وسير عمل الطلبات، والاعتناء بشكل المكونات، والتنسيق، والألوان، ودمج الدفع، ودمج ميزات الذكاء الاصطناعي، وأي شيء آخر ترغبون في إضافته أو تغييره.",
      paymentNote: "🚀 ننشئ لك موقعك قبل أن تدفع أي رسوم، يُطلب منك الدفع بعد تسليم موقعك ✅",
    },
    trustBadges: [
      { emoji: "🤝", label: "ثقة" },
      { emoji: "🛠️", label: "صيانة" },
      { emoji: "🎧", label: "مساعدة وتتبع" },
    ],
    whatsapp: {
      ariaLabel: "تواصل عبر واتساب",
      message: "مرحبًا! أرغب في معرفة المزيد عن خدمة مواقع البيع بالجملة الخاصة بكم.",
    },
  },
} satisfies Record<Locale, unknown>;

export function homeText(locale: Locale) {
  return dict[locale];
}
