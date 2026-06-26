import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import ListingsPage from "./listings-client";

export const metadata: Metadata = {
  title: "Listings · Homes Across the Lower Mainland — Avi Sanan",
  description:
    "Browse active and past listings across Vancouver, West Vancouver, and the Lower Mainland. Price available on request.",
  openGraph: {
    title: "Current Listings — Avi Sanan",
    description: "Homes available across the Lower Mainland.",
  },
};

export default function ListingsPageWrapper() {
  return (
    <>
      <PageHero
        image="/images/listing-1.png"
        alt="Open-plan luxury home interior"
        eyebrow="Current Listings"
        title="Homes available across the Lower Mainland."
        description="Browse what's on the market — or ask about off-market homes that never hit MLS."
        align="center"
        minHeight="min-h-[45vh] md:min-h-[50vh]"
      />
      <ListingsPage />
    </>
  );
}
