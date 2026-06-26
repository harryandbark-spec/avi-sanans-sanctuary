import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import ContactPage from "./contact-client";

export const metadata: Metadata = {
  title: "Contact · Avi Sanan — Vancouver REALTOR®",
  description:
    "Schedule a call or send a message. Direct line: 778-387-7001 · Sutton Group West Coast Realty, Vancouver.",
  openGraph: {
    title: "Contact · Avi Sanan",
    description:
      "Get in touch with Avi Sanan for buying or selling guidance across the Lower Mainland.",
  },
};

export default function ContactPageWrapper() {
  return (
    <>
      <PageHero
        image="/images/tile-contact.png"
        alt="Ready to talk about your next move"
        eyebrow="Get in Touch"
        title="Ready to talk?"
        description="Whether you're buying, selling, or just exploring your options — Avi is happy to have a straightforward conversation with no pressure."
      />
      <ContactPage />
    </>
  );
}
