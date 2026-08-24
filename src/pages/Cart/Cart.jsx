import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { ShoppingCart } from "lucide-react";
import CartProductCard from "./components/CartProductCard";
import OrderSummary from "./components/OrderSummary";

const Cart = () => {
  return (
    <div>
      <SectionTitle title={"سبد خرید شما"} icon={<ShoppingCart />} />
      <div className="flex items-center justify-between space-x-8">
        <div className="w-full h-120 overflow-auto mt-4 space-y-4 flex-3 px-8 py-4 rounded-lg ">
          <CartProductCard
            src={"images/product1.png"}
            title={"هدفون بی سیم سونی"}
            model={"WH-1000XM5"}
            productColor={"مشکی"}
            price={"12,900,000"}
          />
          <CartProductCard
            src={"images/product2.png"}
            title={"ایرپاد سوپر خفن خیلی قوی"}
            model={"NONE-BUSINESS"}
            productColor={"آبی آسمانی"}
            price={"23,860,000"}
          />
          <CartProductCard
            src={"images/product1.png"}
            title={"هدفون بی سیم سونی"}
            model={"WH-1000XM5"}
            productColor={"مشکی"}
            price={"12,900,000"}
          />
          <CartProductCard
            src={"images/product2.png"}
            title={"ایرپاد سوپر خفن خیلی قوی"}
            model={"NONE-BUSINESS"}
            productColor={"آبی آسمانی"}
            price={"23,860,000"}
          />
        </div>
        <div className="w-full h-120 border-2 border-border rounded-lg shadow-lg flex flex-col justify-between flex-1 px-8 py-4 bg-bg-secondary">
          <OrderSummary totalPrice={"22,200,000"} deliveryTax={"120,000"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
