import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import {
  UserRoundCheck,
  UserRoundMinus,
  UserRoundPlus,
  Users,
  UsersRound,
} from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import UsersAction from "./components/UsersAction";
import UserItem from "./components/UserItem";
import DashboardTable from "../../components/common/DashboardTable";

const DashboardUsers = () => {
  const userTableHeads = [
    "کاربر",
    "شماره",
    "نقش",
    "وضعیت",
    "تاریخ عضویت",
    "آخرین ورود",
    "عملیات",
  ];
  const userTableBodies = [
    <UserItem
      img={"/images/user1.jpg"}
      name={"حسین دریکوند"}
      userCode={"2341"}
      phone={"09163428756"}
      role={"ADMIN"}
      sginUpDate={"09/11/1401"}
      lastSignIn={"03/01/1405"}
    />,
    <UserItem
      img={"/images/user2.jpg"}
      name={"علیرضا رحیمی"}
      userCode={"2456"}
      phone={"09173428451"}
      role={"USER"}
      sginUpDate={"07/01/1402"}
      lastSignIn={"09/03/1404"}
    />,
    <UserItem
      img={"/images/user1.jpg"}
      name={"حسین دریکوند"}
      userCode={"2341"}
      phone={"09163428756"}
      role={"ADMIN"}
      sginUpDate={"09/11/1401"}
      lastSignIn={"03/01/1405"}
    />,
    <UserItem
      img={"/images/user2.jpg"}
      name={"علیرضا رحیمی"}
      userCode={"2456"}
      phone={"09173428451"}
      role={"USER"}
      sginUpDate={"07/01/1402"}
      lastSignIn={"09/03/1404"}
    />,
    <UserItem
      img={"/images/user1.jpg"}
      name={"حسین دریکوند"}
      userCode={"2341"}
      phone={"09163428756"}
      role={"ADMIN"}
      sginUpDate={"09/11/1401"}
      lastSignIn={"03/01/1405"}
    />,
    <UserItem
      img={"/images/user2.jpg"}
      name={"علیرضا رحیمی"}
      userCode={"2456"}
      phone={"09173428451"}
      role={"USER"}
      sginUpDate={"07/01/1402"}
      lastSignIn={"09/03/1404"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"مدیریت کاربران"} icon={<Users />} />
      <div className="flex items-center gap-4">
        <DashboardCardBox
          title={"کل کاربر ها"}
          value={"2,034"}
          desc={"همه کاربر های ثبت شده"}
          icon={<UsersRound />}
          className={"bg-primary-100 text-primary"}
        />
        <DashboardCardBox
          title={"کابران فعال"}
          value={"1,932"}
          desc={"کابران فعال سایت"}
          icon={<UserRoundPlus />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"کابران جدید"}
          value={"267"}
          desc={"کابران جدید این ماه"}
          icon={<UserRoundCheck />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"کاربران غیرفعال"}
          value={"65"}
          desc={"کابران غیرفعال"}
          icon={<UserRoundMinus />}
          className={"bg-red-100 text-red-600"}
        />
      </div>
      <UsersAction />
      <DashboardTable tHeads={userTableHeads} tBodies={userTableBodies} />
    </div>
  );
};

export default DashboardUsers;
