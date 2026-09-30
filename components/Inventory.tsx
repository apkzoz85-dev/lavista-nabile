"use client";
import { useState } from "react";
import { UNITS, TERMS } from "@/lib/site";
import { WaLink } from "./CallLink";

const fmtM = (n: number) => `${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}M`;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export default function Inventory() {
  const [style, setStyle] = useState<"classic" | "modern">("classic");
  const [sel, setSel] = useState(UNITS[0].id);
  const u = UNITS.find((x) => x.id === sel)!;
  const price = u.priceFrom * 1_000_000;
  const down = price * u.dp;
  const quarters = TERMS.years * 4;
  const quarterly = (price - down) / quarters;
  const cash = price * (1 - TERMS.cashDiscount);

  return (
    <section id="units" className="bg-lime py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl">الوحدات المتاحة والأسعار</h2>
            <p className="mt-3 text-mute">Open Inventory — جاهز للسكن، متشطب بالكامل. اختار وحدة من الجدول تشوف المقدم والقسط.</p>
          </div>
          <div role="radiogroup" aria-label="التصميم" className="inline-flex rounded-full bg-white p-1 shadow-sm">
            {(["classic", "modern"] as const).map((s) => (
              <button key={s} role="radio" aria-checked={style === s} onClick={() => setStyle(s)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${style === s ? "bg-palm text-white" : "text-mute hover:text-ink"}`}>
                {s === "classic" ? "Classic" : "Modern"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_.9fr]">
          <div className="overflow-x-auto rounded-2xl bg-white">
            <table className="w-full min-w-[600px] whitespace-nowrap text-right">
              <thead className="border-b border-ink/10 text-sm text-mute">
                <tr>
                  <th className="px-5 py-4 font-medium">الوحدة</th>
                  <th className="px-3 py-4 font-medium">مساحة المباني</th>
                  <th className="px-3 py-4 font-medium">الأرض</th>
                  <th className="px-3 py-4 font-medium">السعر (جنيه)</th>
                  <th className="px-5 py-4 font-medium">المقدم</th>
                </tr>
              </thead>
              <tbody>
                {UNITS.map((x, i) => {
                  const active = x.id === sel;
                  const groupStart = i > 0 && UNITS[i - 1].group !== x.group;
                  return (
                    <tr key={x.id} onClick={() => setSel(x.id)} aria-selected={active}
                      className={`cursor-pointer transition ${groupStart ? "border-t-4 border-lime" : "border-t border-ink/5"} ${active ? "bg-palm text-white" : "hover:bg-paper"}`}>
                      <th scope="row" className="px-5 py-4 font-semibold">
                        <button className="text-right" onClick={() => setSel(x.id)}>{x.name}</button>
                      </th>
                      <td className="px-3 py-4"><span className="num">{x.bua[style]} m²</span></td>
                      <td className="px-3 py-4"><span className="num">{x.land} m²</span></td>
                      <td className="px-3 py-4 font-semibold"><span className="num">{fmtM(x.priceFrom)} – {fmtM(x.priceTo)}</span></td>
                      <td className={`px-5 py-4 ${active ? "text-sand" : "text-clay"}`}><span className="num">{x.dp * 100}%</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <aside className="rounded-2xl bg-palm p-7 text-white" aria-live="polite">
            <p className="text-sm text-white/65">حساب تقريبي لـ</p>
            <p className="font-display text-3xl">{u.name} <span className="font-sans text-lg text-sand">{style === "classic" ? "Classic" : "Modern"}</span></p>
            <p className="mt-1 text-sm text-white/65">
              <span className="num">{u.bua[style]} m²</span> مباني على أرض <span className="num">{u.land} m²</span>
            </p>
            <div className="tile-rule my-6 opacity-40" />
            <dl className="grid gap-4">
              <Row k="السعر يبدأ من" v={`${fmt(price)} EGP`} />
              <Row k={`المقدم ${u.dp * 100}%`} v={`${fmt(down)} EGP`} />
              <Row k={`قسط ربع سنوي (${quarters} قسط)`} v={`${fmt(quarterly)} EGP`} big />
              <Row k="كاش بعد خصم 22.5%" v={`${fmt(cash)} EGP`} />
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-white/55">
              أرقام استرشادية محسوبة على أقل سعر في الفئة، والقسط الفعلي بيتحدد في العقد. يضاف وديعة صيانة 10% ومصاريف إدارية 2%.
            </p>
            <WaLink msg={`عايز تفاصيل ${u.name} ${style === "classic" ? "Classic" : "Modern"} في لافيستا سيتي`}
              className="mt-6 flex h-12 items-center justify-center rounded-lg bg-sand font-semibold text-palm transition hover:bg-white">
              اسأل عن {u.name} على واتساب
            </WaLink>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, big }: { k: string; v: string; big?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-white/75">{k}</dt>
      <dd className={big ? "text-2xl font-semibold text-sand" : "text-lg"}><span className="num">{v}</span></dd>
    </div>
  );
}
