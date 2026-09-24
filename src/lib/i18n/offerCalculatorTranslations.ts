import type { Locale } from "./locales";

export interface OfferStepText {
  question: string;
  options: Record<string, string>;
}

export interface OfferCalculatorText {
  triggerButton: string;
  modalTitle: string;
  modalSubtitle: string;
  stepLabel: (n: number) => string;
  steps: {
    type: OfferStepText;
    wholesaleOrdering: OfferStepText;
    retailPresence: OfferStepText;
    retailVolume: OfferStepText;
    updates: OfferStepText;
    updateFrequency: OfferStepText;
    orderHandling: OfferStepText;
    team: OfferStepText;
    teamAccess: OfferStepText;
    domain: OfferStepText;
  };
  nav: { next: string; back: string; close: string };
  results: {
    title: string;
    tier1: { name: string; description: string };
    tier2: { name: string; description: string };
    tier3: { name: string; description: string };
    baseLabel: string;
    domainAddOnLabel: string;
    freeSubdomainNote: string;
    totalLabel: string;
    daSuffix: string;
    customQuoteNote: string;
    ctaButton: string;
    restartButton: string;
    exampleButton: string;
    summaryMessage: (tierName: string, priceText: string) => string;
    formIntro: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    businessNameLabel: string;
    businessNamePlaceholder: string;
    sending: string;
    errorMessage: string;
    successTitle: string;
    successMessage: string;
    close: string;
  };
}

