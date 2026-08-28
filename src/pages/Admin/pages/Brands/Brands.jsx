import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import { Eye, EyeOff } from "lucide-react";
import BrandsAction from "./components/BrandsAction";
import BrandsTable from "./components/BrandsTable";

const Brands = () => {
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
      <BrandsTable />
    </div>
  );
};

export default Brands;
