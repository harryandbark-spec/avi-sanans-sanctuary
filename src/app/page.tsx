import type { Metadata } from "next";

import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { ProcessSection } from "@/components/ProcessSection";
import { Reveal } from "@/components/Reveal";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import { LuxuryPreviewSlider } from "@/components/LuxuryPreviewSlider";
import { SectionShell } from "@/components/SectionShell";

import "@/styles/Modal.css";

export const metadata: Metadata = {
  title: "Avi Sanan — Strategic Asset Marketing · Lower Mainland Luxury Real Estate",
  description:
    "Boutique luxury real estate advisory for Vancouver, West Vancouver and the Lower Mainland. Strategic asset marketing engineered through analytics, executed with discretion.",
  openGraph: {
    title: "Avi Sanan — Strategic Asset Marketing",
    description: "Vancouver luxury real estate engineered with data, executed with discretion.",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 animate-ken-burns bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[#060B13]/60" />
        <SectionShell className="relative z-10 w-full">
          <div className="glass-panel max-w-3xl mx-auto p-10 md:p-16 text-center space-y-8 rounded-sm">
            <Reveal>
              <p className="text-xs md:text-sm tracking-[0.36em] uppercase text-[#C5A267] font-semibold">
                Vancouver · West Vancouver · Lower Mainland
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1
                className="font-serif text-[#FDFCFB] leading-[1.05] font-normal"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
              >
                Strategic Asset <em className="italic font-normal text-[#C5A267]">Marketing.</em>{" "}
                Data-Driven Execution.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-sm md:text-base text-[#FDFCFB]/80 font-sans leading-relaxed max-w-[58ch] mx-auto">
                Boutique luxury advisory for Vancouver and the Lower Mainland — engineered with
                data, executed with discretion.
              </p>
            </Reveal>
            <LeadCaptureSection />
          </div>
        </SectionShell>
      </div>

      <SectionShell>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6 max-w-lg">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">The Advisor</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                Avi Sanan
              </h2>
              <p className="text-sm text-[#FDFCFB]/70 font-sans leading-relaxed">
                As a real estate advisor with a strong foundation in Commerce, Avi brings an
                analytical and strategic approach to marketing luxury assets. His methodology goes
                beyond aesthetics, focusing on precise market positioning and demographic targeting
                to secure optimal outcomes for his clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="w-full aspect-[4/5] md:max-w-[400px] mx-auto md:ml-auto relative">
              <div className="hero-frame-elevated h-full">
                <PlaceholderFrame
                  ratio="4/5"
                  label="Executive Portraiture"
                  description="Polished modern executive headshot of Avi Sanan."
                  className="h-full border-0"
                />
              </div>
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
    </>
  );
}
