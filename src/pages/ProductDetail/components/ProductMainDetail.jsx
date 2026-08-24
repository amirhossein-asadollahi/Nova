import { ShoppingCart, Star, Zap } from "lucide-react";
import React from "react";
import ProductCount from "../../../components/common/ProductCount";

const ProductMainDetail = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h1 className="text-2xl font-bold">هدفون بی سیم سونی WH1000-XM5</h1>
      <div className="flex items-center">
        <span className="flex items-center gap-2">
          <Star size={14} />
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
        </span>
        <span className="text-sm text-slate-500">(48 نظر)</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-slate-500">برند:</span>
          <span className="text-black">سونی</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-slate-500">مدل:</span>
          <span className="text-black">WH-1000XM5</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-slate-500">شناسه:</span>
          <span className="text-black">123456</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="text-xl text-primary-dark font-bold">
          12,400,000 تومان
        </h2>
        <span className="text-sm text-slate-500 line-through">
          13,200,000 تومان
        </span>
      </div>
      <div className="px-2 py-1 shadow-md rounded-lg w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start space-y-2">
            <span>رنگ:مشکی</span>
            <div className="flex items-center space-x-2">
              <div className="bg-black w-8 h-8 rounded-full cursor-pointer outline-2 outline-primary-dark"></div>
              <div className="bg-amber-400 w-8 h-8 rounded-full cursor-pointer"></div>
              <div className="bg-sky-800 w-8 h-8 rounded-full cursor-pointer"></div>
            </div>
          </div>
          <ProductCount />
        </div>
        <div className="flex flex-col space-y-2 my-4">
          <button className="w-full cursor-pointer flex items-center justify-center px-4 py-3 rounded-lg text-white bg-primary hover:bg-primary-dark">
            <span>افزودن به سبد خرید</span>
            <ShoppingCart />
          </button>
          <button className="w-full cursor-pointer flex items-center justify-center px-4 py-3 rounded-lg text-primary-dark bg-primary-100 hover:bg-primary-200">
            <span>خرید فوری</span>
            <Zap />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMainDetail;
