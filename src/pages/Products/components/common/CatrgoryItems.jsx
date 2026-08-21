import React from "react";
import CategoryItem from "./categoryItem";

const CatrgoryItems = () => {
  return (
    <div className="flex items-center flex-col gap-4">
      <CategoryItem title={"گوشی موبایل"} count={"32"} />
      <CategoryItem title={"لپ تاپ"} count={"43"} />
      <CategoryItem title={"ساعت هوشمند"} count={"12"} />
      <CategoryItem title={"کنسول بازی"} count={"8"} />
      <CategoryItem title={"ایرپاد"} count={"63"} />
    </div>
  );
};

export default CatrgoryItems;
