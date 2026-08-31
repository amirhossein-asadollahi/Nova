import { EllipsisVertical, Lock, Pencil } from "lucide-react";
import React from "react";

const UserItem = ({
  img,
  name,
  userCode,
  phone,
  role,
  status,
  sginUpDate,
  lastSignIn,
}) => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="flex items-center gap-2">
        <div className="w-12 h-12 p-0.5 border-2 border-primary rounded-full">
          <img
            src={img}
            className="w-full h-full object-cover rounded-full"
            alt={userCode}
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-sm text-slate-700">{userCode}</span>
        </div>
      </td>
      <td className="text-slate-600">{phone}</td>
      <td className="text-slate-600">{role}</td>
      <td className="text-slate-600">{status}</td>
      <td className="text-slate-600">{sginUpDate}</td>
      <td className="text-slate-600">{lastSignIn}</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <Pencil className="text-primary" size={18} />
          </button>
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <Lock className="text-green-600" size={18} />
            {/* <LockOpen /> */}
          </button>
          <button className="w-8 h-8 cursor-pointer border-2 bg-white border-border rounded-lg hover:bg-slate-100 flex items-center justify-center">
            <EllipsisVertical size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
