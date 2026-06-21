import React from "react";
interface Step2PersonalProps {
  data: { timeline: string; area: string };
  setData: (value: { timeline: string; area: string }) => void;
  onNext: () => void;
  onBack: () => void;
}

const timelines = ["ASAP", "3-6 months", "Just browsing"];

const Step2Personal: React.FC<Step2PersonalProps> = ({ data, setData, onNext, onBack }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="step step-2-personal">
      <h2 className="text-xl mb-4 text-[#FDFCFB]">Personal Residence Details</h2>
      <div className="mb-4">
        <label className="block mb-2 text-[#C5A267]">Timeline</label>
        <select name="timeline" value={data.timeline} onChange={handleChange} className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]">
          <option value="">Select timeline</option>
          {timelines.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-[#C5A267]">Area Preference</label>
        <input
          type="text"
          name="area"
          value={data.area}
          onChange={handleChange}
          placeholder="e.g., Downtown Vancouver"
          className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button className="cta-ghost" onClick={onBack}>
          Back
        </button>
        <button className="cta-navy" disabled={!data.timeline || !data.area} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Personal;
