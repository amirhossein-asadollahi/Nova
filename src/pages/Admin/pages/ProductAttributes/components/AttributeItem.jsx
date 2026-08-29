import { EllipsisVertical, Pencil } from "lucide-react";
import React from "react";

const AttributeItem = ({ attribute, type, value, status, date }) => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="flex items-center gap-2">
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold">{attribute}</span>
        </div>
      </td>
      <td className="text-slate-600">{type}</td>
      <td className="text-slate-600">{value}</td>
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

export default AttributeItem;