const dict: Record<Locale, OfferCalculatorText> = {
  ar: {
    triggerButton: "صمّم عرضك المناسب وتعرّف على تكلفته",
    modalTitle: "احسب سعر موقعك",
    modalSubtitle: "جاوب على بضعة أسئلة بسيطة عن طريقة خدمتك، ونعطيك التكلفة التقديرية مباشرة.",
    stepLabel: (n) => `السؤال ${n}`,
    steps: {
      type: {
        question: "تخدم جملة ولا تفصيل؟",
        options: { wholesale: "جملة", retail: "تفصيل" },
      },
      wholesaleOrdering: {
        question: "الطلبيات كيفاه توصلك حاليا؟ في واتساب، فيسبوك، إنستغرام، ولا يتصلو بيك بالهاتف؟",
        options: {
          phone: "غير بالهاتف ولا يجيو للمحل/الستوك",
          social: "يبعثولي في واتساب / إنستغرام / فيسبوك",
        },
      },
      retailPresence: {
        question: "عندك محل فيزيكي الناس تجيه، ولا تخدم غير أونلاين؟",
        options: { physical: "عندي محل فيزيكي", online: "نخدم غير أونلاين" },
      },
      retailVolume: {
        question: "شحال عندك من منتوج تقريبا؟",
        options: {
          few: "عندي غير شوية (10 - 20 منتوج)",
          many: "عندي منتجات بزاف ومختلفين",
        },
      },
      updates: {
        question: "كي يجيك منتوج جديد ولا يخلصلك منتوج، تحب تدخل للموقع وتزيدو/تخبيه وحدك، ولا تحب نزيدهولك أنا كي تبعثلي؟",
        options: {
          self: "نزيدو وحدي كي يحضرلي الوقت",
          dev: "أنت زيدهولي، ما عنديش الوقت ندخل للموقع",
        },
      },
      updateFrequency: {
        question: "المنتجات والأسعار تبدلهم كل نهار/سيمانة، ولا مرة كل شهرين ولا ثلاثة؟",
        options: {
          high: "كل يوم/سيمانة كاين الجديد والأسعار تتبدل",
          low: "مرة في شحال (شهرين ولا أكثر)",
        },
      },
      orderHandling: {
        question:
          "كي واحد يشري عليك، يكفيك توصلك رسالة فيها كامل معطيات الزبون والطلب في الواتساب، ولا تحب تدخل للموقع وتشوف جدول فيه كامل الطلبيات؟",
        options: {
          whatsapp: "رسالة في الواتساب برك تكفيني",
          table: "نحب جدول منسق في الموقع ونشوف كامل الطلبيات اللي جاو",
        },
      },
      team: {
        question: "تخدم وحدك في إدارة الطلبيات، ولا عندك خدامين معاك؟",
        options: { solo: "نخدم وحدي", team: "عندي خدامين معايا" },
      },
      teamAccess: {
        question: "كل واحد تحب يدخل بحساب خاص بيه، ولا كامل تخدمو بحساب واحد؟",
        options: { multi: "كل واحد بحسابو", single: "يكفي حساب واحد" },
      },
      domain: {
        question: "تحب اسم الموقع يكون باسم شركتك بالضبط (مثلا: nomstore.com)، ولا ما يهمكش؟",
        options: { custom: "نحب باسم شركتي بالضبط", any: "ما يهمش / اعطيني أسهل وأرخص خيار" },
      },
    },
    nav: { next: "التالي", back: "رجوع", close: "إغلاق" },
    results: {
      title: "هذي التكلفة التقديرية لموقعك",
      tier1: {
        name: "الباقة الأساسية — صفحة عرض",
        description: "صفحة واحدة نظيفة تعرض منتجاتك وتستقبل طلبات زبائنك عبر واتساب. نتكفلو نحن بتحديث المنتوجات كي تحتاج.",
      },
      tier2: {
        name: "باقة الموقع الكامل",
        description: "موقع كامل تقدر تزيد وتنقص منتوجاتك بنفسك في أي وقت، مبني على قالب جاهز، مستضاف مجانًا.",
      },
      tier3: {
        name: "باقة النظام المتكامل",
        description:
          "مشروع مخصص بالكامل: تحكم كامل، جدول طلبيات، حسابات متعددة، دمج الدفع الإلكتروني، واسم نطاق خاص بالكامل. السعر يُحدد بدقة أكبر بعد ما نتناقشو في تفاصيل مشروعك.",
      },
      baseLabel: "سعر الباقة",
      domainAddOnLabel: "اسم نطاق خاص (.com / .dz)",
      freeSubdomainNote: "نطاق فرعي مجاني مشمول",
      totalLabel: "المجموع التقديري",
      daSuffix: "دج",
      customQuoteNote: "هذا السعر يشمل كل شيء — لا رسوم إضافية على النطاق.",
      ctaButton: "تواصل معنا نبدأو مشروعك",
      restartButton: "أعد الحساب من البداية",
      exampleButton: "شاهد مثال على عرضك",
      summaryMessage: (tierName, priceText) =>
        `مهتم بـ "${tierName}" — السعر التقديري اللي طلع لي: ${priceText} دج. حاب نتواصل معاكم لنبداو المشروع.`,
      formIntro: "خلي لينا معلومات التواصل باش نبداو معاك:",
      phoneLabel: "رقم الهاتف (واتساب)",
      phonePlaceholder: "+213 5XX XX XX XX",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "example@email.com",
      businessNameLabel: "اسم المحل أو الشركة",
      businessNamePlaceholder: "مثال: متجر الأناقة",
      sending: "جارٍ الإرسال…",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      successTitle: "توصل طلبك",
      successMessage: "شكرًا لك — توصلنا بمعلوماتك وراح نتواصلو معاك قريبًا لنبداو المشروع.",
      close: "إغلاق",
    },
  },
  fr: {
    triggerButton: "Concevez votre offre et découvrez son coût",
    modalTitle: "Calculez le prix de votre site",
    modalSubtitle: "Répondez à quelques questions simples sur votre façon de travailler, et obtenez une estimation immédiate.",
    stepLabel: (n) => `Question ${n}`,
    steps: {
      type: {
        question: "Vous vendez en gros ou au détail ?",
        options: { wholesale: "Gros", retail: "Détail" },
      },
      wholesaleOrdering: {
        question: "Comment vos commandes vous arrivent-elles actuellement ? WhatsApp, Facebook, Instagram, ou par téléphone ?",
        options: {
          phone: "Seulement par téléphone ou en magasin",
          social: "Sur WhatsApp / Instagram / Facebook",
        },
      },
      retailPresence: {
        question: "Avez-vous un magasin physique, ou travaillez-vous uniquement en ligne ?",
        options: { physical: "J'ai un magasin physique", online: "Uniquement en ligne" },
      },
      retailVolume: {
        question: "Combien de produits avez-vous environ ?",
        options: {
          few: "Juste quelques-uns (10 à 20 produits)",
          many: "Beaucoup, et variés",
        },
      },
      updates: {
        question:
          "Quand un nouveau produit arrive ou qu'un produit est épuisé, voulez-vous le modifier vous-même sur le site, ou préférez-vous nous l'envoyer pour qu'on s'en charge ?",
        options: {
          self: "Je préfère le faire moi-même quand j'ai le temps",
          dev: "Faites-le pour moi, je n'ai pas le temps",
        },
      },
      updateFrequency: {
        question: "Les produits et les prix changent-ils chaque jour/semaine, ou plutôt une fois tous les deux ou trois mois ?",
        options: {
          high: "Ça change tout le temps (jour/semaine)",
          low: "Rarement (tous les 2-3 mois ou plus)",
        },
      },
      orderHandling: {
        question:
          "Quand quelqu'un achète chez vous, un message WhatsApp avec les infos client et la commande vous suffit-il, ou préférez-vous un tableau sur le site avec toutes les commandes ?",
        options: {
          whatsapp: "Un simple message WhatsApp me suffit",
          table: "Je veux un tableau organisé sur le site avec toutes les commandes",
        },
      },
      team: {
        question: "Gérez-vous les commandes seul, ou avez-vous une équipe avec vous ?",
        options: { solo: "Je travaille seul", team: "J'ai une équipe avec moi" },
      },
      teamAccess: {
        question: "Chacun a-t-il besoin de son propre compte, ou un seul compte partagé suffit ?",
        options: { multi: "Un compte pour chacun", single: "Un seul compte suffit" },
      },
      domain: {
        question: "Voulez-vous que le nom du site soit exactement celui de votre entreprise (ex. nomstore.com), ou peu importe ?",
        options: { custom: "Je veux exactement le nom de mon entreprise", any: "Peu importe / l'option la plus simple et économique" },
      },
    },
    nav: { next: "Suivant", back: "Retour", close: "Fermer" },
    results: {
      title: "Voici le coût estimé de votre site",
      tier1: {
        name: "Formule de base — Page vitrine",
        description: "Une page unique et soignée qui présente vos produits et reçoit les commandes via WhatsApp. Nous mettons à jour les produits pour vous.",
      },
      tier2: {
        name: "Formule Site complet",
        description: "Un site complet où vous ajoutez et retirez vos produits vous-même à tout moment, basé sur un modèle prêt à l'emploi, hébergé gratuitement.",
      },
      tier3: {
        name: "Formule Système complet",
        description:
          "Un projet entièrement sur mesure : contrôle total, tableau de commandes, comptes multiples, paiement en ligne intégré, et nom de domaine personnalisé. Le prix exact se précise après avoir discuté des détails de votre projet.",
      },
      baseLabel: "Prix de la formule",
      domainAddOnLabel: "Nom de domaine personnalisé (.com / .dz)",
      freeSubdomainNote: "Sous-domaine gratuit inclus",
      totalLabel: "Total estimé",
      daSuffix: "DA",
      customQuoteNote: "Ce prix inclut tout — aucun frais de domaine supplémentaire.",
      ctaButton: "Contactez-nous pour démarrer",
      restartButton: "Recommencer le calcul",
      exampleButton: "Voir un exemple de votre offre",
      summaryMessage: (tierName, priceText) =>
        `Intéressé(e) par "${tierName}" — l'estimation obtenue : ${priceText} DA. J'aimerais qu'on démarre le projet.`,
      formIntro: "Laissez-nous vos coordonnées pour qu'on démarre avec vous :",
      phoneLabel: "Numéro de téléphone (WhatsApp)",
      phonePlaceholder: "+213 5XX XX XX XX",
      emailLabel: "E-mail",
      emailPlaceholder: "exemple@email.com",
      businessNameLabel: "Nom du magasin ou de l'entreprise",
      businessNamePlaceholder: "ex. Boutique Élégance",
      sending: "Envoi en cours…",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      successTitle: "Votre demande est bien reçue",
      successMessage: "Merci — nous avons reçu vos informations et reviendrons vers vous rapidement pour démarrer le projet.",
      close: "Fermer",
    },
  },
  en: {
    triggerButton: "Design your offer and see its cost",
    modalTitle: "Calculate your website's price",
    modalSubtitle: "Answer a few simple questions about how you work, and get an instant estimate.",
    stepLabel: (n) => `Question ${n}`,
    steps: {
      type: {
        question: "Do you sell wholesale or retail?",
        options: { wholesale: "Wholesale", retail: "Retail" },
      },
      wholesaleOrdering: {
        question: "How do orders reach you right now — WhatsApp, Facebook, Instagram, or phone calls?",
        options: {
          phone: "Only by phone or people visiting in person",
          social: "They message me on WhatsApp / Instagram / Facebook",
        },
      },
      retailPresence: {
        question: "Do you have a physical store people visit, or do you only sell online?",
        options: { physical: "I have a physical store", online: "Online only" },
      },
      retailVolume: {
        question: "Roughly how many products do you have?",
        options: {
          few: "Just a few (10-20 products)",
          many: "A lot, and varied",
        },
      },
      updates: {
        question:
          "When a new product arrives or one sells out, do you want to add/remove it yourself on the site, or would you rather send it to us to handle?",
        options: {
          self: "I'll add it myself when I have time",
          dev: "You handle it, I don't have time for the site",
        },
      },
      updateFrequency: {
        question: "Do products and prices change every day/week, or more like once every two or three months?",
        options: {
          high: "Constantly (daily/weekly)",
          low: "Rarely (every 2-3 months or less)",
        },
      },
      orderHandling: {
        question:
          "When someone buys from you, is a WhatsApp message with the customer and order details enough, or do you want a table on the site showing all your orders?",
        options: {
          whatsapp: "A WhatsApp message is enough for me",
          table: "I want an organized table on the site with all my orders",
        },
      },
      team: {
        question: "Do you manage orders alone, or do you have a team working with you?",
        options: { solo: "I work alone", team: "I have a team with me" },
      },
      teamAccess: {
        question: "Does everyone need their own login, or is one shared account enough?",
        options: { multi: "Everyone gets their own login", single: "One shared account is enough" },
      },
      domain: {
        question: "Do you want the site's name to be exactly your company's name (e.g. nomstore.com), or doesn't it matter?",
        options: { custom: "I want my exact company name", any: "Doesn't matter / give me the simplest, cheapest option" },
      },
    },
    nav: { next: "Next", back: "Back", close: "Close" },
    results: {
      title: "Here's your estimated website cost",
      tier1: {
        name: "Basic Package — Showcase Page",
        description: "One clean page showing your products and receiving customer orders via WhatsApp. We update the products for you.",
      },
      tier2: {
        name: "Full Website Package",
        description: "A complete website where you add and remove your own products anytime, built on a ready-made template, hosted for free.",
      },
      tier3: {
        name: "Full Integrated System Package",
        description:
          "A fully custom project: complete control, an order-tracking table, multiple accounts, integrated online payment, and a fully custom domain. The exact price is confirmed once we discuss your project's details.",
      },
      baseLabel: "Package price",
      domainAddOnLabel: "Custom domain name (.com / .dz)",
      freeSubdomainNote: "Free subdomain included",
      totalLabel: "Estimated total",
      daSuffix: "DA",
      customQuoteNote: "This price includes everything — no extra domain fees.",
      ctaButton: "Contact us to get started",
      restartButton: "Restart the calculation",
      exampleButton: "See an example of your offer",
      summaryMessage: (tierName, priceText) =>
        `Interested in "${tierName}" — the estimate I got: ${priceText} DA. I'd like to get started.`,
      formIntro: "Leave us your contact info so we can get started with you:",
      phoneLabel: "Phone number (WhatsApp)",
      phonePlaceholder: "+213 5XX XX XX XX",
      emailLabel: "Email",
      emailPlaceholder: "example@email.com",
      businessNameLabel: "Store or business name",
      businessNamePlaceholder: "e.g. Elegance Boutique",
      sending: "Sending…",
      errorMessage: "Something went wrong. Please try again.",
      successTitle: "Your request is in",
      successMessage: "Thanks — we've received your info and will get back to you shortly to start the project.",
      close: "Close",
    },
  },
};

export function offerCalculatorText(locale: Locale): OfferCalculatorText {
  return dict[locale];
}
