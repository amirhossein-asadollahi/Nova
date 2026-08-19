import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Header from "../components/layout/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
