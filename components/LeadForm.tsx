"use client";
import { useState } from "react";
import { SITE, UNITS } from "@/lib/site";
import { track, openPrivacy } from "@/lib/track";

const CODES = [
  { c: "+20", l: "مصر", re: /^01[0125]\d{8}$/ },
  { c: "+966", l: "السعودية", re: /^5\d{8}$/ },
  { c: "+971", l: "الإمارات", re: /^5\d{8}$/ },
  { c: "+965", l: "الكويت", re: /^[569]\d{7}$/ },
  { c: "+974", l: "قطر", re: /^[3567]\d{7}$/ },
  { c: "+973", l: "البحرين", re: /^3\d{7}$/ },
  { c: "+968", l: "عُمان", re: /^[79]\d{7}$/ },
];

export default function LeadForm({ source, dark = false }: { source: string; dark?: boolean }) {
  const [code, setCode] = useState("+20");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const name = String(fd.get("name") || "").trim();
    let phone = String(fd.get("phone") || "").replace(/[^\d]/g, "");
    const rule = CODES.find((x) => x.c === code)!;
    if (code !== "+20") phone = phone.replace(/^0/, "");
    if (name.length < 2) return setError("اكتب اسمك عشان نعرف نكلمك.");
    if (!rule.re.test(phone)) return setError(`رقم ${rule.l} مش مكتمل — راجع الأرقام.`);
    setError("");
    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: `ليد جديد — لافيستا سيتي (${source})`,
          from_name: "La Vista City Landing",
          name,
          phone: `${code} ${phone}`,
          unit: fd.get("unit"),
          source,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const j = await res.json();
      if (!j.success) throw new Error();
      track("form");
      setState("ok");
    } catch {
      setState("err");
    }
  }

  const field = dark
    ? "bg-white/10 border-white/25 text-white placeholder:text-white/55"
    : "bg-white border-ink/15 text-ink placeholder:text-mute";

  if (state === "ok")
    return (
      <div className={`rounded-xl p-6 text-center ${dark ? "bg-white/10 text-white" : "bg-lime text-ink"}`} role="status">
        <p className="font-display text-2xl">وصلنا طلبك</p>
        <p className="mt-2 opacity-80">مستشار المبيعات هيتواصل معاك خلال ساعات العمل بالوحدات المتاحة وأسعارها الحالية.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid min-w-0 grid-cols-1 gap-3">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="sr-only" htmlFor={`n-${source}`}>الاسم</label>
      <input id={`n-${source}`} name="name" autoComplete="name" placeholder="الاسم"
        className={`h-12 rounded-lg border px-4 outline-none focus:border-pool ${field}`} />
      <div className="flex gap-2" dir="ltr">
        <label className="sr-only" htmlFor={`c-${source}`}>كود الدولة</label>
        <select id={`c-${source}`} value={code} onChange={(e) => setCode(e.target.value)}
          className={`h-12 w-[92px] shrink-0 rounded-lg border px-2 ${field}`}>
          {CODES.map((x) => <option key={x.c} value={x.c} className="text-ink">{x.c}</option>)}
        </select>
        <label className="sr-only" htmlFor={`p-${source}`}>رقم الموبايل</label>
        <input id={`p-${source}`} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national"
          placeholder={code === "+20" ? "01xxxxxxxxx" : "رقم الموبايل"}
          className={`h-12 min-w-0 flex-1 rounded-lg border px-4 text-left outline-none focus:border-pool ${field}`} />
      </div>
      <label className="sr-only" htmlFor={`u-${source}`}>نوع الوحدة</label>
      <select id={`u-${source}`} name="unit" defaultValue="" className={`h-12 w-full min-w-0 rounded-lg border px-3 ${field}`}>
        <option value="" className="text-ink">نوع الوحدة (اختياري)</option>
        {UNITS.map((u) => <option key={u.id} className="text-ink">{u.name}</option>)}
      </select>
      {error && <p className={`text-sm ${dark ? "text-sand" : "text-clay"}`} role="alert">{error}</p>}
      {state === "err" && <p className={`text-sm ${dark ? "text-sand" : "text-clay"}`} role="alert">الطلب ما اتبعتش. جرّب تاني أو كلمنا واتساب على {SITE.phoneDisplay}.</p>}
      <button disabled={state === "sending"}
        className="h-12 rounded-lg bg-clay font-semibold text-white transition hover:bg-clay-2 disabled:opacity-60">
        {state === "sending" ? "جاري الإرسال..." : "ابعتلي الوحدات المتاحة"}
      </button>
      <p className={`text-xs ${dark ? "text-white/60" : "text-mute"}`}>
        بإرسال بياناتك بتوافق على{" "}
        <button type="button" onClick={openPrivacy} className="underline">سياسة الخصوصية</button>.
      </p>
    </form>
  );
}
