import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import { Eye, EyeOff } from "lucide-react";
import BrandsAction from "./components/BrandsAction";
import DashboardTable from "../../components/common/DashboardTable";
import BrandItem from "./components/BrandItem";

const Brands = () => {
  const brandTableHead = [
    "برند",
    "دسته بندی",
    "کشور",
    "تعداد محصولات",
    "وضعیت",
    "تاریخ ثبت",
    "عملیات",
  ];
  const brandTableBody = [
    <BrandItem
      img={"/images/brand1.png"}
      title={"لپ تاپ سوپر خفن"}
      country={"فرانسه"}
      category={"لپ تاپ"}
      count={"22عدد"}
      status={"available"}
      date={"12/11/1404"}
    />,
    <BrandItem
      img={"/images/brand2.png"}
      title={"ایرپاد آبی خیلی خفن گرون"}
      country={"آمریکا"}
      count={"22عدد"}
      category={"لوازم موبایل"}
      status={"unavailable"}
      date={"12/11/1404"}
    />,
    <BrandItem
      img={"/images/brand1.png"}
      title={"لپ تاپ سوپر خفن"}
      country={"ایتالیا"}
      count={"22عدد"}
      category={"لپ تاپ"}
      status={"available"}
      date={"12/11/1404"}
    />,
    <BrandItem
      img={"/images/brand2.png"}
      title={"ایرپاد آبی خیلی خفن گرون"}
      country={"آمریکا"}
      count={"22عدد"}
      category={"لوازم موبایل"}
      status={"unavailable"}
      date={"12/11/1404"}
    />,
    <BrandItem
      img={"/images/brand1.png"}
      title={"لپ تاپ سوپر خفن"}
      country={"اسپانیا"}
      category={"لپ تاپ"}
      count={"22عدد"}
      status={"available"}
      date={"12/11/1404"}
    />,
    <BrandItem
      img={"/images/brand2.png"}
      title={"ایرپاد آبی خیلی خفن گرون"}
      country={"آمریکا"}
      category={"لوازم موبایل"}
      count={"22عدد"}
      status={"unavailable"}
      date={"12/11/1404"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"برندها"} />
      <div className="flex items-center space-x-4">
        <DashboardCardBox
          title={"نمایش در سایت"}
          value={"32"}
          icon={<Eye />}
          className={"bg-orange-100 text-orange-500"}
          desc={"برند های در دسترس داخل فروشگاه"}
        />
        <DashboardCardBox
          title={"عدم نمایش در سایت"}
          value={"7"}
          icon={<EyeOff />}
          className={"bg-pink-100 text-pink-500"}
          desc={"برندهای غیرقابل دسترس در سایت"}
        />
        <DashboardCardBox
          title={"قسمت تستی"}
          value={"12"}
          icon={<Eye />}
          className={"bg-orange-100 text-orange-500"}
          desc={"تست تست تست"}
        />
        <DashboardCardBox
          title={"قسمت تستی"}
          value={"12"}
          icon={<Eye />}
          className={"bg-pink-100 text-pink-500"}
          desc={"تست تست تست"}
        />
      </div>
      <BrandsAction />
      <DashboardTable tHeads={brandTableHead} tBodies={brandTableBody} />
    </div>
  );
};

export default Brands;
