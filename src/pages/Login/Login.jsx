import React, { useState } from "react";
import Logo from "../../components/layout/Header/components/Logo";
import { ArrowRight } from "lucide-react";

const Login = () => {
  const [loginForm, setLoginForm] = useState(false);
  return (
    <div className="bg-bg-secondary p-12 min-h-screen">
      <div className="container max-w-5xl mx-auto bg-white rounded-lg border border-border">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center px-8 space-y-4 flex-1">
            <div className="w-24 h-8">
              <Logo />
            </div>
            <h1 className="text-2xl font-bold">
              ورود یا ثبت نام در حساب کاربری
            </h1>
            {loginForm ? (
              <p className="text-sm text-slate-600">
                کد 4 رقمی ارسال شده را وارد کنید
              </p>
            ) : (
              <p className="text-sm text-slate-600">
                برای ورود یا ثبت نام, شماره موبایل خود را وارد کنید
              </p>
            )}
            {loginForm ? (
              <input
                type="text"
                placeholder="****"
                max={4}
                className="px-4 py-2 w-full outline-none border-2 border-border rounded-lg focus:border-primary"
              />
            ) : (
              <input
                type="text"
                placeholder="09*********"
                className="px-4 py-2 w-full outline-none border-2 border-border rounded-lg focus:border-primary"
              />
            )}
            <button
              onClick={() => setLoginForm(true)}
              className="px-4 py-2 w-full flex items-center justify-center gap-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary-dark"
            >
              <ArrowRight />
              {loginForm ? <span>ورود</span> : <span>ارسال کد تائید</span>}
            </button>
          </div>
          <img
            src="src/assets/images/Login-img.png"
            className="h-164 w-full flex-2"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
