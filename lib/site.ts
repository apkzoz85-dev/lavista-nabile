// ─────────────────────────────────────────────────────────────
//  كل بيانات الصفحة من هنا. عدّل هنا فقط.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://lavista-city.example.com", // ← غيّرها بالدومين الفعلي
  agency: "Grandeur Spaces",
  project: "لافيستا سيتي",
  projectEn: "La Vista City",
  phase: "العاصمة الإدارية الجديدة",
  phaseEn: "New Capital",
  developer: "لافيستا للتطوير العقاري",
  developerEn: "La Vista Developments",

  phone: "01030083122",
  phoneIntl: "+201030083122",
  phoneDisplay: "01030083122",
  whatsapp: "201030083122",
  email: "info@la-vistaeg.org",

  // ← ضع مفتاح Web3Forms هنا قبل النشر
  web3forms: "fb612a8a-0b13-45d4-bb1a-7a8d26c6f969",

  // ← Google Ads: ضع الـ tag و labels قبل النشر
  gtag: "",
  conv: {
    form: "",
    whatsapp: "",
    call: "",
  },
} as const;

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────  المشروع  ─────────────────────────────

export const terms = {
  years: 8,
  cashDiscount: 22.5,
  maintenance: 10,
  admin: 2,
};

export const location = {
  headline: "الحي السكني R4 — قلب العاصمة الإدارية",
  body:
    "لافيستا سيتي على مساحة حوالي 910 فدان في الحي السكني الرابع R4 بالعاصمة الإدارية الجديدة، بالقرب من محور محمد بن زايد والنهر الأخضر والحي الحكومي.",
  points: [
    { name: "محور محمد بن زايد", detail: "وصول مباشر من التجمع الخامس" },
    { name: "النهر الأخضر", detail: "على بُعد دقائق" },
    { name: "الحي الحكومي", detail: "بالقرب من المشروع" },
    { name: "حي المال والأعمال", detail: "بالقرب من المشروع" },
    { name: "التجمع الخامس والقاهرة الجديدة", detail: "عبر محور بن زايد" },
    { name: "مساحة المشروع", detail: "حوالي 910 فدان" },
  ],
};

// مميزات الاستلام الفوري
export const infrastructure = [
  { title: "جاهز للسكن", body: "وحدات مسلّمة في مراحل مكتملة البنية والخدمات، تقدر تعاينها وتستلم." },
  { title: "متشطب بالكامل", body: "الوحدات متشطبة بالكامل من المطور، من غير تكلفة أو وقت تشطيب إضافي." },
  { title: "تصميمين للواجهة", body: "كل نوع وحدة متاح بواجهة Classic متوسطية أو Modern معاصرة." },
  { title: "مراحل P1 و P5", body: "المخزون المتاح موزع على مرحلتين مكتملتين داخل الكمبوند." },
];

// لماذا الآن
export const investment = [
  {
    stat: "فوري",
    unit: "استلام",
    title: "استلام فوري بدل سنين انتظار",
    body: "بتدفع مقدم وتستلم وحدة متشطبة في مرحلة ساكنة، مش وحدة على الورق بتسليم بعد 4 سنين.",
  },
  {
    stat: "10%",
    unit: "مقدم",
    title: "مقدم 10% على وحدة جاهزة",
    body: "نادر تلاقي وحدة استلام فوري بمقدم 10% وتقسيط على 8 سنين في العاصمة الإدارية.",
  },
  {
    stat: "22.5%",
    unit: "خصم كاش",
    title: "خصم قوي للسداد الكاش",
    body: "لو هتدفع كاش، الخصم 22.5% من سعر الوحدة حسب المتاح ووقت الحجز.",
  },
  {
    stat: "910",
    unit: "فدان",
    title: "مجتمع فلل متكامل",
    body: "مساحة ضخمة أغلبها مساحات خضراء ومسطحات مائية وخدمات، في أهم أحياء العاصمة السكنية.",
  },
];

export const amenities = [
  { title: "كلوب هاوس", body: "مبنى كلوب هاوس على بحيرة ونوافير وسط المساحات الخضراء." },
  { title: "محاور مائية", body: "ممشى مائي بنوافير وحمامات سباحة ممتد بين صفوف الفلل." },
  { title: "حمامات سباحة", body: "حمامات سباحة مشتركة بين الوحدات بمناطق استرخاء وشماسي." },
  { title: "لاندسكيب ومسارات", body: "مسطحات خضراء ومسارات مشي وممرات مشجّرة بين الشوارع الداخلية." },
  { title: "بوابات وأمن", body: "كمبوند مغلق ببوابات دخول وحراسة على مدار الساعة." },
  { title: "إضاءة وممرات ليلية", body: "إضاءة معمارية للمحاور والسلالم والحدائق تخدم السكان بالليل." },
];

// ─────────────────────────────  المنتجات  ─────────────────────────────

export type Unit = {
  type: string;
  bua: { classic: number; modern: number };
  land: number;
  price: number;
  priceTo: number;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  nameEn: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  scarcity: string;
  dp: number;
  years: number;
  image: string;
  highlights: string[];
  groups: { title: string; note?: string; units: Unit[] }[];
};

