import React from "react";

const Label = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-block bg-[#261d18]/60 border border-[#d8b493]/40 rounded-[3rem] py-2 px-4 mr-4 font-medium text-[#d8b493] uppercase text-[12px] lg:text-base mb-4 lg:mb-0 transition-colors duration-200 hover:border-[#f4ebe1] hover:text-[#fbf8f5] ${className}`}
    >
      {children}
    </span>
  );
};

export default Label;
