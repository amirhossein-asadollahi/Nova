import React from "react";
import OrderSummary from "../../components/common/OrderSummary";
import SectionTitle from "../../components/common/SectionTitle";
import { Wallet } from "lucide-react";
import UserDetailForm from "./components/UserDetailForm";
import UserAddressForm from "./components/UserAddressForm";

const Checkout = () => {
  return (
    <>
      <SectionTitle title={"تسویه حساب"} icon={<Wallet />} />
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1">
          <OrderSummary
            totalPrice={"22,200,000"}
            deliveryTax={"120,000"}
            btnText={"ثبت سفارش و پرداخت"}
          />
        </div>
        <div className="flex-3">
          <UserDetailForm />
          <UserAddressForm />
        </div>
      </div>
    </>
  );
};

export default Checkout;
