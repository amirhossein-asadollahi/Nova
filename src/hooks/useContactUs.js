import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { validate } from "../validators";
import { contactUsSchema } from "../validators/contactUs";
import { sendContactUsMessage } from "../services/contactUs.service";

const useContactUs = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitRequest, setIsSubmitRequest] = useState(false);
  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.dataset.name]: e.target.value }));
  };
  const resetForm = () => {
    setForm(initialForm);
  };
  const submitHandler = async () => {
    if (!validate(contactUsSchema, form)) return;
    if (isSubmitRequest) return;
    const response = sendContactUsMessage(form);
    setIsSubmitRequest(true);
    toast.promise(response, {
      loading: "...درحال ارسال پیام",
      success: () => {
        resetForm();
        setIsSubmitRequest(false);
        return "پیام شما با موفقیت ارسال شد";
      },
      error: (error) => {
        console.log(error);
        setIsSubmitRequest(false);
        return error.response?.data?.message || "ارسال پیام با شکست مواجه شد";
      },
    });
  };
  return { form, isSubmitRequest, changeHandler, submitHandler };
};

export default useContactUs;
