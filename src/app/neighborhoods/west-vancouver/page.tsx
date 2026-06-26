import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "West Vancouver · Neighborhood Guide",
  description:
    "West Vancouver waterfront and hillside estates — market characteristics and buyer expectations.",
};

export default function WestVancouverPage() {
  return (
    <>
      <PageHero
        image="/images/neighborhood-west-vancouver.png"
        alt="West Vancouver waterfront home"
        eyebrow="Neighbourhood Guide"
        title="West Vancouver"
        description="Waterfront and hillside estates with privacy, exceptional views, and long-term hold potential."
        minHeight="min-h-[45vh] md:min-h-[55vh]"
      />

      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-[#FDFCFB]">Market Snapshot</h2>
              <p className="text-[#FDFCFB]/75 leading-relaxed max-w-[60ch]">
                West Vancouver commands premium pricing for waterfront and hillside properties.
                Buyers here tend to value privacy, outdoor living, and homes with exceptional site
                lines — often holding for the long term.
              </p>
              <ul className="space-y-3 text-[#FDFCFB]/70 text-sm">
                <li>Average price (upper tier): $5M+</li>
                <li>Buyer profile: families and established professionals</li>
                <li>What matters: views, privacy, outdoor space, access to trails and schools</li>
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
                src="/images/listing-6.png"
                alt="West Vancouver home interior"
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
