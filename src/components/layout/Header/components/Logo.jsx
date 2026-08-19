import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="flex flex-1 justify-center cursor-pointer">
      <img
        src="../../../../public/Logo.png"
        alt="Nova Logo"
        className="w-auto h-10 object-fill"
      />
    </Link>
  );
};

export default Logo;
