import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { Package2, Star, Store, WalletMinimal } from "lucide-react";
import ProductCard from "../../components/common/ProductCard";
import Pagination from "../../components/common/Pagination";
import CategoryItem from "./components/common/categoryItem";
import CatrgoryItems from "./components/common/CatrgoryItems";
import AccordionItem from "../../components/common/AccordionItem";
import PriceRange from "./components/ui/PriceRange";
import Rating from "./components/ui/Rating";

const Products = () => {
  return (
    <>
      <div className="flex justify-between gap-6">
        <div className="flex items-center flex-col flex-1 bg-slate-100 rounded-2xl">
          <AccordionItem
            title={"دسته بندی"}
            icon={<Package2 />}
            content={<CatrgoryItems />}
          />
          <AccordionItem
            title={"محدوده قیمت"}
            icon={<WalletMinimal />}
            content={<PriceRange />}
          />
          <AccordionItem
            title={"امتیاز مشتریان"}
            icon={<Star />}
            content={<Rating />}
          />
        </div>
        <div className="flex-4">
          <div className="">
            <SectionTitle title="همه محصولات" icon={<Store />} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
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
      </div>
    </>
  );
};

export default Products;
