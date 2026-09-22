import type { Locale } from "./locales";
import type { Category, Product } from "../products";

interface TextPair {
  name: string;
  description: string;
}

export const categoryTranslations: Record<Category, Record<Locale, { label: string; description: string }>> = {
  men: {
    en: { label: "Men", description: "Essentials, outerwear & workwear staples" },
    fr: { label: "Hommes", description: "Essentiels, vêtements d'extérieur et tenues de travail" },
    ar: { label: "رجال", description: "أساسيات وملابس خارجية وأزياء عمل" },
  },
  women: {
    en: { label: "Women", description: "Everyday basics through occasion wear" },
    fr: { label: "Femmes", description: "Du quotidien aux tenues habillées" },
    ar: { label: "نساء", description: "من الملابس اليومية إلى ملابس المناسبات" },
  },
  kids: {
    en: { label: "Kids", description: "Sizes 2T–14, sold by the case" },
    fr: { label: "Enfants", description: "Tailles 2 à 14 ans, vendues par carton" },
    ar: { label: "أطفال", description: "المقاسات من 2 إلى 14 سنة، تُباع بالكرتون" },
  },
};

const fr: Record<string, TextPair> = {
  m1: { name: "T-shirt col rond épais", description: "Col rond en coton peigné 270g/m², conçu pour l'impression et la broderie. Coupe homogène sur toute la série, prérétréci." },
  m2: { name: "Veste de travail en toile", description: "Toile lavée 12oz avec col en velours côtelé. Coutures renforcées aux points de tension pour des lavages répétés." },
  m3: { name: "Polaire zippée col montant", description: "Micro-polaire anti-bouloche, intérieur brossé. Un article de réassort régulier pour les programmes d'entreprise et d'équipe." },
  m4: { name: "Jean selvedge coupe droite", description: "Denim selvedge 13oz d'un moulin que nous utilisons depuis six saisons. Ourlet chaîné sur demande." },
  m5: { name: "Pantalon cargo utilitaire", description: "Coton ripstop mélangé avec genou articulé et six poches. Taux de réassort élevé." },
  m6: { name: "Pull col rond en laine mérinos", description: "Mérinos 17,5 microns, épaules fully-fashioned. Finition anti-bouloche testée sur 30 lavages." },
  w1: { name: "Robe portefeuille en modal", description: "Jersey mélangé modal fluide qui tombe sans coller. L'un de nos styles à la rotation la plus rapide." },
  w2: { name: "Blazer ajusté", description: "Épaule structurée, semi-doublé pour la respirabilité. Réassort constant avant les T3/T4." },
  w3: { name: "Legging sans couture côtelé", description: "Extensible 4 directions, 200g/m², non transparent même en squat. Les acheteurs activewear le recommandent à chaque cycle." },
  w4: { name: "Chemise en mélange de lin", description: "55% lin, 45% coton pour de la structure sans le froissement excessif. Taille fidèle." },
  w5: { name: "Gilet matelassé", description: "Garnissage léger adapté aux trois saisons. Bon taux d'attache avec les programmes d'extérieur." },
  w6: { name: "Jupe midi en maille", description: "Maille côtelée avec ceinture souple. Se marie facilement avec trois autres styles de la gamme." },
  k1: { name: "Lot de 3 t-shirts imprimés", description: "Carton pré-emballé de 3 pièces en tailles mixtes. L'article le plus demandé de la gamme enfant." },
  k2: { name: "Hoodie zippé en polaire", description: "Polaire brossée, coutures doubles résistantes. Livré préréparti par taille et emballé par carton." },
  k3: { name: "Barboteuse en coton", description: "Barboteuse à pression en coton certifié GOTS. Un incontournable pour les acheteurs bébé/tout-petit." },
  k4: { name: "Ensemble jogging", description: "Sweat et jogging assortis, poignets côtelés. Vendu en ensemble, facturé en ensemble." },
  k5: { name: "Coupe-vent imperméable", description: "Coutures thermosoudées, capuche escamotable. Saisonnier mais se réassortit vite au changement de temps." },
  k6: { name: "Lot de 2 polos scolaires", description: "Piqué qualité uniforme, lavage grand teint. Notre article de rentrée scolaire le plus stable." },
};

