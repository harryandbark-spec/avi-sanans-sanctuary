"use client";

import { useEffect } from "react";
import BuyerIntentForm from "@/components/BuyerIntentForm";
import "../styles/Modal.css";

interface BuyerIntentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BuyerIntentModal({ open, onClose }: BuyerIntentModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close form" onClick={onClose}>
          ✕
        </button>
        <BuyerIntentForm />
      </div>
    </div>
  );
}
