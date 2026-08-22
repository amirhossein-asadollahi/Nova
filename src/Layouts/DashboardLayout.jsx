import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import DashboardSidebar from "../pages/Admin/components/common/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <>
      <Toaster position="top-center" />
      <DashboardSidebar />
      <main className="bg-bg-secondary min-h-screen w-5/6 left-0 top-0 fixed p-4">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
