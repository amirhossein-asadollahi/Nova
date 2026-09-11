import React from "react";

const Badge = ({ value, badgeType, className }) => {
  return (
    <div
      className={`${className} min-w-5 h-5 flex items-center justify-center px-2 rounded-4xl `}
    >
      <span>{badgeType === "off" ? `% ${value}` : value}</span>
    </div>
  );
};

export default Badge;
