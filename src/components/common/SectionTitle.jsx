import React from "react";
import SectionIcon from "./SectionIcon";

const SectionTitle = ({ icon, title, route = "خانه>محصولات" }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        {<SectionIcon icon={icon} />}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <span>{route}</span>
    </div>
  );
};

export default SectionTitle;
