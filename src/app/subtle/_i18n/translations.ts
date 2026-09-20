import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    nav: {
      announcementPill: "Bundle 3+ styles and save · smart lists remember your usual order",
      everything: "Everything",
      smartList: "Smart list",
      smartListAria: "Your smart list of saved favorites",
      startOrdering: "Start ordering",
    },
    footer: {
      reassurances: [
        {
          title: "No pressure ordering",
          body: "Build a cart, save it, come back tomorrow. Nothing expires, nothing nags.",
        },
        {
          title: "Bundle & save, automatically",
          body: "Mix sizes and colors freely — your discount tier is based on total units, not per style.",
        },
        {
          title: "Real people, quick replies",
          body: "Our buying team answers wholesale questions within one business day, every time.",
        },
      ],
      tagline: "Wholesale apparel, unhurried. hello@subtle.example · Mon–Fri",
      minOrderNote: "Minimum first order $300 · reorders anytime",
    },
    home: {
      badge: "Wholesale, without the whiplash",
      headline: "Bulk ordering that feels calm, not chaotic.",
      sub: "Build a case at your own pace. Bundle across men's, women's and kids' to hit your discount tier, save your favorites to a smart list, and reorder in minutes next time.",
      startBrowsing: "Start browsing",
      seeVolumePricing: "See volume pricing",
      stats: [
        { label: "Reorder rate", value: "71%" },
        { label: "Avg. discount unlocked", value: "28%" },
        { label: "Styles bundled per order", value: "4.6" },
        { label: "Support reply time", value: "< 1 day" },
      ],
      shopByCategoryEyebrow: "Shop by category",
      shopByCategoryHeading: "Three ranges, one running total",
      bundleEyebrow: "Bundle & save",
      bundleHeading: "Lower pricing the more you commit to — no spreadsheets required.",
      valueProps: [
        {
          title: "Volume discounts, built in",
          body: "Every style unlocks better pricing at 12, 50 and 144 units — mix sizes and colors freely, we total it all together.",
        },
        {
          title: "Bundle across categories",
          body: "Pair a men's essential with a kids' set and a women's bestseller — your case count still climbs toward the next tier.",
        },
        {
          title: "Smart lists remember you",
          body: "Save your regulars to a smart list once. Reordering next season is a two-minute job, not a two-hour one.",
        },
      ],
      videoBadge: "Product video",
      videoAriaLabel: "Play product walkthrough video (placeholder)",
      videoEyebrow: "See it before you commit",
      videoHeading: "A two-minute walkthrough of fit, fabric weight and case-pack sizing.",
      videoBody:
        "We film every core style up close — how it drapes, how it wears after a wash, what the stitching looks like in hand. This is a placeholder for that walkthrough; the real clip drops in here once it's ready.",
      pickedEyebrow: "Picked for your list",
      pickedHeading: "Favorites worth bundling",
      viewEverything: "View everything →",
    },
    shop: {
      stylesReady: (count: number) => `${count} styles ready to bundle`,
      fullRange: "The full range",
      all: "All",
      filterNote:
        "Mix sizes, colors and even categories in one order — every unit you add counts toward the same volume discount.",
    },
    breadcrumbHome: "Subtle",
    moqNote: (moq: number) => `a gentle minimum of ${moq} units`,
    volumePricingHeader: "Volume pricing",
    quantityHeader: "Quantity",
    priceUnitHeader: "Price / unit",
    sizesLabel: "Sizes",
    colorsLabel: "Colors",
    pairsWellTogether: "Pairs well together",
    moreFrom: "More from",
    productCard: {
      moqPrefix: "MOQ",
      unitsSuffix: "units",
      asLowAs: "as low as",
      perUnit: "/unit",
      saveAdd: "Add to smart list",
      saveRemove: "Remove from smart list",
    },
    quickOrder: {
      heading: "Build your case — pick quantities by size & color",
      unitsSoFar: (n: number) => `${n} unit${n === 1 ? "" : "s"} so far`,
      colorSizeHeader: "Color \\ Size",
      currentPricePrefix: "Current price:",
      perUnit: "/unit",
      moreUnitsUnlocks: (remaining: number, price: string) => `${remaining} more units unlocks ${price}/unit`,
      bestPriceReached: "You've reached the best price tier",
      moqMetMessage: "Nice — you've hit the minimum for this style.",
      moqNotMetMessage: (moq: number, remaining: number) =>
        `A gentle minimum of ${moq} units applies to this style — add ${remaining} more whenever you're ready.`,
      ctaAdd: (units: number, total: string) => `Add ${units} units — ${total}`,
      ctaMoqNotMet: (remaining: number) => `Add ${remaining} more to meet MOQ`,
    },
  },
  fr: {
    nav: {
      announcementPill:
        "Combinez 3 styles ou plus et économisez · les listes intelligentes retiennent votre commande habituelle",
      everything: "Tout",
      smartList: "Liste intelligente",
      smartListAria: "Votre liste intelligente de favoris enregistrés",
      startOrdering: "Commencer à commander",
    },
    footer: {
      reassurances: [
        {
          title: "Commandez sans pression",
          body: "Composez un panier, enregistrez-le, revenez demain. Rien n'expire, rien ne vous relance.",
        },
        {
          title: "Combinez et économisez, automatiquement",
          body: "Mélangez tailles et couleurs librement — votre palier de remise se calcule sur le total d'unités, pas par style.",
        },
        {
          title: "De vraies personnes, des réponses rapides",
          body: "Notre équipe commerciale répond à vos questions de gros en un jour ouvré, à chaque fois.",
        },
      ],
      tagline: "Vêtements de gros, sans précipitation. hello@subtle.example · Lun–Ven",
      minOrderNote: "Première commande minimum 300 $ · réassorts à tout moment",
    },
    home: {
      badge: "La vente en gros, sans le stress",
      headline: "Commander en gros, en toute sérénité.",
      sub: "Composez votre carton à votre rythme. Combinez hommes, femmes et enfants pour atteindre votre palier de remise, enregistrez vos favoris dans une liste intelligente, et repassez commande en quelques minutes la prochaine fois.",
      startBrowsing: "Commencer à explorer",
      seeVolumePricing: "Voir les tarifs dégressifs",
      stats: [
        { label: "Taux de réassort", value: "71 %" },
        { label: "Remise moyenne débloquée", value: "28 %" },
        { label: "Styles combinés par commande", value: "4,6" },
        { label: "Délai de réponse", value: "< 1 jour" },
      ],
      shopByCategoryEyebrow: "Acheter par catégorie",
      shopByCategoryHeading: "Trois univers, un seul total",
      bundleEyebrow: "Combinez et économisez",
      bundleHeading: "Des prix plus bas à mesure que vous commandez — sans tableur nécessaire.",
      valueProps: [
        {
          title: "Remises sur volume intégrées",
          body: "Chaque style débloque un meilleur prix à 12, 50 et 144 unités — mélangez tailles et couleurs librement, nous additionnons le tout.",
        },
        {
          title: "Combinez plusieurs catégories",
          body: "Associez un essentiel homme, un ensemble enfant et un best-seller femme — votre total continue de grimper vers le prochain palier.",
        },
        {
          title: "Les listes intelligentes se souviennent de vous",
          body: "Enregistrez vos habitués une seule fois dans une liste intelligente. Repasser commande la saison prochaine devient l'affaire de deux minutes, pas de deux heures.",
        },
      ],
      videoBadge: "Vidéo produit",
      videoAriaLabel: "Lire la vidéo de présentation du produit (espace réservé)",
      videoEyebrow: "Voyez-le avant de vous engager",
      videoHeading: "Une présentation de deux minutes sur la coupe, le grammage du tissu et le conditionnement par carton.",
      videoBody:
        "Nous filmons chaque style essentiel de près — comment il tombe, comment il se comporte après lavage, à quoi ressemblent les coutures de près. Ceci est un espace réservé pour cette vidéo ; le vrai extrait sera ajouté ici dès qu'il sera prêt.",
      pickedEyebrow: "Sélectionné pour votre liste",
      pickedHeading: "Des favoris à combiner",
      viewEverything: "Voir tout →",
    },
    shop: {
      stylesReady: (count: number) => `${count} styles prêts à combiner`,
      fullRange: "Toute la collection",
      all: "Tout",
      filterNote:
        "Mélangez tailles, couleurs et même catégories dans une seule commande — chaque unité ajoutée compte pour la même remise sur volume.",
    },
    breadcrumbHome: "Subtle",
    moqNote: (moq: number) => `un minimum en douceur de ${moq} unités`,
    volumePricingHeader: "Tarifs dégressifs",
    quantityHeader: "Quantité",
    priceUnitHeader: "Prix / unité",
    sizesLabel: "Tailles",
    colorsLabel: "Couleurs",
    pairsWellTogether: "S'associe bien",
    moreFrom: "Plus de",
    productCard: {
      moqPrefix: "MOQ",
      unitsSuffix: "unités",
      asLowAs: "dès",
      perUnit: "/unité",
      saveAdd: "Ajouter à la liste intelligente",
      saveRemove: "Retirer de la liste intelligente",
    },
    quickOrder: {
      heading: "Composez votre carton — choisissez les quantités par taille et couleur",
      unitsSoFar: (n: number) => `${n} unité${n === 1 ? "" : "s"} pour l'instant`,
      colorSizeHeader: "Couleur \\ Taille",
      currentPricePrefix: "Prix actuel :",
      perUnit: "/unité",
      moreUnitsUnlocks: (remaining: number, price: string) => `${remaining} unités de plus débloquent ${price}/unité`,
      bestPriceReached: "Vous avez atteint le meilleur palier de prix",
      moqMetMessage: "Parfait — vous avez atteint le minimum pour ce style.",
      moqNotMetMessage: (moq: number, remaining: number) =>
        `Un minimum en douceur de ${moq} unités s'applique à ce style — ajoutez ${remaining} de plus quand vous serez prêt·e.`,
      ctaAdd: (units: number, total: string) => `Ajouter ${units} unités — ${total}`,
      ctaMoqNotMet: (remaining: number) => `Ajoutez ${remaining} de plus pour atteindre le minimum`,
    },
  },
  ar: {
    nav: {
      announcementPill: "اجمع 3 موديلات أو أكثر ووفّر · القوائم الذكية تتذكر طلبك المعتاد",
      everything: "الكل",
      smartList: "القائمة الذكية",
      smartListAria: "قائمتك الذكية من المفضلات المحفوظة",
      startOrdering: "ابدأ الطلب",
    },
    footer: {
      reassurances: [
        {
          title: "اطلب دون أي ضغط",
          body: "جهّز سلة، احفظها، وعُد غدًا. لا شيء ينتهي، ولا شيء يُلحّ عليك.",
        },
        {
          title: "اجمع ووفّر، تلقائيًا",
          body: "امزج المقاسات والألوان بحرية — يُحتسب خصمك بناءً على إجمالي الوحدات، لا لكل موديل على حدة.",
        },
        {
          title: "أشخاص حقيقيون، ردود سريعة",
          body: "يجيب فريق المبيعات لدينا على أسئلة الجملة خلال يوم عمل واحد، في كل مرة.",
        },
      ],
      tagline: "ملابس جملة، بلا استعجال. hello@subtle.example · الإثنين إلى الجمعة",
      minOrderNote: "الحد الأدنى للطلب الأول 300$ · إعادة الطلب في أي وقت",
    },
    home: {
      badge: "بيع بالجملة دون إرهاق",
      headline: "طلب بالجملة، بهدوء لا بفوضى.",
      sub: "جهّز طلبك بالسرعة التي تناسبك. اجمع بين تشكيلات الرجال والنساء والأطفال للوصول إلى خصمك، احفظ مفضلاتك في قائمة ذكية، وأعد الطلب خلال دقائق في المرة القادمة.",
      startBrowsing: "ابدأ التصفح",
      seeVolumePricing: "عرض أسعار الكميات",
      stats: [
        { label: "معدل إعادة الطلب", value: "71%" },
        { label: "متوسط الخصم المكتسب", value: "28%" },
        { label: "عدد الموديلات لكل طلب", value: "4.6" },
        { label: "وقت الرد على الدعم", value: "أقل من يوم" },
      ],
      shopByCategoryEyebrow: "تسوّق حسب الفئة",
      shopByCategoryHeading: "ثلاث تشكيلات، مجموع واحد",
      bundleEyebrow: "اجمع ووفّر",
      bundleHeading: "أسعار أقل كلما زاد التزامك — دون الحاجة لأي جداول حسابية.",
      valueProps: [
        {
          title: "خصومات الكمية مدمجة",
          body: "كل موديل يفتح سعرًا أفضل عند 12 و50 و144 وحدة — امزج المقاسات والألوان بحرية، ونحن نجمعها كلها معًا.",
        },
        {
          title: "اجمع بين الفئات",
          body: "اجمع بين أساسي رجالي وطقم أطفال ومنتج نسائي الأكثر مبيعًا — يستمر إجمالي طلبك بالتقدم نحو الفئة التالية.",
        },
        {
          title: "القوائم الذكية تتذكرك",
          body: "احفظ منتجاتك المعتادة مرة واحدة في قائمة ذكية. إعادة الطلب في الموسم القادم تستغرق دقيقتين لا ساعتين.",
        },
      ],
      videoBadge: "فيديو المنتج",
      videoAriaLabel: "تشغيل فيديو استعراض المنتج (عنصر نائب)",
      videoEyebrow: "شاهده قبل أن تلتزم",
      videoHeading: "جولة من دقيقتين حول القصّة ووزن القماش وحجم التعبئة بالكرتون.",
      videoBody:
        "نصوّر كل موديل أساسي عن قرب — كيف يتدلى، وكيف يبدو بعد الغسيل، وشكل الخياطة عند اللمس. هذا عنصر نائب لتلك الجولة؛ سيتم إضافة المقطع الحقيقي هنا بمجرد جاهزيته.",
      pickedEyebrow: "مُختار لقائمتك",
      pickedHeading: "مفضلات تستحق الجمع",
      viewEverything: "عرض الكل ←",
    },
    shop: {
      stylesReady: (count: number) => `${count} موديل جاهز للدمج`,
      fullRange: "التشكيلة الكاملة",
      all: "الكل",
      filterNote: "امزج المقاسات والألوان وحتى الفئات في طلب واحد — كل وحدة تضيفها تُحتسب ضمن نفس خصم الكمية.",
    },
    breadcrumbHome: "سَبتِل",
    moqNote: (moq: number) => `حد أدنى بسيط قدره ${moq} وحدة`,
    volumePricingHeader: "أسعار الكميات",
    quantityHeader: "الكمية",
    priceUnitHeader: "السعر / الوحدة",
    sizesLabel: "المقاسات",
    colorsLabel: "الألوان",
    pairsWellTogether: "يتناسق بشكل جميل",
    moreFrom: "المزيد من",
    productCard: {
      moqPrefix: "الحد الأدنى",
      unitsSuffix: "وحدة",
      asLowAs: "ابتداءً من",
      perUnit: "/وحدة",
      saveAdd: "أضف إلى القائمة الذكية",
      saveRemove: "إزالة من القائمة الذكية",
    },
    quickOrder: {
      heading: "جهّز طلبك — اختر الكميات حسب المقاس واللون",
      unitsSoFar: (n: number) => `${n} وحدة حتى الآن`,
      colorSizeHeader: "اللون \\ المقاس",
      currentPricePrefix: "السعر الحالي:",
      perUnit: "/وحدة",
      moreUnitsUnlocks: (remaining: number, price: string) => `أضف ${remaining} وحدة أخرى لتحصل على ${price}/وحدة`,
      bestPriceReached: "لقد وصلت إلى أفضل فئة سعرية",
      moqMetMessage: "رائع — لقد وصلت إلى الحد الأدنى لهذا الموديل.",
      moqNotMetMessage: (moq: number, remaining: number) =>
        `يُطبَّق حد أدنى بسيط قدره ${moq} وحدة على هذا الموديل — أضف ${remaining} أخرى متى كنت مستعدًا.`,
      ctaAdd: (units: number, total: string) => `إضافة ${units} وحدة — ${total}`,
      ctaMoqNotMet: (remaining: number) => `أضف ${remaining} أخرى للوصول إلى الحد الأدنى`,
    },
  },
} satisfies Record<Locale, unknown>;

export function subtleText(locale: Locale) {
  return dict[locale];
}
