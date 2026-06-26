import type { IntentData } from "./types";

export function formatIntentSummary(data: IntentData): string {
  const lines = [`Name: ${data.contact.name}`];

  if (data.intent === "personal" && data.personalData) {
    lines.push("Intent: Personal residence");
    lines.push(`Timeline: ${data.personalData.timeline}`);
    lines.push(`Area: ${data.personalData.area}`);
  } else if (data.intent === "investment" && data.investmentData) {
    lines.push("Intent: Investment property");
    lines.push(`Type: ${data.investmentData.type}`);
    lines.push(`Budget: ${data.investmentData.budget}`);
  } else if (data.intent === "other") {
    lines.push("Intent: Other");
    if (data.otherText) lines.push(`Details: ${data.otherText}`);
  }

  if (data.contact.method === "whatsapp" && data.contact.phone) {
    lines.push(`Phone: ${data.contact.phone}`);
  }
  if (data.contact.method === "email" && data.contact.email) {
    lines.push(`Email: ${data.contact.email}`);
  }

  return lines.join("\n");
}
