import { ChevronLeft } from "lucide-react";
import React from "react";

const AnalyseBox = ({ title, navigateText, compos }) => {
  return (
    <div className="bg-white flex-1 px-8 py-4 border-2 border-border rounded-lg relative">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="space-y-4 mb-6">{compos.map((compo) => compo)}</div>
      <div className="flex justify-end absolute bottom-2 left-2">
        <button className="bg-transparent text-primary cursor-pointer flex items-center gap-2">
          <span>{navigateText}</span>
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default AnalyseBox;
