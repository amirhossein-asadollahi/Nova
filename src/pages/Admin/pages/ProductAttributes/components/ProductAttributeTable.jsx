import React from "react";
import Pagination from "../../../../../components/common/Pagination";
import AttributeItem from "./AttributeItem";

const ProductAttributeTable = () => {
  return (
    <>
      <table className="border-separate border-spacing-y-4 table-auto bg-white w-full px-4 py-2 border-2 border-border rounded-lg">
        <thead>
          <tr>
            <th className="text-right pr-8">ویژگی</th>
            <th className="text-right">نوع</th>
            <th className="text-right">مقادیر</th>
            <th className="text-right">نمایش در سایت</th>
            <th className="text-right">تاریخ ایجاد</th>
            <th className="text-right">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <AttributeItem
            attribute={"سایز"}
            type={"انتخابی ساده"}
            value={"S,M,L,XL,XXL"}
            status={"active"}
            date={"12/04/1402"}
          />
          <AttributeItem
            attribute={"رنگ"}
            type={"رنگ"}
            value={"مشکی,سفید,طوسی,آبی"}
            status={"deActive"}
            date={"08/11/1405"}
          />
          <AttributeItem
            attribute={"سایز"}
            type={"انتخابی چندگانه"}
            value={"S,M,L,XL,XXL"}
            status={"active"}
            date={"12/04/1402"}
          />
          <AttributeItem
            attribute={"رنگ"}
            type={"رنگ"}
            value={"مشکی,سفید,طوسی,آبی"}
            status={"deActive"}
            date={"08/11/1405"}
          />
          <AttributeItem
            attribute={"سایز"}
            type={"انتخابی ساده"}
            value={"S,M,L,XL,XXL"}
            status={"active"}
            date={"12/04/1402"}
          />
          <AttributeItem
            attribute={"رنگ"}
            type={"رنگ"}
            value={"مشکی,سفید,طوسی,آبی"}
            status={"deActive"}
            date={"08/11/1405"}
          />
        </tbody>
      </table>
      <div className="flex items-center justify-center my-4">
        <Pagination totalPage={3} />
      </div>
    </>
  );
};

export default ProductAttributeTable;
