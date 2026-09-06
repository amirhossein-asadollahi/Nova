import React from "react";

const AnalyseLineComponent = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-border">
      <h3 className="text-sm text-slate-700">{title}</h3>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default AnalyseLineComponent;
