import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const NavigateBox = ({ ICON, title, navigationRoute }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary-50 flex flex-col items-center justify-center w-64 h-36 rounded-4xl space-y-4">
      <ICON size={36} className="text-primary" />
      <div className="flex items-center justify-center gap-2 group">
        <button
          onClick={() => navigate(navigationRoute, { replace: true })}
          className="bg-transparent cursor-pointer hover:text-primary"
        >
          {title}
        </button>
        <ArrowLeft className="text-primary group-hover:-translate-x-2 group-hover:transition-transform duration-300" />
      </div>
    </div>
  );
};

export default NavigateBox;
