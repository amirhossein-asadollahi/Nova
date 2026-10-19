import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { contactUsSchema } from "../../../validators/contactUs";
import { validate } from "../../../validators";
import useContactUs from "../../../hooks/useContactUs";

const ContactUsForm = () => {
  const { form, isSubmitRequest, changeHandler, submitHandler } = useContactUs({
    name: "",
    phone: "",
    subject: "",
    content: "",
  });
  return (
    <div className="p-8 border-2 border-border rounded-lg">
      <div className="flex items-start flex-col space-y-2">
        <p className="text-2xl font-bold">ارسال پیام</p>
        <p className="text-slate-600">
          سوالات, انتقادات,پیشنهادات و مشکلات خود را با ما درمیان بگذارید
        </p>
      </div>
      <div className="">
        <div className="flex flex-col items-start">
          <label htmlFor="fullName">نام و نام خانوادگی</label>
          <input
            data-name="name"
            value={form.name}
            onChange={changeHandler}
            type="text"
            className="px-4 py-2 w-full outline-none border-2 border-border rounded-lg focus:border-primary transition-all"
            id="fullName"
            placeholder="مثال: محمد رضایی"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="phone">شماره موبایل</label>
          <input
            data-name="phone"
            value={form.phone}
            onChange={changeHandler}
            type="text"
            className="px-4 py-2 w-full outline-none border-2 border-border rounded-lg focus:border-primary transition-all"
            id="phone"
            placeholder="مثال: 091212345678"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="subject">موضوع</label>
          <input
            data-name="subject"
            value={form.subject}
            onChange={changeHandler}
            type="text"
            className="px-4 py-2 w-full outline-none border-2 border-border rounded-lg focus:border-primary transition-all"
            id="subject"
            placeholder="مثال: مرجوعی کالا"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="email">متن پیام</label>
          <textarea
            data-name="content"
            value={form.content}
            onChange={changeHandler}
            type="text"
            className="px-4 py-2 w-full outline-none border-2 border-border rounded-lg focus:border-primary transition-all"
            id="email"
            placeholder="موضوع پیام خود را اینجا بنویسید..."
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={submitHandler}
            disabled={isSubmitRequest}
            className={`bg-primary outline-none my-8 border-2 border-border rounded-lg px-4 py-2 hover:bg-primary-dark text-white ${isSubmitRequest ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isSubmitRequest ? "درحال ارسال..." : "ارسال"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
