import type { Metadata } from "next";
import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";

import { AccreditationRibbon } from "@/components/AccreditationRibbon";
import { CoreValuesSidebar } from "@/components/CoreValuesSidebar";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

export const metadata: Metadata = {
  title: "About · Avi Sanan — Local REALTOR® Vancouver",
  description:
    "Avi Sanan is a local REALTOR® with Sutton Group — West Coast Realty, serving buyers and sellers across Vancouver and the Lower Mainland.",
  openGraph: {
    title: "About · Avi Sanan",
    description: "Local REALTOR® serving Vancouver and the Lower Mainland.",
  },
};

const EXPERIENCE = [
  {
    title: "Residential Sales",
    body: "Helping families and individuals buy and sell homes across Greater Vancouver — from first-time buyers to move-up sellers.",
  },
  {
    title: "New Development Sales",
    body: "Experience working alongside developers on presale and new construction projects, helping buyers navigate the development purchase process.",
  },
  {
    title: "Off‑Market Sourcing",
    body: "Using local broker relationships and quiet outreach to surface properties before they hit MLS — particularly useful for buyers with specific requirements.",
  },
  {
    title: "Investor Advisory",
    body: "Advising investors on acquisition strategy, rental potential, and market timing across the Lower Mainland.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/mid-section.png"
        alt="A welcoming home interior"
        eyebrow="The Advisor"
        title="Avi Sanan"
        description="A local REALTOR® serving Vancouver and the Lower Mainland. He takes time to understand what each client actually needs — and works quietly and efficiently to make buying or selling straightforward."
        minHeight="min-h-[45vh] md:min-h-[55vh]"
      />

      {/* ── Intro / Bio ───────────────────────────────────────────────── */}
      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="w-full aspect-[3/4] overflow-hidden">
              <img
                src="/images/avi-headshot.png"
                alt="Avi Sanan — Local REALTOR®"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-7">
            <Reveal>
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">The Advisor</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-serif text-[#FDFCFB] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                About Avi
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="space-y-4 text-base text-[#FDFCFB]/75 leading-relaxed max-w-[60ch]">
                <p>
                  Avi is a local REALTOR® serving Vancouver and the Lower Mainland. He takes time to
                  understand what each client actually needs — and works quietly and efficiently to
                  make buying or selling straightforward.
                </p>
                <p>
                  With a background in Commerce and Marketing (BBA), Avi combines practical business
                  thinking with genuine local knowledge of the Lower Mainland market. Whether you're
                  a first‑time buyer, a growing family looking to upsize, or a seller wanting a
                  clear plan — he's direct, responsive, and focused on your outcome.
                </p>
                <p>
                  Alongside residential sales, Avi has experience working with developers on new
                  construction and presale projects, giving him insight into both sides of the
                  market.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 border border-[#C5A267]/30 text-[10px] tracking-[0.22em] uppercase text-[#C5A267]">
                  REALTOR®
                </span>
                <span className="px-3 py-1 border border-[#FDFCFB]/15 text-[10px] tracking-[0.22em] uppercase text-[#FDFCFB]/50">
                  BBA Commerce & Marketing
                </span>
                <span className="px-3 py-1 border border-[#FDFCFB]/15 text-[10px] tracking-[0.22em] uppercase text-[#FDFCFB]/50">
                  English · Punjabi · Hindi
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* ── Marquee ───────────────────────────────────────────────────── */}
      <AccreditationRibbon />

      {/* ── Experience ────────────────────────────────────────────────── */}
      <SectionShell bg="muted">
        <div className="space-y-10">
          <Reveal>
            <div className="max-w-xl space-y-3">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">Experience</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                Areas of focus
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <div className="bg-[#08101A] border border-[#C5A267]/10 p-6 space-y-3 hover:border-[#C5A267]/30 transition-colors">
                  <h3 className="font-serif text-xl text-[#FDFCFB]">{e.title}</h3>
                  <p className="text-sm text-[#FDFCFB]/65 leading-relaxed">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ── Approach + Values ─────────────────────────────────────────── */}
      <SectionShell>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4">
            <CoreValuesSidebar />
          </Reveal>
          <div className="lg:col-span-8 space-y-10">
            <Reveal>
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">Approach</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                  One client at a time, done properly.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-5 text-base text-[#FDFCFB]/75 leading-relaxed">
                <p>
                  Avi keeps his client roster deliberately small. That means every buyer or seller
                  gets consistent attention — not a handoff to a junior team member once the
                  paperwork is signed.
                </p>
                <p>
                  He works with a trusted group of photographers, stagers, mortgage brokers, and
                  lawyers, so clients don't have to coordinate the moving pieces themselves. One
                  point of contact, from start to finish.
                </p>
                <p>The goal is simple: less stress, a fair price, and a clean close.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* ── Sutton West Coast Brokerage Card ──────────────────────────── */}
      <SectionShell bg="muted">
        <Reveal>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[#C5A267]">Brokerage</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FDFCFB] leading-tight">
                Sutton Group — West Coast Realty
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main card */}
              <div className="lg:col-span-2 bg-[#08101A] border border-[#C5A267]/15 p-6 md:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl text-[#FDFCFB]">
                      Sutton Group — West Coast Realty
                    </p>
                    <p className="text-sm text-[#FDFCFB]/50 mt-1">
                      One of BC's most established real estate brokerages
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">
                  Sutton Group West Coast Realty is one of the largest and most trusted real estate
                  brokerages in British Columbia, with offices across the Lower Mainland and a
                  strong network of local agents. As a Sutton REALTOR®, Avi operates with the
                  backing of an established system — while maintaining the personal, one-on-one
                  service his clients value.
                </p>
                <a
                  href="https://suttonwestcoast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C5A267] text-sm hover:underline"
                >
                  Visit suttonwestcoast.com
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Contact / Quick info */}
              <div className="bg-[#08101A] border border-[#C5A267]/15 p-6 md:p-8 space-y-5">
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#C5A267]/60">
                  Contact Avi
                </p>
                <ul className="space-y-4 text-sm text-[#FDFCFB]/75">
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="text-[#C5A267] mt-0.5 shrink-0" />
                    <span>205 – 2607 East 49th Avenue, Vancouver, BC V5S 1J9</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={15} className="text-[#C5A267] shrink-0" />
                    <a href="tel:778-387-7001" className="hover:text-[#C5A267] transition-colors">
                      778‑387‑7001
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={15} className="text-[#C5A267] shrink-0" />
                    <a
                      href="mailto:realestate.avi@gmail.com"
                      className="hover:text-[#C5A267] transition-colors break-all"
                    >
                      realestate.avi@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center border border-[#C5A267]/40 text-[#C5A267] hover:bg-[#C5A267] hover:text-[#060B13] transition-colors px-4 py-2.5 text-[11px] tracking-[0.24em] uppercase font-semibold"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
