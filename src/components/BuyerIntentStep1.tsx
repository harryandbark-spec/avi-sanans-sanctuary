import React from "react";

interface Step1Props {
  intent: string;
  setIntent: (value: string) => void;
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ intent, setIntent, onNext }) => {
  return (
    <div className="step step-1">
      <h2 className="text-xl mb-4 text-[#FDFCFB]">What are you looking for?</h2>
      <div className="space-y-2 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="intent"
            value="personal"
            checked={intent === "personal"}
            onChange={() => setIntent("personal")}
            className="mr-2"
          />
          Personal residence
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="intent"
            value="investment"
            checked={intent === "investment"}
            onChange={() => setIntent("investment")}
            className="mr-2"
          />
          Investment property
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="intent"
            value="other"
            checked={intent === "other"}
            onChange={() => setIntent("other")}
            className="mr-2"
          />
          Other
        </label>
      </div>
      <button
        className="cta-navy mt-2"
        disabled={!intent}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
