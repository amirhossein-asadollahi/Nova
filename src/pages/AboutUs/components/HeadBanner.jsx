import React from "react";
import Badge from "../../../components/ui/Badge";

const HeadBanner = () => {
  return (
    <div className="relative">
      <img
        src="src/assets/images/headphone-poster.png"
        className="w-full h-100 object-cover rounded-lg"
      />
      <div className="absolute top-18 right-12 w-82">
        <div className="mb-8">
          <Badge
            value={"درباره ما"}
            className={"bg-primary absolute text-white"}
          />
        </div>
        <h1 className="text-4xl font-bold">ما که هستیم؟</h1>
        <p className="text-lg text-slate-600 mt-8">
          در نوا, با عشق به تکنولوژی و هدف ایجاد تجربه ایی بهتر برای زندگی
          روزمره شما, کنار هم هستیم
        </p>
      </div>
    </div>
  );
};

export default HeadBanner;
