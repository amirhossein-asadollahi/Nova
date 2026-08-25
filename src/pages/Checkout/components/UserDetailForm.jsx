import React from "react";
import InputLabel from "../../../components/common/InputLabel";
import { Mail, Phone, User } from "lucide-react";

const UserDetailForm = () => {
  return (
    <div className="border-2 border-border shadow-lg px-8 py-4 rounded-lg my-4 space-y-4">
      <div className="flex items-center space-x-4">
        <InputLabel
          icon={<User />}
          title={"نام و نام خانوادگی"}
          placeholder={"مثال: علیرضا رحیمی"}
        />
        <InputLabel
          icon={<Phone />}
          title={"شماره تماس"}
          placeholder={"مثال: 09924357812"}
        />
      </div>
      <InputLabel
        icon={<Mail />}
        title={"ایمیل(اختیاری)"}
        placeholder={"مثال: alirezaRahimi@example.com"}
      />
    </div>
  );
};

export default UserDetailForm;
