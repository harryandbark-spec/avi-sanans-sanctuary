import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

/**
 * Wrapper that shows two entry chips (Buy / Sell) and opens the modal.
 * The CTA label for each chip is decided by the path.
 */
export default function LeadCaptureSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<"buy" | "sell">("buy");

  const open = (selectedMode: "buy" | "sell") => {
    setMode(selectedMode);
    setModalOpen(true);
  };

  return (
    <section className="mt-8 flex justify-center gap-4">
      <button 
        className="px-8 py-3 rounded-full border border-[#C5A267] text-[#C5A267] hover:bg-[#C5A267] hover:text-[#060B13] transition-colors text-sm uppercase tracking-widest font-semibold" 
        onClick={() => open("buy")}
      >
        Find My Home
      </button>
      <button 
        className="px-8 py-3 rounded-full border border-[#FDFCFB]/50 text-[#FDFCFB] hover:bg-[#FDFCFB] hover:text-[#060B13] transition-colors text-sm uppercase tracking-widest font-semibold" 
        onClick={() => open("sell")}
      >
        What’s Your Home Worth
      </button>
      <LeadCaptureModal open={isModalOpen} onClose={() => setModalOpen(false)} mode={mode} />
    </section>
  );
}
