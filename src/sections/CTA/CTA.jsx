import React from "react";
import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CtaBanner from "../../assets/images/Start Project Bg Brown.png";
import { motion } from "framer-motion";
import { usePageTransition } from "../../context/TransitionContext";

const CTA = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section
      id="contact"
      data-scroll-section
      className="text-[#fbf8f5] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 mt-[3rem]"
    >
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#d8b493]/20 shadow-2xl min-h-[16rem] md:min-h-[22rem] lg:min-h-[26rem] flex items-center">
        {/* Full-Bleed Card Background Image */}
        <motion.img
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          viewport={{ once: true }}
          src={CtaBanner}
          alt="Start a project with Nexlink Solutions background in brown shades"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle gradient overlay to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1411]/85 via-[#1b1411]/50 to-transparent z-[1]" />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-12 lg:p-16 max-w-2xl">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl lg:text-[4rem] mb-[1.5rem] md:mb-[2.5rem] font-bold uppercase leading-tight text-[#fbf8f5] drop-shadow-md"
          >
            Ready to start a project?
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() =>
                navigateWithTransition("/contact", "Contact Us", "START YOUR PROJECT")
              }
              className="flex items-center justify-center text-[#1b1411] bg-[#f4ebe1] font-semibold w-max md:py-2.5 md:px-5 hover:bg-[#fbf8f5] transition-colors shadow-xl"
            >
              <span className="mr-2 lg:text-2xl font-semibold text-[80%] md:text-base">
                Start Now
              </span>
              <FiArrowUpRight size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
