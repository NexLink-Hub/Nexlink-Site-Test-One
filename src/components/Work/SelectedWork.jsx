import React from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const SelectedWork = ({
  title,
  year,
  category,
  className = "",
  rotate = false,
  onClick,
  isActive = false,
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      className={`text-[#1d1d1d] p-8 rounded-[2rem] w-[100%] transition-all duration-300 cursor-pointer select-none relative group ${
        isActive
          ? "ring-4 ring-[#d8b493] ring-offset-4 ring-offset-[#1b1411] scale-[1.02] shadow-2xl"
          : "hover:scale-[1.02] hover:shadow-xl"
      } ${className}`}
    >
      {/* Active / Action hint pill */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 bg-black/20 text-[#fbf8f5] group-hover:bg-[#1b1411] group-hover:text-[#d8b493]">
        {isActive ? (
          <>
            <FiCheck size={12} className="text-[#d8b493]" />
            <span>Active</span>
          </>
        ) : (
          <>
            <span>Explore</span>
            <FiArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </>
        )}
      </div>

      <div
        className={`${
          rotate
            ? "rotate-0 lg:-rotate-90 lg:grid lg:grid-rows-2 justify-end w-full h-fit"
            : ""
        }`}
      >
        {category && (
          <p className="text-xs uppercase tracking-widest font-semibold opacity-75 mb-2">
            {category}
          </p>
        )}
        {typeof title === "string" ? (
          <h3 className="text-[2rem] lg:text-[3.25rem] font-semibold uppercase w-[70%] break-all leading-[3rem]">
            {title}
          </h3>
        ) : (
          title
        )}
        <div className="flex justify-end pt-8 w-full">
          <span className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-right">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
