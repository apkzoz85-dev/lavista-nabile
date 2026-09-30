"use client";
import { SITE } from "@/lib/site";
import { openPrivacy } from "@/lib/track";

export default function Footer() {
  return (
    <footer className="bg-palm pb-28 pt-14 text-white/70 md:pb-14">
      <div className="mx-auto max-w-6xl px-5 text-sm leading-relaxed">
        <div className="tile-rule mb-10 opacity-50" />
        <p className="font-display text-2xl text-white">لافيستا سيتي — العاصمة الإدارية الجديدة</p>
        <p className="mt-4 max-w-3xl">
          هذه الصفحة يديرها {SITE.brand} بصفته وكيل مبيعات معتمد، وليست الموقع الرسمي لشركة لافيستا للتطوير العقاري.
          جميع الأسعار والمساحات وأنظمة السداد استرشادية ومأخوذة من بيانات المخزون المتاح وقت النشر، وقابلة للتغيير دون إشعار،
          والتعاقد النهائي يتم وفق شروط الشركة المطورة. الصور لأغراض توضيحية.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <button onClick={openPrivacy} className="underline hover:text-white">سياسة الخصوصية</button>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">هاتف: <span className="num">{SITE.phoneDisplay}</span></a>
          <span>© <span className="num">{new Date().getFullYear()}</span> {SITE.brand}</span>
        </div>
      </div>
    </footer>
  );
}
