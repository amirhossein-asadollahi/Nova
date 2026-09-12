import React from "react";

const NovaTeamCard = ({ image, name, position }) => {
  return (
    <div className="w-54 flex flex-col items-center px-8 py-4 bg-slate-200 rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-18 h-18 object-cover rounded-full"
      />
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-slate-600 wrap-break-word">{position}</p>
    </div>
  );
};

export default NovaTeamCard;
