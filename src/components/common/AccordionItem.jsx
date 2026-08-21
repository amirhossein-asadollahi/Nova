import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import SectionIcon from "./SectionIcon";

const AccordionItem = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="px-4 py-2 rounded-2xl group">
      <div
        onClick={toggleAccordion}
        className="flex items-center justify-between cursor-pointer hover:bg-slate-50 rounded-2xl px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <SectionIcon icon={icon} />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <ChevronLeft
          className={`${isOpen && "-rotate-90"} transition-transform duration-300`}
        />
      </div>
      <div className={`${isOpen ? "px-2 bg-slate-100" : "hidden"}`}>
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
