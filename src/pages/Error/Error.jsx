import {
  ArrowLeft,
  FaceSlightlyFrowning,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex gap-4">
          <FaceSlightlyFrowning className="text-primary" size={48} />
          <h1 className="text-6xl font-bold">اوه نه! مشکلی پیش آمده</h1>
        </div>
        <p className="text-lg text-slate-600">
          متاسفانه در انجام درخواست شما مشکلی پیش آمده است.
        </p>
        <p className="text-lg text-slate-600">
          تیم ما از این موضوع مطلع شده و درحال بررسی و رفع آن است
        </p>
        <div className="flex items-center justify-between gap-18 px-4 py-2 rounded-lg bg-primary-50 border-2 border-border">
          <ShieldCheck size={36} className="text-primary" />
          <div className="w-68 -indent-12 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-primary">نگران نباشید</h3>
            <p className="text-sm text-slate-600">
              اطلاعات شما ایمن است و مشکلی برای حساب شما یا سفارش هایتان ایجاد
              نشده است.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <button onClick={() => navigate(0)} className="flex items-center justify-center gap-4 px-6 py-3 bg-primary rounded-lg hover:bg-primary-dark cursor-pointer">
            <RefreshCw className="text-white" />
            <span className="text-white">تلاش مجدد</span>
          </button>
          <button onClick={() => navigate("/")} className="flex items-center justify-center gap-4 px-6 py-3 bg-white border-2 border-primary group cursor-pointer hover:bg-primary rounded-lg">
            <span className="text-primary group-hover:text-white">
              بازگشت به خانه
            </span>
            <ArrowLeft className="text-primary group-hover:text-white" />
          </button>
        </div>
      </div>
      <img src="src/assets/images/error-page-1.png" alt="error-bot" className="w-162 rounded-lg" />
    </div>
  );
};

export default Error;
