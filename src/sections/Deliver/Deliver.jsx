import React from "react";
import Stats from "./Stats";
import Tag1 from "../../assets/images/Deliver Wave Tag.png";
import Tag2 from "../../assets/images/Deliver Trump Circle.png";
import { motion } from "framer-motion";
import { riseUpVariant, riseUpItem, tagVariant } from "../../constants/animations";

const deliveryPoints = [
  "Custom software and digital solutions tailored to the unique operational and growth needs of your business.",
  "Clear visibility into progress and milestones at every stage — we keep you consistently, transparently informed.",
  "Practical, intuitive engineering built with the future in mind, from early-stage MVP to robust enterprise scale.",
];

const Deliver = () => {
  return (
    <section
      id="about"
      data-scroll-section
      className="h-full text-[#f4ebe1] pt-[5rem] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 md:pt-[15rem] xxl:pt-[20rem]"
    >
      <Stats />
      <div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between items-center mb-8 mt-[4rem]"
        >
          <motion.h2
            variants={riseUpItem}
            className="uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem] text-[#f4ebe1]"
          >
            What we deliver
          </motion.h2>
          <motion.img
            variants={riseUpItem}
            className="h-[80px] hidden lg:block object-contain"
            src={Tag1}
            alt="Deliver Wave Badge"
          />
          <motion.img
            variants={tagVariant}
            className="hidden md:block md:h-[50px] lg:h-[80px] object-contain"
            src={Tag2}
            alt="Deliver Circular Badge"
          />
        </motion.div>

        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap md:flex-nowrap gap-8"
        >
          {deliveryPoints.map((point, index) => (
            <motion.p
              key={index}
              variants={riseUpItem}
              className="text-[#a89a8f] font-medium lg:text-base text-[80%]"
            >
              {point}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Deliver;
