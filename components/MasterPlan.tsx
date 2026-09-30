"use client";
import { useState } from "react";

const PLANS = [
  { id: "p1", label: "Parcel 1", img: "/images/masterplan-p1.webp", note: "الممشى المائي في المنتصف والفلل الكبيرة C1 و C2 حواليه، والتاون هاوس على الأطراف." },
  { id: "p5", label: "Parcel 5", img: "/images/masterplan-p5.webp", note: "أغلبها توين هاوس و Sep B، مع صف تاون هاوس على الحد الغربي ومحور مائي من البوابة للداخل." },
];
const LEGEND = [
  ["#b78bc4", "فيلا A"], ["#e8bf98", "فيلا B"], ["#ee93bf", "فيلا C1"], ["#c4605c", "فيلا C2"],
  ["#eef08e", "تاون كورنر"], ["#a6d98f", "تاون ميدل"], ["#8fcdea", "توين هاوس"],
];

export default function MasterPlan() {
  const [i, setI] = useState(0);
  const p = PLANS[i];
  return (
    <section id="plans" className="bg-palm py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl">الماستر بلان</h2>
            <p className="mt-3 text-white/70">المخزون المتاح موزع على مراحل P1 و P5. اسأل عن رقم وحدة معيّن ونقولك لو لسه متاح.</p>
          </div>
          <div role="tablist" className="inline-flex rounded-full bg-white/10 p-1">
            {PLANS.map((x, k) => (
              <button key={x.id} role="tab" aria-selected={k === i} onClick={() => setI(k)}
                className={`rounded-full px-5 py-2 text-sm font-semibold ${k === i ? "bg-sand text-palm" : "text-white/75"}`}>
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <a href={p.img} target="_blank" rel="noopener" className="mt-10 block overflow-hidden rounded-2xl bg-white">
          <img src={p.img} alt={`ماستر بلان لافيستا سيتي ${p.label}`} className="w-full" loading="lazy" />
        </a>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <p className="max-w-lg text-white/80">{p.note}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
            {LEGEND.map(([c, l]) => (
              <li key={l} className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm" style={{ background: c }} />{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
