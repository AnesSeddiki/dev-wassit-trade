import type { Locale } from "@/lib/i18n/locales";

const dict = {
  en: {
    nav: {
      manifestLine1: "MANIFEST NO. WS-2024 · NET-30 ON APPROVED ACCOUNTS",
      manifestLine2: "MOQ APPLIES PER SKU · NO EXCEPTIONS",
      fullInventory: "Full Inventory",
    },
    footer: {
      packingSlip: "— PACKING SLIP — COPY 3 — WAREHOUSE FILE —",
      ordering: {
        title: "Ordering",
        lines: ["MOQ set per SKU, see product", "Reorders — no minimum", "Net-30 on approved credit"],
      },
      shipping: {
        title: "Shipping",
        lines: ["Ships in 3–5 business days", "Freight quoted at checkout", "Dock pickup, Bay 4 & 5"],
      },
      inventory: {
        title: "Inventory",
        lines: ["Case-pack breakdowns listed", "Tiered pricing, no negotiation", "Stock levels update nightly"],
      },
      company: {
        title: "Wholesale Stores",
        lines: ["Bulk apparel, plain and simple", "orders@wholesalestores.example"],
      },
    },
    home: {
      eyebrow: "Wholesale Only — Trade Accounts",
      headline: ["Bulk apparel.", "No minimums", "on reorders."],
      sub: "We don't do lookbooks. We do SKUs, case packs, and tiered pricing that gets better the more you order. Pick your sizes, pick your colors, place the order.",
      ctaPrimary: "View Full Inventory",
      ctaSecondary: "Request Line Sheet",
      palletLabel: "PALLET WS-001",
      manifest: [
        { label: "SKUs in stock", value: "1,240" },
        { label: "Avg. ship time", value: "3–5 days" },
        { label: "Reorder rate", value: "68%" },
        { label: "Accounts served", value: "2,600+" },
      ],
      binsHeading: "Inventory Bins",
      binLabels: { men: "BIN 01", women: "BIN 02", kids: "BIN 03" },
      favoritesHeading: "Reorder Favorites",
      viewAllSkus: "View all SKUs →",
      terms: {
        eyebrow: "Terms of Sale",
        headline: "No surprises. Read it once, order forever.",
        cards: [
          {
            num: "01",
            title: "MOQ",
            body: "Minimum order quantity is set per SKU, shown on every product page. Mix sizes and colors freely to hit it — the unit count is what matters, not the split.",
          },
          {
            num: "02",
            title: "Tiered Pricing",
            body: "Four pricing tiers per SKU. Price drops automatically as your order quantity crosses each threshold. No haggling, no quote requests required.",
          },
          {
            num: "03",
            title: "Shipping",
            body: "Orders ship in 3–5 business days from a full warehouse. Freight is quoted at checkout by weight and zone. Dock pickup available on request.",
          },
        ],
      },
    },
    shop: {
      skusOnFile: (n: number) => `${n} SKUs on file`,
      fullInventory: "Full Inventory",
      all: "All",
    },
    breadcrumbHome: "Wholesale Stores",
    moqUnits: (moq: number) => `MOQ ${moq} units`,
    qtyBreakHeader: "Qty Break",
    priceUnitHeader: "Price / Unit",
    sizesLabel: "Sizes",
    colorsLabel: "Colors",
    moreIn: "More In",
    productCard: { moqPrefix: "MOQ", from: "from", perUnit: "/UNIT" },
    quickOrder: {
      heading: "Order Form — Units by Size / Color",
      colorSizeHeader: "Color / Size",
      unitsTotal: (n: number) => `${n} units total`,
      tierPrice: (price: string) => `tier price ${price}/unit`,
      moreForNext: (n: number, price: string) => `— ${n} more for ${price}/unit`,
      clearForm: "Clear form",
      addUnits: (n: number, total: string) => `Add ${n} units — ${total}`,
      moqNotMet: (n: number) => `MOQ NOT MET — NEED ${n} MORE`,
    },
  },
  fr: {
    nav: {
      manifestLine1: "BON DE LIVRAISON N° WS-2024 · NET-30 SUR COMPTES APPROUVÉS",
      manifestLine2: "MOQ APPLIQUÉ PAR RÉFÉRENCE · SANS EXCEPTION",
      fullInventory: "Stock complet",
    },
    footer: {
      packingSlip: "— BON DE COLISAGE — COPIE 3 — ARCHIVE ENTREPÔT —",
      ordering: {
        title: "Commande",
        lines: ["MOQ fixé par référence, voir fiche produit", "Réassorts — sans minimum", "Net-30 sur crédit approuvé"],
      },
      shipping: {
        title: "Expédition",
        lines: ["Expédié sous 3 à 5 jours ouvrés", "Fret coté à la commande", "Retrait quai, portes 4 et 5"],
      },
      inventory: {
        title: "Stock",
        lines: ["Détail des cartons indiqué", "Prix dégressifs, non négociables", "Niveaux de stock mis à jour chaque nuit"],
      },
      company: {
        title: "Wholesale Stores",
        lines: ["Vêtements en gros, sans fioritures", "orders@wholesalestores.example"],
      },
    },
    home: {
      eyebrow: "Vente en gros uniquement — Comptes professionnels",
      headline: ["Vêtements en gros.", "Aucun minimum", "sur les réassorts."],
      sub: "On ne fait pas de lookbooks. On fait des références, des cartons et des prix dégressifs qui baissent avec la quantité commandée. Choisissez vos tailles, vos couleurs, passez commande.",
      ctaPrimary: "Voir le stock complet",
      ctaSecondary: "Demander la fiche produits",
      palletLabel: "PALETTE WS-001",
      manifest: [
        { label: "Références en stock", value: "1 240" },
        { label: "Délai d'expédition moyen", value: "3 à 5 jours" },
        { label: "Taux de réassort", value: "68 %" },
        { label: "Comptes actifs", value: "2 600+" },
      ],
      binsHeading: "Casiers d'inventaire",
      binLabels: { men: "CASIER 01", women: "CASIER 02", kids: "CASIER 03" },
      favoritesHeading: "Vos incontournables",
      viewAllSkus: "Voir toutes les références →",
      terms: {
        eyebrow: "Conditions de vente",
        headline: "Aucune surprise. À lire une fois, commandez toujours.",
        cards: [
          {
            num: "01",
            title: "MOQ",
            body: "Le minimum de commande est fixé par référence, indiqué sur chaque fiche produit. Mélangez tailles et couleurs comme vous voulez pour l'atteindre — seul le nombre d'unités compte, pas la répartition.",
          },
          {
            num: "02",
            title: "Prix dégressifs",
            body: "Quatre paliers de prix par référence. Le prix baisse automatiquement dès que votre quantité franchit un seuil. Pas de négociation, pas de devis à demander.",
          },
          {
            num: "03",
            title: "Expédition",
            body: "Les commandes partent sous 3 à 5 jours ouvrés depuis un entrepôt toujours approvisionné. Le fret est coté à la commande selon le poids et la zone. Retrait au quai possible sur demande.",
          },
        ],
      },
    },
    shop: {
      skusOnFile: (n: number) => `${n} références en stock`,
      fullInventory: "Stock complet",
      all: "Tout",
    },
    breadcrumbHome: "Wholesale Stores",
    moqUnits: (moq: number) => `MOQ ${moq} unités`,
    qtyBreakHeader: "Palier de quantité",
    priceUnitHeader: "Prix / unité",
    sizesLabel: "Tailles",
    colorsLabel: "Couleurs",
    moreIn: "Plus dans",
    productCard: { moqPrefix: "MOQ", from: "dès", perUnit: "/UNITÉ" },
    quickOrder: {
      heading: "Bon de commande — Unités par taille / couleur",
      colorSizeHeader: "Couleur / Taille",
      unitsTotal: (n: number) => `${n} unités au total`,
      tierPrice: (price: string) => `prix palier ${price}/unité`,
      moreForNext: (n: number, price: string) => `— ${n} de plus pour ${price}/unité`,
      clearForm: "Vider le formulaire",
      addUnits: (n: number, total: string) => `Ajouter ${n} unités — ${total}`,
      moqNotMet: (n: number) => `MOQ NON ATTEINT — ${n} DE PLUS REQUIS`,
    },
  },
  ar: {
    nav: {
      manifestLine1: "بيان الشحنة رقم WS-2024 · دفع خلال 30 يومًا للحسابات المعتمدة",
      manifestLine2: "الحد الأدنى للطلب يُطبَّق لكل منتج · بدون استثناءات",
      fullInventory: "كامل المخزون",
    },
    footer: {
      packingSlip: "— إيصال التعبئة — نسخة 3 — أرشيف المستودع —",
      ordering: {
        title: "الطلب",
        lines: ["الحد الأدنى محدد لكل منتج، راجع صفحة المنتج", "إعادة الطلب — بدون حد أدنى", "دفع خلال 30 يومًا بعد الموافقة على الائتمان"],
      },
      shipping: {
        title: "الشحن",
        lines: ["يُشحن خلال 3-5 أيام عمل", "تكلفة الشحن تُحدد عند الطلب", "استلام من الرصيف، بوابة 4 و5"],
      },
      inventory: {
        title: "المخزون",
        lines: ["تفاصيل الكراتين موضحة", "أسعار متدرجة، غير قابلة للتفاوض", "مستويات المخزون تُحدّث ليليًا"],
      },
      company: {
        title: "Wholesale Stores",
        lines: ["ملابس بالجملة، بلا رتوش", "orders@wholesalestores.example"],
      },
    },
    home: {
      eyebrow: "للجملة فقط — حسابات تجارية",
      headline: ["ملابس بالجملة.", "بدون حد أدنى", "لإعادة الطلب."],
      sub: "لا نقدّم كتالوجات أزياء. نقدّم أرقام منتجات، وكراتين، وأسعارًا متدرجة تتحسن كلما زادت كميتك. اختر المقاسات، اختر الألوان، ونفّذ الطلب.",
      ctaPrimary: "عرض كامل المخزون",
      ctaSecondary: "طلب قائمة المنتجات",
      palletLabel: "منصة WS-001",
      manifest: [
        { label: "منتجات متوفرة", value: "1,240" },
        { label: "متوسط وقت الشحن", value: "3-5 أيام" },
        { label: "معدل إعادة الطلب", value: "68%" },
        { label: "حسابات نشطة", value: "+2,600" },
      ],
      binsHeading: "صناديق المخزون",
      binLabels: { men: "صندوق 01", women: "صندوق 02", kids: "صندوق 03" },
      favoritesHeading: "الأكثر إعادة طلبًا",
      viewAllSkus: "عرض كل المنتجات ←",
      terms: {
        eyebrow: "شروط البيع",
        headline: "بلا مفاجآت. اقرأها مرة واحدة واطلب دائمًا.",
        cards: [
          {
            num: "01",
            title: "الحد الأدنى للطلب",
            body: "الحد الأدنى للطلب محدد لكل منتج، ويظهر في صفحة كل منتج. امزج المقاسات والألوان بحرية للوصول إليه — العدد الإجمالي للوحدات هو ما يهم، لا طريقة التوزيع.",
          },
          {
            num: "02",
            title: "أسعار متدرجة",
            body: "أربع مستويات تسعير لكل منتج. ينخفض السعر تلقائيًا كلما تجاوزت كميتك كل حد. بدون مساومة، وبدون طلب عروض أسعار.",
          },
          {
            num: "03",
            title: "الشحن",
            body: "تُشحن الطلبات خلال 3-5 أيام عمل من مستودع مكتمل المخزون. تُحدد تكلفة الشحن عند الطلب حسب الوزن والمنطقة. الاستلام من الرصيف متاح عند الطلب.",
          },
        ],
      },
    },
    shop: {
      skusOnFile: (n: number) => `${n} منتج مسجل`,
      fullInventory: "كامل المخزون",
      all: "الكل",
    },
    breadcrumbHome: "Wholesale Stores",
    moqUnits: (moq: number) => `الحد الأدنى للطلب ${moq} وحدة`,
    qtyBreakHeader: "شرائح الكمية",
    priceUnitHeader: "السعر / الوحدة",
    sizesLabel: "المقاسات",
    colorsLabel: "الألوان",
    moreIn: "المزيد من",
    productCard: { moqPrefix: "الحد الأدنى", from: "من", perUnit: "/وحدة" },
    quickOrder: {
      heading: "نموذج الطلب — الوحدات حسب المقاس / اللون",
      colorSizeHeader: "اللون / المقاس",
      unitsTotal: (n: number) => `${n} وحدة إجمالًا`,
      tierPrice: (price: string) => `سعر الشريحة ${price}/وحدة`,
      moreForNext: (n: number, price: string) => `— أضف ${n} أخرى للحصول على ${price}/وحدة`,
      clearForm: "تفريغ النموذج",
      addUnits: (n: number, total: string) => `إضافة ${n} وحدة — ${total}`,
      moqNotMet: (n: number) => `الحد الأدنى غير مكتمل — يلزم ${n} أخرى`,
    },
  },
} satisfies Record<Locale, unknown>;

export function wsText(locale: Locale) {
  return dict[locale];
}
