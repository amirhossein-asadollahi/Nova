import { EllipsisVertical, Pencil } from "lucide-react";
import React from "react";

const CouponItem = ({
  coupon,
  type,
  amount,
  minPrice,
  useCount,
  status,
  startDate,
  endDate,
}) => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="flex items-center gap-2">
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold bg-primary-100 text-primary p-1 rounded-lg border-2 border-border">
            {coupon}
          </span>
        </div>
      </td>
      <td className="text-slate-600">{type}</td>
      <td className="text-slate-600">{amount}</td>
      <td className="text-slate-600">{minPrice}</td>
      <td className="text-slate-600">{useCount}</td>
      <td className="text-slate-600">{status}</td>
      <td className="text-slate-600">{startDate}</td>
      <td className="text-slate-600">{endDate}</td>
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

export default CouponItem;
