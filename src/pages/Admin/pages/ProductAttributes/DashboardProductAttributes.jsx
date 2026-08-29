import React from "react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import { Boxes, Flame } from "lucide-react";
import SectionTitle from "../../../../components/common/SectionTitle";
import ProductAtributesAction from "./components/ProductAtributesAction";
import ProductAttributeTable from "./components/ProductAttributeTable";

const DashboardProductAttributes = () => {
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
      <ProductAttributeTable />
    </div>
  );
};

export default DashboardProductAttributes;
