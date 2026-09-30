import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-palm text-white">
      <video className="absolute inset-0 -z-20 h-full w-full object-cover" autoPlay muted loop playsInline
        preload="metadata" poster="/images/hero-poster.webp" aria-hidden="true">
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-palm/95 via-palm/75 to-palm/40" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pb-14 pt-28 md:grid-cols-[1.15fr_.85fr] md:items-end md:pb-20 md:pt-36">
        <div>
          <p className="text-sand">شركة لافيستا للتطوير العقاري — الحي السكني R4، العاصمة الإدارية</p>
          <h1 className="mt-4 text-5xl leading-[1.15] md:text-7xl">لافيستا سيتي<br />استلم فيلتك النهارده</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            تاون هاوس وتوين هاوس وفلل مستقلة جاهزة للسكن ومتشطبة بالكامل، بتصميم Classic أو Modern.
          </p>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/15">
            {[
              ["مقدم", "10%"],
              ["تقسيط", "8 سنين"],
              ["خصم الكاش", "22.5%"],
            ].map(([k, v]) => (
              <div key={k} className="bg-palm/70 px-4 py-4">
                <dt className="text-xs text-white/65">{k}</dt>
                <dd className="mt-1 font-display text-2xl text-sand">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-white/70">
            تاون هاوس يبدأ من <span className="num">30M</span> جنيه — فلل مستقلة من <span className="num">44.8M</span> جنيه.
          </p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-palm-2/80 p-6 backdrop-blur-md md:p-7">
          <p className="font-display text-2xl">اعرف الوحدات المتاحة الآن</p>
          <p className="mb-5 mt-1 text-sm text-white/70">المخزون محدود في P1 و P5. سيب رقمك ونبعتلك المتاح بالأسعار.</p>
          <LeadForm source="hero" dark />
        </div>
      </div>
    </section>
  );
}
