
import { Box, Boxes } from "lucide-react";
import React from "react";

const ProductActionsFooter = () => {
  return (
    <div className="w-full h-18 bg-white sticky bottom-0 shadow-sm border-t-2 border-border">
      <div className="flex items-center justify-between mt-4 px-8">
        <button className="px-4 py-2 cursor-pointer border-2 border-border hover:bg-red-100 hover:text-red-500 rounded-lg">انصراف</button>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 cursor-pointer border-2 border-border hover:bg-slate-100 rounded-lg flex items-center gap-2">
            <Box />
            <span>ذخیره در پنل</span>
          </button>
          <button className="px-4 py-2 cursor-pointer bg-primary text-white hover:bg-primary-dark rounded-lg flex items-center gap-2">
            <Boxes />
            <span>ذخیره و افزودن به محصولات</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductActionsFooter;
