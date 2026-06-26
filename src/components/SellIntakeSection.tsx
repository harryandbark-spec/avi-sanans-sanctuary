"use client";

import { IntakeForm } from "@/components/IntakeForm";
import { sellSchema } from "@/lib/schemas";

export function SellIntakeSection() {
  return (
    <IntakeForm
      schema={sellSchema}
      submitLabel="Authorize Private Valuation Analysis"
      fields={[
        {
          name: "address",
          label: "Property Address / Region",
          type: "select",
          options: [
            "Vancouver",
            "West Vancouver",
            "Burnaby",
            "Coquitlam",
            "Richmond",
            "Surrey",
            "Langley",
          ],
          placeholder: "Select region",
        },
        {
          name: "bracket",
          label: "Estimated Portfolio Bracket",
          type: "select",
          options: ["$2M – $3.5M", "$3.5M – $6M", "$6M+"],
          placeholder: "Select bracket",
        },
        {
          name: "timeline",
          label: "Desired Market Timeline",
          type: "select",
          options: ["Immediate", "30–60 days", "60–120 days", "Strategic / open"],
          placeholder: "Select timeline",
          full: true,
        },
      ]}
    />
  );
}
