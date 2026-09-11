import React from "react";

const FooterLinks = ({ title, values }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-bold text-white border-b-2 border-primary-200">
        {title}
      </h2>
      {values.map((value) => (
        <button
          key={value}
          className="text-sm text-white bg-transparent cursor-pointer hover:text-slate-400"
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default FooterLinks;
