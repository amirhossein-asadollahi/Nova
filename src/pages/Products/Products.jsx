import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { Package2, Star, Store, WalletMinimal } from "lucide-react";
import ProductCard from "../../components/common/ProductCard";
import Pagination from "../../components/common/Pagination";
import CatrgoryItems from "./components/common/CatrgoryItems";
import AccordionItem from "../../components/common/AccordionItem";
import PriceRange from "./components/ui/PriceRange";
import Rating from "./components/ui/Rating";
import ProductLists from "./components/ProductLists";
import AccordionFilterBox from "./components/AccordionFilterBox";

const Products = () => {
  return (
    <>
      <div className="flex justify-between gap-6">
        <AccordionFilterBox />
        <ProductLists />
      </div>
    </>
  );
};

export default Products;
