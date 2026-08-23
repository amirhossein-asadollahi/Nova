import React from "react";
import CategoryBox from "../../../components/layout/CtaegoryBox/CategoryBox";
import { Smartphone } from "lucide-react";
import NavigateHeader from "../../../components/common/NavigateHeader";

const CategoryBoxes = () => {
  return (
    <>
      <div className="mt-8">
        <NavigateHeader value={"دسته بندی محصولات"} />
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center gap-4">
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
          <CategoryBox
            icon={<Smartphone size={40} />}
            title={"گوشی موبایل"}
            iconColor={"text-sky-700"}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryBoxes;
