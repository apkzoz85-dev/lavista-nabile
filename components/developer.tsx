import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

const pillars = [
  {
    title: "لافيستا للتطوير العقاري",
    body: "مطور مصري بمحفظة كبيرة في القاهرة الجديدة والعاصمة الإدارية والساحل الشمالي والعين السخنة.",
  },
  {
    title: "سجل تسليم فعلي",
    body: "مشروعات ساكنة ومسلّمة زي الباتيو في التجمع ولافيستا باي في العين السخنة.",
  },
  {
    title: "لافيستا سيتي",
    body: "من أكبر مشروعات الفلل في العاصمة الإدارية، على حوالي 910 فدان في الحي السكني R4.",
  },
  {
    title: "Open Inventory جاهز",
    body: "وحدات مسلّمة ومتشطبة في P1 و P5، متاحة بنظام تقسيط على 8 سنين.",
  },
];

export default function Developer() {
  return (
    <section id="developer" className="bg-ink-2 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="frame h-full min-h-[320px]">
            <img
              src="/images/clubhouse-2.webp"
              alt="الكلوب هاوس في لافيستا سيتي"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={70}>
          <Heading
            light
            eyebrow="The Developer"
            title="من يقف خلف المشروع"
            sub="لافيستا معروفة في السوق بإنها بتسلّم مجتمعات فلل مكتملة الخدمات."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.title} style={{ transitionDelay: `${i * 40}ms` }}>
                <h3 className="text-base text-paper">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-8 text-paper/65">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <CtaWhatsapp
            message="برجاء إرسال الماستر بلان والمتاح في لافيستا سيتي العاصمة الإدارية."
            className="mt-8 inline-block rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition hover:border-brass-2 hover:text-brass-2"
          >
            اطلب الماستر بلان والمتاح
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
