import React from "react";

const AboutNovaBox = ({ ICON, title, value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-18 h-18 bg-primary-200 flex items-center justify-center rounded-full">
        <ICON size={42} className="text-primary" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-slate-600 text-sm">{value}</p>
    </div>
  );
};

export default AboutNovaBox;
