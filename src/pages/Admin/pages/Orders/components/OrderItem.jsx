import { EllipsisVertical, Pencil } from "lucide-react";
import React from "react";

const OrderItem = ({
  img,
  customerName,
  customerPhone,
  orderNumber,
  price,
  paymentType,
  deliverType,
  status,
  date,
}) => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="text-slate-600">{orderNumber}</td>
      <td className="flex items-center gap-2">
        <div className="w-12 h-12 p-1 border-2 border-primary rounded-full">
          <img
            src={img}
            className="w-full h-full object-cover rounded-full"
            alt={orderNumber}
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold">{customerName}</span>
          <span className="text-sm text-slate-700">{customerPhone}</span>
        </div>
      </td>
      <td className="text-slate-600">{price}</td>
      <td className="text-slate-600">{status}</td>
      <td className="text-slate-600">{paymentType}</td>
      <td className="text-slate-600">{deliverType}</td>
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

export default OrderItem;
