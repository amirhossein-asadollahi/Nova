import React from "react";

const CategoryItem = ({ title, count }) => {
  return (
    <div className="w-full px-2 py-1 flex items-center justify-between cursor-pointer bg-slate-100 rounded-lg hover:bg-primary-200 hover:text-primary-dark">
      <span>{title}</span>
      <span>({count})</span>
    </div>
  );
};

export default CategoryItem;
