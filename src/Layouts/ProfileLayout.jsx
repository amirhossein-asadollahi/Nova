import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import ProfileSidebar from "../pages/UserProfile/components/ProfileSidebar";

const ProfileLayout = () => {
  return (
    <>
      <Toaster position="top-center" />
      <ProfileSidebar />
      <main className="bg-bg-secondary max-h-screen overflow-auto w-5/6 left-0 top-0 fixed p-4">
        <Outlet />
      </main>
    </>
  );
};

export default ProfileLayout;
