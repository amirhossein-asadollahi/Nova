import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import { Puzzle, SquarePercent, Tag, TagPlus, TagX } from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import CouponsAction from "./components/CouponsAction";
import CouponItem from "./components/CouponItem";
import DashboardTable from "../../components/common/DashboardTable";

const Coupons = () => {
  const couponTableHeads = [
    "کد کوپن",
    "نوع تخفیف",
    "میزان",
    "حداقل خرید",
    "تعداد استفاده",
    "وضعیت",
    "تاریخ شروع",
    "تاریخ پایان",
  ];
  const couponTableBodies = [
    <CouponItem
      coupon={"SUMMER20"}
      type={"درصدی"}
      amount={"20%"}
      minPrice={"no need"}
      useCount={"234"}
      status={"فعال"}
      startDate={"04/04/04"}
      endDate={"04/05/05"}
    />,
    <CouponItem
      coupon={"WELCOME10"}
      type={"مبلغی"}
      amount={"10%"}
      minPrice={"no need"}
      useCount={"159"}
      status={"غیرفعال"}
      startDate={"04/04/04"}
      endDate={"04/05/05"}
    />,
    <CouponItem
      coupon={"SUMMER20"}
      type={"ارسال رایگان"}
      amount={"100%"}
      minPrice={"1,000,00"}
      useCount={"54"}
      status={"منقضی شده"}
      startDate={"04/04/04"}
      endDate={"04/05/05"}
    />,
    <CouponItem
      coupon={"SUMMER20"}
      type={"درصدی"}
      amount={"20%"}
      minPrice={"no need"}
      useCount={"234"}
      status={"فعال"}
      startDate={"04/04/04"}
      endDate={"04/05/05"}
    />,
    <CouponItem
      coupon={"WELCOME10"}
      type={"مبلغی"}
      amount={"10%"}
      minPrice={"no need"}
      useCount={"159"}
      status={"غیرفعال"}
      startDate={"04/04/04"}
      endDate={"04/05/05"}
    />,
    <CouponItem
      coupon={"SUMMER20"}
      type={"ارسال رایگان"}
      amount={"100%"}
      minPrice={"1,000,00"}
      useCount={"54"}
      status={"منقضی شده"}
      startDate={"04/04/04"}
      endDate={"04/05/05"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"کوپن ها"} icon={<Puzzle />} />
      <div className="flex items-center space-x-4">
        <DashboardCardBox
          title={"تخفیف کل"}
          value={"136,324,000"}
          desc={"تومان تخفیف اعطا شده"}
          icon={<Tag />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"تعداد استفاده"}
          value={"216"}
          desc={"کل استفاده از کوپن ها"}
          icon={<TagX />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"کوپن های فعال"}
          value={"23"}
          desc={"کوپن فعال درحال اجرا"}
          icon={<TagPlus />}
          className={"bg-orange-100 text-orange-600"}
        />
        <DashboardCardBox
          title={"کل کوپن ها"}
          value={"64"}
          desc={"کوپن های ایجاد شده"}
          icon={<SquarePercent />}
          className={"bg-purple-100 text-purple-600"}
        />
      </div>
      <CouponsAction />
      <DashboardTable tHeads={couponTableHeads} tBodies={couponTableBodies} />
    </div>
  );
};

export default Coupons;
