import { location, amenities, faqs } from "@/lib/site";
import { Reveal, Heading } from "./ui";

export function Location() {
  return (
    <section id="location" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Heading
            eyebrow="The Location"
            title={location.headline}
            sub={location.body}
          />
          <ul className="mt-8 space-y-4">
            {location.points.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between border-b border-sand-2 pb-3"
              >
                <span className="text-[15px] text-ink">{p.name}</span>
                <span className="text-sm text-ink/60">{p.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={70}>
          <div className="space-y-4">
            {[
              ["/images/masterplan-p1.webp", "P1"],
              ["/images/masterplan-p5.webp", "P5"],
            ].map(([src, label]) => (
              <a key={label} href={src} target="_blank" rel="noopener" className="frame block bg-white">
                <img
                  src={src}
                  alt={`ماستر بلان لافيستا سيتي — المرحلة ${label}`}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <section className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="The Lifestyle"
            title="كمبوند ساكن وخدماته شغالة"
            sub="الخدمات والمحاور المائية واللاندسكيب قايمة ومستخدمة فعلًا، مش رندرات لمرحلة لسه هتتبني."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <div className="slab h-full p-6 shadow-sm">
                <h3 className="text-lg text-ink">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-ink/70">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const shots = [
  { src: "/images/site-pool-view.webp", alt: "المحور المائي بين الفلل Classic" },
  { src: "/images/modern-row.webp", alt: "صف تاون هاوس Modern" },
  { src: "/images/site-lagoon.webp", alt: "حمام السباحة والفلل وقت الغروب" },
  { src: "/images/clubhouse.webp", alt: "الكلوب هاوس والبحيرة" },
  { src: "/images/night-canal.webp", alt: "المحور المائي بالليل" },
  { src: "/images/classic-street-2.webp", alt: "شارع داخلي بالفلل Classic" },
  { src: "/images/modern-twin.webp", alt: "توين هاوس Modern" },
  { src: "/images/site-landscape.webp", alt: "اللاندسكيب والمسارات" },
  { src: "/images/night-fountain.webp", alt: "النوافير ومنطقة الاسترخاء" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Gallery"
            title="من داخل لافيستا سيتي"
            sub="صور من الموقع للوحدات المسلّمة والخدمات."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 40}>
              <div className="frame">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-paper py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <Heading eyebrow="FAQ" title="أسئلة متكررة" />
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details className="slab group p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-[17px] text-ink marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-4 text-[15px] leading-8 text-ink/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
