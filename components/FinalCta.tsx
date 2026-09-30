import LeadForm from "./LeadForm";
import CallLink, { WaLink } from "./CallLink";
import { SITE } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-lime py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-2 md:items-center">
        <div className="arch hidden aspect-[4/5] max-h-[560px] md:block">
          <img src="/images/site-lagoon.webp" alt="فلل لافيستا سيتي حول حمام السباحة" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl">احجز معاينة في الموقع</h2>
          <p className="mt-4 text-lg text-mute">الوحدات جاهزة، تقدر تشوفها بعينك قبل ما تقرر. سيب رقمك ونرتب معاك ميعاد.</p>
          <div className="mt-8 rounded-2xl bg-white p-6 md:p-7"><LeadForm source="final" /></div>
          <div className="mt-5 flex flex-wrap gap-3">
            <WaLink className="rounded-full bg-[#1f9d55] px-5 py-3 font-semibold text-white">واتساب</WaLink>
            <CallLink className="rounded-full border border-ink/20 px-5 py-3 font-semibold">اتصل <span className="num">{SITE.phoneDisplay}</span></CallLink>
          </div>
        </div>
      </div>
    </section>
  );
}
