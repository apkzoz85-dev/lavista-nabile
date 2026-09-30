export default function StyleSplit() {
  const items = [
    { t: "Classic", ar: "متوسطي كلاسيك", img: "/images/classic-twin.webp", d: "قرميد أحمر، حجر فاتح، شبابيك بإطارات بارزة وبلكونات حديد مشغول. الطابع اللي اتعرفت بيه لافيستا." },
    { t: "Modern", ar: "معاصر مودرن", img: "/images/modern-villa.webp", d: "واجهات حجر رمادي وخشب، درابزين زجاج وخطوط مستقيمة. مساحة مبنية أكبر في كل الأنواع." },
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl">نفس المساحة، تصميمين تختار بينهم</h2>
          <p className="mt-4 text-lg text-mute">كل نوع وحدة في لافيستا سيتي متاح بواجهة Classic أو Modern. الأرض واحدة، والفرق في الشكل والمساحة المبنية.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {items.map((x) => (
            <figure key={x.t}>
              <div className="arch aspect-[4/5] bg-lime">
                <img src={x.img} alt={`واجهة ${x.ar} في لافيستا سيتي`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-3xl">{x.ar} <span className="font-sans text-lg text-clay" dir="ltr">{x.t}</span></p>
                <p className="mt-2 max-w-md text-mute">{x.d}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
