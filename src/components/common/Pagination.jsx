import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Pagination = ({ totalPage }) => {
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="w-8 h-8 bg-primary-100 cursor-pointer hover:bg-primary-200 rounded-lg"
      >
        <ChevronRight className="flex items-center justify-center" size={30} />
      </button>
      {pages.map((page) => {
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 cursor-pointer rounded-lg transition-colors duration-300 flex items-center justify-center ${currentPage === page ? "bg-primary text-white hover:bg-primary-dark" : "bg-slate-100 hover:bg-slate-200 text-black"}`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="w-8 h-8 bg-primary-100 cursor-pointer hover:bg-primary-200 rounded-lg"
      >
        <ChevronLeft className="flex items-center justify-center" size={30} />
      </button>
    </div>
  );
};

export default Pagination;
