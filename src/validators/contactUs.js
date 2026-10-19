import { z } from "zod";
export const contactUsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { error: () => "نام کاربری باید بیشتر از 3 کاراکتر باشد" })
    .max(50, { error: () => "نام کاربری نباید بیشتر از 50 کاراکتر باشد" }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10,11}$/, { error: () => "شماره موبایل صحیح نمیباشد" }),
  subject: z
    .string()
    .trim()
    .min(3, { error: () => "موضوع باید بیشتر از 3 کاراکتر باشد" })
    .max(100, { error: () => "موضوع نباید بیشتر از 100 کاراکتر باشد" }),
  content: z
    .string()
    .trim()
    .min(10, { error: () => "محتوای پیام باید حداقل 10 کاراکتر باشد" })
    .max(1000, { error: () => "محتوای پیام نباید بیشتر از 1000 کاراکتر باشد" }),
});
