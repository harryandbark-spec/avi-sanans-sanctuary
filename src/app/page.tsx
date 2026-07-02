import type { Metadata } from "next";

import { ProcessSection } from "@/components/ProcessSection";
import { Reveal } from "@/components/Reveal";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import { LuxuryPreviewSlider } from "@/components/LuxuryPreviewSlider";
import { SectionShell } from "@/components/SectionShell";
import { QuickStartTiles } from "@/components/QuickStartTiles";
import { WarmMidSection } from "@/components/WarmMidSection";
import HeroVideo from "@/components/HeroVideo";

import "@/styles/Modal.css";

export const metadata: Metadata = {
  title: "Avi Sanan — Local Real Estate Advisor · Vancouver & Lower Mainland",
  description:
    "Helping buyers and sellers across Vancouver, West Vancouver and the Lower Mainland. Private valuations, off‑market sourcing, and straightforward guidance from a local REALTOR®.",
  openGraph: {
    title: "Avi Sanan — Vancouver Real Estate Advisor",
    description: "Local buying and selling guidance across Vancouver and the Lower Mainland.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Client-side hero handles delayed overlay reveal so the person/video loads first */}
      <HeroVideo />

      {/* Quick-start image tiles */}
      <QuickStartTiles />

      <SectionShell>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6 max-w-lg">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">The Advisor</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                Avi Sanan
              </h2>
              <p className="text-sm text-[#FDFCFB]/70 font-sans leading-relaxed">
                Avi is a local REALTOR® serving Vancouver and the Lower Mainland. He takes time to
                understand what each client actually needs — and works quietly and efficiently to
                make buying or selling straightforward.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="w-full aspect-[4/5] md:max-w-[400px] mx-auto md:ml-auto overflow-hidden">
              <img
                src="/images/avi-headshot.png"
                alt="Avi Sanan — Local REALTOR®"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell>
        <ProcessSection />
      </SectionShell>

      <SectionShell>
        <LuxuryPreviewSlider />
      </SectionShell>

      {/* Not sure where to start — warm mid-section */}
      <WarmMidSection />
    </>
  );
}
