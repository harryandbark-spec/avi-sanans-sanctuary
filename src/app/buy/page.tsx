import type { Metadata } from "next";
import Link from "next/link";

import { BuyChecklist } from "@/components/BuyChecklist";
import { BuyIntakeSection } from "@/components/BuyIntakeSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "Buy · Local Buying Advisory — Avi Sanan",
  description:
    "Local buying advisory across Vancouver and the Lower Mainland. Off‑market sourcing and practical guidance for buyers.",
  openGraph: {
    title: "Buy · Avi Sanan — Vancouver REALTOR®",
    description: "Off‑market inventory and practical buying guidance across the Lower Mainland.",
  },
};

const NEIGHBORHOODS = [
  {
    title: "Vancouver & West Vancouver",
    body: "Established neighbourhoods with family homes, waterfront pockets, and strong school catchments.",
    image: "/images/neighborhood-vancouver-west.png",
    href: "/neighborhoods/vancouver-west",
  },
  {
    title: "Burnaby & Coquitlam",
    body: "Transit‑adjacent family neighbourhoods with new condos and townhomes at a range of price points.",
    image: "/images/neighborhood-burnaby-coquitlam.png",
    href: "/neighborhoods/burnaby-coquitlam",
  },
  {
    title: "West Vancouver Estates",
    body: "Waterfront and hillside homes with privacy, views, and long-term hold potential.",
    image: "/images/neighborhood-west-vancouver.png",
    href: "/neighborhoods/west-vancouver",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        image="/images/listing-2.png"
        alt="Bright living room in a Vancouver home"
        eyebrow="Buying Your Home"
        title={
          <>
            Find the right home —{" "}
            <em className="italic font-normal text-[#C5A267]">quietly, confidently.</em>
          </>
        }
        description="Local buyer advisory for Vancouver and the Lower Mainland. We surface off‑market homes, build shortlists that match what you actually want, and negotiate to protect your budget."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="cta-navy">Request a Private Consultation</button>
          <button className="px-6 py-3 border border-[#C5A267]/60 text-[#C5A267] hover:bg-[#C5A267] hover:text-[#060B13] transition-colors text-sm uppercase tracking-widest font-semibold rounded-sm">
            Request Off‑Market Matches
          </button>
        </div>
      </PageHero>

      <SectionShell bg="muted">
        <div className="space-y-10 md:space-y-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
                  Private Checklist
                </p>
                <h2
                  className="font-serif text-[#FDFCFB] leading-[1.1]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  How we work together, step by step.
                </h2>
              </div>
              <div className="shrink-0 bg-[#08101A] border border-[#C5A267]/15 rounded-sm px-5 py-3 text-sm text-[#FDFCFB]/70">
                <span className="font-semibold text-[#FDFCFB]">Typical timeline: </span>
                2–8 weeks to accepted offer
              </div>
            </div>
          </Reveal>

          <BuyChecklist />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="space-y-10">
          <Reveal>
            <div className="max-w-xl space-y-3">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
                Where We Work
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                Local knowledge, every neighbourhood.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map((n, i) => (
              <Reveal key={n.title} delay={i * 80}>
                <Link
                  href={n.href}
                  className="group block bg-[#070E1A] border border-[#C5A267]/10 overflow-hidden hover:border-[#C5A267]/30 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-8 space-y-3">
                    <h3 className="font-serif text-xl text-[#FDFCFB]">{n.title}</h3>
                    <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">{n.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">Start Here</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
              Tell us what you&apos;re looking for.
            </h2>
            <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">
              A short brief and we&apos;ll come back with a focused list of matches — no pressure,
              no obligation.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="lg:col-span-8 bg-[#0A1221] border border-[#C5A267]/10 p-6 md:p-10"
          >
            <BuyIntakeSection />
          </Reveal>
        </div>
      </SectionShell>

      <WarmMidSection />
    </>
  );
}
