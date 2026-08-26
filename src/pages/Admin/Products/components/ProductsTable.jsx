import React from "react";
import ProductItem from "./ProductItem";
import Pagination from "../../../../components/common/Pagination";

const ProductsTable = () => {
  return (
    <>
      <table className="border-separate table-auto bg-white w-full px-4 py-2 border-2 border-border rounded-lg">
        <thead>
          <tr>
            <th className="text-right">
              <input type="checkbox" />
            </th>
            <th className="text-right pr-8">محصول</th>
            <th className="text-right">دسته بندی</th>
            <th className="text-right">قیمت</th>
            <th className="text-right">موجودی</th>
            <th className="text-right">وضعیت</th>
            <th className="text-right">فروش</th>
            <th className="text-right">تاریخ ثبت</th>
            <th className="text-right">عملیات</th>
          </tr>
        </thead>
        <tbody>
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
        </tbody>
      </table>
      <div className="flex items-center justify-center my-4">
        <Pagination totalPage={3} />
      </div>
    </>
  );
};

export default ProductsTable;
