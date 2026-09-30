// ==== كل الإعدادات اللي بتتغير من هنا ====
export const SITE = {
  url: "https://lavista-city.example.com", // ← غيّرها للدومين النهائي
  brand: "Grandeur Spaces",
  brandAr: "جراندير سبيسز",
  phoneDisplay: "01030083122",
  phoneTel: "+201030083122",
  whatsapp: "201030083122",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // ← حط الـ Access Key
  // Google Ads — استبدل القيم بعد إنشاء التحويلات
  gtagId: "AW-XXXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXXX/FORM_LABEL",
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
  },
};

export const waLink = (msg = "مرحبا، عايز تفاصيل وحدات لافيستا سيتي العاصمة الإدارية الجاهزة") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Unit = {
  id: string;
  name: string;
  group: "town" | "villa";
  bua: { classic: number; modern: number };
  land: number;
  priceFrom: number; // مليون
  priceTo: number; // مليون
  dp: number; // نسبة المقدم
};

// من الـ factsheet (Open Inventory)
export const UNITS: Unit[] = [
  { id: "th-middle", name: "تاون هاوس ميدل", group: "town", bua: { classic: 228, modern: 235 }, land: 216, priceFrom: 30, priceTo: 31.3, dp: 0.1 },
  { id: "th-corner", name: "تاون هاوس كورنر", group: "town", bua: { classic: 253, modern: 265 }, land: 285, priceFrom: 34, priceTo: 35.9, dp: 0.1 },
  { id: "twin", name: "توين هاوس", group: "town", bua: { classic: 275, modern: 283 }, land: 297, priceFrom: 36.8, priceTo: 39.3, dp: 0.1 },
  { id: "villa-a", name: "فيلا A", group: "villa", bua: { classic: 303, modern: 312 }, land: 375, priceFrom: 44.8, priceTo: 46.1, dp: 0.2 },
  { id: "villa-b", name: "فيلا B", group: "villa", bua: { classic: 336, modern: 347 }, land: 392, priceFrom: 51.2, priceTo: 53.9, dp: 0.2 },
  { id: "villa-c2", name: "فيلا C2", group: "villa", bua: { classic: 424, modern: 432 }, land: 513, priceFrom: 63.9, priceTo: 65.2, dp: 0.2 },
  { id: "villa-c1", name: "فيلا C1", group: "villa", bua: { classic: 450, modern: 475 }, land: 473, priceFrom: 66.5, priceTo: 73.8, dp: 0.2 },
];

export const TERMS = { years: 8, cashDiscount: 0.225, maintenance: 0.1, admin: 0.02 };

export const FAQ = [
  { q: "لافيستا سيتي فين بالظبط؟", a: "في الحي السكني R4 بالعاصمة الإدارية الجديدة، قريب من محور محمد بن زايد والنهر الأخضر، والمشروع على مساحة حوالي 910 فدان." },
  { q: "الوحدات جاهزة للاستلام؟", a: "أيوه، الوحدات المعروضة في الـ Open Inventory جاهزة للسكن ومتشطبة بالكامل." },
  { q: "إيه أنظمة السداد المتاحة؟", a: "التاون هاوس والتوين هاوس بمقدم 10% وتقسيط على 8 سنين، والفلل المستقلة بمقدم 20% وتقسيط على 8 سنين." },
  { q: "في خصم للكاش؟", a: "أيوه، خصم 22.5% في حالة السداد كاش، حسب الوحدة ووقت الحجز." },
  { q: "إيه الفرق بين Classic و Modern؟", a: "Classic تصميم متوسطي بالقرميد والحجر الفاتح، و Modern واجهات معاصرة بخطوط مستقيمة وزجاج. الـ Modern مساحته المبنية أكبر شوية في كل الأنواع." },
  { q: "إيه المصاريف الإضافية؟", a: "وديعة صيانة 10% ومصاريف إدارية 2% من قيمة الوحدة." },
];
