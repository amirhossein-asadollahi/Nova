import React from "react";
import { Box, Boxes, EyeOff, Tag } from "lucide-react";
import ProductPageActions from "./components/ProductPageActions";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import SectionTitle from "../../../../components/common/SectionTitle";
import DashboardTable from "../../components/common/DashboardTable";
import ProductItem from "./components/ProductItem";

const DashboardProducts = () => {
  const productTableHeads = [
    "محصول",
    "دسته بندی",
    "قیمت",
    "موجودی",
    "وضعیت",
    "فروش",
    "تاریخ ثبت",
    "عملیات",
  ];
  const productTableBodies = [
    <ProductItem
      img={"/images/product1.png"}
      title={"لپ تاپ سوپر خفن"}
      serialCode={"#92345"}
      category={"لپ تاپ"}
      count={"22عدد"}
      price={"12,000,000"}
      status={"available"}
      sellCount={"12"}
      date={"12/11/1404"}
    />,
    <ProductItem
      img={"/images/product2.png"}
      title={"ایرپاد آبی خیلی خفن گرون"}
      serialCode={"#21338"}
      count={"22عدد"}
      category={"لوازم موبایل"}
      price={"16,000,000"}
      status={"unavailable"}
      sellCount={"32"}
      date={"12/11/1404"}
    />,
    <ProductItem
      img={"/images/product1.png"}
      title={"لپ تاپ سوپر خفن"}
      serialCode={"#92345"}
      count={"22عدد"}
      category={"لپ تاپ"}
      price={"12,000,000"}
      status={"available"}
      sellCount={"12"}
      date={"12/11/1404"}
    />,
    <ProductItem
      img={"/images/product2.png"}
      title={"ایرپاد آبی خیلی خفن گرون"}
      serialCode={"#21338"}
      count={"22عدد"}
      category={"لوازم موبایل"}
      price={"16,000,000"}
      status={"unavailable"}
      sellCount={"32"}
      date={"12/11/1404"}
    />,
    <ProductItem
      img={"/images/product1.png"}
      title={"لپ تاپ سوپر خفن"}
      serialCode={"#92345"}
      category={"لپ تاپ"}
      count={"22عدد"}
      price={"12,000,000"}
      status={"available"}
      sellCount={"12"}
      date={"12/11/1404"}
    />,
    <ProductItem
      img={"/images/product2.png"}
      title={"ایرپاد آبی خیلی خفن گرون"}
      serialCode={"#21338"}
      category={"لوازم موبایل"}
      count={"22عدد"}
      price={"16,000,000"}
      status={"unavailable"}
      sellCount={"32"}
      date={"12/11/1404"}
    />,
  ];
  return (
    <>
      <SectionTitle title={"محصولات"} icon={<Box />} />
      <div className="flex items-center space-x-4">
        <DashboardCardBox
          title={"تخفیف دار"}
          value={"324"}
          desc={"تعداد آیتم های تخفیف دار"}
          icon={<Tag />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"ناموجود"}
          value={"216"}
          desc={"تعداد آیتم های ناموجود"}
          icon={<EyeOff />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"محصولات موجود"}
          value={"1,304"}
          desc={"تعداد آیتم های موجود"}
          icon={<Box />}
          className={"bg-orange-100 text-orange-600"}
        />
        <DashboardCardBox
          title={"کل محصولات"}
          value={"1,408"}
          desc={"تعداد کل آیتم ها"}
          icon={<Boxes />}
          className={"bg-purple-100 text-purple-600"}
        />
      </div>
      <ProductPageActions />
      <DashboardTable tHeads={productTableHeads} tBodies={productTableBodies} />
    </>
  );
};

export default DashboardProducts;
