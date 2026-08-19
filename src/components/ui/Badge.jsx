import React from "react";

const Badge = ({ value, bgColor, position,badgeType }) => {
  return (
    <div
      className={`${position} min-w-5 h-5 flex items-center justify-center px-2 rounded-4xl ${bgColor} text-white`}
    >
      <span>
        {
          badgeType === "off" ? `% ${value}` : value
        }
      </span>
    </div>
  );
};

export default Badge;
