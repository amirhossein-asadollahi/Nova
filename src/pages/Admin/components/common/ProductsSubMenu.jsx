import React from "react";
import { NavLink } from "react-router";

const ProductsSubMenu = ({ isSubProductShow }) => {
  return (
    <div
      className={
        isSubProductShow
          ? "flex flex-col items-start bg-primary-50 rounded-b-lg space-y-2"
          : "hidden"
      }
    >
      <NavLink
        to={"/dashboard/products"}
        className={({ isActive }) =>
          `flex items-center w-full gap-2 p-3 rounded-b-lg hover:bg-primary-200 hover:text-primary-dark ${isActive ? "bg-primary-200 text-primary-dark" : null}`
        }
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="">همه محصولات</span>
      </NavLink>
      <NavLink
        to={"/dashboard/add-Product"}
        className={({ isActive }) =>
          `flex items-center w-full gap-2 p-3 rounded-b-lg hover:bg-primary-100 hover:text-primary-dark ${isActive ? "bg-primary-100 text-primary-dark" : null}`
        }
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span>افزودن محصول جدید</span>
      </NavLink>
      <NavLink
        to={"/dashboard/brands"}
        className={({ isActive }) =>
          `flex items-center w-full gap-2 p-3 rounded-b-lg hover:bg-primary-100 hover:text-primary-dark ${isActive ? "bg-primary-100 text-primary-dark" : null}`
        }
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span>برندها</span>
      </NavLink>
      <NavLink
        to={"/dashboard/productFeatures"}
        className={({ isActive }) =>
          `flex items-center w-full gap-2 p-3 rounded-b-lg hover:bg-primary-100 hover:text-primary-dark ${isActive ? "bg-primary-100 text-primary-dark" : null}`
        }
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span>ویژگی ها</span>
      </NavLink>
    </div>
  );
};

export default ProductsSubMenu;
