import React from "react";
import BrandItem from "./BrandItem";
import Pagination from "../../../../../components/common/Pagination";

const BrandsTable = () => {
  return (
    <>
      <table className="border-separate table-auto bg-white w-full px-4 py-2 border-2 border-border rounded-lg">
        <thead>
          <tr>
            <th className="text-right pr-8">برند</th>
            <th className="text-right">دسته بندی</th>
            <th className="text-right">کشور</th>
            <th className="text-right">تعداد محصولات</th>
            <th className="text-right">وضعیت</th>
            <th className="text-right">تاریخ ثبت</th>
            <th className="text-right">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <BrandItem
            img={"/images/brand1.png"}
            title={"لپ تاپ سوپر خفن"}
            country={"فرانسه"}
            category={"لپ تاپ"}
            count={"22عدد"}
            status={"available"}
            date={"12/11/1404"}
          />
          <BrandItem
            img={"/images/brand2.png"}
            title={"ایرپاد آبی خیلی خفن گرون"}
            country={"آمریکا"}
            count={"22عدد"}
            category={"لوازم موبایل"}
            status={"unavailable"}
            date={"12/11/1404"}
          />
          <BrandItem
            img={"/images/brand1.png"}
            title={"لپ تاپ سوپر خفن"}
            country={"ایتالیا"}
            count={"22عدد"}
            category={"لپ تاپ"}
            status={"available"}
            date={"12/11/1404"}
          />
          <BrandItem
            img={"/images/brand2.png"}
            title={"ایرپاد آبی خیلی خفن گرون"}
            country={"آمریکا"}
            count={"22عدد"}
            category={"لوازم موبایل"}
            status={"unavailable"}
            date={"12/11/1404"}
          />
          <BrandItem
            img={"/images/brand1.png"}
            title={"لپ تاپ سوپر خفن"}
            country={"اسپانیا"}
            category={"لپ تاپ"}
            count={"22عدد"}
            status={"available"}
            date={"12/11/1404"}
          />
          <BrandItem
            img={"/images/brand2.png"}
            title={"ایرپاد آبی خیلی خفن گرون"}
            country={"آمریکا"}
            category={"لوازم موبایل"}
            count={"22عدد"}
            status={"unavailable"}
            date={"12/11/1404"}
          />
        </tbody>
      </table>
      <div className="flex items-center justify-center my-4">
        <Pagination totalPage={3} />
      </div>
    </>
  );
};

export default BrandsTable;
