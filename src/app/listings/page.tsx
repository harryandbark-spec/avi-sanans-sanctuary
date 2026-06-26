import type { Metadata } from "next";

import ListingsPage from "./listings-client";

export const metadata: Metadata = {
  title: "Portfolio · Active Lower Mainland Holdings — Avi Sanan",
  description:
    "Signature active and past luxury holdings across West Vancouver, Vancouver, and Coquitlam. Price upon request.",
  openGraph: {
    title: "Signature Portfolio — Avi Sanan",
    description: "Active and historical luxury transactions across the Lower Mainland.",
  },
};

export default ListingsPage;
