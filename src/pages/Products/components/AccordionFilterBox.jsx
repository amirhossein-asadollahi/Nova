import React from "react";
import AccordionItem from "../../../components/common/AccordionItem";
import { Package2, Star, WalletMinimal } from "lucide-react";
import CatrgoryItems from "./common/CatrgoryItems";
import PriceRange from "./ui/PriceRange";
import Rating from "./ui/Rating";

const AccordionFilterBox = () => {
  return (
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
  );
};

export default AccordionFilterBox;
