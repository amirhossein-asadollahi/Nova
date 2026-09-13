import {
  Handbag,
  Headset,
  HeartCrack,
  House,
  ListSortDescending,
} from "lucide-react";
import React from "react";
import NavigateBox from "./components/NavigateBox";
import notFoundBot from "../../assets/images/NotFound-Robot.png";

const NotFound = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto my-12">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <HeartCrack size={96} className="text-primary" />
            <h1 className="text-4xl font-bold">
              صفحه ایی که دنبالش بودید پیدا نشد!
            </h1>
            <p className="text-xl text-slate-600">
              ممکن است آدرس اشتباه را وارد کرده باشید یا صفحه مورد نظر حذف شده
              باشد.
            </p>
          </div>
          <img src={notFoundBot} alt="notfound-robot" />
        </div>
        <div className="flex items-center justify-center space-x-8 mt-8">
          <NavigateBox
            ICON={Headset}
            title={"تماس با پشتیبانی"}
            navigationRoute={"/contact-us"}
          />
          <NavigateBox
            ICON={ListSortDescending}
            title={"دسته بندی محصولات"}
            navigationRoute={"/categories"}
          />
          <NavigateBox
            ICON={Handbag}
            title={"مشاهده فروشگاه"}
            navigationRoute={"/products"}
          />
          <NavigateBox ICON={House} title={"صفحه اصلی"} navigationRoute={"/"} />
        </div>
      </div>
    </>
  );
};

export default NotFound;
