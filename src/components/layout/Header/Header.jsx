import React, { useState } from "react";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import SearchInput from "./components/SearchInput";
import UsefullButtons from "./components/UsefullButtons";
import { Menu, User, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 px-4 py-6">
        {/* Desktop */}
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-6 lg:border-b-2 lg:border-border py-2">
          <Logo />

          <div className="flex items-center justify-center gap-12 flex-4">
            <NavLinks />
          </div>

          <SearchInput />

          <UsefullButtons />
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <Menu className="cursor-pointer" onClick={toggleMenuHandler} />

          <User className="w-8 h-8 hover:text-primary cursor-pointer" />
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenuHandler}
          className="fixed inset-0 bg-black/50 z-60"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 z-70
          w-1/3
          h-fit
          min-h-screen
          bg-bg-secondary
          shadow-2xl
          flex flex-col
          p-6
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <X className="cursor-pointer" onClick={toggleMenuHandler} />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <NavLinks />
        </div>
      </aside>
    </>
  );
};

export default Header;
