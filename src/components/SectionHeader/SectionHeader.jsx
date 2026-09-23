import React from "react";
import { motion } from "framer-motion";
import Tag from "../Tag/Tag";
import { riseUpVariant } from "../../constants/animations";

/**
 * Reusable Section Header component with brown/pastel color harmony.
 */
const SectionHeader = ({
  title,
  description,
  badgeIcon,
  badgeValue,
  className = "",
  descriptionWidth = "lg:w-[30%]",
}) => {
  return (
    <motion.div
      variants={riseUpVariant}
      initial="hidden"
      whileInView="visible"
      className={`flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-10 mt-[4rem] ${className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[30%] leading-[3rem] text-[#f4ebe1]"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.3 },
        }}
        className={`text-[#a89a8f] font-medium lg:text-base text-[80%] text-left my-6 md:my-0 ${descriptionWidth}`}
      >
        {description}
      </motion.p>

      {badgeIcon && badgeValue && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.6 },
          }}
        >
          <Tag imgSrc={badgeIcon} value={badgeValue} className="hidden lg:flex" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
