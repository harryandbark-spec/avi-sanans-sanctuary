import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "Burnaby & Coquitlam · Neighborhood Guide",
  description: "Family-oriented neighborhoods near transit corridors across Burnaby and Coquitlam.",
};

export default function BurnabyCoquitlamPage() {
  return (
    <>
      <PageHero
        image="/images/neighborhood-burnaby-coquitlam.png"
        alt="Modern family neighborhood in Burnaby or Coquitlam"
        eyebrow="Neighbourhood Guide"
        title="Burnaby & Coquitlam"
        description="Transit-connected family neighbourhoods with modern condos, townhomes, and larger lots at a range of price points."
        minHeight="min-h-[45vh] md:min-h-[55vh]"
      />

      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-[#FDFCFB]">Market Snapshot</h2>
              <p className="text-[#FDFCFB]/75 leading-relaxed max-w-[60ch]">
                These markets blend newer construction with established family neighbourhoods. Ideal
                for buyers seeking modern finishes, good school access, and a reasonable commute to
                central Vancouver.
              </p>
              <ul className="space-y-3 text-[#FDFCFB]/70 text-sm">
                <li>Average price range: $1.2M–$3M</li>
                <li>Buyer profile: growing families and professionals</li>
                <li>
                  What matters: transit access, strata fees, school catchments, new vs. resale
                </li>
              </ul>
              <Link
                href="/buy"
                className="inline-block px-6 py-3 border border-[#C5A267]/60 text-[#C5A267] hover:bg-[#C5A267] hover:text-[#060B13] transition-colors text-sm uppercase tracking-widest font-semibold"
              >
                Start Your Search
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/listing-3.png"
                alt="Burnaby or Coquitlam home interior"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <WarmMidSection />
    </>
  );
}
