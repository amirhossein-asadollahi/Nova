import React from "react";
import Badge from "../../../components/ui/Badge";
import NovaTeamCard from "./NovaTeamCard";

const NovaTeam = () => {
  return (
    <div className="mt-8 flex justify-between">
      <div className="w-96">
        <Badge value={"تیم ما"} className={"text-primary bg-primary-100"} />
        <h2 className="text-2xl font-bold">افراد پشت پرده نوا</h2>
        <p className="text-lg text-slate-600">
          ما یک تیم جوان و پر انرژی هستیم که با علاقه به تکنولوژی و تجربه کاربری
          بهتر هر روز تلاش میکنیم تا نوا را به انتخاب اول شما تبدیل کنیم
        </p>
      </div>
      <div className="flex gap-4">
        <NovaTeamCard
          image={"src/assets/images/novaTeam/person-1.jpg"}
          name={"محمد محمدی"}
          position={"مدیر محصول"}
        />
        <NovaTeamCard
          image={"src/assets/images/novaTeam/person-2.jpg"}
          name={"رضا رضایی"}
          position={"توسعه دهنده بک اند"}
        />
        <NovaTeamCard
          image={"src/assets/images/novaTeam/person-3.jpg"}
          name={"علی رضایی"}
          position={"توسعه دهنده فرانت اند"}
        />
        <NovaTeamCard
          image={"src/assets/images/novaTeam/person-4.jpg"}
          name={"سینا سینا زاده"}
          position={"طراح UI/UX"}
        />
      </div>
    </div>
  );
};

export default NovaTeam;
