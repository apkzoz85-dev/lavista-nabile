"use client";

import { useMemo, useState } from "react";
import { products, fmt, terms } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

const options = products.flatMap((p) =>
  p.groups.flatMap((g) =>
    g.units.map((u) => ({
      id: `${p.slug}-${u.type}`,
      label: u.type,
      price: u.price,
      dp: p.dp,
      years: p.years,
    }))
  )
);

export default function Calculator() {
  const [id, setId] = useState(options[0].id);
  const [downPct, setDownPct] = useState(options[0].dp);
  const [freq, setFreq] = useState<"monthly" | "quarterly">("quarterly");

  const sel = options.find((o) => o.id === id)!;
  const pct = Math.max(downPct, sel.dp);

  const calc = useMemo(() => {
    const down = (sel.price * pct) / 100;
    const rest = sel.price - down;
    const n = freq === "monthly" ? sel.years * 12 : sel.years * 4;
    const cash = sel.price * (1 - terms.cashDiscount / 100);
    return { down, rest, n, each: rest / n, cash };
  }, [sel, pct, freq]);

  return (
    <section id="calc" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="Payment Plan"
            title="احسب قسطك"
            sub="اختر الوحدة ونسبة المقدم لترى قيمة القسط التقريبية على أقل سعر في الفئة. الحساب استرشادي، وجدول السداد الرسمي من المطور هو المعتمد."
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="slab p-7 shadow-sm lg:col-span-2">
              <label className="block text-sm text-ink/70" htmlFor="unit">
                الوحدة
              </label>
              <select
                id="unit"
                value={id}
                onChange={(e) => {
                  const o = options.find((x) => x.id === e.target.value)!;
                  setId(o.id);
                  setDownPct((d) => Math.max(d, o.dp));
                }}
                className="mt-2 w-full rounded-lg border border-sand-2 bg-white px-4 py-3 text-[15px] text-ink"
              >
                {options.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>

              <div className="mt-6 flex items-center justify-between">
                <label className="text-sm text-ink/70" htmlFor="down">
                  نسبة المقدم
                </label>
                <span className="num text-lg text-brass">{pct}%</span>
              </div>
              <input
                id="down"
                type="range"
                min={sel.dp}
                max={40}
                step={1}
                value={pct}
                onChange={(e) => setDownPct(Number(e.target.value))}
                className="mt-3 w-full accent-[#b28a45]"
              />
              <p className="mt-2 text-xs text-ink/50">
                أقل مقدم لهذه الوحدة <span className="num">{sel.dp}%</span>
              </p>

              <div className="mt-6">
                <p className="text-sm text-ink/70">دورية القسط</p>
                <div className="mt-3 flex gap-2">
                  {(
                    [
                      ["quarterly", "ربع سنوي"],
                      ["monthly", "شهري"],
                    ] as const
                  ).map(([k, l]) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setFreq(k)}
                      className={`rounded-full px-5 py-2 text-sm transition ${
                        freq === k
                          ? "bg-ink text-paper"
                          : "border border-sand-2 text-ink/70 hover:border-brass"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="slab-dark p-7 lg:col-span-3">
              <p className="text-sm text-paper/60">{sel.label} — تبدأ من</p>
              <p className="num mt-2 text-3xl text-brass-2">
                {fmt(sel.price)}{" "}
                <span className="text-base text-paper/60">EGP</span>
              </p>
              <div className="ribbon-rule my-6 w-32" />

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                  <p className="text-xs text-paper/55">المقدم</p>
                  <p className="num mt-1 text-lg text-paper">
                    {fmt(Math.round(calc.down))}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-paper/55">عدد الأقساط</p>
                  <p className="num mt-1 text-lg text-paper">{calc.n}</p>
                </div>
                <div>
                  <p className="text-xs text-paper/55">مدة السداد</p>
                  <p className="mt-1 text-lg text-paper">
                    <span className="num">{sel.years}</span>{" "}
                    <span className="text-sm text-paper/60">سنين</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-paper/55">كاش بعد خصم 22.5%</p>
                  <p className="num mt-1 text-lg text-paper">
                    {fmt(Math.round(calc.cash))}
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-lg bg-ink/60 p-6">
                <p className="text-sm text-paper/60">
                  القسط {freq === "monthly" ? "الشهري" : "الربع سنوي"} التقريبي
                </p>
                <p className="num mt-2 text-4xl text-brass-2">
                  {fmt(Math.round(calc.each))}
                </p>
                <p className="mt-1 text-xs text-paper/50">جنيه مصري</p>
              </div>

              <CtaWhatsapp
                message={`مهتم بـ ${sel.label} في لافيستا سيتي بمقدم ${pct}% وتقسيط ${sel.years} سنين. برجاء إرسال جدول السداد الرسمي.`}
                className="mt-6 inline-block rounded-full bg-brass-2 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brass-2/85"
              >
                اطلب جدول السداد الرسمي
              </CtaWhatsapp>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
