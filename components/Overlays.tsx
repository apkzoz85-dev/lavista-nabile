"use client";
import { useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";
import { SITE } from "@/lib/site";

function Modal({ open, onClose, label, children }: { open: boolean; onClose: () => void; label: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    ref.current?.focus();
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4" onClick={onClose}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={label} onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-paper p-7 outline-none sm:rounded-2xl">
        <button onClick={onClose} aria-label="إغلاق" className="absolute left-4 top-4 h-9 w-9 rounded-full bg-ink/5 text-xl">×</button>
        {children}
      </div>
    </div>
  );
}

export default function Overlays() {
  const [lead, setLead] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [cookie, setCookie] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    const openLead = () => { shown.current = true; setLead(true); };
    const openPriv = () => setPrivacy(true);
    window.addEventListener("open-lead", openLead);
    window.addEventListener("open-privacy", openPriv);

    // popup: 55% scroll أو 16 ثانية — مرة واحدة في الجلسة
    let seen = false;
    try { seen = sessionStorage.getItem("lv_popup") === "1"; } catch {}
    const fire = () => {
      if (shown.current || seen) return;
      shown.current = true;
      try { sessionStorage.setItem("lv_popup", "1"); } catch {}
      setLead(true);
    };
    const t = setTimeout(fire, 16000);
    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + h.clientHeight) / h.scrollHeight > 0.55) fire();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    try { if (!localStorage.getItem("lv_cookie")) setCookie(true); } catch { setCookie(true); }
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("open-lead", openLead);
      window.removeEventListener("open-privacy", openPriv);
    };
  }, []);

  const acceptCookie = () => { try { localStorage.setItem("lv_cookie", "1"); } catch {} setCookie(false); };

  return (
    <>
      <Modal open={lead} onClose={() => setLead(false)} label="اطلب الأسعار">
        <p className="font-display text-3xl">الأسعار والوحدات المتاحة</p>
        <p className="mb-5 mt-2 text-mute">تاون هاوس من 30 مليون بمقدم 10% — نبعتلك المتاح في P1 و P5 على الموبايل.</p>
        <LeadForm source="popup" />
      </Modal>

      <Modal open={privacy} onClose={() => setPrivacy(false)} label="سياسة الخصوصية">
        <p className="font-display text-2xl">سياسة الخصوصية</p>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-mute">
          <p>بنجمع الاسم ورقم الموبايل ونوع الوحدة اللي بتدخلها في النموذج بس، عشان مستشار المبيعات يتواصل معاك بخصوص لافيستا سيتي.</p>
          <p>البيانات مش بتتباع ولا بتتشارك مع أي طرف تالت لأغراض تسويقية، وبتتشارك مع الشركة المطورة فقط عند إتمام الحجز.</p>
          <p>الموقع بيستخدم كوكيز وأدوات قياس من Google لقياس أداء الإعلانات. تقدر توقفها من إعدادات المتصفح.</p>
          <p>لطلب حذف بياناتك تواصل على <span className="num">{SITE.phoneDisplay}</span>.</p>
          <p>{SITE.brand} وكيل مبيعات معتمد، والصفحة دي مش الموقع الرسمي للمطور.</p>
        </div>
      </Modal>

      {cookie && (
        <div className="fixed inset-x-3 bottom-20 z-50 mx-auto flex max-w-lg items-center gap-4 rounded-xl bg-ink p-4 text-sm text-white shadow-xl md:bottom-6">
          <p className="flex-1">بنستخدم كوكيز لقياس أداء الصفحة والإعلانات. <button className="underline" onClick={() => setPrivacy(true)}>التفاصيل</button></p>
          <button onClick={acceptCookie} className="rounded-lg bg-sand px-4 py-2 font-semibold text-palm">موافق</button>
        </div>
      )}
    </>
  );
}
