import { Star } from "lucide-react";
import React from "react";

const Rating = () => {
  //   for (let i = 5; i > 0; i--) {
  //     const stars = Array(i).fill(<Star />);
  //     console.log(stars);
  //   }
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex gap-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
