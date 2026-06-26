import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { WarmMidSection } from "@/components/WarmMidSection";

export const metadata: Metadata = {
  title: "Case Study · Vancouver Townhouse Sale",
  description: "Case study summarizing a targeted marketing sale of a Vancouver townhouse.",
};

export default function CaseStudyTwo() {
  return (
    <>
      <PageHero
        image="/images/listing-10.png"
        alt="Vancouver townhouse interior"
        eyebrow="Case Study"
        title="Vancouver Townhouse — Targeted Marketing"
        minHeight="min-h-[40vh] md:min-h-[50vh]"
      />

      <SectionShell>
        <Reveal>
          <div className="max-w-3xl space-y-8">
            <div className="bg-[#08101A] border border-[#C5A267]/15 rounded-sm p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="font-semibold text-[#FDFCFB]">Timeline</div>
                <div className="text-sm text-[#FDFCFB]/70">
                  Public &amp; private marketing — 21 days to contract
                </div>
              </div>
            </div>

            <p className="text-[#FDFCFB]/75 leading-relaxed">
              Using targeted outreach and professional photography, we attracted a shortlist of
              qualified buyers and executed a swift negotiation that protected seller value.
            </p>

            <dl className="text-[#FDFCFB]/70 space-y-4">
              <div>
                <dt className="font-semibold text-[#FDFCFB] mb-1">Outcome</dt>
                <dd>Multiple competitive offers; sale price within target range.</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </SectionShell>

      <WarmMidSection />
    </>
  );
}
