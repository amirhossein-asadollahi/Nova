import React from "react";

const CategoryBox = ({ icon, title, iconColor }) => {
  return (
    <div
      className={`flex flex-1 items-center flex-col gap-4 border-2 border-border rounded-2xl px-4 py-8 bg-bg-secondary cursor-pointer hover:-translate-y-2 transition-transform duration-300`}
    >
      <span className={`${iconColor}`}>{icon}</span>
      <span className="text-black">{title}</span>
    </div>
  );
};

export default CategoryBox;
