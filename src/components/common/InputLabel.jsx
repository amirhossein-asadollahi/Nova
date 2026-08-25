import React from "react";

const InputLabel = ({
  icon,
  title,
  placeholder,
  type = "text",
  provinces = ["تهران", "اصفهان", "شیراز"],
}) => {
  return (
    <>
      <div className="flex items-start flex-col w-full">
        <div className="flex items-center gap-2">
          <span className="text-sm text-black">{icon}</span>
          <span className="text-sm text-black">{title}</span>
        </div>
        {type === "text" ? (
          <input
            className="w-full mt-1 border-2 border-border outline-none rounded-lg px-4 py-2 focus:border-primary"
            type={type}
            placeholder={placeholder}
          />
        ) : (
          <select className="w-full mt-1 border-2 border-border outline-none rounded-lg px-4 py-2 focus:border-primary">
            {provinces.map((province) => {
              return <option key={province}>{province}</option>;
            })}
          </select>
        )}
      </div>
    </>
  );
};

export default InputLabel;
