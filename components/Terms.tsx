export default function Terms() {
  const t = [
    ["تاون هاوس وتوين هاوس", "مقدم 10% والباقي على 8 سنين"],
    ["فلل مستقلة A · B · C1 · C2", "مقدم 20% والباقي على 8 سنين"],
    ["السداد كاش", "خصم 22.5% من سعر الوحدة"],
    ["مصاريف إضافية", "وديعة صيانة 10% + مصاريف إدارية 2%"],
  ];
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl md:text-4xl">أنظمة السداد</h2>
        <dl className="mt-8 grid gap-x-10 sm:grid-cols-2">
          {t.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 border-t border-ink/10 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <dt className="font-semibold">{k}</dt>
              <dd className="text-mute">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
