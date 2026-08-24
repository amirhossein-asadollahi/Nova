import React from "react";

const ProductCount = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center px-2 py-1 border-2 border-border rounded-lg">
        <button className="border-l-2 rounded-lg border-border w-8 h-8 cursor-pointer hover:bg-slate-200">
          +
        </button>
        <input
          className="w-12 text-center outline-none"
          type="text"
          max={5}
          value={1}
        />
        <button className="border-r-2 rounded-lg border-border w-8 h-8 cursor-pointer hover:bg-slate-200">
          -
        </button>
      </div>
    </div>
  );
};

export default ProductCount;
