import React from "react";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ current, total }) => {
  return (
    <div className="progress-indicator mb-4 text-center text-[#C5A267]">
      Step {current} of {total}
    </div>
  );
};

export default ProgressIndicator;
