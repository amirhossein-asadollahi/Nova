import React from "react";
import convertToPersianNumber from "../../../../utils/covertToPersianNumber";
import SectionTitle from "../../../../components/common/SectionTitle";
import {
  GlobeCheck,
  Handbag,
  MapPinHouse,
  SquareStar,
  SquareX,
} from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import OrdersAction from "./components/OrdersAction";
import DashboardTable from "../../components/common/DashboardTable";
import OrderItem from "./components/OrderItem";

const DashboardOrders = () => {
  const orderTableHeads = [
    "شماره سفارش",
    "مشتری",
    "مبلغ",
    "وضعیت",
    "روش پرداخت",
    "روش ارسال",
    "تاریخ",
    "عملیات",
  ];
  const orderTableBodies = [
    <OrderItem
      img={"/images/user1.jpg"}
      customerName={"علیرضا رحیمی"}
      customerPhone={"09927658923"}
      orderNumber={"23498"}
      price={convertToPersianNumber("1320000", true)}
      paymentType={"آنلاین"}
      deliverType={"پست پیشتاز"}
      status={"تحویل داده"}
      date={"12/11/1405"}
    />,
    <OrderItem
      img={"/images/user2.jpg"}
      customerName={"بردیا حبیب پور"}
      customerPhone={"09114369023"}
      orderNumber={"78392"}
      price={convertToPersianNumber("89000", true)}
      paymentType={"در محل"}
      deliverType={"اسنپ باکس"}
      status={"در انتظار پرداخت"}
      date={"12/11/1405"}
    />,
    <OrderItem
      img={"/images/user1.jpg"}
      customerName={"حامد مصطفی زاده"}
      customerPhone={"09927658923"}
      orderNumber={"23498"}
      price={convertToPersianNumber("1320000", true)}
      paymentType={"آنلاین"}
      deliverType={"پست پیشتاز"}
      status={"تحویل داده"}
      date={"12/11/1405"}
    />,
    <OrderItem
      img={"/images/user2.jpg"}
      customerName={"حسین دریکوند"}
      customerPhone={"09114369023"}
      orderNumber={"78392"}
      price={convertToPersianNumber("89000", true)}
      paymentType={"در محل"}
      deliverType={"اسنپ باکس"}
      status={"در انتظار پرداخت"}
      date={"12/11/1405"}
    />,
    <OrderItem
      img={"/images/user1.jpg"}
      customerName={"علیرضا صفری"}
      customerPhone={"09927658923"}
      orderNumber={"23498"}
      price={convertToPersianNumber("1320000", true)}
      paymentType={"آنلاین"}
      deliverType={"پست پیشتاز"}
      status={"تحویل داده"}
      date={"12/11/1405"}
    />,
    <OrderItem
      img={"/images/user2.jpg"}
      customerName={"پرهام احمدی"}
      customerPhone={"09114369023"}
      orderNumber={"78392"}
      price={convertToPersianNumber("89000", true)}
      paymentType={"در محل"}
      deliverType={"اسنپ باکس"}
      status={"در انتظار پرداخت"}
      date={"12/11/1405"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"سفارش ها"} icon={<Handbag />} />
      <div className="flex items-center gap-4">
        <DashboardCardBox
          title={"کل سفارش ها"}
          value={"1,024"}
          desc={"همه سفارش های ثبت شده"}
          icon={<SquareStar />}
          className={"bg-primary-100 text-primary"}
        />
        <DashboardCardBox
          title={"سفارش های پرداخت آنلاین"}
          value={"1,024"}
          desc={"آنلاین پرداخت شدند"}
          icon={<GlobeCheck />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"سفارش های پرداخت در محل"}
          value={"1,024"}
          desc={"در محل پرداخت شدند"}
          icon={<MapPinHouse />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"لغو شده"}
          value={"65"}
          desc={"سفارش هایی که لغو شده اند"}
          icon={<SquareX />}
          className={"bg-red-100 text-red-600"}
        />
      </div>
      <OrdersAction />
      <DashboardTable tHeads={orderTableHeads} tBodies={orderTableBodies} />
    </div>
  );
};

export default DashboardOrders;
