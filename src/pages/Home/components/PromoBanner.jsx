import React from "react";

const PromoBanner = () => {
  return (
    <div className="flex gap-6 h-45 sm:h-55 md:h-65 lg:h-85 mt-8">
      <div className="flex-1 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
        <img
          src="/images/slide4.png"
          alt="slide4"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex-1 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
        <img
          src="/images/slide5.png"
          alt="slide4"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
