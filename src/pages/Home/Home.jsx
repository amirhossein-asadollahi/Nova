import React from "react";
import Slider from "./components/Slider";
import CategoryBoxes from "./components/CategoryBoxes";
import ProductCards from "./components/ProductCards";
import PromoBanner from "./components/PromoBanner";

const Home = () => {
  return (
    <>
      <Slider />
      <CategoryBoxes />
      <ProductCards title={"محصولات ویژه"} />
      <PromoBanner />
      <ProductCards title={"جدیدترین محصولات"} />
      <ProductCards title={"پرفروش ترین ها"} />
    </>
  );
};

export default Home;
