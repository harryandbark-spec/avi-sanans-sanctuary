import React from "react";
interface Step2OtherProps {
  text: string;
  setText: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const Step2Other: React.FC<Step2OtherProps> = ({ text, setText, onNext, onBack }) => {
  return (
    <div className="step step-2-other">
      <h2 className="text-xl mb-4 text-[#FDFCFB]">Tell us what you're looking for</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your request..."
        className="w-full p-2 h-32 bg-[#0a1018] text-[#FDFCFB]"
      />
      <div className="flex justify-between mt-4">
        <button className="cta-ghost" onClick={onBack}>
          Back
        </button>
        <button className="cta-navy" disabled={!text} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Other;
