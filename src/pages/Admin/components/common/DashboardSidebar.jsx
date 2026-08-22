import React from "react";
import Logo from "../../../../components/layout/Header/components/Logo";
import {
  Box,
  ChartColumn,
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

const DashboardSidebar = () => {
  return (
    <div className="w-1/6 fixed top-0 right-0 bottom-0 bg-white px-4">
      <div className="">
        <Logo />
      </div>
      <div className="flex items-center flex-col gap-2 mt-4">
        <NavLink
          to={"/dashboard"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <House />
          <span>داشبورد</span>
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <Handbag />
          <span>سفارش ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/products"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <Box />
          <span>محصول ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/categories"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <LayoutGrid />
          <span>دسته بندی ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <Users />
          <span>کاربران</span>
        </NavLink>
        <NavLink
          to={"/dashboard/coupons"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <TicketPercent />
          <span>کوپن ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/reports"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <ChartColumn />
          <span>گزارش ها</span>
        </NavLink>
        <NavLink
          to={"/dashboard/comments"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-3 rounded-lg`
          }
        >
          <MessageSquareText />
          <span>نظرات</span>
        </NavLink>
        <NavLink
          to={"/dashboard/content"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-4 rounded-lg`
          }
        >
          <ScrollText />
          <span>محتوا</span>
        </NavLink>
        <NavLink
          to={"/dashboard/settings"}
          className={(isActive) =>
            `flex items-center gap-4 w-full hover:bg-primary-100 hover:text-primary-dark p-4 rounded-lg`
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
