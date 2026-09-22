import type { Locale } from "./locales";
import type { AutoPartCategory, AutoPart } from "../autoParts";

interface TextPair {
  name: string;
  description: string;
}

export const autoPartCategoryTranslations: Record<AutoPartCategory, Record<Locale, { label: string; description: string }>> = {
  engine: {
    en: { label: "Engine & filters", description: "Filters, belts, plugs & fluids" },
    fr: { label: "Moteur & filtres", description: "Filtres, courroies, bougies & fluides" },
    ar: { label: "المحرك والفلاتر", description: "فلاتر، سيور، بواجي وزيوت" },
  },
  "brakes-suspension": {
    en: { label: "Brakes & suspension", description: "Pads, discs, shocks & bushings" },
    fr: { label: "Freinage & suspension", description: "Plaquettes, disques, amortisseurs & silentblocs" },
    ar: { label: "الفرامل والتعليق", description: "تيل الفرامل، الأقراص، المساعدات والجلب" },
  },
  "electrical-lighting": {
    en: { label: "Electrical & lighting", description: "Batteries, bulbs & sensors" },
    fr: { label: "Électricité & éclairage", description: "Batteries, ampoules & capteurs" },
    ar: { label: "الكهرباء والإضاءة", description: "بطاريات، مصابيح وحساسات" },
  },
};

const fr: Record<string, TextPair> = {
  ap1: { name: "Filtre à huile standard", description: "Compatible moteurs essence/diesel 1.4L–2.0L. Clapet anti-retour, filtration à 20 microns." },
  ap2: { name: "Kit de distribution + tendeur", description: "Kit complet : courroie, galet tendeur, galet enrouleur. Compatible applications 1.6L–2.2L courantes." },
  ap3: { name: "Bougie d'allumage iridium", description: "Électrode fine en iridium pour une durée de vie prolongée et un allumage stable. Écartement préréglé." },
  ap4: { name: "Huile moteur 5W-30 synthétique", description: "Huile 100% synthétique API SN/CF, adaptée à la plupart des moteurs essence/diesel récents." },
  ap5: { name: "Filtre à air, panneau", description: "Élément en papier plissé, remplacement direct. Grande capacité de rétention pour les routes locales." },
  ap6: { name: "Courroie serpentine", description: "Construction en caoutchouc EPDM, résiste aux fissures dues à la chaleur. Profil strié courant." },
  ap7: { name: "Plaquettes de frein avant", description: "Composé céramique faible poussière, capteur d'usure et kit de fixation inclus." },
  ap8: { name: "Disques de frein avant (paire)", description: "Disques ventilés et revêtus anticorrosion. Équilibrés et usinés selon la tolérance d'origine." },
  ap9: { name: "Amortisseur avant", description: "Conception bitube à gaz pour un amortissement constant sur routes dégradées." },
  ap10: { name: "Kit de silentblocs de triangle", description: "Réduit le jeu et les bruits sur les bosses. Remplacement direct, sans modification." },
  ap11: { name: "Moyeu de roue avec roulement", description: "Ensemble prémonté avec roulement scellé et bague de capteur ABS le cas échéant." },
  ap12: { name: "Kit de coupelle d'amortisseur", description: "Plaque de roulement et coupelle en un seul kit, élimine le bruit de cliquetis en braquage complet." },
  ap13: { name: "Batterie de voiture 60Ah", description: "Batterie plomb-acide sans entretien, 540A de démarrage à froid. Compatible berlines compactes et moyennes." },
  ap14: { name: "Kit ampoules LED phares", description: "Conversion LED plug-and-play, 6000K, ventilateur de refroidissement intégré." },
  ap15: { name: "Alternateur reconditionné", description: "Testé selon la spécification d'origine, poulie incluse. Compatible plusieurs plateformes 4 cylindres." },
  ap16: { name: "Sonde à oxygène (O2)", description: "Capteur amont/aval à montage direct, résout les codes défaut mélange pauvre/riche." },
  ap17: { name: "Capteur de vitesse de roue ABS", description: "Restaure le fonctionnement ABS/antipatinage. Connecteur inclus, sans épissurage." },
  ap18: { name: "Bloc optique antibrouillard", description: "Boîtier à montage direct avec ampoule incluse. Correspond au faisceau et aux points de fixation d'origine." },
};

