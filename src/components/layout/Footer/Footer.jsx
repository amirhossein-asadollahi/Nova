import React from "react";
import Logo from "../Header/components/Logo";
import FooterLinks from "./components/FooterLinks";

const Footer = () => {
  const categoryLinkValues = [
    "گوشی موبایل",
    "لپ تاپ",
    "هدفون",
    "ساعت هوشمند",
    "لوازم جانبی",
  ];
  const customerServiceLinkValues = [
    "پیگیری سفارش",
    "بازگشت کالا",
    "شرایط ارسال",
    "پشتیبانی",
  ];
  const usefulLinkValues = [
    "درباره ما",
    "تماس با ما",
    "قوانین و مقررات",
    "سوالات متداول",
  ];
  return (
    <footer className="mt-8 w-full bg-primary-dark px-12 py-6">
      <div className="flex items-center space-x-4 justify-between">
        <div className="">
          <div className="w-24">
            <Logo />
          </div>
          <p className="text-sm text-bg-secondary">زندگی هوشمند با نوا</p>
        </div>
        <div className="flex space-x-24">
          <FooterLinks title={"دسته بندی ها"} values={categoryLinkValues} />
          <FooterLinks
            title={"خدمات مشتریان"}
            values={customerServiceLinkValues}
          />
          <FooterLinks title={"لینک های مفید"} values={usefulLinkValues} />
        </div>
        <p className="text-sm text-white w-36">
          تمامی حقوق این وبسایت متعلق به نوا میباشد و هرگونه کپی برداری پیگرد
          قانونی دارد
        </p>
      </div>
    </footer>
  );
};

export default Footer;
