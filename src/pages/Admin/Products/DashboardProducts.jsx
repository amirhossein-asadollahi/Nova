import React from "react";
import DashboardCardBox from "../components/common/DashboardCardBox";
import { Box, Boxes, EyeOff, Tag } from "lucide-react";
import ProductPageActions from "./components/ProductPageActions";
import SectionTitle from "../../../components/common/SectionTitle";
import ProductsTable from "./components/ProductsTable";

const DashboardProducts = () => {
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
      <ProductsTable />
    </>
  );
};

export default DashboardProducts;
