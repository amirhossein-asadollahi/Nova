import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { Box } from "lucide-react";
import ProductImages from "./components/ProductImages";
import ProductMainDetail from "./components/ProductMainDetail";
import ProductMinorDetail from "./components/ProductMinorDetail";
import ProductsComment from "./components/ProductsComment";
import SuggestedProducts from "./components/SuggestedProducts";

const ProductDetail = () => {
  return (
    <>
      <div className="flex items-center justify-between space-x-12">
        <div className="flex-1">
          <ProductImages
            images={[
              "/images/product1.png",
              "/images/product2.png",
              "/images/product1.png",
              "/images/product2.png",
            ]}
          />
        </div>
        <div className="flex-1">
          <ProductMainDetail />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-12">
        <ProductMinorDetail />
        <ProductsComment />
      </div>
      <SuggestedProducts />
    </>
  );
};

export default ProductDetail;
