import React from "react";
import SectionTitle from "../../../../components/common/SectionTitle";
import {
  CircleCheckBig,
  CircleX,
  Clock2,
  MessageSquare,
  MessageSquareText,
} from "lucide-react";
import DashboardCardBox from "../../components/common/DashboardCardBox";
import CommentsAction from "./components/CommentsAction";
import CommentItem from "./components/CommentItem";
import DashboardTable from "../../components/common/DashboardTable";

const DashboardComments = () => {
  const commentTableHeads = [
    "نویسنده",
    "امتیاز",
    "محصول",
    "نظر",
    "وضعیت",
    "تاریخ",
    "عملیات",
  ];
  const commentTableBodies = [
    <CommentItem
      userImg={"/images/user2.jpg"}
      productImg={"/images/product2.png"}
      productName={"ایرپاد"}
      userName={"علیرضا صفری"}
      phone={"09113248945"}
      userRate={"5"}
      comment={
        "خیلی خفن بود من سیاهم و سفیدم کرد fregfr kjirfj f rjfijric fjrjefeche hruifheurof knenfer frenfjqief erfnijedw d ewiwjdo2kodjed eudje3odjubd 2ek23owlqpksisndn2390r4 f reof9348re"
      }
      status={"تائید شده"}
      date={"03/04/01"}
    />,
    <CommentItem
      userImg={"/images/user2.jpg"}
      productImg={"/images/product2.png"}
      productName={"لپ تاپ"}
      userName={"سامان میرفوادی"}
      phone={"09123248590"}
      userRate={"3"}
      comment={"خیلی خفن بود من سیاهم و سفیدم کرد"}
      status={"در انتظار تائید"}
      date={"03/04/01"}
    />,
    <CommentItem
      userImg={"/images/user2.jpg"}
      productImg={"/images/product2.png"}
      productName={"ایرپاد"}
      userName={"علیرضا صفری"}
      phone={"09113248945"}
      userRate={"5"}
      comment={"خیلی خفن بود من سیاهم و سفیدم کرد"}
      status={"تائید شده"}
      date={"03/04/01"}
    />,
    <CommentItem
      userImg={"/images/user2.jpg"}
      productImg={"/images/product2.png"}
      productName={"لپ تاپ"}
      userName={"سامان میرفوادی"}
      phone={"09123248590"}
      userRate={"3"}
      comment={"خیلی خفن بود من سیاهم و سفیدم کرد"}
      status={"در انتظار تائید"}
      date={"03/04/01"}
    />,
    <CommentItem
      userImg={"/images/user2.jpg"}
      productImg={"/images/product2.png"}
      productName={"ایرپاد"}
      userName={"علیرضا صفری"}
      phone={"09113248945"}
      userRate={"5"}
      comment={"خیلی خفن بود من سیاهم و سفیدم کرد"}
      status={"تائید شده"}
      date={"03/04/01"}
    />,
    <CommentItem
      userImg={"/images/user2.jpg"}
      productImg={"/images/product2.png"}
      productName={"لپ تاپ"}
      userName={"سامان میرفوادی"}
      phone={"09123248590"}
      userRate={"3"}
      comment={"خیلی خفن بود من سیاهم و سفیدم کرد"}
      status={"در انتظار تائید"}
      date={"03/04/01"}
    />,
  ];
  return (
    <div className="min-h-screen">
      <SectionTitle title={"کامنت ها"} icon={<MessageSquareText />} />
      <div className="flex items-center space-x-4">
        <DashboardCardBox
          title={"نظرات تائید شده"}
          value={"324"}
          desc={"تائید شده توسط ادمین"}
          icon={<CircleCheckBig />}
          className={"bg-green-100 text-green-600"}
        />
        <DashboardCardBox
          title={"نظرات رد شده"}
          value={"32"}
          desc={"رد شده بدلیل نامناسب بودن"}
          icon={<CircleX />}
          className={"bg-pink-100 text-pink-600"}
        />
        <DashboardCardBox
          title={"در انتظار تائید"}
          value={"42"}
          desc={"منتظر تائید هستند..."}
          icon={<Clock2 />}
          className={"bg-orange-100 text-orange-600"}
        />
        <DashboardCardBox
          title={"کل نظرات"}
          value={"427"}
          desc={"تعداد کل نظرات"}
          icon={<MessageSquare />}
          className={"bg-purple-100 text-purple-600"}
        />
      </div>
      <CommentsAction />
      <DashboardTable tHeads={commentTableHeads} tBodies={commentTableBodies} />
    </div>
  );
};

export default DashboardComments;
