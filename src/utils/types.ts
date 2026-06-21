export type IntentData = {
  intent: string; // "personal" | "investment" | "other"
  personalData?: { timeline: string; area: string };
  investmentData?: { type: string; budget: string };
  otherText?: string;
  contact: { method: "whatsapp" | "email"; name: string; phone?: string; email?: string };
};
