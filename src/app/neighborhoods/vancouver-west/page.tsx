import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "Vancouver West · Neighborhood Guide",
  description:
    "Market snapshot, typical buyer profile, and recent trends for Vancouver West residential properties.",
};

export default function VancouverWestPage() {
  return (
    <>
      <PageHero
        image="/images/neighborhood-vancouver-west.png"
        alt="Tree-lined street in Vancouver West"
        eyebrow="Neighbourhood Guide"
        title="Vancouver West"
        description="Established neighbourhoods with family homes, strong school catchments, and a mix of heritage character and modern builds."
        minHeight="min-h-[45vh] md:min-h-[55vh]"
      />

      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-[#FDFCFB]">Market Snapshot</h2>
              <p className="text-[#FDFCFB]/75 leading-relaxed max-w-[60ch]">
                Typical inventory includes single-family homes and townhouses across Kerrisdale,
                Dunbar, and Kitsilano. Strong demand from local families and move-up buyers keeps
                well-located homes moving steadily.
              </p>
              <ul className="space-y-3 text-[#FDFCFB]/70 text-sm">
                <li>Average price (upper tier): $3M+</li>
                <li>Buyer profile: families and long-term holders</li>
                <li>What matters: school catchments, lot size, character vs. new build</li>
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
                src="/images/listing-2.png"
                alt="Vancouver West home interior"
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
