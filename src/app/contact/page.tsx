import type { Metadata } from "next";

import ContactPage from "./contact-client";

export const metadata: Metadata = {
  title: "Contact · The Boardroom — Avi Sanan",
  description:
    "Schedule a private call or send a general portfolio inquiry. Direct line: 778-387-7001 · Sutton Group West Coast Realty, Vancouver.",
  openGraph: {
    title: "Contact · The Boardroom",
    description: "Private call scheduling and portfolio inquiries for Avi Sanan.",
  },
};

export default ContactPage;
