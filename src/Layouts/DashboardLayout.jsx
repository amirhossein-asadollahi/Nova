import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const DashboardLayout = () => {
  return (
    <>
      <Toaster position="top-center" />
      {/* <DashboardHeader /> */}
      <Outlet />
      {/* <DashboardFooter /> */}
    </>
  );
};

export default DashboardLayout;
