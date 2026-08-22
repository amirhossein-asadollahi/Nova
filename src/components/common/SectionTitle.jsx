import React, { useState } from "react";
import SectionIcon from "./SectionIcon";
import { LayoutGrid, TextAlignJustify } from "lucide-react";

const SectionTitle = ({ icon, title, route = "خانه>محصولات" }) => {
  // const [show,setShow] = useState("GRID")
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          {<SectionIcon icon={icon} />}
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <span>{route}</span>
      </div>
      <div className="flex items-center gap-4">
        <select className="bg-slate-100 hover:bg-slate-200 cursor-pointer px-4 py-2 outline-none border-2 border-border rounded-lg">
          <option value="newest">جدیدترین</option>
          <option value="popular">محبوب ترین</option>
          <option value="rate">امتیاز</option>
          <option value="mostSell">پر فروش ترین</option>
        </select>
        <div className="flex items-center gap-2">
          <span className="bg-slate-100 p-2 hover:bg-primary-200 rounded-lg cursor-pointer hover:text-primary-dark">
            <TextAlignJustify size={32} />
          </span>
          <span className="bg-slate-100 p-2 hover:bg-primary-200 rounded-lg cursor-pointer hover:text-primary-dark">
            <LayoutGrid size={32} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
