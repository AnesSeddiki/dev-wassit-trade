import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    nav: {
      marquee:
        "Free color swatch cards on every 100+ unit order · New drops land every Monday · Wholesale accounts only",
      shopAll: "Shop all",
      quickOrder: "Quick order ✦",
    },
    footer: {
      shop: "Shop",
      fullCatalog: "Full catalog",
      ordering: "Ordering",
      orderingLines: ["MOQ varies by style", "Tiered pricing, auto-applied", "Reorders in one click"],
      shipping: "Shipping",
      shippingLines: ["Ships in 2–4 business days", "Freight quoted at checkout", "Case-pack breakdowns listed"],
      brand: "Razzi",
      brandLines: ["Wholesale apparel, in color", "hello@razzi.example"],
    },
    home: {
      eyebrow: "Wholesale · Men · Women · Kids",
      headlineLine1: "Stock your racks",
      headlineLead: "in",
      headlineWord1: "every",
      headlineWord2: "single",
      headlineWord3: "color.",
      sub: "Swatch-first wholesale ordering. See every colorway up front, drop quantities into the grid, and watch your price per unit drop as you go.",
      ctaShop: "Shop the swatch wall",
      ctaBrowse: "Browse full catalog",
      stats: [
        { label: "Live colorways", value: "60+" },
        { label: "Avg. MOQ", value: "24 units" },
        { label: "Reorder rate", value: "68%" },
        { label: "Ships in", value: "2–4 days" },
      ],
      pickLane: "Pick a lane",
      freshHeading: "Fresh off the swatch wall",
      viewAll: "View all →",
      valuePropsHeading: "Wholesale, without the headache",
      valueProps: [
        {
          title: "Low MOQs",
          copy: "Most styles start at 12–24 units. Test a colorway before you commit a full run.",
        },
        {
          title: "Tiered pricing, auto-applied",
          copy: "The more you add to the grid, the less you pay per unit — no code, no calls.",
        },
        {
          title: "Reorder in one click",
          copy: "Save your last matrix and fire it again next season. Same swatches, same speed.",
        },
      ],
    },
    shop: {
      skuSuffix: "styles",
      fullCatalog: "Full catalog",
      all: "All",
    },
    productCard: {
      quickView: "Quick view →",
      moqPrefix: "MOQ",
      from: "from",
      perUnit: "/unit",
    },
    product: {
      breadcrumbHome: "Razzi",
      moqUnits: (moq: number) => `MOQ ${moq} units`,
      colorwaysLabel: "Colorways",
      sizesLabel: "Sizes",
      qtyHeader: "Qty",
      priceUnitHeader: "Price / unit",
      moreIn: "More in",
    },
    quickOrder: {
      heading: "Build your grid — size × color",
      unitsSuffix: "units",
      colorSizeHeader: "Color \\ Size",
      perUnit: "/unit",
      addMoreForNext: (units: number, price: string) => `add ${units} more to drop to ${price}/unit`,
      moqNotMet: (remaining: number, moq: number) => `Add ${remaining} more to hit MOQ (${moq})`,
      addCta: (units: number, total: string) => `Add ${units} units — ${total}`,
    },
  },
  fr: {
    nav: {
      marquee:
        "Cartes d'échantillons couleur offertes dès 100 unités commandées · Nouvelles collections chaque lundi · Réservé aux comptes grossistes",
      shopAll: "Tout voir",
      quickOrder: "Commande rapide ✦",
    },
    footer: {
      shop: "Boutique",
      fullCatalog: "Catalogue complet",
      ordering: "Commande",
      orderingLines: [
        "Le MOQ varie selon le style",
        "Prix dégressifs, appliqués automatiquement",
        "Recommandez en un clic",
      ],
      shipping: "Expédition",
      shippingLines: [
        "Expédié sous 2 à 4 jours ouvrés",
        "Fret coté à la commande",
        "Détail des cartons indiqué",
      ],
      brand: "Razzi",
      brandLines: ["Vêtements de gros, en couleur", "hello@razzi.example"],
    },
    home: {
      eyebrow: "Vente en gros · Hommes · Femmes · Enfants",
      headlineLine1: "Remplissez vos rayons",
      headlineLead: "de",
      headlineWord1: "chaque",
      headlineWord2: "nuance",
      headlineWord3: "de couleur.",
      sub: "La commande en gros, mais couleur d'abord. Voyez tous les coloris dès le départ, entrez vos quantités dans la grille, et regardez votre prix à l'unité baisser au fil de vos ajouts.",
      ctaShop: "Voir le mur de couleurs",
      ctaBrowse: "Parcourir le catalogue complet",
      stats: [
        { label: "Coloris disponibles", value: "60+" },
        { label: "MOQ moyen", value: "24 unités" },
        { label: "Taux de réachat", value: "68 %" },
        { label: "Expédition", value: "2 à 4 jours" },
      ],
      pickLane: "Choisissez votre rayon",
      freshHeading: "Tout frais sorti du mur de couleurs",
      viewAll: "Voir tout →",
      valuePropsHeading: "La vente en gros, sans la migraine",
      valueProps: [
        {
          title: "MOQ bas",
          copy: "La plupart des styles démarrent à 12–24 unités. Testez un coloris avant de vous engager sur une série complète.",
        },
        {
          title: "Prix dégressifs, appliqués automatiquement",
          copy: "Plus vous ajoutez à la grille, moins vous payez à l'unité — sans code promo, sans coup de fil.",
        },
        {
          title: "Recommandez en un clic",
          copy: "Enregistrez votre dernière grille et relancez-la la saison prochaine. Mêmes coloris, même rapidité.",
        },
      ],
    },
    shop: {
      skuSuffix: "styles",
      fullCatalog: "Catalogue complet",
      all: "Tout",
    },
    productCard: {
      quickView: "Aperçu rapide →",
      moqPrefix: "MOQ",
      from: "dès",
      perUnit: "/unité",
    },
    product: {
      breadcrumbHome: "Razzi",
      moqUnits: (moq: number) => `MOQ ${moq} unités`,
      colorwaysLabel: "Coloris",
      sizesLabel: "Tailles",
      qtyHeader: "Qté",
      priceUnitHeader: "Prix / unité",
      moreIn: "Plus dans",
    },
    quickOrder: {
      heading: "Composez votre grille — taille × couleur",
      unitsSuffix: "unités",
      colorSizeHeader: "Couleur \\ Taille",
      perUnit: "/unité",
      addMoreForNext: (units: number, price: string) => `ajoutez ${units} de plus pour passer à ${price}/unité`,
      moqNotMet: (remaining: number, moq: number) => `Ajoutez ${remaining} de plus pour atteindre le MOQ (${moq})`,
      addCta: (units: number, total: string) => `Ajouter ${units} unités — ${total}`,
    },
  },
  ar: {
    nav: {
      marquee:
        "بطاقات عينات الألوان مجانًا مع كل طلب من 100 وحدة فأكثر · إصدارات جديدة كل يوم اثنين · لحسابات الجملة فقط",
      shopAll: "تسوّق الكل",
      quickOrder: "طلب سريع ✦",
    },
    footer: {
      shop: "المتجر",
      fullCatalog: "الكتالوج الكامل",
      ordering: "الطلب",
      orderingLines: [
        "الحد الأدنى للطلب يختلف حسب الموديل",
        "أسعار متدرجة تُطبَّق تلقائيًا",
        "أعد الطلب بنقرة واحدة",
      ],
      shipping: "الشحن",
      shippingLines: [
        "يُشحن خلال 2-4 أيام عمل",
        "تكلفة الشحن تُحدد عند الطلب",
        "تفاصيل الكراتين موضحة",
      ],
      brand: "رازي",
      brandLines: ["ملابس جملة، بكل الألوان", "hello@razzi.example"],
    },
    home: {
      eyebrow: "للجملة فقط · رجال · نساء · أطفال",
      headlineLine1: "جهّز رفوفك",
      headlineLead: "بكل",
      headlineWord1: "لون",
      headlineWord2: "ودرجة",
      headlineWord3: "متوفرة.",
      sub: "طلب جملة يبدأ بالألوان أولاً. شاهد كل الألوان مباشرة، أدخل الكميات في الجدول، وراقب سعر الوحدة ينخفض كلما أضفت المزيد.",
      ctaShop: "تسوّق حائط الألوان",
      ctaBrowse: "تصفح الكتالوج الكامل",
      stats: [
        { label: "ألوان متوفرة", value: "+60" },
        { label: "متوسط الحد الأدنى", value: "24 وحدة" },
        { label: "معدل إعادة الطلب", value: "68%" },
        { label: "مدة الشحن", value: "2-4 أيام" },
      ],
      pickLane: "اختر قسمك",
      freshHeading: "وصل حديثًا من حائط الألوان",
      viewAll: "عرض الكل ←",
      valuePropsHeading: "جملة بلا أي صداع",
      valueProps: [
        {
          title: "حد أدنى منخفض للطلب",
          copy: "معظم الموديلات تبدأ من 12 إلى 24 وحدة. جرّب لونًا واحدًا قبل الالتزام بدفعة كاملة.",
        },
        {
          title: "أسعار متدرجة تُطبَّق تلقائيًا",
          copy: "كلما أضفت المزيد إلى الجدول، انخفض سعر الوحدة — بدون أكواد خصم ولا مكالمات.",
        },
        {
          title: "أعد الطلب بنقرة واحدة",
          copy: "احفظ آخر جدول طلبتَه وأطلقه مجددًا الموسم القادم. نفس الألوان، نفس السرعة.",
        },
      ],
    },
    shop: {
      skuSuffix: "موديل",
      fullCatalog: "الكتالوج الكامل",
      all: "الكل",
    },
    productCard: {
      quickView: "عرض سريع ←",
      moqPrefix: "الحد الأدنى",
      from: "من",
      perUnit: "/وحدة",
    },
    product: {
      breadcrumbHome: "رازي",
      moqUnits: (moq: number) => `الحد الأدنى ${moq} وحدة`,
      colorwaysLabel: "الألوان المتاحة",
      sizesLabel: "المقاسات",
      qtyHeader: "الكمية",
      priceUnitHeader: "السعر / الوحدة",
      moreIn: "المزيد من",
    },
    quickOrder: {
      heading: "جهّز جدولك — المقاس × اللون",
      unitsSuffix: "وحدة",
      colorSizeHeader: "اللون \\ المقاس",
      perUnit: "/وحدة",
      addMoreForNext: (units: number, price: string) => `أضف ${units} أخرى لتصل إلى ${price}/وحدة`,
      moqNotMet: (remaining: number, moq: number) => `أضف ${remaining} أخرى للوصول إلى الحد الأدنى (${moq})`,
      addCta: (units: number, total: string) => `إضافة ${units} وحدة — ${total}`,
    },
  },
} satisfies Record<Locale, unknown>;

export function razziText(locale: Locale) {
  return dict[locale];
}
