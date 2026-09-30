"use client";
import CallLink, { WaLink } from "./CallLink";
import { openLead } from "@/lib/track";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2.1c-.2-.3 0-.5.1-.6l.5-.5.3-.5a.6.6 0 0 0 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1.1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4ZM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6Z"/></svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
);

export default function Floating() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 md:flex">
        <WaLink className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-lg" ><WaIcon /><span className="sr-only">واتساب</span></WaLink>
        <CallLink className="flex h-14 w-14 items-center justify-center rounded-full bg-palm text-white shadow-lg"><PhoneIcon /><span className="sr-only">اتصل</span></CallLink>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-palm text-sm font-semibold text-white md:hidden">
        <CallLink className="flex h-16 items-center justify-center gap-2"><PhoneIcon />اتصل</CallLink>
        <WaLink className="flex h-16 items-center justify-center gap-2 bg-[#1f9d55]"><WaIcon />واتساب</WaLink>
        <button onClick={openLead} className="h-16 bg-clay">الأسعار</button>
      </div>
    </>
  );
}
