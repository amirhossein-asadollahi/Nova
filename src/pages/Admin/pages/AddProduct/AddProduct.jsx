import React from "react";
import { Box } from "lucide-react";
import ProductMajorDetailForm from "./components/ProductMajorDetailForm";
import ProductMinorDetailForm from "./components/ProductMinorDetailForm";
import ProductUploadImageForm from "./components/ProductUploadImageForm";
import ProductActionsFooter from "./components/ProductActionsFooter";
import SectionTitle from "../../../../components/common/SectionTitle";

const AddProduct = () => {
  return (
    <>
      <div className="min-h-screen">
        <SectionTitle title={"افزودن محصول جدید"} icon={<Box />} />
        <div className="flex items-start justify-between space-x-8 my-8">
          <div className="flex flex-col flex-2 space-y-8">
            <ProductMajorDetailForm />
            <ProductMinorDetailForm />
          </div>
          <div className="flex-1">
            <ProductUploadImageForm />
          </div>
        </div>
      </div>
      <ProductActionsFooter />
    </>
  );
};

export default AddProduct;
