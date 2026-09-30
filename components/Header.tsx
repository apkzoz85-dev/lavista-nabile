import { SITE } from "@/lib/site";
import CallLink from "./CallLink";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-palm/85 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="leading-none">
          <span className="block font-display text-xl tracking-wide">لافيستا سيتي</span>
          <span className="block text-[11px] text-sand">La Vista City · New Capital</span>
        </a>
        <nav className="hidden gap-7 text-sm text-white/85 md:flex">
          <a href="#units" className="hover:text-white">الوحدات والأسعار</a>
          <a href="#plans" className="hover:text-white">الماستر بلان</a>
          <a href="#gallery" className="hover:text-white">صور الموقع</a>
          <a href="#location" className="hover:text-white">الموقع</a>
        </nav>
        <CallLink className="rounded-full border border-sand/60 px-4 py-2 text-sm hover:bg-white/10">
          <span className="num">{SITE.phoneDisplay}</span>
        </CallLink>
      </div>
    </header>
  );
}
