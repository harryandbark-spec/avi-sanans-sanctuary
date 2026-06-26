import React from "react";
interface Step3Props {
  contact: { method: "whatsapp" | "email"; name: string; phone?: string; email?: string };
  setContact: (value: {
    method: "whatsapp" | "email";
    name: string;
    phone?: string;
    email?: string;
  }) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ contact, setContact, onBack, onSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div className="step step-3">
      <h2 className="text-xl mb-4 text-[#FDFCFB]">Contact</h2>
      <div className="mb-4">
        <label className="block mb-2 text-[#C5A267]">Name (required)</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
          className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-[#C5A267]">Preferred contact method</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="method"
              value="whatsapp"
              checked={contact.method === "whatsapp"}
              onChange={handleChange}
            />
            <span className="ml-2">WhatsApp</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="method"
              value="email"
              checked={contact.method === "email"}
              onChange={handleChange}
            />
            <span className="ml-2">Email</span>
          </label>
        </div>
      </div>
      {contact.method === "whatsapp" && (
        <div className="mb-4">
          <label className="block mb-2 text-[#C5A267]">Phone</label>
          <input
            type="text"
            name="phone"
            value={contact.phone || ""}
            onChange={handleChange}
            placeholder="e.g., +1 555 123 4567"
            className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]"
          />
        </div>
      )}
      {contact.method === "email" && (
        <div className="mb-4">
          <label className="block mb-2 text-[#C5A267]">Email</label>
          <input
            type="email"
            name="email"
            value={contact.email || ""}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-2 bg-[#0a1018] text-[#FDFCFB]"
          />
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button className="cta-ghost" onClick={onBack}>
          Back
        </button>
        <button className="cta-navy" disabled={!contact.name} onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
