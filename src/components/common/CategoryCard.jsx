import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ image, title, count }) => {
  return (
    <div className="w-56 bg-bg-secondary border-2 border-border rounded-2xl p-4 overflow-hidden flex flex-col items-center group hover:-translate-y-2 hover:border-primary transition-all duration-300">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex items-center flex-col gap-2">
        <span className="mt-6 text-lg font-bold text-black">{title}</span>
        <span className="text-sm text-slate-600">محصول{count}</span>
        <Link className="flex items-center gap-2 text-primary cursor-pointer">
          <span className="text-sm">مشاهده محصولات</span>
          <ArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
