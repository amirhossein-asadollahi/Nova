import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const ProfileLayout = () => {
  return (
    <>
      <Toaster position="top-center" />
      {/* <ProfileSidebar /> */}
      <Outlet />
    </>
  );
};

export default ProfileLayout;
