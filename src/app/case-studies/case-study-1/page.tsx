import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "Case Study · West Vancouver Estate Sold",
  description:
    "Confidential case study: off-market sale of a West Vancouver estate and outcome summary.",
};

export default function CaseStudyOne() {
  return (
    <>
      <PageHero
        image="/images/listing-9.png"
        alt="West Vancouver estate interior"
        eyebrow="Case Study"
        title="West Vancouver Estate — Confidential Sale"
        minHeight="min-h-[40vh] md:min-h-[50vh]"
      />

      <SectionShell>
        <Reveal>
          <div className="max-w-3xl space-y-8">
            <div className="bg-[#08101A] border border-[#C5A267]/15 rounded-sm p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="font-semibold text-[#FDFCFB]">Timeline</div>
                <div className="text-sm text-[#FDFCFB]/70">
                  Private marketing — 28 days to accepted offer
                </div>
              </div>
            </div>

            <p className="text-[#FDFCFB]/75 leading-relaxed">
              A discreet, client-directed engagement that sourced a private buyer through curated
              local networks. The process emphasised privacy, targeted outreach, and contract
              protections to preserve the seller&apos;s equity.
            </p>

            <dl className="text-[#FDFCFB]/70 space-y-4">
              <div>
                <dt className="font-semibold text-[#FDFCFB] mb-1">Outcome</dt>
                <dd>
                  Competitive offer secured; confidential settlement — price available upon request
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </SectionShell>

      <WarmMidSection />
    </>
  );
}
