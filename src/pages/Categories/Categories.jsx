import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { Layers } from "lucide-react";
import CategoryCard from "../../components/common/CategoryCard";

const Categories = () => {
  return (
    <div>
      <SectionTitle title={"دسته بندی ها"} icon={<Layers />} />
      <div className="grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
        <CategoryCard
          image={"/images/product1.png"}
          title={"لوازم دیجیتال"}
          count={12}
        />
        <CategoryCard
          image={"/images/product2.png"}
          title={"لوازم خودرو"}
          count={20}
        />
      </div>
    </div>
  );
};

export default Categories;
