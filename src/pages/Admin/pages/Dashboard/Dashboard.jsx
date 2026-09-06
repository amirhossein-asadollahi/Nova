import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import {
  Banknote,
  CircleX,
  Handbag,
  House,
  ListOrdered,
  TicketPercent,
  TriangleAlert,
  Users,
  WalletMinimal,
} from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import AnalyseBox from "./components/AnalyseBox";
import AnalyseLineComponent from "./components/AnalyseLineComponent";

const Dashboard = () => {
  const userAnalyseCompos = [
    <AnalyseLineComponent title={"کل مشتریان"} value={"8,493 نفر"} />,
    <AnalyseLineComponent title={"مشتریان فعال"} value={"2,490 نفر"} />,
    <AnalyseLineComponent title={"نرخ بازگشت مشتری"} value={"27.8 %"} />,
    <AnalyseLineComponent
      title={"متوسط خرید مشتری"}
      value={"3,904,000 تومان"}
    />,
    <AnalyseLineComponent title={"میانگین تعداد سفارش"} value={"2 سفارش"} />,
  ];
  const financialAnalyseCompos = [
    <AnalyseLineComponent
      title={"درآمد ناخالص"}
      value={"2,439,432,000 تومان"}
    />,
    <AnalyseLineComponent title={"هزینه ارسال"} value={"1,324,000 تومان"} />,
    <AnalyseLineComponent title={"تخفیف ها"} value={"189,000,000 تومان"} />,
    <AnalyseLineComponent title={"درآمد خالص"} value={"3,291,392,000 تومان"} />,
  ];
  const orderStatusAnalyseCompos = [
    <AnalyseLineComponent title={"در انتظار پرداخت"} value={"162 سفارش"} />,
    <AnalyseLineComponent title={"درحال پردازش"} value={"324 سفارش"} />,
    <AnalyseLineComponent title={"درحال ارسال"} value={"437 سفارش"} />,
    <AnalyseLineComponent title={"تحویل شده"} value={"234 سفارش"} />,
    <AnalyseLineComponent title={"لغو شده"} value={"45 سفارش"} />,
  ];
  const mostSellTableHeads = ["محصول", "تعداد فروش", "درآمد"];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"داشبورد"} icon={<House />} />
      <div className="flex items-center gap-4">
        <DashboardCardBox
          title={"بازگشت وجه"}
          value={"24"}
          desc={"سفارش هایی که بازگشت وجه خوردند"}
          icon={<WalletMinimal />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"متوسط مبلغ سفارش"}
          value={"1,390,000"}
          desc={"تعداد آیتم های ناموجود"}
          icon={<Banknote />}
          className={"bg-blue-100 text-blue-600"}
        />
        <DashboardCardBox
          title={"تعداد سفارش"}
          value={"332"}
          desc={"تعداد کل سفارش ها"}
          icon={<ListOrdered />}
          className={"bg-orange-100 text-orange-600"}
        />
        <DashboardCardBox
          title={"فروش کل"}
          value={"390,840,000"}
          desc={"فروش کل سایت"}
          icon={<Handbag />}
          className={"bg-green-100 text-green-600"}
        />
      </div>
      <div className="flex justify-between space-x-4 mt-8">
        <AnalyseBox
          title={"تحلیل مشتریان"}
          navigateText={"مشاهده همه مشتریان"}
          compos={userAnalyseCompos}
        />
        <AnalyseBox
          title={"تحلیل مالی"}
          navigateText={"مشاهده گزارش مالی"}
          compos={financialAnalyseCompos}
        />
        <AnalyseBox
          title={"تحلیل وضعیت سفارش ها"}
          navigateText={"مشاهده همه سفارش ها"}
          compos={orderStatusAnalyseCompos}
        />
      </div>
      <div className="flex items-center gap-4 mt-8">
        <DashboardCardBox
          title={"ورود کاربران امروز"}
          value={"24"}
          desc={"کاربرانی که امروز بازگشتند"}
          icon={<Users />}
          className={"bg-sky-100 text-sky-600"}
        />
        <DashboardCardBox
          title={"محصولات ناموجود"}
          value={"23"}
          desc={"آیتم های ناموجود"}
          icon={<CircleX />}
          className={"bg-red-100 text-red-600"}
        />
        <DashboardCardBox
          title={"محصولات کم موجود"}
          value={"6"}
          desc={"موجودی زیر 2 عدد"}
          icon={<TriangleAlert />}
          className={"bg-yellow-100 text-yellow-600"}
        />
        <DashboardCardBox
          title={"کوپن های استفاده شده"}
          value={"23"}
          desc={"کوپن هایی که در سایت وجود دارند"}
          icon={<TicketPercent />}
          className={"bg-primary-100 text-primary"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