const ar: Record<string, TextPair> = {
  m1: { name: "تيشيرت بياقة دائرية سميك", description: "قطن مصنّع بوزن 270غ/م²، مثالي للطباعة والتطريز. مقاس ثابت عبر الدفعة، مُقلّص مسبقًا." },
  m2: { name: "سترة عمل من القماش القطني", description: "قماش مغسول بوزن 12 أونصة مع ياقة من المخمل المضلع. خياطة معززة في نقاط الإجهاد لتحمل الغسيل المتكرر." },
  m3: { name: "بلوزة صوفية بسحاب نصفي", description: "قماش مايكروفليس مقاوم للتكتل، بطانة مصقولة. منتج يُعاد طلبه باستمرار لبرامج الشركات والفرق." },
  m4: { name: "جينز سيلفيدج بقصة مستقيمة", description: "دنيم سيلفيدج بوزن 13 أونصة من مصنع نتعامل معه منذ ست مواسم. حياكة الحافة بالسلسلة عند الطلب." },
  m5: { name: "بنطال كارغو عملي", description: "قطن ريبستوب مطاطي بركبة مفصلية وست جيوب. معدل إعادة طلب مرتفع." },
  m6: { name: "سترة صوف ميرينو بياقة دائرية", description: "صوف ميرينو 17.5 ميكرون بأكتاف منسوجة بالكامل. مقاومة للتكتل، مُختبرة لـ30 غسلة." },
  w1: { name: "فستان ملفوف من المودال", description: "قماش جيرسي مودال انسيابي يتدلى دون التصاق بالجسم. من أسرع الموديلات مبيعًا لدينا." },
  w2: { name: "بليزر مفصّل", description: "كتف مهيكل، بطانة جزئية لتهوية أفضل. يُعاد طلبه باستمرار قبل الربعين الثالث والرابع." },
  w3: { name: "ليقنز مضلع بلا خياطة", description: "قماش مطاطي رباعي الاتجاهات بوزن 200غ/م²، غير شفاف حتى عند الانحناء. يُطلب باستمرار من قبل تجار الملابس الرياضية." },
  w4: { name: "قميص من مزيج الكتان", description: "55% كتان و45% قطن لملمس متماسك دون تجعد مفرط. يطابق المقاس الحقيقي." },
  w5: { name: "سترة مبطنة بدون أكمام", description: "حشوة خفيفة الوزن تناسب ثلاثة فصول. نسبة إقبال جيدة مع برامج الملابس الخارجية." },
  w6: { name: "تنورة ميدي محبوكة", description: "قماش محبوك مضلع بحزام ناعم. تتناسق بسهولة مع ثلاثة موديلات أخرى من نفس المجموعة." },
  k1: { name: "طقم 3 تيشيرتات مطبوعة", description: "كرتون معبأ مسبقًا بثلاث قطع بمقاسات متنوعة. الأكثر مبيعًا في تشكيلة الأطفال." },
  k2: { name: "هودي بسحاب من الصوف الصناعي", description: "قماش مصقول من الداخل بخياطة مزدوجة تتحمل نشاط الأطفال. يُشحن مُصنّفًا حسب المقاس ومعبأ بالكرتون." },
  k3: { name: "رومبر قطني للأطفال", description: "رومبر بأزرار كبس من قطن معتمد GOTS. أساسي دائم لتجار ملابس الرضع والأطفال الصغار." },
  k4: { name: "طقم جوغر", description: "بلوزة وبنطال جوغر متناسقان بأساور مضلعة. يُباع كطقم واحد وبسعر الطقم." },
  k5: { name: "معطف واق من المطر", description: "خياطة مانعة لتسرب الماء، قبعة قابلة للطي. موسمي لكنه يُعاد طلبه بسرعة مع تغيّر الطقس." },
  k6: { name: "طقم 2 بولو مدرسي", description: "قماش بيكيه بجودة الزي الموحد، ثابت اللون بعد الغسيل. أكثر منتج مستقر لدينا في موسم العودة للمدارس." },
};

const byLocale: Record<Exclude<Locale, "en">, Record<string, TextPair>> = { fr, ar };

export function translateProduct(
  product: Pick<Product, "id" | "name" | "description">,
  locale: Locale
): TextPair {
  if (locale === "en") return { name: product.name, description: product.description };
  return byLocale[locale][product.id] ?? { name: product.name, description: product.description };
}
