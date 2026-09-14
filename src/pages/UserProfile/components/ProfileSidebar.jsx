import React from "react";
import Logo from "../../../components/layout/Header/components/Logo";
import { NavLink } from "react-router";
import {
  Handbag,
  House,
  MapPinHouse,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="w-1/6 fixed top-0 right-0 bottom-0 bg-white px-4 overflow-auto">
      <div className="">
        <Logo />
      </div>
      <div className="flex items-center flex-col gap-2 mt-4">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
          end
        >
          <House />
          <span>پروفایل</span>
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <Handbag />
          <span>سفارش های من</span>
        </NavLink>
        <NavLink
          to={"/dashboard/categories"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <MapPinHouse />
          <span>آدرس ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <User />
          <span>اطلاعات حساب کاربری</span>
        </NavLink>
        <NavLink
          to={"/dashboard/coupons"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <MessageSquare />
          <span>نظرات من</span>
        </NavLink>
        <NavLink
          to={"/dashboard/settings"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-4 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <Settings />
          <span>تنظیمات</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileSidebar;
