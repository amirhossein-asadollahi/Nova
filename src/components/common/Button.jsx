import React from "react";

const Button = ({ value, bgColor, icon }) => {
  return (
    <button
      className={`text-white z-10 flex gap-5 cursor-pointer rounded-2xl text-sm ${bgColor} px-8 py-3 absolute right-12 bottom-10 hover:-translate-y-2 transition-transform duration-300`}
    >
      {value}
      {icon}
    </button>
  );
};

export default Button;
