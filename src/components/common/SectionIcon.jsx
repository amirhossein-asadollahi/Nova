import React from "react";

const SectionIcon = ({ icon, size = 32 }) => {
  return (
    <span
      className={`size-${size} flex items-center justify-center rounded-2xl bg-primary-100 text-primary-light`}
    >
      {icon}
    </span>
  );
};

export default SectionIcon;
