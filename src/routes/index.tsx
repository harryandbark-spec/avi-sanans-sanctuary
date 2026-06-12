import { createFileRoute } from "@tanstack/react-router";
import { SectionShell } from "@/components/SectionShell";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { ValuePillars } from "@/components/ValuePillars";
import { LuxuryPreviewSlider } from "@/components/LuxuryPreviewSlider";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avi Sanan — Strategic Asset Marketing · Lower Mainland Luxury Real Estate" },
      {
        name: "description",
        content:
          "Boutique luxury real estate advisory for Vancouver, West Vancouver and the Lower Mainland. Strategic asset marketing engineered through analytics, executed with discretion.",
      },
      { property: "og:title", content: "Avi Sanan — Strategic Asset Marketing" },
      {
        property: "og:description",
        content: "Vancouver luxury real estate engineered with data, executed with discretion.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax/Ken Burns */}
        <div 
          className="absolute inset-0 z-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')" }}
        />
        {/* Dark overlay for text readability */}
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
                Strategic Asset{" "}
                <em className="italic font-normal text-[#C5A267]">Marketing.</em>{" "}
                Data-Driven Execution.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-sm md:text-base text-[#FDFCFB]/80 font-sans leading-relaxed max-w-[58ch] mx-auto">
                A degree in Commerce and advanced marketing analytics means your home's
                presentation isn't left to guesswork. We combine algorithmic demographic
                targeting with flawless visual staging to put your property in front of
                high-net-worth buyer pools looking to deploy capital in the Lower Mainland.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <button type="button" className="cta-navy mt-4">
                Request a Custom Property Marketing Analysis
              </button>
            </Reveal>
          </div>
        </SectionShell>

        {/* Bottom fade gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, #060B13, transparent)" }}
        />
      </div>

      {/* THE ADVISOR (Moved Portrait) */}
      <SectionShell>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6 max-w-lg">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
                The Advisor
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                Avi Sanan
              </h2>
              <p className="text-sm text-[#FDFCFB]/70 font-sans leading-relaxed">
                As a real estate advisor with a strong foundation in Commerce, Avi brings an analytical and 
                strategic approach to marketing luxury assets. His methodology goes beyond aesthetics, focusing 
                on precise market positioning and demographic targeting to secure optimal outcomes for his clients.
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

      {/* VALUE PILLARS */}
      <SectionShell bg="muted">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              The Advisory
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#FDFCFB] leading-tight">
              Three pillars of an institutional-grade practice.
            </h2>
          </div>
          <ValuePillars />
        </div>
      </SectionShell>

      {/* PREVIEW */}
      <SectionShell>
        <LuxuryPreviewSlider />
      </SectionShell>
    </>
  );
}
