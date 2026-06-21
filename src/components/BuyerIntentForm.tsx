import React, { useState } from "react";
import "../styles/BuyerIntentForm.css?url";
import ProgressIndicator from "./ProgressIndicator";
import Step1 from "./BuyerIntentStep1";
import Step2Personal from "./BuyerIntentStep2Personal";
import Step2Investment from "./BuyerIntentStep2Investment";
import Step2Other from "./BuyerIntentStep2Other";
import Step3 from "./BuyerIntentStep3";
import { IntentData } from "../utils/types";

const steps = ["Intent", "Details", "Contact"] as const;

type Step = typeof steps[number];

const BuyerIntentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>("Intent");
  const [intent, setIntent] = useState<string>(""); // "personal" | "investment" | "other"
  const [personalData, setPersonalData] = useState({ timeline: "", area: "" });
  const [investmentData, setInvestmentData] = useState({ type: "", budget: "" });
  const [otherText, setOtherText] = useState("");
  const [contact, setContact] = useState<{ method: "whatsapp" | "email"; name: string; phone?: string; email?: string }>({ method: "whatsapp", name: "" });

  const goNext = () => {
    const idx = steps.indexOf(currentStep);
    if (idx < steps.length - 1) setCurrentStep(steps[idx + 1] as Step);
  };
  const goBack = () => {
    const idx = steps.indexOf(currentStep);
    if (idx > 0) setCurrentStep(steps[idx - 1] as Step);
  };

  const handleSubmit = () => {
    // Build payload based on intent
    const payload: IntentData = { intent, personalData, investmentData, otherText, contact };
    const url =
      contact.method === "whatsapp"
        ? require("../utils/whatsappLink").buildWhatsAppLink(payload)
        : require("../utils/emailLink").buildMailtoLink(payload);
    window.open(url, "_blank");
  };

  return (
    <div className="buyer-intent-form glass-card">
      <ProgressIndicator current={steps.indexOf(currentStep) + 1} total={steps.length} />
      {currentStep === "Intent" && (
        <Step1 intent={intent} setIntent={setIntent} onNext={goNext} />
      )}
      {currentStep === "Details" && (
        <>
          {intent === "personal" && (
            <Step2Personal data={personalData} setData={setPersonalData} onNext={goNext} onBack={goBack} />
          )}
          {intent === "investment" && (
            <Step2Investment data={investmentData} setData={setInvestmentData} onNext={goNext} onBack={goBack} />
          )}
          {intent === "other" && (
            <Step2Other text={otherText} setText={setOtherText} onNext={goNext} onBack={goBack} />
          )}
        </>
      )}
      {currentStep === "Contact" && (
        <Step3 contact={contact} setContact={setContact} onBack={goBack} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default BuyerIntentForm;
