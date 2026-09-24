import type { Locale } from "./locales";

export interface LandingExampleProduct {
  name: string;
  price: string;
  image: string;
}

const dict = {
  ar: {
    demoNotice: "هذا مثال توضيحي لما يبدو عليه \"باقة صفحة العرض\" — التصميم والألوان تتغير حسب نشاطك.",
    businessName: "متجر الأناقة",
    tagline: "أزياء عصرية بأسعار تناسب الجميع",
    heroHeadline: "تسوّق أحدث القطع",
    heroSub: "كل المنتجات متوفرة الآن — اطلب مباشرة عبر واتساب وتوصلك السلعة لباب دارك.",
    heroCta: "اطلب عبر واتساب",
    productsTitle: "منتجاتنا",
    orderButton: "اطلب هذا",
    products: [
      { name: "تيشيرت قطن أساسي", price: "1,800", image: "/product/images/product1.jpg" },
      { name: "سترة جينز كلاسيك", price: "4,500", image: "/product/images/product2.jpg" },
      { name: "فستان صيفي", price: "3,200", image: "/product/images/product4.jpg" },
      { name: "قميص رسمي", price: "2,600", image: "/product/images/product6.jpg" },
      { name: "بنطلون رياضي", price: "2,900", image: "/product/images/product8.jpg" },
      { name: "جاكيت شتوي", price: "6,800", image: "/product/images/product10.jpg" },
    ] as LandingExampleProduct[],
    daSuffix: "دج",
    whatsappOrderText: (product: string) => `مرحبًا، أرغب في طلب: ${product}`,
    footerNote: "متجر تجريبي لأغراض العرض فقط.",
    backLink: "الرجوع إلى الصفحة الرئيسية",
  },
  fr: {
    demoNotice: 'Ceci est un exemple de la "formule Page vitrine" — le design et les couleurs s\'adaptent à votre activité.',
    businessName: "Boutique Élégance",
    tagline: "Mode tendance, prix accessibles",
    heroHeadline: "Découvrez nos nouveautés",
    heroSub: "Tous les articles sont disponibles — commandez directement sur WhatsApp et recevez-les chez vous.",
    heroCta: "Commander sur WhatsApp",
    productsTitle: "Nos produits",
    orderButton: "Commander",
    products: [
      { name: "T-shirt coton basique", price: "1 800", image: "/product/images/product1.jpg" },
      { name: "Veste en jean classique", price: "4 500", image: "/product/images/product2.jpg" },
      { name: "Robe d'été", price: "3 200", image: "/product/images/product4.jpg" },
      { name: "Chemise habillée", price: "2 600", image: "/product/images/product6.jpg" },
      { name: "Pantalon de sport", price: "2 900", image: "/product/images/product8.jpg" },
      { name: "Veste d'hiver", price: "6 800", image: "/product/images/product10.jpg" },
    ] as LandingExampleProduct[],
    daSuffix: "DA",
    whatsappOrderText: (product: string) => `Bonjour, je souhaite commander : ${product}`,
    footerNote: "Boutique de démonstration, à titre d'exemple uniquement.",
    backLink: "Retour à l'accueil",
  },
  en: {
    demoNotice: 'This is an example of the "Landing Page package" — the design and colors adapt to your business.',
    businessName: "Élégance Store",
    tagline: "Trendy fashion, prices for everyone",
    heroHeadline: "Shop the latest pieces",
    heroSub: "Everything's in stock — order directly on WhatsApp and get it delivered to your door.",
    heroCta: "Order on WhatsApp",
    productsTitle: "Our products",
    orderButton: "Order this",
    products: [
      { name: "Basic Cotton Tee", price: "1,800", image: "/product/images/product1.jpg" },
      { name: "Classic Denim Jacket", price: "4,500", image: "/product/images/product2.jpg" },
      { name: "Summer Dress", price: "3,200", image: "/product/images/product4.jpg" },
      { name: "Dress Shirt", price: "2,600", image: "/product/images/product6.jpg" },
      { name: "Sport Pants", price: "2,900", image: "/product/images/product8.jpg" },
      { name: "Winter Jacket", price: "6,800", image: "/product/images/product10.jpg" },
    ] as LandingExampleProduct[],
    daSuffix: "DA",
    whatsappOrderText: (product: string) => `Hi, I'd like to order: ${product}`,
    footerNote: "Demo storefront, for illustration purposes only.",
    backLink: "Back to homepage",
  },
} satisfies Record<Locale, unknown>;

export function landingExampleText(locale: Locale) {
  return dict[locale];
}
