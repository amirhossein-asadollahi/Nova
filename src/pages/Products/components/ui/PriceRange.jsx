import React from "react";

const PriceRange = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start">
        <label className="text-slate-600" htmlFor="minority">حداقل</label>
        <input className="bg-white border-2 border-border px-4 py-2 rounded-lg outline-none" name="minority" type="text" placeholder="مثلا: 1,000" />
      </div>
      <div className="flex flex-col items-start">
        <label className="text-slate-600" htmlFor="majority">حداکثر</label>
        <input className="bg-white border-2 border-border px-4 py-2 rounded-lg outline-none" name="majority" type="text" placeholder="مثلا: 70,000,000" />
      </div>
    </div>
  );
};

export default PriceRange;