export const products: Product[] = [
  {
    slug: "townhouses",
    name: "تاون هاوس وتوين هاوس",
    nameEn: "TOWNHOUSES & TWINS",
    eyebrow: "10% Down Payment",
    tagline: "تاون هاوس ميدل وكورنر وتوين هاوس جاهزة للسكن",
    intro:
      "أقرب مدخل لتملك بيت بجنينة في لافيستا سيتي. مساحات مبانٍ من 228 لـ 283 م² على أراضي من 216 لـ 297 م²، بمقدم 10% فقط وتقسيط 8 سنين.",
    scarcity: "متاح بعدد محدود في P1 و P5",
    dp: 10,
    years: 8,
    image: "/images/classic-row.webp",
    highlights: [
      "استلام فوري — متشطب بالكامل",
      "واجهة Classic أو Modern",
      "حديقة خاصة لكل وحدة",
      "يبدأ من 30 مليون جنيه",
    ],
    groups: [
      {
        title: "تاون هاوس",
        units: [
          { type: "تاون هاوس ميدل", bua: { classic: 228, modern: 235 }, land: 216, price: 30_000_000, priceTo: 31_300_000, image: "/images/classic-row.webp" },
          { type: "تاون هاوس كورنر", bua: { classic: 253, modern: 265 }, land: 285, price: 34_000_000, priceTo: 35_900_000, image: "/images/modern-row.webp" },
        ],
      },
      {
        title: "توين هاوس",
        units: [
          { type: "توين هاوس", bua: { classic: 275, modern: 283 }, land: 297, price: 36_800_000, priceTo: 39_300_000, image: "/images/classic-twin.webp" },
        ],
      },
    ],
  },
  {
    slug: "villas",
    name: "فلل مستقلة",
    nameEn: "STANDALONE VILLAS",
    eyebrow: "Ready to Move",
    tagline: "4 نماذج فلل مستقلة A و B و C1 و C2",
    intro:
      "فلل مستقلة بمساحات مبانٍ من 303 لـ 475 م² على أراضي تصل لـ 513 م²، أغلبها على المحاور المائية والكلوب هاوس، بمقدم 20% وتقسيط 8 سنين.",
    scarcity: "أعداد أقل — أغلبها حول المحور المائي",
    dp: 20,
    years: 8,
    image: "/images/modern-villa.webp",
    highlights: [
      "استلام فوري — متشطب بالكامل",
      "أراضي من 375 لـ 513 م²",
      "مواقع على المحاور المائية",
      "تبدأ من 44.8 مليون جنيه",
    ],
    groups: [
      {
        title: "فلل مستقلة",
        units: [
          { type: "فيلا A", bua: { classic: 303, modern: 312 }, land: 375, price: 44_800_000, priceTo: 46_100_000, image: "/images/site-villa-rear.webp" },
          { type: "فيلا B", bua: { classic: 336, modern: 347 }, land: 392, price: 51_200_000, priceTo: 53_900_000, image: "/images/modern-villa.webp" },
          { type: "فيلا C2", bua: { classic: 424, modern: 432 }, land: 513, price: 63_900_000, priceTo: 65_200_000, image: "/images/site-lagoon.webp" },
          { type: "فيلا C1", bua: { classic: 450, modern: 475 }, land: 473, price: 66_500_000, priceTo: 73_800_000, image: "/images/night-pool.webp" },
        ],
      },
    ],
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)!;

export const allUnits = products.flatMap((p) =>
  p.groups.flatMap((g) => g.units.map((u) => ({ ...u, product: p.name })))
);

export const minPrice = Math.min(...allUnits.map((u) => u.price));

// ─────────────────────────────  الأسئلة  ─────────────────────────────

export const faqs = [
  {
    q: "ما هو نظام السداد في لافيستا سيتي؟",
    a: "التاون هاوس والتوين هاوس بمقدم 10% والفلل المستقلة بمقدم 20%، والباقي على 8 سنين. وفي خصم 22.5% للسداد الكاش. جدول السداد الرسمي من المطور هو المعتمد.",
  },
  {
    q: "هل الوحدات جاهزة للاستلام؟",
    a: "نعم، الوحدات المعروضة جاهزة للسكن ومتشطبة بالكامل في مراحل P1 و P5، ويمكن معاينتها في الموقع قبل الحجز.",
  },
  {
    q: "أين يقع المشروع بالتحديد؟",
    a: "في الحي السكني R4 بالعاصمة الإدارية الجديدة، بالقرب من محور محمد بن زايد والنهر الأخضر، على مساحة حوالي 910 فدان.",
  },
  {
    q: "ما الفرق بين تصميم Classic و Modern؟",
    a: "Classic واجهات متوسطية بالقرميد والحجر الفاتح، و Modern واجهات معاصرة بالحجر الرمادي والزجاج. الأرض واحدة، والمساحة المبنية في الـ Modern أكبر قليلًا.",
  },
  {
    q: "ما المصاريف الإضافية؟",
    a: "وديعة صيانة 10% ومصاريف إدارية 2% من قيمة الوحدة.",
  },
  {
    q: "كيف أحجز وحدة؟",
    a: "سجّل بياناتك في النموذج أو تواصل عبر واتساب، وسيصلك المتاح الحالي بالأسعار والماستر بلان ونرتب معاك معاينة في الموقع.",
  },
];

export const fmt = (n: number) => n.toLocaleString("en-US");
export const fmtM = (n: number) =>
  `${(n / 1_000_000).toLocaleString("en-US", { maximumFractionDigits: 2 })}M`;
