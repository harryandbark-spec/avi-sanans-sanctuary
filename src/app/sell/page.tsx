import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SellChecklist } from "@/components/SellChecklist";
import { SectionShell } from "@/components/SectionShell";
import { SellIntakeSection } from "@/components/SellIntakeSection";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "Sell · Local Seller Advisory — Avi Sanan",
  description:
    "Thinking of selling your home in Vancouver or the Lower Mainland? Get a private valuation and a practical marketing plan from a local REALTOR® who knows the area.",
  openGraph: {
    title: "Sell · Avi Sanan — Vancouver REALTOR®",
    description: "Private valuations and practical seller guidance across the Lower Mainland.",
  },
};

const PILLARS = [
  {
    label: "Targeting",
    title: "Finding the Right Buyers",
    body: "We identify who is actively looking in your area and price range, then focus outreach where it counts — local broker networks, private contacts, and targeted digital reach.",
  },
  {
    label: "Presentation",
    title: "Photography & Presentation",
    body: "Professional photography and clear, honest property marketing that shows your home at its best across MLS, social, and private channels.",
  },
  {
    label: "Negotiation",
    title: "Negotiating a Good Outcome",
    body: "We price your home accurately, review all offers with you, and negotiate to get the best result — without leaving money on the table.",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        image="/images/tile-home-worth.png"
        alt="Well-presented home ready for sale"
        eyebrow="Selling Your Home"
        title={
          <>
            Sell with confidence.{" "}
            <em className="italic font-normal text-[#C5A267]">
              Get the right price, with less stress.
            </em>
          </>
        }
        description="Selling is a big decision. We make it straightforward — starting with an honest valuation, a clear plan, and hands‑on support from listing day to the moment you hand over the keys."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="cta-navy">Request a Free Private Valuation</button>
          <button className="px-6 py-3 border border-[#C5A267]/60 text-[#C5A267] hover:bg-[#C5A267] hover:text-[#060B13] transition-colors text-sm uppercase tracking-widest font-semibold rounded-sm">
            See How We Market Homes
          </button>
        </div>
      </PageHero>

      <SectionShell>
        <div className="space-y-10 md:space-y-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
                  Seller&apos;s Checklist
                </p>
                <h2
                  className="font-serif text-[#FDFCFB] leading-[1.1]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  What selling actually looks like, step by step.
                </h2>
              </div>
              <div className="shrink-0 bg-[#08101A] border border-[#C5A267]/15 rounded-sm px-5 py-3 text-sm text-[#FDFCFB]/70">
                <span className="font-semibold text-[#FDFCFB]">Typical timeline: </span>
                3–8 weeks listing to close
              </div>
            </div>
          </Reveal>

          <SellChecklist />
        </div>
      </SectionShell>

      <SectionShell bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/listing-5.png"
                alt="Beautifully staged home interior"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="space-y-12">
            <Reveal delay={80}>
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
                  How We Sell
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-[#FDFCFB] leading-tight">
                  Three things we do well for every seller.
                </h2>
              </div>
            </Reveal>

            <div className="space-y-0">
              {PILLARS.map((c, i) => (
                <Reveal key={c.title} delay={120 + i * 90}>
                  <div
                    className={
                      "p-6 lg:p-8 space-y-4 border-t border-[#C5A267]/15 hover:bg-[#070E1A] transition-colors"
                    }
                  >
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A267]">
                      {c.label}
                    </p>
                    <h3 className="font-serif text-2xl text-[#FDFCFB] leading-tight">{c.title}</h3>
                    <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <h2
              className="font-serif text-[#FDFCFB] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              We stay with you from listing day to the moment you hand over the keys.
            </h2>
            <p className="text-base text-[#FDFCFB]/75 leading-relaxed">
              Selling involves a lot of moving parts — paperwork, showings, offers, inspections,
              lawyers. We handle those pieces and keep you informed at every step, so there are no
              surprises and your sale stays on track.
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell bg="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 space-y-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">
              Private Valuation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
              What&apos;s your home worth?
            </h2>
            <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">
              Free, confidential, and back to you within 72 hours.
            </p>
            <p className="text-sm text-[#FDFCFB]/50 leading-relaxed italic">
              No obligation. Just a clear, honest number you can actually use.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="lg:col-span-8 bg-[#0A1221] border border-[#C5A267]/10 p-6 md:p-10"
          >
            <SellIntakeSection />
          </Reveal>
        </div>
      </SectionShell>

      <WarmMidSection />
    </>
  );
}
