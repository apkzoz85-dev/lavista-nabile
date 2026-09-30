"use client";
import { SITE, waLink } from "@/lib/site";
import { track } from "@/lib/track";

export default function CallLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return <a href={`tel:${SITE.phoneTel}`} onClick={() => track("call")} className={className}>{children}</a>;
}
export function WaLink({ className, children, msg }: { className?: string; children: React.ReactNode; msg?: string }) {
  return (
    <a href={waLink(msg)} target="_blank" rel="noopener" onClick={() => track("whatsapp")} className={className}>
      {children}
    </a>
  );
}
