import type { Locale } from "./locales";

const dict = {
  en: {
    addedToast: "Added to cart",
    cartLabel: "Cart",
    heading: "Your cart",
    empty: "Your cart is empty.",
    emptyHint: "Add units from any product's order grid to see them here.",
    sizeLabel: "Size",
    colorLabel: "Color",
    remove: "Remove",
    quantityDecrease: "Decrease quantity",
    quantityIncrease: "Increase quantity",
    totalUnitsLabel: "Total units",
    subtotalLabel: "Subtotal",
    checkout: "Checkout",
    checkoutHint: "Demo template — checkout isn't wired up yet.",
    close: "Close",
  },
  fr: {
    addedToast: "Ajouté au panier",
    cartLabel: "Panier",
    heading: "Votre panier",
    empty: "Votre panier est vide.",
    emptyHint: "Ajoutez des unités depuis la grille de commande d'un produit pour les voir ici.",
    sizeLabel: "Taille",
    colorLabel: "Couleur",
    remove: "Retirer",
    quantityDecrease: "Diminuer la quantité",
    quantityIncrease: "Augmenter la quantité",
    totalUnitsLabel: "Unités totales",
    subtotalLabel: "Sous-total",
    checkout: "Commander",
    checkoutHint: "Modèle de démonstration — le paiement n'est pas encore activé.",
    close: "Fermer",
  },
  ar: {
    addedToast: "تم اضافة الحمولة الى السلة",
    cartLabel: "السلة",
    heading: "سلتك",
    empty: "سلتك فارغة.",
    emptyHint: "أضف كميات من جدول الطلب الخاص بأي منتج لتظهر هنا.",
    sizeLabel: "المقاس",
    colorLabel: "اللون",
    remove: "إزالة",
    quantityDecrease: "إنقاص الكمية",
    quantityIncrease: "زيادة الكمية",
    totalUnitsLabel: "إجمالي الوحدات",
    subtotalLabel: "المجموع الفرعي",
    checkout: "إتمام الشراء",
    checkoutHint: "نموذج تجريبي — إتمام الشراء غير مفعّل بعد.",
    close: "إغلاق",
  },
} satisfies Record<Locale, unknown>;

export function cartText(locale: Locale) {
  return dict[locale];
}
