import { formatIntentSummary } from "./intentMessage";
import type { IntentData } from "./types";

const WHATSAPP_NUMBER = "17783877001";

export function buildWhatsAppLink(data: IntentData): string {
  const text = `Hi Avi, I'd like to discuss a buyer inquiry.\n\n${formatIntentSummary(data)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
