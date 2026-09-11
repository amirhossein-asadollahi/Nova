import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import CategoryBoxes from "./components/CategoryBoxes";
import ProductCards from "./components/ProductCards";
import PromoBanner from "./components/PromoBanner";
import { supabase } from "../../utils/supabase";
import { toast } from "sonner";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // const fetchProducts = async () => {
  //   const { data, error } = await supabase.from("products").select("*");
  //   if (error) {
  //     toast.error(`درخواست دریافت اطلاعات با خطا مواجه شد: ${error.message}`);
  //     return;
  //   }
  //   setProducts(data);
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
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
