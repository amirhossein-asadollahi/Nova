import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import {
  Eye,
  Layers,
  LayersArrowDown,
  LayersArrowUp,
  LayoutGrid,
} from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import CategoryAction from "./components/CategoryAction";
import CategoryItem from "./components/CategoryItem";
import DashboardTable from "../../components/common/DashboardTable";

const DashboardCategories = () => {
  const categoryTableHeads = [
    "دسته بندی",
    "نوع",
    "تعداد محصولات",
    "وضعیت",
    "تاریخ ایجاد",
    "عملیات",
  ];
  const categoryTableBodies = [
    <CategoryItem
      title={"پوشاک مردانه"}
      type={"اصلی"}
      productCount={"132"}
      status={"active"}
      date={"03/11/1399"}
    />,
    <CategoryItem
      title={"اکسسوری مرانه"}
      type={"فرعی"}
      productCount={"43"}
      status={"active"}
      date={"03/11/1399"}
    />,
    <CategoryItem
      title={"پوشاک مردانه"}
      type={"اصلی"}
      productCount={"132"}
      status={"active"}
      date={"03/11/1399"}
    />,
    <CategoryItem
      title={"اکسسوری مرانه"}
      type={"فرعی"}
      productCount={"43"}
      status={"active"}
      date={"03/11/1399"}
    />,
    <CategoryItem
      title={"پوشاک مردانه"}
      type={"اصلی"}
      productCount={"132"}
      status={"active"}
      date={"03/11/1399"}
    />,
    <CategoryItem
      title={"اکسسوری مرانه"}
      type={"فرعی"}
      productCount={"43"}
      status={"active"}
      date={"03/11/1399"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"دسته بندی"} icon={<LayoutGrid />} />
      <div className="flex items-center gap-4">
        <DashboardCardBox
          title={"نمایش در سایت"}
          value={"22"}
          desc={"دسته بندی های فعال"}
          icon={<Eye />}
          className={"bg-primary-100 text-primary"}
        />
        <DashboardCardBox
          title={"دسته بندی فرعی"}
          value={"6"}
          desc={"دسته بندی سطح دوم و پایین تر"}
          icon={<LayersArrowDown />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"دسته بندی اصلی"}
          value={"16"}
          desc={"دسته بندی سطح اول"}
          icon={<LayersArrowUp />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"کل دسته بندی ها"}
          value={"24"}
          desc={"همه دسته بندی ها"}
          icon={<Layers />}
          className={"bg-red-100 text-red-600"}
        />
      </div>
      <CategoryAction />
      <DashboardTable
        tHeads={categoryTableHeads}
        tBodies={categoryTableBodies}
      />
    </div>
  );
};

export default DashboardCategories;
