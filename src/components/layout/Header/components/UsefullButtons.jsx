import { Heart, ShoppingCart, User } from "lucide-react";
import React from "react";
import Badge from "../../../ui/Badge";

const UsefullButtons = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-1">
      <div className="relative">
        <Badge value={2} bgColor={"bg-primary"} position={"absolute -top-1.5 left-5"} />
        <ShoppingCart className="w-8 h-8 hover:text-primary cursor-pointer top-2 right-2" />
      </div>
      <div className="relative">
        <Badge value={2} bgColor={"bg-primary"} position={"absolute -top-1.5 left-5"} />
        <Heart className="w-8 h-8 hover:text-primary cursor-pointer" />
      </div>
      <User className="w-8 h-8 hover:text-primary cursor-pointer" />
    </div>
  );
};

export default UsefullButtons;
