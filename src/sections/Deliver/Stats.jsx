import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { riseUpVariant, riseUpItem } from "../../constants/animations";

const statsData = [
  {
    id: "projects",
    value: "900",
    label: "Successful Projects",
    iconColor: "text-[#d8b493]", // soft sand brown
  },
  {
    id: "clients",
    value: "600",
    label: "Super Happy Clients",
    iconColor: "text-[#b78762]", // light caramel brown
  },
  {
    id: "awards",
    value: "200",
    label: "Adv Award Winners",
    iconColor: "text-[#7b5137]", // warm brown
  },
];

const pillars = [
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "Custom Software",
  "AI Solutions",
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pillars.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.div
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center lg:flex-nowrap gap-8 md:justify-between items-center mt-[3rem] pb-[2rem] border-b border-[#3d2e25] text-[#f4ebe1]"
      >
        {statsData.map((stat) => (
          <motion.div key={stat.id} variants={riseUpItem}>
            <div className="flex items-start">
              <p className="font-lato text-[3rem] lg:text-[5rem] font-bold text-[#fbf8f5]">
                {stat.value}
              </p>
              <BiPlusMedical
                className={`mt-[12px] text-[1.2rem] lg:text-[3rem] ${stat.iconColor}`}
              />
            </div>
            <p className="lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#a89a8f]">
              {stat.label}
            </p>
          </motion.div>
        ))}

        <motion.div variants={riseUpItem} className="hidden lg:block">
          <p className="text-[1rem] text-[#a89a8f]">
            Stay connected with us & turn your ideas into functional software
            products. We make purposeful technology simple.
          </p>
        </motion.div>
      </motion.div>

      {/* Centered Animated Service Pillars Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[120px] md:min-h-[160px] lg:min-h-[190px] py-[2rem] border-b border-[#3d2e25] overflow-hidden">
        {/* Subtle ambient glow behind text */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[300px] md:w-[500px] h-[60px] md:h-[90px] bg-[#d8b493]/10 rounded-full blur-3xl" />
        </div>

        {/* Counter tag */}
        <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.25em] text-[#d8b493] font-semibold mb-3">
          Specialization {String(currentIndex + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}
        </span>

        {/* Animated Central Service Title */}
        <div className="relative flex items-center justify-center w-full px-4">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentIndex}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)", scale: 0.96 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -24, filter: "blur(6px)", scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase font-bold text-[#fbf8f5] tracking-tight text-center leading-none select-none"
            >
              {pillars[currentIndex]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Interactive indicator pills */}
        <div className="flex items-center gap-2 mt-5 z-10">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Show ${pillar}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-[#d8b493]"
                  : "w-2 bg-[#3d2e25] hover:bg-[#a89a8f]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;
