import { Plus } from "lucide-react";
import React from "react";
import InputLabel from "../../../../../components/common/InputLabel";

const ProductMinorDetailForm = () => {
  return (
    <div className="flex flex-col items-start space-y-4 w-full bg-white border-2 border-border rounded-lg px-4 py-2">
      <h2 className="text-xl font-bold">اطلاعات قیمت و موجودی</h2>
      <div className="flex items-center w-full gap-4">
        <InputLabel
          title={"قیمت(تومان)"}
          placeholder={"مثال: 2,346,000 تومان"}
        />
        <InputLabel title={"موجودی در انبار"} placeholder={"مثال: 50 عدد"} />
      </div>
      <div className="flex items-center w-full gap-4">
        <InputLabel title={"وزن(کیلوگرم)"} placeholder={"مثال: 0.8"} />
        <InputLabel title={"جنس"} placeholder={"مثال: چرم مصنوعی"} />
        <InputLabel title={"رنگ"} type="select" />
      </div>
      <button className="bg-white flex items-center gap-2 text-black px-4 py-2 border-2 border-border rounded-lg cursor-pointer hover:bg-slate-100">
        <Plus />
        <span>افزودن ویژگی های بیشتر</span>
      </button>
    </div>
  );
};

export default ProductMinorDetailForm;
