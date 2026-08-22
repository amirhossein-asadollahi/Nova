import React from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import ProductCard from "../../../components/common/ProductCard";
import { Store } from "lucide-react";
import Pagination from "../../../components/common/Pagination";

const ProductLists = () => {
  return (
    <div className="flex-4">
      <div className="">
        <SectionTitle title="همه محصولات" icon={<Store />} />
      </div>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <ProductCard
          title={"لپ تاپ ایسوس 2024"}
          rate={"4.5"}
          price={"23000000"}
          off={30}
          image={"images/product1.png"}
        />
        <ProductCard
          title={"ایرپاد پرو سفید شرکت اپل"}
          rate={"4.5"}
          price={"36000000"}
          image={"images/product2.png"}
        />
        <ProductCard
          title={"لپ تاپ ایسوس 2024"}
          rate={"4.5"}
          price={"23000000"}
          off={30}
          image={"images/product1.png"}
        />
        <ProductCard
          title={"ایرپاد پرو سفید شرکت اپل"}
          rate={"4.5"}
          price={"36000000"}
          image={"images/product2.png"}
        />
        <ProductCard
          title={"لپ تاپ ایسوس 2024"}
          rate={"4.5"}
          price={"23000000"}
          off={30}
          image={"images/product1.png"}
        />
        <ProductCard
          title={"ایرپاد پرو سفید شرکت اپل"}
          rate={"4.5"}
          price={"36000000"}
          image={"images/product2.png"}
        />
        <ProductCard
          title={"لپ تاپ ایسوس 2024"}
          rate={"4.5"}
          price={"23000000"}
          off={30}
          image={"images/product1.png"}
        />
        <ProductCard
          title={"ایرپاد پرو سفید شرکت اپل"}
          rate={"4.5"}
          price={"36000000"}
          image={"images/product2.png"}
        />
      </div>
      <div className="flex items-center justify-center my-8">
        <Pagination totalPage={4} />
      </div>
    </div>
  );
};

export default ProductLists;
