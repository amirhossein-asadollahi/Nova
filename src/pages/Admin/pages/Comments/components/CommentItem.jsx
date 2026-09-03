import { Check, EllipsisVertical, Trash2 } from "lucide-react";
import React from "react";

const CommentItem = ({
  userImg,
  productImg,
  productName,
  userName,
  phone,
  userRate,
  comment,
  status,
  date,
}) => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="flex items-center gap-2">
        <div className="w-12 h-12 p-0.5 border-2 border-primary rounded-full">
          <img
            src={userImg}
            className="w-full h-full object-cover rounded-full"
            alt={phone}
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold">{userName}</span>
          <span className="text-sm text-slate-700">{phone}</span>
        </div>
      </td>
      <td className="text-slate-600">{userRate}</td>
      <td className="flex items-center gap-2">
        <div className="w-12 h-14 p-0.5 border-2 border-border rounded-lg">
          <img
            src={productImg}
            className="w-full h-full object-cover rounded-full"
            alt={productName}
          />
        </div>
        <span className="text-lg font-bold">{productName}</span>
      </td>

      <td className="text-slate-600">
        <button className="px-2 py-1 border-2 border-border rounded-lg hover:bg-primary-200 hover:text-primary cursor-pointer">
          نمایش نظر
        </button>
        <span className="hidden">{comment}</span>
      </td>
      <td className="text-slate-600">{status}</td>
      <td className="text-slate-600">{date}</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <Trash2 className="text-red-600" size={18} />
          </button>
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <Check className="text-green-600" size={18} />
          </button>
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <EllipsisVertical size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CommentItem;
