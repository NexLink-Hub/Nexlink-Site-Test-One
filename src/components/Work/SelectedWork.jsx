import React from "react";

const SelectedWork = ({ title, year, className = "", rotate = false }) => {
  return (
    <div className={`text-[#1d1d1d] p-8 rounded-[2rem] w-[100%] transition-transform duration-300 hover:scale-[1.01] ${className}`}>
      <div
        className={`${
          rotate
            ? "rotate-0 lg:-rotate-90 lg:grid lg:grid-rows-2 justify-end w-full h-fit"
            : ""
        }`}
      >
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
