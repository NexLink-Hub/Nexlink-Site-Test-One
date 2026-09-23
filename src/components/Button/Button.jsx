import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  fillColor = "bg-[#fbf8f5]",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-[3rem] py-2.5 px-6 uppercase transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-[#d8b493]/20 shadow-md ${className}`}
      {...props}
    >
      {/* Fluid Center-to-Edge Expanding Fill Circle */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full ${fillColor} transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[350%] group-hover:h-[350%] pointer-events-none z-0`}
      />

      {/* Button Content with smooth color transition to black on hover */}
      <span className="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-black [&_*]:transition-colors [&_*]:duration-300 [&_*]:group-hover:text-black">
        {children}
      </span>
    </button>
  );
};

export default Button;