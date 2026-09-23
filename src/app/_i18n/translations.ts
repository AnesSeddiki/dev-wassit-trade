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
    paymentWarning: {
      label: "⚠️ Note",
      body: "Once your website's development is complete and you've approved its launch, payment is required to finalize activation. Failure to complete payment may result in us discontinuing future business with your account.",
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
      { emoji: "💡", label: "Answers & advice on everything about your website" },
      { emoji: "🤝", label: "No online payment required — pay in person, hand to hand" },
    ],
    results: {
      title: "What you get",
      checklist: [
        "We build your entire website for you",
        "Showcase all your products easily",
        "Receive customer orders directly",
        "Track and manage every order in one place",
        "Your own independent website — not stuck relying on Facebook",
        "AI features built into your website",
        "Automate your repetitive tasks to save time and effort",
        "Add and search your products easily by barcode",
        "Online payment integration for your website",
      ],
      whyTitle: "Why a website beats relying only on an online store",
      whyPoints: [
        {
          icon: "💰",
          header: "No commission on your orders",
          description:
            "When you sign up with a ready-made online store platform, they charge you 3-5% or more on every order you make. With your own website, you get rid of that completely.",
        },
        {
          icon: "🎛️",
          header: "Full control over your website's design and features",
          description:
            "You can change your website's design or how it works anytime you want, based on your customers' feedback — building more trust and keeping your business running smoothly.",
        },
        {
          icon: "🔍",
          header: "Show up in Google search results",
          description:
            "Your website becomes visible on Google, increasing your reach and bringing in new customers who are searching for your products themselves.",
        },
        {
          icon: "🚚",
          header: "Automatic integration with delivery companies",
          description:
            "The website prints your shipping label and barcode automatically, and sends the order straight into your delivery company's system (Yalidine, Maystro, ZR Express, EcoTrack) with one click — no manual typing.",
        },
        {
          icon: "🛡️",
          header: "No more fake orders or return losses",
          description:
            "The website confirms every order automatically by SMS or WhatsApp, blocking fake or prank orders — cutting down the return rate that eats into your profit.",
        },
        {
          icon: "🧮",
          header: "Automatic wholesale pricing by quantity",
          description:
            "The website calculates the price automatically based on quantity. One box gets one price, 10 boxes get a lower wholesale price — no more calls asking \"how much for 10 pieces?\"",
        },
        {
          icon: "🔕",
          header: "Escape the endless messages and calls",
          description:
            "The website becomes your live, 24/7 catalog. Customers browse stock, photos, and details themselves, and place their own order without needing you.",
        },
        {
          icon: "📦",
          header: "Precise, automatic stock control",
          description:
            "The website tracks your stock automatically — every sale deducts from inventory instantly, and out-of-stock items are marked unavailable on their own.",
        },
        {
          icon: "🏢",
          header: "No more \"price in private message\"",
          description:
            "Serious buyers and bigger clients prefer a clear, professional storefront. A real website gives you credibility against competitors and makes you look like an established business.",
        },
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
      inquiryText: "For any inquiry, contact us on WhatsApp",
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
    paymentWarning: {
      label: "⚠️ Remarque",
      body: "Une fois le développement de votre site terminé et son lancement approuvé, le paiement est requis pour finaliser l'activation. Le non-paiement peut entraîner l'arrêt de toute collaboration future avec votre compte.",
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
      { emoji: "💡", label: "Réponses et conseils sur tout ce qui concerne votre site" },
      { emoji: "🤝", label: "Aucun paiement en ligne requis — payez en personne, de la main à la main" },
    ],
    results: {
      title: "Ce que vous obtenez",
      checklist: [
        "Nous construisons votre site entièrement",
        "Présentez tous vos produits facilement",
        "Recevez les commandes de vos clients directement",
        "Suivez et gérez toutes vos commandes au même endroit",
        "Votre propre site indépendant, sans dépendre uniquement de Facebook",
        "Fonctionnalités d'intelligence artificielle intégrées à votre site",
        "Automatisez vos tâches répétitives pour gagner du temps et de l'énergie",
        "Ajoutez et recherchez vos produits facilement par code-barres",
        "Intégration des moyens de paiement en ligne pour votre site",
      ],
      whyTitle: "Pourquoi un site vaut mieux qu'une simple boutique en ligne",
      whyPoints: [
        {
          icon: "💰",
          header: "Aucune commission sur vos commandes",
          description:
            "Quand vous vous inscrivez sur une plateforme e-commerce prête à l'emploi, elle vous prélève 3 à 5 % ou plus sur chaque commande. Avec votre propre site, vous éliminez complètement ces frais.",
        },
        {
          icon: "🎛️",
          header: "Contrôle total sur le design et les fonctionnalités de votre site",
          description:
            "Vous pouvez changer le design ou le fonctionnement de votre site à tout moment, selon les retours de vos clients — renforçant la confiance et assurant une activité plus fluide.",
        },
        {
          icon: "🔍",
          header: "Visibilité dans les résultats de recherche Google",
          description:
            "Votre site devient visible sur Google, augmentant votre portée et attirant de nouveaux clients qui recherchent vos produits par eux-mêmes.",
        },
        {
          icon: "🚚",
          header: "Intégration automatique avec les sociétés de livraison",
          description:
            "Le site imprime votre bordereau et votre code-barres automatiquement, et transmet la commande directement dans le système de votre société de livraison (Yalidine, Maystro, ZR Express, EcoTrack) en un clic — sans aucune saisie manuelle.",
        },
        {
          icon: "🛡️",
          header: "Fini les fausses commandes et les pertes sur retours",
          description:
            "Le site confirme chaque commande automatiquement par SMS ou WhatsApp, bloquant les commandes fictives — réduisant le taux de retour qui grignote votre marge.",
        },
        {
          icon: "🧮",
          header: "Tarification de gros automatique selon la quantité",
          description:
            "Le site calcule le prix automatiquement selon la quantité. Un carton a un prix, 10 cartons ont un prix de gros réduit — plus besoin de répondre à chaque appel pour donner un tarif.",
        },
        {
          icon: "🔕",
          header: "Échappez aux messages et appels constants",
          description:
            "Le site devient votre catalogue en direct, 24h/24. Le client consulte le stock, les photos et les détails, et passe sa commande seul, sans vous déranger.",
        },
        {
          icon: "📦",
          header: "Contrôle précis et automatique du stock",
          description:
            "Le site suit votre stock automatiquement — chaque vente est déduite instantanément, et les produits épuisés sont marqués indisponibles tout seuls.",
        },
        {
          icon: "🏢",
          header: "Fini le \"prix en message privé\"",
          description:
            "Les acheteurs sérieux et les gros clients préfèrent une boutique claire et professionnelle. Un vrai site vous donne de la crédibilité face à la concurrence et vous fait paraître comme une entreprise établie.",
        },
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
      inquiryText: "Pour toute question, contactez-nous sur WhatsApp",
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
    paymentWarning: {
      label: "⚠️ تنويه",
      body: "بعد إتمام تطوير موقعكم وموافقتكم على إطلاقه، يُطلب استكمال عملية الدفع لتفعيله بشكل نهائي. عدم الالتزام بالدفع قد يؤدي إلى توقفنا عن التعامل مع حسابكم مستقبلاً.",
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
      { emoji: "💡", label: "أجوبة ونصائح في كل ما يخص موقعكم" },
      { emoji: "🤝", label: "لا يُطلب منكم دفع إلكتروني، يمكنكم الدفع يدًا بيد" },
    ],
    results: {
      title: "ماذا نقدم لك؟",
      checklist: [
        "نبني لك موقعك بالكامل",
        "تعرض كل منتجاتك بسهولة",
        "تستقبل طلبات الزبائن مباشرة",
        "تتابع وتدير طلباتك بسهولة",
        "يكون عندك موقع خاص بك، مستقل تمامًا",
        "تستفيد من ميزات الذكاء الاصطناعي داخل موقعك",
        "أتمتة مهامك المتكررة لتوفير وقتك وجهدك",
        "تضيف وتبحث عن منتجاتك بسهولة عبر الباركود",
        "دمج وسائل الدفع الإلكتروني في موقعك",
      ],
      whyTitle: "لماذا موقع أفضل من الاعتماد على متجر إلكتروني فقط؟",
      whyPoints: [
        {
          icon: "💰",
          header: "بدون عمولة على طلبياتك",
          description:
            "عندما تشترك في منصة تجارة إلكترونية جاهزة، تخصم منك عمولة تصل إلى 3-5% أو أكثر عن كل طلبية تتم. مع موقعك الخاص، تتخلص من هذه الرسوم نهائيًا.",
        },
        {
          icon: "🎛️",
          header: "تحكم كامل في شكل وعمل موقعك",
          description:
            "تقدر تغيّر تصميم موقعك أو طريقة عمله في أي وقت تريده، وحسب آراء زبائنك، مما يزيد ثقتهم فيك ويخلي تجارتك تسير بسلاسة أكبر.",
        },
        {
          icon: "🔍",
          header: "ظهورك في نتائج البحث على Google",
          description:
            "موقعك يصبح مرئيًا على محرك البحث Google، مما يزيد من انتشارك ويجلب لك زبائن جدد يبحثون عن منتجاتك بأنفسهم.",
        },
        {
          icon: "🚚",
          header: "ربط تلقائي مع شركات التوصيل",
          description:
            "الموقع يطبع لك البوردرو (ورقة الشحن) ويصدر الكود بار كود، وتدخل الطلبية مباشرة في نظام شركة التوصيل (Yalidine, Maystro, ZR Express, EcoTrack) بضغطة زر واحدة، بلا ما تكتب أي شيء يدويًا.",
        },
        {
          icon: "🛡️",
          header: "التخلص من مشاكل الإرجاع والطلبيات الوهمية",
          description:
            "الموقع يثبّت الطلبية تلقائيًا عبر رسالة SMS أو واتساب، ويمنع أصحاب الطلبيات الوهمية، فتقل نسبة الإرجاع (Retour) التي تأكل من أرباحك.",
        },
        {
          icon: "🧮",
          header: "تنظيم أسعار الجملة ونصف الجملة تلقائيًا",
          description:
            "الموقع يحسب السعر تلقائيًا حسب الكمية. من يشتري كرتونة واحدة يظهر له سعر، ومن يشتري 10 كراتين يظهر له سعر جملة أقل، بدون أي اتصال أو استفسار يدوي.",
        },
        {
          icon: "🔕",
          header: "الهروب من الرسائل والمكالمات المستمرة",
          description:
            "الموقع يصبح كتالوجك المباشر على مدار الساعة. الزبون يدخل، يشاهد السلعة والصور والتفاصيل، ويكمل الطلب بنفسه بدون إزعاجك.",
        },
        {
          icon: "📦",
          header: "التحكم الدقيق في المخزون",
          description:
            "الموقع يحسب المخزون تلقائيًا؛ كل قطعة تُباع تُخصم فورًا من النظام، وعند نفاد السلعة يظهر (غير متوفر) تلقائيًا بدون أي خطأ.",
        },
        {
          icon: "🏢",
          header: "التخلص من عقلية \"السعر في الخاص\"",
          description:
            "التجار الجادون والزبائن الكبار يفضلون الشراء من مكان احترافي وواضح. الموقع يمنحك هيبة أمام المنافسين ويجعلك تبدو كشركة رسمية.",
        },
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
      inquiryText: "لأي استفسار تواصل معنا عبر الواتساب",
      message: "مرحبًا! أرغب في معرفة المزيد عن خدمة مواقع البيع بالجملة الخاصة بكم.",
    },
  },
} satisfies Record<Locale, unknown>;

export function homeText(locale: Locale) {
  return dict[locale];
}