const ar: Record<string, TextPair> = {
  ap1: { name: "فلتر زيت عادي", description: "يناسب أغلب المحركات بسعة 1.4 إلى 2.0 لتر بنزين أو ديزل. صمام مانع للتسرب، تصفية دقيقة حتى 20 ميكرون." },
  ap2: { name: "طقم سير المحرك + الموتر", description: "طقم كامل: سير، بكرة موتر، بكرة دليل. يناسب أغلب المحركات من 1.6 إلى 2.2 لتر." },
  ap3: { name: "بوجي إيريديوم", description: "رأس دقيق من الإيريديوم لعمر أطول واشتعال ثابت. جاهز للتركيب بالمسافة الصحيحة مسبقًا." },
  ap4: { name: "زيت محرك 5W-30 اصطناعي", description: "زيت اصطناعي 100% بمواصفة API SN/CF، يناسب أغلب المحركات الحديثة بنزين وديزل." },
  ap5: { name: "فلتر هواء، نوع لوحي", description: "عنصر ورقي مطوي، بديل مباشر. قدرة عالية على احتباس الغبار مناسبة لطرقنا المحلية." },
  ap6: { name: "سير مساعدات (سيربنتين)", description: "مصنوع من مطاط EPDM، يقاوم التشقق الحراري. مقاس مضلع شائع بين عدة موديلات." },
  ap7: { name: "تيل فرامل أمامي", description: "خليط سيراميك قليل الغبار، مع حساس تآكل وطقم تثبيت. سطح مهيأ مسبقًا للاستعمال." },
  ap8: { name: "أقراص فرامل أمامية (زوج)", description: "أقراص مهواة ومطلية مضادة للصدأ. متوازنة ومشغّلة حسب مواصفة المصنع." },
  ap9: { name: "مساعد أمامي", description: "تصميم بأنبوبين مملوء بالغاز لتخميد ثابت على الطرق الوعرة." },
  ap10: { name: "طقم جلب ذراع التعليق", description: "يقلل الاهتزاز والصوت عند المطبات. تركيب مباشر بدون أي تعديل." },
  ap11: { name: "محور عجلة مع رمان", description: "وحدة جاهزة مع رمان مغلق وحلقة حساس ABS حسب الموديل. تركيب مباشر." },
  ap12: { name: "طقم طبلون المساعد", description: "صفيحة الرمان والطبلون في طقم واحد، يزيل صوت الطقطقة عند لف المقود بالكامل." },
  ap13: { name: "بطارية سيارة 60 أمبير", description: "بطارية رصاصية بدون صيانة، 540 أمبير بدء تشغيل بارد. تناسب أغلب السيارات المتوسطة والصغيرة." },
  ap14: { name: "طقم مصابيح LED أمامية", description: "تحويل LED جاهز للتركيب مباشرة، إضاءة 6000K، مروحة تبريد مدمجة." },
  ap15: { name: "دينامو مجدد", description: "مختبر حسب مواصفة المصنع، مع البكرة. يناسب عدة موديلات ذات 4 أسطوانات." },
  ap16: { name: "حساس أكسجين (O2)", description: "حساس أمامي/خلفي تركيب مباشر، يحل أعطال خلل نسبة الوقود والهواء." },
  ap17: { name: "حساس سرعة العجلة ABS", description: "يعيد تفعيل نظام ABS ومنع الانزلاق. يشمل الوصلة، بدون لحام." },
  ap18: { name: "طقم ضوء ضبابي", description: "هيكل تركيب مباشر مع المصباح. يطابق شكل الإضاءة ونقاط التثبيت الأصلية." },
};

const byLocale: Record<Exclude<Locale, "en">, Record<string, TextPair>> = { fr, ar };

export function translateAutoPart(product: AutoPart, locale: Locale): TextPair {
  if (locale === "en") return { name: product.name, description: product.description };
  return byLocale[locale][product.id] ?? { name: product.name, description: product.description };
}
