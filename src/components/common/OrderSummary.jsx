import { ArrowLeft, ScrollText } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const OrderSummary = ({
  totalPrice,
  deliveryTax,
  discountCode = null,
  hasDiscount = false,
  btnText
}) => {
  return (
    <>
      <div className="w-full h-120 border-2 border-border rounded-lg shadow-lg flex flex-col justify-between px-8 py-4 bg-bg-secondary">
        <h2 className="flex items-center gap-2">
          <ScrollText className="bg-primary-100 w-8 h-8 rounded-lg text-primary" />
          <span className="text-xl font-bold">خلاصه سفارش</span>
        </h2>
        <div className="flex flex-col space-y-4 mt-4 border-b-2 border-border">
          <div className="flex items-center justify-between">
            <h3>جمع قیمت محصولات(3)</h3>
            <p>{totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <h3>هزینه ارسال</h3>
            {deliveryTax === "free" ? (
              <p className="text-green-500">رایگان</p>
            ) : (
              <p>{deliveryTax}</p>
            )}
          </div>
          {hasDiscount && (
            <div className="flex items-center justify-between mb-2">
              <h3>کد تخفیف</h3>
              {discountCode ? <p className="text-red-500">-200,000</p> : null}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-8 mt-2">
          <div className="flex items-center justify-between">
            <h3>جمع کل:</h3>
            <h2 className="text-2xl text-primary font-bold">{totalPrice}</h2>
          </div>
          {hasDiscount && (
            <div className="flex items-center justify-between space-x-1">
              <input
                className="border-2 w-full border-border outline-none rounded-lg px-4 py-2"
                type="text"
                placeholder="کد تخفیف را وارد کنید"
              />
              <button className="cursor-pointer rounded-lg bg-primary-100 text-primary hover:bg-primary-200 hover:text-primary-dark px-4 py-2">
                اعمال
              </button>
            </div>
          )}
          <div className="">
            <Link
              to={"/checkout"}
              className="bg-primary text-white hover:bg-primary-dark w-full px-4 py-2 flex items-center justify-center rounded-lg cursor-pointer"
            >
              {btnText}
              <ArrowLeft />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
