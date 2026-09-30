export default function Tour() {
  return (
    <section className="bg-lime py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-4xl md:text-5xl">جولة في لافيستا سيتي</h2>
          <p className="mt-4 text-lg text-mute">الوحدات، المحاور المائية، والكلوب هاوس — دقيقة واحدة تشوف فيها الكمبوند على الطبيعة.</p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-palm">
          <video controls preload="none" poster="/images/tour-poster.webp" className="aspect-video w-full" playsInline>
            <source src="/video/tour.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
