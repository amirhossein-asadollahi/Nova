import { Heart, ShoppingCart, Star } from "lucide-react";
import React from "react";
import Badge from "../ui/Badge";

const ProductCard = ({ img, title, rate, price, off, image }) => {
  const calculateOff = Number(price) - Number(price) * (Number(off) / 100);
  return (
    <>
      <div className="w-56 bg-bg-secondary border-2 border-border rounded-2xl p-4 overflow-hidden flex flex-col group hover:-translate-y-2 hover:border-primary transition-all duration-300">
        <div className="flex items-center justify-between">
          <div>
            {off ? (
              <span>
                <Badge value={off} bgColor={"bg-red-500"} badgeType={"off"} />
              </span>
            ) : null}
          </div>
          <Heart className="w-5 h-5 hover:text-primary cursor-pointer transition-colors duration-300" />
        </div>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <span className="mt-6 text-lg font-bold text-black cursor-pointer group-hover:text-primary">
            {title}
          </span>
          <span className="flex items-center gap-2 text-sm text-black justify-end">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            {rate}
          </span>
          <div className="mt-2 flex items-center justify-between">
            <span className="size-10 flex items-center justify-center bg-primary-200 rounded-xl cursor-pointer hover:bg-primary-100">
              <ShoppingCart size={18} className="text-primary" />
            </span>
            {off ? (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-sm line-through text-slate-400">
                    {price}
                  </span>
                  <span className="text-sm text-black">{calculateOff}</span>
                </div>
              </>
            ) : (
              <span className="text-sm text-black">{price}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
