import React from "react";
import ProductCards from "../../Home/components/ProductCards";

const SuggestedProducts = () => {
  return (
    <div>
      <ProductCards autopPlay={false} title={"محصولات پیشنهادی"} />
    </div>
  );
};

export default SuggestedProducts;
