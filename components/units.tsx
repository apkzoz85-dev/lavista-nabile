"use client";

import { useMemo, useState } from "react";
import { products, fmt, terms } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import { track } from "@/lib/track";
import { waLink } from "@/lib/site";

type Card = {
  key: string;
  product: string;
  productEn: string;
  group: string;
  type: string;
  bua: { classic: number; modern: number };
  land: number;
  price: number;
  priceTo: number;
  dp: number;
  years: number;
  image: string;
  note?: string;
};

const cards: Card[] = products.flatMap((p) =>
  p.groups.flatMap((g) =>
    g.units.map((u) => ({
      key: `${p.slug}-${u.type}`,
      product: p.name,
      productEn: p.nameEn,
      group: g.title,
      type: u.type,
      bua: u.bua,
      land: u.land,
      price: u.price,
      priceTo: u.priceTo,
      dp: p.dp,
      years: p.years,
      image: u.image,
      note: g.note,
    }))
  )
);

const tabs = [
  { id: "all", label: "كل الوحدات" },
  { id: "تاون هاوس", label: "تاون هاوس" },
  { id: "توين هاوس", label: "توين هاوس" },
  { id: "فلل مستقلة", label: "فلل مستقلة" },
];

export default function Units() {
  const [tab, setTab] = useState("all");
  const [style, setStyle] = useState<"classic" | "modern">("classic");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = useMemo(() => {
    const f = tab === "all" ? cards : cards.filter((c) => c.group === tab);
    return [...f].sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [tab, sort]);

  return (
    <section id="units" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Units & Prices"
            title="وحدات وأسعار لافيستا سيتي"
            sub="المتاح حاليًا من الـ Open Inventory في P1 و P5 — جاهز للسكن ومتشطب بالكامل. الأسعار استرشادية وتتغير مع المتاح، والمعتمد جدول السداد الرسمي من المطور."
          />
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  tab === t.id
                    ? "bg-brass-2 font-semibold text-ink"
                    : "border border-paper/25 text-paper/75 hover:border-brass-2 hover:text-brass-2"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <div className="flex rounded-full border border-paper/25 p-1" role="radiogroup" aria-label="تصميم الواجهة">
              {(["classic", "modern"] as const).map((s) => (
                <button
                  key={s}
                  role="radio"
                  aria-checked={style === s}
                  onClick={() => setStyle(s)}
                  className={`num rounded-full px-4 py-1.5 text-xs tracking-[0.12em] transition ${
                    style === s ? "bg-paper text-ink" : "text-paper/70 hover:text-brass-2"
                  }`}
                >
                  {s === "classic" ? "CLASSIC" : "MODERN"}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSort((s) => (s === "asc" ? "desc" : "asc"))}
              className="text-sm text-paper/60 underline underline-offset-8 hover:text-brass-2"
            >
              {sort === "asc" ? "الأقل سعرًا أولًا" : "الأعلى سعرًا أولًا"}
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 50}>
              <article className="slab-dark flex h-full flex-col overflow-hidden">
                <div className="relative h-44 w-full">
                  <img
                    src={c.image}
                    alt={`${c.type} — لافيستا سيتي`}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <span className="num absolute end-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.12em] text-brass-2">
                    {style === "classic" ? "CLASSIC" : "MODERN"}
                  </span>
                  <span className="absolute start-3 top-3 rounded-full bg-brass-2 px-3 py-1 text-[11px] font-semibold text-ink">
                    استلام فوري
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-paper/50">{c.product}</p>
                  <h3 className="mt-1 text-lg text-paper">{c.type}</h3>

                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-ink/50 p-4 text-[13px]">
                    <div>
                      <p className="text-paper/50">مساحة المباني</p>
                      <p className="num mt-1 text-paper">{c.bua[style]} m²</p>
                    </div>
                    <div>
                      <p className="text-paper/50">مساحة الأرض</p>
                      <p className="num mt-1 text-paper">{c.land} m²</p>
                    </div>
                    <div>
                      <p className="text-paper/50">المقدم</p>
                      <p className="num mt-1 text-paper">{c.dp}%</p>
                    </div>
                    <div>
                      <p className="text-paper/50">التقسيط</p>
                      <p className="mt-1 text-paper"><span className="num">{c.years}</span> سنين</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs text-paper/55">تبدأ من</p>
                    <p className="num mt-1 text-2xl text-brass-2">
                      {fmt(c.price)}{" "}
                      <span className="text-sm text-paper/60">EGP</span>
                    </p>
                    <p className="mt-1 text-xs text-paper/50">
                      حتى <span className="num">{fmt(c.priceTo)}</span> جنيه — كاش بخصم{" "}
                      <span className="num">{terms.cashDiscount}%</span>
                    </p>
                  </div>

                  <div className="mt-auto flex gap-2 pt-6">
                    <a
                      href={waLink(
                        `مهتم بـ ${c.type} ${style === "classic" ? "Classic" : "Modern"} في لافيستا سيتي العاصمة الإدارية. برجاء إرسال المتاح وخطة السداد.`
                      )}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track("whatsapp")}
                      className="flex-1 rounded-full bg-brass-2 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85"
                    >
                      التفاصيل والحجز
                    </a>
                    <a
                      href="#calc"
                      className="rounded-full border border-paper/25 px-4 py-2.5 text-sm text-paper/80 transition hover:border-brass-2 hover:text-brass-2"
                    >
                      احسب القسط
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs leading-6 text-paper/45">
          الأسعار المعروضة نطاق أسعار لكل نوع وتختلف حسب الموقع داخل المرحلة
          والتصميم. يضاف وديعة صيانة {terms.maintenance}% ومصاريف إدارية {terms.admin}%.
        </p>
      </div>
    </section>
  );
}
