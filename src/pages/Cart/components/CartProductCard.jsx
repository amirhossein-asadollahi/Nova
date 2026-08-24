import React from "react";
import ProductCount from "../../../components/common/ProductCount";
import { Trash2 } from "lucide-react";

const CartProductCard = ({
  src,
  title,
  model,
  productColor,
  isExist = true,
  price,
}) => {
  return (
    <div className="flex items-center space-x-6 bg-bg-secondary border-2 border-border px-4 py-2 rounded-lg shadow-xs">
      <div className="flex items-center space-x-6">
        <input type="checkbox" className="accent-primary w-5 h-5" />
        <div className="rounded-lg border-2 border-border w-fit h-48">
          <img src={src} className="h-48" alt={title} />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="text-lg">{model}</h3>
          <span className="text-sm">رنگ: {productColor}</span>
          {isExist && <p className="text-sm text-green-500">موجود در انبار</p>}
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <h2 className="text-2xl font-bold">{price}</h2>
        <div className="">
          <ProductCount />
          <button className="w-full flex items-center justify-center mt-2 rounded-lg cursor-pointer px-3 py-2 bg-transparent hover:bg-red-100 hover:text-red-600">
            <Trash2 />
            حذف
          </button>
        </div>
        <h2 className="text-2xl font-bold">{price}</h2>
      </div>
    </div>
  );
};

export default CartProductCard;
