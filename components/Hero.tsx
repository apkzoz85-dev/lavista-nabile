import { site, fmt, minPrice } from "@/lib/site";
import { Ribbon } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";
import LeadForm from "./lead-form";

const stats = [
  { value: "10%", label: "مقدم التعاقد" },
  { value: "8", label: "سنوات تقسيط" },
  { value: "22.5%", label: "خصم السداد الكاش" },
  { value: "P1 · P5", label: "مراحل جاهزة للسكن" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/images/night-stairs.webp"
          alt="لافيستا سيتي العاصمة الإدارية"
          className="kenburns h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28">
        <div className="inline-flex items-center gap-3 rounded-full border border-brass-2/40 bg-ink/60 px-5 py-2 text-sm text-paper/85 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brass-2" />
          Open Inventory: تاون هاوس · توين هاوس · فلل مستقلة — جاهز للسكن
        </div>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.1fr_420px]">
          <div>
            <p className="eyebrow">La Vista City · New Capital</p>
            <h1 className="mt-4 text-4xl leading-[1.25] text-paper md:text-6xl">
              لافيستا سيتي
            </h1>
            <Ribbon light />
            <p className="mt-4 max-w-xl text-lg leading-9 text-paper/80">
              فلل وتاون هاوس وتوين هاوس جاهزة للسكن ومتشطبة بالكامل في الحي
              السكني R4 بالعاصمة الإدارية، من لافيستا للتطوير العقاري. تبدأ من{" "}
              <span className="num text-brass-2">{fmt(minPrice)}</span> جنيه
              بمقدم 10% وتقسيط 8 سنين.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#units"
                className="rounded-full bg-brass-2 px-7 py-3 font-semibold text-ink transition hover:bg-brass-2/85"
              >
                تصفّح الوحدات والأسعار
              </a>
              <CtaWhatsapp
                message="مهتم بلافيستا سيتي العاصمة الإدارية. برجاء إرسال الوحدات المتاحة والأسعار."
                className="rounded-full border border-paper/30 px-7 py-3 font-semibold text-paper transition hover:border-brass-2 hover:text-brass-2"
              >
                واتساب مباشر
              </CtaWhatsapp>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-paper/10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink/85 px-5 py-5">
                  <p className="num text-2xl text-brass-2">{s.value}</p>
                  <p className="mt-2 text-[13px] leading-6 text-paper/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-paper/45">
              {site.agency} — وسيط عقاري معتمد. أسعار استرشادية قابلة للتغيير.
            </p>
          </div>

          <div className="rounded-2xl bg-paper p-6 shadow-2xl">
            <p className="eyebrow">Register Interest</p>
            <h2 className="mt-2 text-xl text-ink">استلم المتاح بالأسعار</h2>
            <p className="mt-2 text-sm leading-7 text-ink/60">
              الوحدات المتاحة حاليًا في P1 و P5 بالأسعار والماستر بلان.
            </p>
            <div className="mt-5">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
