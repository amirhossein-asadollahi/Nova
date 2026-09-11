import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <main className="max-w-8xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
