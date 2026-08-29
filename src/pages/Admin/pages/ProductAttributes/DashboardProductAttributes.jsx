import React from "react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import { Boxes, Flame } from "lucide-react";
import SectionTitle from "../../../../components/common/SectionTitle";
import ProductAtributesAction from "./components/ProductAtributesAction";
import DashboardTable from "../../components/common/DashboardTable";
import AttributeItem from "./components/AttributeItem";

const DashboardProductAttributes = () => {
  const attributeTableHead = [
    "ویژگی",
    "نوع",
    "مقادیر",
    "نمایش در سایت",
    "تاریخ ایجاد",
    "عملیات",
  ];
  const attributeTableBody = [
    <AttributeItem
      attribute={"سایز"}
      type={"انتخابی ساده"}
      value={"S,M,L,XL,XXL"}
      status={"active"}
      date={"12/04/1402"}
    />,
    <AttributeItem
      attribute={"رنگ"}
      type={"رنگ"}
      value={"مشکی,سفید,طوسی,آبی"}
      status={"deActive"}
      date={"08/11/1405"}
    />,
    <AttributeItem
      attribute={"سایز"}
      type={"انتخابی چندگانه"}
      value={"S,M,L,XL,XXL"}
      status={"active"}
      date={"12/04/1402"}
    />,
    <AttributeItem
      attribute={"رنگ"}
      type={"رنگ"}
      value={"مشکی,سفید,طوسی,آبی"}
      status={"deActive"}
      date={"08/11/1405"}
    />,
    <AttributeItem
      attribute={"سایز"}
      type={"انتخابی ساده"}
      value={"S,M,L,XL,XXL"}
      status={"active"}
      date={"12/04/1402"}
    />,
    <AttributeItem
      attribute={"رنگ"}
      type={"رنگ"}
      value={"مشکی,سفید,طوسی,آبی"}
      status={"deActive"}
      date={"08/11/1405"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"ویژگی"} icon={<Flame />} />
      <div className="flex items-center gap-4">
        <DashboardCardBox
          title={"کل محصولات"}
          value={"1,408"}
          desc={"تعداد کل آیتم ها"}
          icon={<Boxes />}
          className={"bg-purple-100 text-purple-600"}
        />
        <DashboardCardBox
          title={"کل محصولات"}
          value={"1,408"}
          desc={"تعداد کل آیتم ها"}
          icon={<Boxes />}
          className={"bg-purple-100 text-purple-600"}
        />
        <DashboardCardBox
          title={"کل محصولات"}
          value={"1,408"}
          desc={"تعداد کل آیتم ها"}
          icon={<Boxes />}
          className={"bg-purple-100 text-purple-600"}
        />
        <DashboardCardBox
          title={"کل محصولات"}
          value={"1,408"}
          desc={"تعداد کل آیتم ها"}
          icon={<Boxes />}
          className={"bg-purple-100 text-purple-600"}
        />
      </div>
      <ProductAtributesAction />
      <DashboardTable
        tHeads={attributeTableHead}
        tBodies={attributeTableBody}
      />
    </div>
  );
};

export default DashboardProductAttributes;
