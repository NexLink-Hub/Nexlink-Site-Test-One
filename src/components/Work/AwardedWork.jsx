import React from "react";
import Label from "../Label/Label";
import { motion } from "framer-motion";

const AwardedWork = ({ labels = [], caption, title, icon, className = "" }) => {
  return (
    <div className="mt-5 lg:mt-10">
      {/* The head */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex flex-wrap justify-center md:justify-start mb-[1.5rem]">
          {/* Map through the Labels */}
          {labels.map((label, index) => {
            const delay = typeof label.delay === "number" ? label.delay : index * 0.15;
            const name = typeof label === "string" ? label : label.name;
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay },
                }}
                viewport={{ once: true }}
                key={name || index}
                className="mb-6 sm:mb-0"
              >
                <Label>
                  <span className="text-[90%] font-lato font-semibold">
                    {name}
                  </span>
                </Label>
              </motion.div>
            );
          })}
        </div>
        {caption && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            }}
            viewport={{ once: true }}
            className="text-lg lg:text-2xl hidden lg:flex uppercase text-[#929294] font-semibold"
          >
            &copy; {caption}
          </motion.div>
        )}
      </div>

      {/* The body */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.5 },
        }}
        viewport={{ once: true }}
        className={`${className} min-h-[12rem] lg:min-h-[16rem] w-full bg-no-repeat bg-cover bg-right mt-2 lg:mt-6 rounded-[1.5rem] md:rounded-[2.5rem] px-5 py-10 lg:p-10 text-white`}
      >
        <div className="text-3xl text-center md:text-left lg:text-7xl uppercase font-bold w-[100%] lg:w-[40%]">
          <h3 className="relative inline-block">
            {title}
            {icon && (
              <span className="inline-block align-middle ml-4">
                <img
                  src={icon}
                  alt={title ? `${title} award icon` : "Award icon"}
                  className="w-auto h-8 lg:h-16 hidden md:inline-block object-contain"
                />
              </span>
            )}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default AwardedWork;
