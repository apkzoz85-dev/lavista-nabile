"use client";
import { useEffect, useState } from "react";

const SITE_PHOTOS = [
  ["/images/site-pool-view.webp", "الممشى المائي من بلكونة فيلا"],
  ["/images/site-lagoon.webp", "حمام السباحة والفلل Classic وقت الغروب"],
  ["/images/site-villa-rear.webp", "الواجهة الخلفية لتوين هاوس Classic"],
  ["/images/classic-row.webp", "صف تاون هاوس Classic"],
  ["/images/modern-row.webp", "صف تاون هاوس Modern"],
  ["/images/site-landscape.webp", "اللاندسكيب بين الفلل"],
  ["/images/modern-twin.webp", "توين هاوس Modern"],
  ["/images/night-canal.webp", "المحور المائي بالليل"],
  ["/images/clubhouse.webp", "الكلوب هاوس والبحيرة"],
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((o) => (o! + 1) % SITE_PHOTOS.length);
      if (e.key === "ArrowRight") setOpen((o) => (o! - 1 + SITE_PHOTOS.length) % SITE_PHOTOS.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <section id="gallery" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-4xl md:text-5xl">من جوه الكمبوند</h2>
        <p className="mt-3 max-w-xl text-mute">صور من الموقع للوحدات المسلّمة والخدمات — مش رندرات.</p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {SITE_PHOTOS.map(([src, alt], i) => (
            <button key={src} onClick={() => setOpen(i)}
              className={`group overflow-hidden rounded-xl bg-lime ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={src} alt={alt} loading="lazy"
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${i === 0 ? "aspect-square md:aspect-auto" : "aspect-[4/3]"}`} />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={SITE_PHOTOS[open][1]}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <img src={SITE_PHOTOS[open][0]} alt={SITE_PHOTOS[open][1]} className="max-h-[80vh] max-w-full rounded-lg" />
          <p className="mt-4 text-white/80">{SITE_PHOTOS[open][1]}</p>
          <button className="absolute left-4 top-4 h-11 w-11 rounded-full bg-white/15 text-2xl text-white" aria-label="إغلاق">×</button>
        </div>
      )}
    </section>
  );
}
