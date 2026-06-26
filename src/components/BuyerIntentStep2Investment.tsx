import React from "react";
interface Step2InvestmentProps {
  data: { type: string; budget: string };
  setData: (value: { type: string; budget: string }) => void;
  onNext: () => void;
  onBack: () => void;
}

const types = ["Presale", "Resale", "First investment", "Adding to portfolio"];

const Step2Investment: React.FC<Step2InvestmentProps> = ({ data, setData, onNext, onBack }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="step step-2-investment">
      <h2 className="text-xl mb-4 text-[#FDFCFB]">Investment Property Details</h2>
      <div className="mb-4">
        <label className="block mb-2 text-[#C5A267]">Property Type</label>
        <select
          name="type"
          value={data.type}
          onChange={handleChange}
          className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]"
        >
          <option value="">Select type</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-[#C5A267]">Budget</label>
        <input
          type="text"
          name="budget"
          value={data.budget}
          onChange={handleChange}
          placeholder="e.g., $500k-$800k"
          className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button className="cta-ghost" onClick={onBack}>
          Back
        </button>
        <button className="cta-navy" disabled={!data.type || !data.budget} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Investment;
