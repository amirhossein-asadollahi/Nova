import React from "react";

const SectionIcon = ({ icon }) => {
  return (
    <span className="w-8 h-8 flex items-center justify-center rounded-2xl bg-primary-100 text-primary-light">
      {icon}
    </span>
  );
};

export default SectionIcon;
