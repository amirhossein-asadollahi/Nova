import React from "react";
import InputLabel from "../../../components/common/InputLabel";
import { Building2, MapPin, MapPinHouse } from "lucide-react";

const UserAddressForm = () => {
  return (
    <div className="border-2 border-border shadow-lg px-8 py-4 rounded-lg my-4 space-y-4">
      <div className="flex items-center space-x-4">
        <InputLabel title={"استان"} icon={<MapPinHouse />} type="select" />
        <InputLabel title={"شهر"} icon={<Building2 />} type="select" />
      </div>
      <InputLabel
        title={"آدرس کامل"}
        icon={<MapPin />}
        placeholder={"ولیعصر-بالاتر از اسدآباد ..."}
      />
      <div className="flex items-center space-x-4">
        <InputLabel title={"کد پستی"} placeholder={"1480932434"} />
        <InputLabel title={"کد ملی(اختیاری)"} placeholder={"2399437846"} />
        <InputLabel title={"تلفن ثابت (اختیاری)"} placeholder={"02144789104"} />
      </div>
    </div>
  );
};

export default UserAddressForm;
