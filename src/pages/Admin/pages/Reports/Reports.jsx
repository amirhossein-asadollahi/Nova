import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import { Flag, PiggyBank, ShoppingCart, Users, Wallet } from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import DashboardLineChart from "./components/DashboardLineChart";
import DashboardPieChart from "./components/DashboardPieChart";

const Reports = () => {
  return (
    <div className="min-h-screen">
      <SectionTitle title={"گزارش ها"} icon={<Flag />} />
      <div className="flex items-center gap-4">
        <DashboardCardBox
          title={"مشتریان جدید"}
          value={"468"}
          desc={"در این ماه"}
          icon={<Users />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"کل درآمد"}
          value={"2,691,000,000"}
          desc={"کل فروش فروشگاه"}
          icon={<PiggyBank />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"تعداد سفارش ها"}
          value={"1,304"}
          desc={"تعداد آیتم های موجود"}
          icon={<ShoppingCart />}
          className={"bg-orange-100 text-orange-600"}
        />
        <DashboardCardBox
          title={"میانگین ارزش سفارش ها"}
          value={"1,408"}
          desc={"میانگین ارزش کل سفارش ها"}
          icon={<Wallet />}
          className={"bg-purple-100 text-purple-600"}
        />
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <DashboardLineChart />
        <DashboardPieChart />
        <DashboardPieChart />
      </div>
    </div>
  );
};

export default Reports;
