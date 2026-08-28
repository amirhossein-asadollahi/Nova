import { EllipsisVertical, Pencil } from "lucide-react";
import React from "react";

const BrandItem = ({ img, title, category, country, count, status, date }) => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="flex items-center gap-2">
        <div className="w-24 h-16 p-2 border border-border rounded-lg">
          <img src={img} className="w-full h-full object-cover" alt={title} />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold">{title}</span>
        </div>
      </td>
      <td className="text-slate-600">{category}</td>
      <td className="text-slate-600">{country}</td>
      <td className="text-slate-600">{count}</td>
      <td className="text-slate-600">{status}</td>
      <td className="text-slate-600">{date}</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <Pencil className="text-primary" size={18} />
          </button>
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <EllipsisVertical size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BrandItem;
