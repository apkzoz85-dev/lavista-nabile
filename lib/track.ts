import { SITE } from "./site";
declare global { interface Window { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] } }
export function track(kind: keyof typeof SITE.conversions) {
  try { window.gtag?.("event", "conversion", { send_to: SITE.conversions[kind] }); } catch {}
}
export const openPrivacy = () => window.dispatchEvent(new Event("open-privacy"));
export const openLead = () => window.dispatchEvent(new Event("open-lead"));
