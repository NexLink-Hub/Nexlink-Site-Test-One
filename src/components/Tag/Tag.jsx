import React from "react";

const Tag = ({ imgSrc, value, className = "" }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between bg-gradient-to-r from-[#7b5137] to-[#3d2e25] border border-[#d8b493]/20 py-1 lg:py-3 px-4 rounded-[3rem] shadow-lg ${className}`}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt={`Metric icon for ${value}`}
            className="w-auto h-16 object-contain"
          />
        )}
        <span className="text-3xl lg:text-6xl font-bold ml-5 pr-2 font-lato text-[#fbf8f5]">
          {value}
        </span>
      </div>
    </div>
  );
};

export default Tag;
