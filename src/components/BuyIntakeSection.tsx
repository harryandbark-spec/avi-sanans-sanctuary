"use client";

import { IntakeForm } from "@/components/IntakeForm";
import { buySchema } from "@/lib/schemas";

export function BuyIntakeSection() {
  return (
    <IntakeForm
      schema={buySchema}
      submitLabel="Authorize Custom Search Layout"
      fields={[
        { name: "name", label: "Full Name", placeholder: "Your name" },
        {
          name: "location",
          label: "Target Location",
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
          name: "capital",
          label: "Designated Capital Allocation",
          type: "select",
          options: ["$1.5M – $2.5M", "$2.5M – $4M", "$4M+"],
          placeholder: "Select bracket",
        },
        {
          name: "timeline",
          label: "Preferred Timeline",
          type: "select",
          options: ["Immediate", "30–60 days", "60–120 days", "Strategic / open"],
          placeholder: "Select timeline",
        },
      ]}
    />
  );
}
