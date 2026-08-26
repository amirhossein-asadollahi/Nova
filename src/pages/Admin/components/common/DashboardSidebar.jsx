import React, { useState } from "react";
import Logo from "../../../../components/layout/Header/components/Logo";
import {
  Box,
  ChartColumn,
  ChevronLeft,
  Handbag,
  House,
  LayoutGrid,
  MessageSquareText,
  ScrollText,
  Settings,
  TicketPercent,
  Users,
} from "lucide-react";
import { NavLink } from "react-router";
import ProductsSubMenu from "./ProductsSubMenu";

const DashboardSidebar = () => {
  const [isSubProductShow, setIsSubProductShow] = useState(false);

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
          <span>داشبورد</span>
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <Handbag />
          <span>سفارش ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/products"}
          className={({ isActive }) =>
            `w-full ${isSubProductShow && "bg-primary-100"} rounded-lg group ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <div
            onClick={() => setIsSubProductShow((prev) => !prev)}
            className={`flex items-center p-3 rounded-lg justify-between hover:bg-primary-200 hover:text-primary-dark`}
          >
            <div className="flex items-center gap-4">
              <Box />
              <span>محصول ها</span>
            </div>
            <ChevronLeft
              className={`transition-transform duration-300 ${isSubProductShow ? "-rotate-90" : null}`}
            />
          </div>

          <ProductsSubMenu isSubProductShow={isSubProductShow} />
        </NavLink>
        <NavLink
          to={"/dashboard/categories"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <LayoutGrid />
          <span>دسته بندی ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <Users />
          <span>کاربران</span>
        </NavLink>
        <NavLink
          to={"/dashboard/coupons"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <TicketPercent />
          <span>کوپن ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/reports"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <ChartColumn />
          <span>گزارش ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/comments"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-3 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <MessageSquareText />
          <span>نظرات</span>
        </NavLink>
        <NavLink
          to={"/dashboard/content"}
          className={({ isActive }) =>
            `flex items-center gap-4 w-full hover:bg-primary-200 hover:text-primary-dark p-4 rounded-lg ${isActive ? "bg-primary-200 text-primary-dark" : null}`
          }
        >
          <ScrollText />
          <span>محتوا</span>
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

export default DashboardSidebar;
