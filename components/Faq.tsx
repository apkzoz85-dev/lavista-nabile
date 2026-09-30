import { FAQ } from "@/lib/site";
export default function Faq() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-4xl md:text-5xl">أسئلة بتتسأل كتير</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {f.q}
                <span className="text-2xl text-clay transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-mute">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
