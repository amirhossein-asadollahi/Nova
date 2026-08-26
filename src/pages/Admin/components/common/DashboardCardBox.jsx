import React from "react";

const DashboardCardBox = ({ title, value, icon, className, desc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border-2 border-border px-4 py-2 flex items-center justify-between flex-1">
      <div className="flex flex-col items-start space-y-2">
        <span className="text-lg text-slate-800">{title}</span>
        <h2 className="text-2xl text-black font-bold">{value}</h2>
        <span className="text-sm text-slate-600">{desc}</span>
      </div>
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${className}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default DashboardCardBox;
