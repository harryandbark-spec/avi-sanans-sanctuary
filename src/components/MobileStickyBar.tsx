import { MessageCircle, Phone } from "lucide-react";

import { SITE } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-[#C5A267]/15 bg-[#0A1221]/95 backdrop-blur-md">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 min-h-[56px] text-[11px] tracking-[0.2em] uppercase text-[#FDFCFB]/80 border-r border-[#C5A267]/10 hover:text-[#C5A267] transition-colors"
        aria-label="Text Avi on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={SITE.phoneHref}
        className="inline-flex items-center justify-center gap-2 min-h-[56px] text-[11px] tracking-[0.2em] uppercase text-[#FDFCFB] bg-[#0A1221] hover:text-[#C5A267] transition-colors"
        aria-label={`Call ${SITE.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {SITE.phone}
      </a>
    </div>
  );
}
