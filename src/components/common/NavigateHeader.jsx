import { ChevronDown } from "lucide-react";
import React from "react";

const NavigateHeader = ({ value }) => {
  return (
    <span className="flex gap-2 group cursor-pointer hover:text-primary w-fit">
      {value}
      <ChevronDown className="text-primary group-hover:rotate-90 transition-transform duration-300" />
    </span>
  );
};

export default NavigateHeader;
