import React from "react";
import HeadBanner from "./components/HeadBanner";
import StoryContent from "./components/StoryContent";
import AboutNovaBox from "./components/AboutNovaBox";
import { Headset, Heart, ShieldCheck, Truck } from "lucide-react";
import NovaTeam from "./components/NovaTeam";

const AboutUs = () => {
  return (
    <div>
      <HeadBanner />
      <StoryContent />
      <div className="grid grid-cols-4 mt-8 bg-primary-50 px-12 py-8 divide-x-2 divide-border rounded-lg">
        <AboutNovaBox
          ICON={ShieldCheck}
          title={"محصولات اورجینال"}
          value={"ضمانت اصالت کالا و همکاری با برند های معتبر"}
        />
        <AboutNovaBox
          ICON={Truck}
          title={"ارسال سریع"}
          value={"تحویل در کوتاه ترین زمان به سراسر کشور"}
        />
        <AboutNovaBox
          ICON={Headset}
          title={"پشتیبانی واقعی"}
          value={"پاسخگویی سریع و حرفه ایی در تمام مراحل خرید"}
        />
        <AboutNovaBox
          ICON={Heart}
          title={"تجربه خرید مطمعن"}
          value={"امنیت پرداخت و بازگشت وجه در صورت نیاز"}
        />
      </div>
      <NovaTeam />
    </div>
  );
};

export default AboutUs;
