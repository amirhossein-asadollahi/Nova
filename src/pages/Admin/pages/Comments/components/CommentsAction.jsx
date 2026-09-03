import { ArrowDownToLine } from "lucide-react";
import React from "react";

const CommentsAction = () => {
  return (
    <div className="flex items-center justify-between my-8">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="px-4 py-2 w-full bg-white border-2 border-border rounded-lg focus:outline-primary"
          placeholder="جستجو کامنت"
        />
      </div>
      <div className="flex items-center space-x-4">
        <select className="px-4 py-2 border-2 bg-white border-border text-black rounded-lg hover:bg-slate-100">
          <option value="all">همه وضعیت ها</option>
          <option value="available">موجود</option>
          <option value="unavailable">ناموجود</option>
          <option value="discount">تخفیف دار</option>
        </select>
        <select className="px-4 py-2 border-2 bg-white border-border text-black rounded-lg hover:bg-slate-100">
          <option value="all">همه امتیاز ها</option>
          <option value="available">موجود</option>
          <option value="unavailable">ناموجود</option>
          <option value="discount">تخفیف دار</option>
        </select>
        <select className="px-4 py-2 border-2 bg-white border-border text-black rounded-lg hover:bg-slate-100">
          <option value="all">همه دسته بندی ها</option>
          <option value="available">موجود</option>
          <option value="unavailable">ناموجود</option>
          <option value="discount">تخفیف دار</option>
        </select>
        <button className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-primary-dark cursor-pointer flex items-center gap-2">
          <ArrowDownToLine />
          <span>خروجی اکسل</span>
        </button>
      </div>
    </div>
  );
};

export default CommentsAction;
