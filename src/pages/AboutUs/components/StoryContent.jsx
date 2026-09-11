import React from "react";
import Badge from "../../../components/ui/Badge";

const StoryContent = () => {
  return (
    <div className="mt-8 flex items-center justify-between">
      <div className="flex-1">
        <div className="mb-8">
          <Badge
            value={"داستان ما"}
            className={"bg-primary-200 text-primary absolute"}
          />
        </div>
        <h2 className="text-2xl font-bold">از یک ایده تا نوا</h2>
        <p className="text-lg text-slate-600">
          نوا در سال 1402 با یک ایده ساده متولد شد: فراهم کردن دسترسی آسان به
          جدیدترین و با کیفیت ترین محصولات تکنولوژی برای همه.
        </p>
        <p className="text-lg text-slate-600">
          ما بار داریم که تکنولوژی فقط یک ابزار نیست, بلکه بخشی از سبک زندگی
          است, به همین دلیل تلاش میکنیم که بهترین برند ها را با قیمت مناسب و
          خدمات قابل اعتماد در اختیار شما قرار دهیم
        </p>
      </div>
      <div className="flex-1 flex items-end justify-end">
        <img
          src="src/assets/images/about-us-img.png"
          alt="about-us"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default StoryContent;
