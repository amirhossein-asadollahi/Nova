import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative flex justify-center flex-2">
      <Search className="absolute z-10 right-3 top-1 translate-y-1/2 text-text-muted w-4 h-4" />
      <input
        className="bg-slate-100 pr-9 w-full px-8 py-2 outline-none rounded-4xl text-text-muted text-sm border-2 border-transparent focus:border-primary focus:bg-white transition-colors duration-200"
        type="text"
        placeholder="جستجو در محصولات..."
      />
    </div>
  );
};

export default SearchInput;
