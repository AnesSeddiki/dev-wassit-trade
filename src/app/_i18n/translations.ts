import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    eyebrow: "For wholesale stores",
    headline1: "Ten storefronts,",
    headline2: "one catalog of styles.",
    description:
      "Wassit TradeDEV presents our suppliers' storefronts — each concept below is inspired by a leading wholesale & B2B commerce theme, rebuilt from scratch in React so we can reskin fast and hand a finished site to a client without licensing anything. Pick a direction, we build the backend once you're in.",
    builtBadge: "10 / 10 built",
    templatesEyebrow: "Pick the website built for your business",
    domainNotice: {
      message:
        "Sorry — we've temporarily switched to this link due to a technical issue with our domain dev.wassittrade.com. It'll be back online within a few hours.",
      close: "Dismiss",
    },
    inspiredBy: "Inspired by",
    viewTemplate: "View template",
    footerNote: "Frontend only — pricing, accounts & inventory connect once a client signs.",
    staticNotice: {
      label: "Note",
      body: "This is a static preview only, so you can get a feel for the look and direction of your future website. As soon as we start working together, we'll build out your database, your ordering workflow, and take care of component layouts, styling, colors, payment integration, AI features, and anything else you'd like to add or change.",
      paymentNote: "🚀 We build your website before you pay a single fee — payment is only requested after your site is delivered. ✅",
    },
    highlightsTitle: "What sets us apart",
    heroHighlights: [
      { emoji: "🎨", label: "10+ ready-to-preview templates" },
      { emoji: "💳", label: "Pay only after delivery" },
      { emoji: "🎧", label: "Support & follow-up after launch" },
    ],
    results: {
      title: "What you get",
      checklist: [
        "We build your entire website for you",
        "Showcase all your products easily",
        "Receive customer orders directly",
        "Track and manage every order in one place",
        "Your own independent website — not stuck relying on Facebook",
      ],
      whyTitle: "Why a website beats relying only on an online store",
      whyPoints: [
        "Protects you from fake orders",
        "You can change the colors or design anytime",
        "Protects your products and data from being copied or stolen",
        "Your business keeps running even if your Facebook page gets banned or hacked",
        "Builds more trust with customers, especially for large orders",
        "Your products stay organized and easy to find, instead of getting lost in posts",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        { title: "Pick a style", desc: "Browse the 10 templates and choose the one that fits your brand." },
        { title: "Tell us what to change", desc: "Send your request — colors, products, features, anything specific." },
        { title: "Preview before you pay", desc: "We build it and show you the real result. You only pay once you're happy." },
      ],
    },
    about: {
      eyebrow: "Who's behind this",
      name: "Anes Seddiki",
      role: "Software engineer & architect — 3+ years building for the web",
      note: "I personally build and ship every site here, from the first line of code to the live domain.",
      stackLabel: "Frameworks",
      stack: ["NestJS", "React", "PostgreSQL", "Tailwind CSS"],
      deployLabel: "Deployment & domains",
      deploy: ["Render", "GitHub", "Netlify", "Neon", "Namecheap"],
      phone: "+213 553 41 82 88",
      email: "anesseddiki879@gmail.com",
      location: "Blida, Beni Mered",
    },
    whatsapp: {
      ariaLabel: "Chat on WhatsApp",
      message: "Hello! I'd like to know more about your wholesale website service.",
    },
  },
  fr: {
    eyebrow: "Vente en gros",
    headline1: "Dix boutiques,",
    headline2: "un seul catalogue de styles.",
    description:
      "Wassit TradeDEV présente les boutiques de nos fournisseurs — chaque concept ci-dessous s'inspire d'un thème e-commerce B2B et grossiste de référence, reconstruit de zéro en React afin de pouvoir le reskinner rapidement et livrer un site terminé à un client sans aucune licence à payer. Choisissez une direction, nous construisons le backend une fois que vous êtes prêt.",
    builtBadge: "10 / 10 réalisés",
    templatesEyebrow: "Choisissez le site adapté à votre activité",
    domainNotice: {
      message:
        "Désolé — nous avons temporairement basculé sur ce lien en raison d'un problème technique avec notre domaine dev.wassittrade.com. Il sera de nouveau en ligne dans quelques heures.",
      close: "Fermer",
    },
    inspiredBy: "Inspiré de",
    viewTemplate: "Voir le modèle",
    footerNote: "Frontend uniquement — tarifs, comptes & inventaire connectés dès qu'un client signe.",
    staticNotice: {
      label: "Remarque",
      body: "Ceci n'est qu'un aperçu statique, pour vous donner une idée du style et de la direction de votre futur site. Dès que nous commencerons à travailler ensemble, nous mettrons en place votre base de données, votre flux de commande, et nous nous chargerons de la disposition des composants, du style, des couleurs, de l'intégration des paiements, des fonctionnalités IA et de tout ce que vous souhaiterez ajouter ou modifier.",
      paymentNote: "🚀 Nous construisons votre site avant que vous ne payiez le moindre frais — le paiement n'est demandé qu'après la livraison de votre site. ✅",
    },
    highlightsTitle: "Ce qui nous distingue",
    heroHighlights: [
      { emoji: "🎨", label: "10+ modèles prêts à consulter" },
      { emoji: "💳", label: "Paiement uniquement après livraison" },
      { emoji: "🎧", label: "Assistance & suivi après lancement" },
    ],
    results: {
      title: "Ce que vous obtenez",
      checklist: [
        "Nous construisons votre site entièrement",
        "Présentez tous vos produits facilement",
        "Recevez les commandes de vos clients directement",
        "Suivez et gérez toutes vos commandes au même endroit",
        "Votre propre site indépendant, sans dépendre uniquement de Facebook",
      ],
      whyTitle: "Pourquoi un site vaut mieux qu'une simple boutique en ligne",
      whyPoints: [
        "Vous protège des fausses commandes",
        "Vous pouvez changer les couleurs ou le design à tout moment",
        "Protège vos produits et vos données du vol ou de la copie",
        "Votre activité continue même si votre page Facebook est bannie ou piratée",
        "Inspire plus de confiance à vos clients, surtout pour les grosses commandes",
        "Vos produits restent organisés et faciles à trouver, au lieu de se perdre dans les publications",
      ],
    },
    howItWorks: {
      title: "Comment ça marche",
      steps: [
        { title: "Choisissez un style", desc: "Parcourez les 10 modèles et choisissez celui qui correspond à votre marque." },
        { title: "Dites-nous ce qu'il faut changer", desc: "Envoyez votre demande — couleurs, produits, fonctionnalités, tout ce que vous voulez." },
        { title: "Aperçu avant paiement", desc: "Nous le construisons et vous montrons le résultat réel. Vous ne payez que si vous êtes satisfait." },
      ],
    },
    about: {
      eyebrow: "Qui est derrière ce projet",
      name: "Anes Seddiki",
      role: "Ingénieur & architecte logiciel — 3+ ans dans le développement web",
      note: "Je construis et mets en ligne chaque site moi-même, de la première ligne de code jusqu'au domaine actif.",
      stackLabel: "Frameworks",
      stack: ["NestJS", "React", "PostgreSQL", "Tailwind CSS"],
      deployLabel: "Déploiement & domaines",
      deploy: ["Render", "GitHub", "Netlify", "Neon", "Namecheap"],
      phone: "+213 553 41 82 88",
      email: "anesseddiki879@gmail.com",
      location: "Blida, Beni Mered",
    },
    whatsapp: {
      ariaLabel: "Discuter sur WhatsApp",
      message: "Bonjour ! J'aimerais en savoir plus sur votre service de sites de vente en gros.",
    },
  },
  ar: {
    eyebrow: "لتجار الجملة",
    headline1: "10 مواقع جاهزة،",
    headline2: "كل واحد بتصميم مختلف.",
    description:
      "واسط ترايد ديف يعرض لكم مواقع جاهزة لتجارة الجملة، كل موقع مستوحى من مواقع عالمية ناجحة في هذا المجال. اختاروا الموقع الذي يناسب نشاطكم، وبعد التواصل معنا نجهز لكم كل شيء.",
    builtBadge: "10 / 10 مكتمل",
    templatesEyebrow: "اختر الموقع المناسب لنوع تجارتك",
    domainNotice: {
      message: "نعتذر — قمنا بتحويل الموقع مؤقتًا إلى هذا الرابط بسبب خطأ تقني في نطاقنا dev.wassittrade.com، وسيعود للعمل خلال بضع ساعات.",
      close: "إغلاق",
    },
    inspiredBy: "مستوحى من",
    viewTemplate: "شاهد الموقع",
    footerNote: "هذا عرض تصميم فقط — الأسعار والحسابات والمخزون تُفعّل بعد توقيع العقد.",
    staticNotice: {
      label: "ملاحظة",
      body: "هذا مجرد عرض ثابت، ليعطيكم فكرة عن الشكل والاتجاه العام لموقعكم المستقبلي. بمجرد أن نبدأ العمل معكم، سنعمل على بناء قاعدة بياناتكم، وسير عمل الطلبات، والاعتناء بشكل المكونات، والتنسيق، والألوان، ودمج الدفع، ودمج ميزات الذكاء الاصطناعي، وأي شيء آخر ترغبون في إضافته أو تغييره.",
      paymentNote: "🚀 ننشئ لك موقعك قبل أن تدفع أي رسوم، يُطلب منك الدفع بعد تسليم موقعك ✅",
    },
    highlightsTitle: "ما يميزنا",
    heroHighlights: [
      { emoji: "🎨", label: "+10 قوالب جاهزة للمعاينة" },
      { emoji: "💳", label: "الدفع فقط بعد التسليم" },
      { emoji: "🎧", label: "دعم ومتابعة بعد الإطلاق" },
    ],
    results: {
      title: "ماذا نقدم لك؟",
      checklist: [
        "نبني لك موقعك بالكامل",
        "تعرض كل منتجاتك بسهولة",
        "تستقبل طلبات الزبائن مباشرة",
        "تتابع وتدير طلباتك بسهولة",
        "يكون عندك موقع خاص بك، مستقل تمامًا",
      ],
      whyTitle: "لماذا موقع أفضل من الاعتماد على متجر إلكتروني فقط؟",
      whyPoints: [
        "يحميك من الطلبات المزورة",
        "تقدر تغيّر الألوان أو الشكل في أي وقت",
        "يحمي منتجاتك وبياناتك من التقليد أو السرقة",
        "عملك يستمر حتى لو تم حظر أو اختراق صفحتك على فيسبوك",
        "يعطي ثقة أكبر لعملائك، خصوصًا في الطلبيات الكبيرة",
        "منتجاتك تبقى منظمة وسهلة الوصول، ما تضيعش بين المنشورات",
      ],
    },
    howItWorks: {
      title: "كيف تسير العملية",
      steps: [
        { title: "اختر التصميم", desc: "تصفح المواقع العشرة واختر ما يناسب علامتك التجارية." },
        { title: "أخبرنا بما تريد تغييره", desc: "أرسل طلبك — الألوان، المنتجات، الميزات، أي شيء تريده." },
        { title: "عاين قبل الدفع", desc: "نبني لك الموقع ونريك النتيجة الحقيقية. لا تدفع إلا بعد رضاك." },
      ],
    },
    about: {
      eyebrow: "من يقف خلف هذا المشروع",
      name: "أنس صديقي",
      role: "مهندس ومعماري برمجيات — أكثر من 3 سنوات خبرة في تطوير الويب",
      note: "أبني وأنشر كل موقع هنا بنفسي، من أول سطر برمجي إلى الدومين الفعلي.",
      stackLabel: "أطر العمل",
      stack: ["NestJS", "React", "PostgreSQL", "Tailwind CSS"],
      deployLabel: "النشر وإدارة الدومين",
      deploy: ["Render", "GitHub", "Netlify", "Neon", "Namecheap"],
      phone: "+213 553 41 82 88",
      email: "anesseddiki879@gmail.com",
      location: "البليدة، بني مراد",
    },
    whatsapp: {
      ariaLabel: "تواصل عبر واتساب",
      message: "مرحبًا! أرغب في معرفة المزيد عن خدمة مواقع البيع بالجملة الخاصة بكم.",
    },
  },
} satisfies Record<Locale, unknown>;

export function homeText(locale: Locale) {
  return dict[locale];
}
