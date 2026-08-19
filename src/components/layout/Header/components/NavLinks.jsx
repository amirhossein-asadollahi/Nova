import React from "react";
import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `pb-1 border-b-2 transition-colors duration-300 ${
            isActive
              ? "text-primary border-primary"
              : "border-transparent hover:text-primary"
          }`
        }
      >
        خانه
      </NavLink>
      <NavLink
        to={"products"}
        className={({ isActive }) =>
          `pb-1 border-b-2 transition-colors duration-300 ${
            isActive
              ? "text-primary border-primary"
              : "border-transparent hover:text-primary"
          }`
        }
      >
        محصولات
      </NavLink>
      <NavLink
        to={"categories"}
        className={({ isActive }) =>
          `pb-1 border-b-2 transition-colors duration-300 ${
            isActive
              ? "text-primary border-primary"
              : "border-transparent hover:text-primary"
          }`
        }
      >
        دسته بندی
      </NavLink>
      <NavLink
        to={"about-us"}
        className={({ isActive }) =>
          `pb-1 border-b-2 transition-colors duration-300 ${
            isActive
              ? "text-primary border-primary"
              : "border-transparent hover:text-primary"
          }`
        }
      >
        درباره ما
      </NavLink>
      <NavLink
        to={"contact-us"}
        className={({ isActive }) =>
          `pb-1 border-b-2 transition-colors duration-300 ${
            isActive
              ? "text-primary border-primary"
              : "border-transparent hover:text-primary"
          }`
        }
      >
        تماس با ما
      </NavLink>
    </>
  );
};

export default NavLinks;
