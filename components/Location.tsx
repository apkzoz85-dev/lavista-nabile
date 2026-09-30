export default function Location() {
  const pts = [
    ["الحي السكني R4", "في قلب العاصمة الإدارية الجديدة"],
    ["محور محمد بن زايد", "وصول مباشر من التجمع الخامس والقاهرة الجديدة"],
    ["النهر الأخضر", "قريب من الحي الحكومي وحي المال والأعمال"],
    ["910 فدان", "مساحة المشروع، أغلبها مساحات خضراء ومسطحات مائية"],
  ];
  return (
    <section id="location" className="relative isolate overflow-hidden bg-palm-2 py-20 text-white md:py-28">
      <img src="/images/night-stairs.webp" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl text-4xl md:text-5xl">الموقع</h2>
        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {pts.map(([k, v]) => (
            <div key={k} className="bg-palm/85 p-6">
              <dt className="font-display text-2xl text-sand">{k}</dt>
              <dd className="mt-2 text-white/75">{v}</dd>
            </div>
          ))}
        </dl>
        <a href="https://maps.google.com/?q=La+Vista+City+New+Capital" target="_blank" rel="noopener"
          className="mt-8 inline-block rounded-full border border-sand/60 px-6 py-3 text-sm hover:bg-white/10">افتح الموقع على الخريطة</a>
      </div>
    </section>
  );
}
