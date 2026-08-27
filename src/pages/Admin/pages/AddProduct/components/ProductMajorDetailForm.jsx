import React from "react";
import InputLabel from "../../../../../components/common/InputLabel";

const ProductMajorDetailForm = () => {
  return (
    <div className="flex flex-col items-start space-y-4 w-full bg-white border-2 border-border rounded-lg px-4 py-2">
      <h2 className="text-xl font-bold">اطلاعات عمومی</h2>
      <InputLabel
        title={"نام محصول"}
        placeholder={"مثال: کفش ورزشی آدیداس مدل AIRFLEX100"}
      />
      <div className="flex items-center w-full gap-4">
        <InputLabel title={"برند"} type="select" />
        <InputLabel title={"دسته بندی"} type="select" />
      </div>
      <div className="flex items-center w-full gap-4">
        <InputLabel title={"کد محصول(SKU)"} placeholder={"مثال: AF1001"} />
        <InputLabel title={"وضعیت"} type="select" />
      </div>
    </div>
  );
};

export default ProductMajorDetailForm;
