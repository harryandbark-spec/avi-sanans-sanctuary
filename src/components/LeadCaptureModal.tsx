import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "../styles/Modal.css";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  mode: "buy" | "sell";
};

export default function LeadCaptureModal({ open, onClose, mode }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content glass-panel relative">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-serif mb-4 text-[#FDFCFB]">
            {mode === "buy" ? "Find My Home" : "What's Your Home Worth"}
          </h2>
          {mode === "buy" ? <BuyLeadForm onClose={onClose} /> : <SellLeadForm onClose={onClose} />}
        </div>
      </div>
    </div>,
    document.body
  );
}

function BuyLeadForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [purpose, setPurpose] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [otherText, setOtherText] = useState("");

  // Step 3 Contact
  const [name, setName] = useState("");
  const [method, setMethod] = useState("");
  const [contactDetail, setContactDetail] = useState("");

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  if (step === 1) {
    return (
      <div className="space-y-6">
        <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 1 of 3</p>
        <h3 className="text-lg text-[#FDFCFB]">What are you looking for?</h3>
        <div className="flex flex-col gap-3">
          {["Personal residence", "Investment property", "Other"].map((opt) => (
            <button
              key={opt}
              className={`p-3 border text-left rounded-sm transition-colors ${
                purpose === opt ? "border-[#C5A267] bg-[#C5A267]/10" : "border-[#FDFCFB]/20 hover:border-[#FDFCFB]/40"
              } text-[#FDFCFB]`}
              onClick={() => {
                setPurpose(opt);
                handleNext();
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    if (purpose === "Other") {
      return (
        <div className="space-y-6">
          <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 2 of 3</p>
          <h3 className="text-lg text-[#FDFCFB]">Tell us what you are looking for</h3>
          <textarea
            className="w-full bg-transparent border border-[#FDFCFB]/20 p-3 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267] min-h-[100px]"
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            placeholder="Type your requirements here..."
          />
          <div className="flex justify-between pt-4">
            <button className="text-sm text-[#FDFCFB]/70 hover:text-[#FDFCFB]" onClick={handleBack}>Back</button>
            <button className="bg-[#C5A267] text-[#060B13] px-6 py-2 rounded-sm text-sm font-semibold" onClick={handleNext} disabled={!otherText}>
              Next
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 2 of 3</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#FDFCFB]/70 mb-2">Area</label>
            <div className="flex flex-wrap gap-2">
              {["Surrey", "Abbotsford", "Langley", "Vancouver", "Other"].map((opt) => (
                <button
                  key={opt}
                  className={`px-3 py-1 text-sm border rounded-sm transition-colors ${
                    area === opt ? "border-[#C5A267] bg-[#C5A267]/10 text-[#C5A267]" : "border-[#FDFCFB]/20 text-[#FDFCFB]/70 hover:border-[#FDFCFB]/40"
                  }`}
                  onClick={() => setArea(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#FDFCFB]/70 mb-2">Type</label>
            <div className="flex flex-wrap gap-2">
              {["House", "Townhouse", "Condo", "Apartment"].map((opt) => (
                <button
                  key={opt}
                  className={`px-3 py-1 text-sm border rounded-sm transition-colors ${
                    type === opt ? "border-[#C5A267] bg-[#C5A267]/10 text-[#C5A267]" : "border-[#FDFCFB]/20 text-[#FDFCFB]/70 hover:border-[#FDFCFB]/40"
                  }`}
                  onClick={() => setType(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#FDFCFB]/70 mb-2">Budget</label>
            <div className="flex flex-wrap gap-2">
              {["<$700K", "$700K–1M", "$1M–1.5M", "$1.5M+"].map((opt) => (
                <button
                  key={opt}
                  className={`px-3 py-1 text-sm border rounded-sm transition-colors ${
                    budget === opt ? "border-[#C5A267] bg-[#C5A267]/10 text-[#C5A267]" : "border-[#FDFCFB]/20 text-[#FDFCFB]/70 hover:border-[#FDFCFB]/40"
                  }`}
                  onClick={() => setBudget(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <button className="text-sm text-[#FDFCFB]/70 hover:text-[#FDFCFB]" onClick={handleBack}>Back</button>
          <button className="bg-[#C5A267] text-[#060B13] px-6 py-2 rounded-sm text-sm font-semibold" onClick={handleNext} disabled={!area || !type || !budget}>
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 3 of 3</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-[#FDFCFB]/70 mb-2">Name</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-[#FDFCFB]/70 mb-2">Preferred Contact Method</label>
          <div className="flex gap-4">
            {["Email", "Phone", "Text"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-[#FDFCFB]">
                <input
                  type="radio"
                  name="contactMethod"
                  value={opt}
                  checked={method === opt}
                  onChange={() => setMethod(opt)}
                  className="accent-[#C5A267]"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
        {method && (
          <div>
            <label className="block text-sm text-[#FDFCFB]/70 mb-2">{method} Detail</label>
            <input
              type={method === "Email" ? "email" : "tel"}
              className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
              value={contactDetail}
              onChange={(e) => setContactDetail(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between pt-4">
        <button className="text-sm text-[#FDFCFB]/70 hover:text-[#FDFCFB]" onClick={handleBack}>Back</button>
        <button 
          className="bg-[#C5A267] text-[#060B13] px-6 py-2 rounded-sm text-sm font-semibold" 
          onClick={() => {
            alert("Lead Captured!");
            onClose();
          }} 
          disabled={!name || !method || !contactDetail}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function SellLeadForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  // Step 3 Contact
  const [name, setName] = useState("");
  const [method, setMethod] = useState("");
  const [contactDetail, setContactDetail] = useState("");

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  if (step === 1) {
    return (
      <div className="space-y-6">
        <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 1 of 3</p>
        <div>
          <label className="block text-sm text-[#FDFCFB]/70 mb-2">Property Address</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St, Vancouver"
          />
        </div>
        <div className="flex justify-end pt-4">
          <button className="bg-[#C5A267] text-[#060B13] px-6 py-2 rounded-sm text-sm font-semibold" onClick={handleNext} disabled={!address}>
            Next
          </button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 2 of 3</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#FDFCFB]/70 mb-2">Property Type</label>
            <div className="flex flex-wrap gap-2">
              {["House", "Townhouse", "Condo", "Apartment"].map((opt) => (
                <button
                  key={opt}
                  className={`px-3 py-1 text-sm border rounded-sm transition-colors ${
                    propertyType === opt ? "border-[#C5A267] bg-[#C5A267]/10 text-[#C5A267]" : "border-[#FDFCFB]/20 text-[#FDFCFB]/70 hover:border-[#FDFCFB]/40"
                  }`}
                  onClick={() => setPropertyType(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-[#FDFCFB]/70 mb-2">Beds</label>
              <select 
                className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
              >
                <option value="" className="text-black">Select</option>
                {[1, 2, 3, 4, "5+"].map(n => <option key={n} value={n} className="text-black">{n}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-[#FDFCFB]/70 mb-2">Baths</label>
              <select 
                className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
              >
                <option value="" className="text-black">Select</option>
                {[1, 1.5, 2, 2.5, 3, "4+"].map(n => <option key={n} value={n} className="text-black">{n}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <button className="text-sm text-[#FDFCFB]/70 hover:text-[#FDFCFB]" onClick={handleBack}>Back</button>
          <button className="bg-[#C5A267] text-[#060B13] px-6 py-2 rounded-sm text-sm font-semibold" onClick={handleNext} disabled={!propertyType || !beds || !baths}>
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm tracking-widest uppercase text-[#C5A267]">Step 3 of 3</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-[#FDFCFB]/70 mb-2">Name</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-[#FDFCFB]/70 mb-2">Preferred Contact Method</label>
          <div className="flex gap-4">
            {["Email", "Phone", "Text"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-[#FDFCFB]">
                <input
                  type="radio"
                  name="contactMethod"
                  value={opt}
                  checked={method === opt}
                  onChange={() => setMethod(opt)}
                  className="accent-[#C5A267]"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
        {method && (
          <div>
            <label className="block text-sm text-[#FDFCFB]/70 mb-2">{method} Detail</label>
            <input
              type={method === "Email" ? "email" : "tel"}
              className="w-full bg-transparent border-b border-[#FDFCFB]/20 py-2 text-[#FDFCFB] focus:outline-none focus:border-[#C5A267]"
              value={contactDetail}
              onChange={(e) => setContactDetail(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between pt-4">
        <button className="text-sm text-[#FDFCFB]/70 hover:text-[#FDFCFB]" onClick={handleBack}>Back</button>
        <button 
          className="bg-[#C5A267] text-[#060B13] px-6 py-2 rounded-sm text-sm font-semibold" 
          onClick={() => {
            alert("Lead Captured!");
            onClose();
          }} 
          disabled={!name || !method || !contactDetail}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
