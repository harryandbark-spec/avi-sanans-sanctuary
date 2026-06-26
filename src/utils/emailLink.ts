import { SITE } from "@/lib/site";

import { formatIntentSummary } from "./intentMessage";
import type { IntentData } from "./types";

export function buildMailtoLink(data: IntentData): string {
  const subject = `Buyer inquiry from ${data.contact.name}`;
  const body = formatIntentSummary(data);
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
