import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    nav: {
      announcement1: "Wholesale accounts only · by application",
      announcement2: "USD · EUR · GBP settlement · global freight quoted at checkout",
      fullCollection: "Full Collection",
      requestAccess: "Request Access",
    },
    footer: {
      wholesale: {
        heading: "Wholesale",
        lines: [
          "Accounts opened by application only",
          "Minimum opening order $2,500",
          "Shopify Plus–tier bulk handling",
        ],
      },
      global: {
        heading: "Global",
        lines: [
          "Multi-currency invoicing, USD / EUR / GBP",
          "Global freight, DDP available on request",
          "Consolidated container shipping",
        ],
      },
      collection: {
        heading: "Collection",
        lines: [
          "Line sheets released under NDA",
          "Seasonal drops, pre-book windows",
          "Exclusive territory arrangements",
        ],
      },
      hyper: {
        heading: "Hyper",
        tagline: "A house built for buyers who move volume.",
        email: "trade@hyper.example",
      },
      bottomBar: "Hyper — Wholesale Division",
    },
    home: {
      eyebrow: "Buyers by invitation · multi-currency ledger",
      headline: ["Volume isn't", "a request here.", "It's the baseline."],
      sub: "Hyper is the wholesale arm of a house that doesn't discount to get noticed. Tiered pricing, Shopify Plus–grade bulk handling, and freight quoted in your currency — built for buyers who already move product, not ones learning to.",
      enterCollection: "Enter the Collection",
      viewBuyerTerms: "View Buyer Terms",
      stats: [
        { label: "Wholesale accounts", value: "1,900+" },
        { label: "Currencies settled", value: "12" },
        { label: "Countries shipped", value: "34" },
        { label: "Avg. reorder window", value: "9 days" },
      ],
      heroCaptionEyebrow: "Current Season",
      heroCaptionTitle: "The Line, Fall/Winter",
      shopByCategory: "Shop by category",
      shopTheRange: "Shop the range →",
      thisSeason: "This season",
      volumeMovers: "Volume movers",
      viewFullCollection: "View full collection →",
      howAccountWorks: "How the account works",
      builtForBuyers: "Built for buyers moving cases, not units.",
      valueProps: [
        {
          n: "01",
          title: "MOQ, set once",
          body: "Every style carries a fixed minimum order quantity. No negotiating the floor — it's printed on the line sheet.",
        },
        {
          n: "02",
          title: "Tiered pricing, four deep",
          body: "Unit cost drops automatically as the run grows, from single-case pickup through 144-unit production breaks.",
        },
        {
          n: "03",
          title: "Multi-currency, global freight",
          body: "Invoiced in USD, EUR or GBP. Freight quoted at checkout with DDP available — this is Shopify Plus–tier logistics, built in.",
        },
        {
          n: "04",
          title: "Reorder in one pass",
          body: "Return buyers rebuild a prior run from the size/colorway grid in seconds. No re-quoting, no waiting on a rep.",
        },
      ],
    },
    shop: {
      stylesAvailable: (n: number) => `${n} styles available`,
      fullCollectionHeading: "The Full Collection",
      all: "All",
    },
    product: {
      breadcrumbHome: "Hyper",
      moqUnits: (moq: number) => `MOQ ${moq} units`,
      quantityHeader: "Quantity",
      priceUnitHeader: "Price / unit",
      unitsSuffix: "units",
      sizesLabel: "Sizes",
      colorwaysLabel: "Colorways",
      completeTheRun: "Complete the run",
      moreIn: "More in",
    },
    productCard: { moqPrefix: "MOQ", from: "from", perUnit: "/unit" },
    quickOrder: {
      heading: "Build the run — quantity by size / colorway",
      unitsSuffix: "units",
      colorwaySizeHeader: "Colorway \\ Size",
      perUnit: "/unit",
      addMoreForNext: (units: number, price: string) => `— add ${units} more to unlock ${price}/unit`,
      moqNotMet: (units: number) => `${units} more units to meet MOQ`,
      addCta: (units: number, total: string) => `Add ${units} units — ${total}`,
    },
  },
  fr: {
    nav: {
      announcement1: "Comptes grossistes uniquement · sur candidature",
      announcement2: "Règlement USD · EUR · GBP · fret international coté au paiement",
      fullCollection: "Collection complète",
      requestAccess: "Demander l'accès",
    },
    footer: {
      wholesale: {
        heading: "Grossiste",
        lines: [
          "Comptes ouverts uniquement sur candidature",
          "Commande d'ouverture minimum 2 500 $",
          "Traitement en volume de niveau Shopify Plus",
        ],
      },
      global: {
        heading: "International",
        lines: [
          "Facturation multidevise, USD / EUR / GBP",
          "Fret international, DDP disponible sur demande",
          "Groupage en conteneur",
        ],
      },
      collection: {
        heading: "Collection",
        lines: [
          "Fiches produits diffusées sous accord de confidentialité",
          "Sorties saisonnières, fenêtres de précommande",
          "Accords de territoire exclusifs",
        ],
      },
      hyper: {
        heading: "Hyper",
        tagline: "Une maison conçue pour les acheteurs qui déplacent du volume.",
        email: "trade@hyper.example",
      },
      bottomBar: "Hyper — Division Grossiste",
    },
    home: {
      eyebrow: "Acheteurs sur invitation · registre multidevise",
      headline: ["Le volume n'est pas", "une demande ici.", "C'est la base."],
      sub: "Hyper est la branche grossiste d'une maison qui ne brade pas pour se faire remarquer. Prix dégressifs, traitement en volume digne de Shopify Plus, et fret coté dans votre devise — pensé pour des acheteurs qui font déjà tourner du stock, pas pour ceux qui apprennent encore à le faire.",
      enterCollection: "Entrer dans la collection",
      viewBuyerTerms: "Voir les conditions acheteur",
      stats: [
        { label: "Comptes grossistes", value: "1 900+" },
        { label: "Devises réglées", value: "12" },
        { label: "Pays livrés", value: "34" },
        { label: "Délai moyen de réassort", value: "9 jours" },
      ],
      heroCaptionEyebrow: "Saison en cours",
      heroCaptionTitle: "La ligne, Automne/Hiver",
      shopByCategory: "Acheter par catégorie",
      shopTheRange: "Découvrir la gamme →",
      thisSeason: "Cette saison",
      volumeMovers: "Les références qui font le volume",
      viewFullCollection: "Voir la collection complète →",
      howAccountWorks: "Comment fonctionne le compte",
      builtForBuyers: "Conçu pour les acheteurs qui déplacent des cartons, pas des unités.",
      valueProps: [
        {
          n: "01",
          title: "MOQ fixé une fois pour toutes",
          body: "Chaque modèle porte une quantité minimum de commande fixe. Le plancher ne se négocie pas — il est imprimé sur la fiche produit.",
        },
        {
          n: "02",
          title: "Prix dégressifs sur quatre paliers",
          body: "Le coût unitaire baisse automatiquement à mesure que la série grandit, du retrait à la pièce jusqu'aux paliers de production à 144 unités.",
        },
        {
          n: "03",
          title: "Multidevise, fret international",
          body: "Facturé en USD, EUR ou GBP. Fret coté au paiement, DDP disponible — une logistique digne de Shopify Plus, intégrée d'office.",
        },
        {
          n: "04",
          title: "Le réassort en une seule fois",
          body: "Les acheteurs récurrents reconstruisent une série précédente depuis la grille taille/coloris en quelques secondes. Pas de nouveau devis, pas d'attente d'un commercial.",
        },
      ],
    },
    shop: {
      stylesAvailable: (n: number) => `${n} modèles disponibles`,
      fullCollectionHeading: "La collection complète",
      all: "Tout",
    },
    product: {
      breadcrumbHome: "Hyper",
      moqUnits: (moq: number) => `MOQ ${moq} unités`,
      quantityHeader: "Quantité",
      priceUnitHeader: "Prix / unité",
      unitsSuffix: "unités",
      sizesLabel: "Tailles",
      colorwaysLabel: "Coloris",
      completeTheRun: "Compléter la série",
      moreIn: "Plus dans",
    },
    productCard: { moqPrefix: "MOQ", from: "dès", perUnit: "/unité" },
    quickOrder: {
      heading: "Construire la série — quantité par taille / coloris",
      unitsSuffix: "unités",
      colorwaySizeHeader: "Coloris \\ Taille",
      perUnit: "/unité",
      addMoreForNext: (units: number, price: string) => `— ajoutez ${units} de plus pour débloquer ${price}/unité`,
      moqNotMet: (units: number) => `${units} unités de plus pour atteindre le MOQ`,
      addCta: (units: number, total: string) => `Ajouter ${units} unités — ${total}`,
    },
  },
  ar: {
    nav: {
      announcement1: "حسابات الجملة فقط · بالتقديم",
      announcement2: "التسوية بالدولار الأمريكي · اليورو · الجنيه الإسترليني · الشحن الدولي يُحدد عند الدفع",
      fullCollection: "المجموعة الكاملة",
      requestAccess: "طلب الوصول",
    },
    footer: {
      wholesale: {
        heading: "الجملة",
        lines: [
          "الحسابات تُفتح بالتقديم فقط",
          "الحد الأدنى لطلب الفتح 2,500$",
          "معالجة كميات بمستوى Shopify Plus",
        ],
      },
      global: {
        heading: "دولي",
        lines: [
          "فوترة متعددة العملات، دولار / يورو / جنيه إسترليني",
          "شحن دولي، مع خيار DDP عند الطلب",
          "شحن بالحاويات المجمّعة",
        ],
      },
      collection: {
        heading: "المجموعة",
        lines: [
          "قوائم المنتجات تُصدر بموجب اتفاقية سرية",
          "إصدارات موسمية، نوافذ حجز مسبق",
          "ترتيبات حصرية للمناطق",
        ],
      },
      hyper: {
        heading: "هايبر",
        tagline: "دار صُممت لأجل المشترين الذين يحركون الكميات الكبيرة.",
        email: "trade@hyper.example",
      },
      bottomBar: "هايبر — قسم الجملة",
    },
    home: {
      eyebrow: "المشترون بالدعوة فقط · سجل متعدد العملات",
      headline: ["الكمية ليست", "طلبًا هنا.", "إنها الأساس."],
      sub: "هايبر هي الذراع التجارية لدار لا تخفّض أسعارها لتلفت الانتباه. أسعار متدرجة، معالجة كميات بمستوى Shopify Plus، وشحن يُسعّر بعملتك — مصمم لمشترين يحركون المنتج فعلاً، لا لمن لا يزال يتعلم.",
      enterCollection: "ادخل إلى المجموعة",
      viewBuyerTerms: "عرض شروط المشتري",
      stats: [
        { label: "حسابات جملة", value: "+1,900" },
        { label: "عملات مُسوّاة", value: "12" },
        { label: "دول يتم الشحن إليها", value: "34" },
        { label: "متوسط مدة إعادة الطلب", value: "9 أيام" },
      ],
      heroCaptionEyebrow: "الموسم الحالي",
      heroCaptionTitle: "التشكيلة، خريف/شتاء",
      shopByCategory: "تسوّق حسب الفئة",
      shopTheRange: "تصفح التشكيلة ←",
      thisSeason: "هذا الموسم",
      volumeMovers: "الأكثر مبيعًا بالجملة",
      viewFullCollection: "عرض المجموعة الكاملة ←",
      howAccountWorks: "كيف يعمل الحساب",
      builtForBuyers: "مصمم لمشترين يحركون الكراتين، لا الوحدات.",
      valueProps: [
        {
          n: "01",
          title: "حد أدنى ثابت للطلب",
          body: "كل موديل يحمل حدًا أدنى ثابتًا لكمية الطلب. لا تفاوض على الحد الأدنى — إنه مطبوع على قائمة المنتج.",
        },
        {
          n: "02",
          title: "أسعار متدرجة على أربع مستويات",
          body: "تنخفض تكلفة الوحدة تلقائيًا مع زيادة الكمية، من الاستلام بالقطعة وحتى عتبات الإنتاج عند 144 وحدة.",
        },
        {
          n: "03",
          title: "تعدد العملات، شحن دولي",
          body: "يُفوتر بالدولار أو اليورو أو الجنيه الإسترليني. سعر الشحن يُحدد عند الدفع مع خيار DDP — لوجستيات بمستوى Shopify Plus، مدمجة أصلاً.",
        },
        {
          n: "04",
          title: "إعادة الطلب بخطوة واحدة",
          body: "يعيد المشترون المتكررون بناء طلب سابق من جدول المقاس/اللون في ثوانٍ. لا تسعير جديد، لا انتظار لممثل مبيعات.",
        },
      ],
    },
    shop: {
      stylesAvailable: (n: number) => `${n} موديل متاح`,
      fullCollectionHeading: "المجموعة الكاملة",
      all: "الكل",
    },
    product: {
      breadcrumbHome: "هايبر",
      moqUnits: (moq: number) => `الحد الأدنى للطلب ${moq} وحدة`,
      quantityHeader: "الكمية",
      priceUnitHeader: "السعر / الوحدة",
      unitsSuffix: "وحدة",
      sizesLabel: "المقاسات",
      colorwaysLabel: "الألوان",
      completeTheRun: "أكمل الطلبية",
      moreIn: "المزيد من",
    },
    productCard: { moqPrefix: "الحد الأدنى", from: "من", perUnit: "/وحدة" },
    quickOrder: {
      heading: "بناء الطلبية — الكمية حسب المقاس / اللون",
      unitsSuffix: "وحدة",
      colorwaySizeHeader: "اللون \\ المقاس",
      perUnit: "/وحدة",
      addMoreForNext: (units: number, price: string) => `— أضف ${units} أخرى لفتح سعر ${price}/وحدة`,
      moqNotMet: (units: number) => `أضف ${units} وحدة أخرى للوصول إلى الحد الأدنى`,
      addCta: (units: number, total: string) => `إضافة ${units} وحدة — ${total}`,
    },
  },
} satisfies Record<Locale, unknown>;

export function hyperText(locale: Locale) {
  return dict[locale];
}
