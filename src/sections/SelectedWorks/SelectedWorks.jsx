import React from "react";
import SelectedWork from "../../components/Work/SelectedWork";
import WorksBanner from "../../assets/images/Selected Works Card Bg.png";
import { motion } from "framer-motion";
import { fade } from "../../constants/animations";

const works = [
  {
    id: "beefness",
    title: (
      <h3 className="text-[2rem] lg:text-[3.25rem] font-semibold uppercase w-[70%] break-all leading-[3rem] text-[#fbf8f5]">
        <span className="block">Beef</span>
        <span>ness</span>
      </h3>
    ),
    year: "2022",
    className: "bg-[#7b5137] text-[#fbf8f5] shadow-lg",
    delay: 0.7,
  },
  {
    id: "bookly",
    title: (
      <h3 className="text-[2rem] lg:text-[3.25rem] font-semibold uppercase w-[70%] break-all leading-[3rem] text-[#1b1411]">
        <span className="block">Boo</span>
        <span>kly</span>
      </h3>
    ),
    year: "2022",
    className: "bg-[#d8b493] text-[#1b1411] shadow-lg",
    delay: 0.5,
  },
];

const SelectedWorks = () => {
  return (
    <section
      id="project"
      data-scroll-section
      className="flex flex-col-reverse lg:flex-row text-[#f4ebe1] pb-[2rem] lg:w-[90%] max-w-[1200px] mt-16 m-auto px-6 md:px-10 xxl:pt-[3rem]"
    >
      <div className="left lg:w-[70%] items-center lg:mr-12 mt-10 lg:mt-0">
        <motion.img
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          src={WorksBanner}
          alt="Selected Works Preview Showcase"
          className="hidden lg:flex rounded-2xl border border-[#d8b493]/20"
        />
        <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-10">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              className={`lg:w-[48%] w-full ${index === 0 ? "mb-10 lg:mb-0" : ""}`}
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: work.delay,
                },
              }}
            >
              <SelectedWork
                title={work.title}
                year={work.year}
                className={work.className}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="right lg:w-[30%] flex flex-col lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={fade}
          viewport={{ once: true }}
        >
          <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold w-full leading-[3rem] mb-4 text-[#f4ebe1]">
            Selected Works
          </h2>
          <p className="text-[#a89a8f] font-medium text-[80%] lg:text-base">
            A closer look at how we solve complex problems, build robust software, and deliver tangible results for our partners.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="h-full"
        >
          <SelectedWork
            rotate={true}
            title={
              <h3 className="text-[2rem] lg:text-[5rem] font-semibold uppercase w-full text-[#fbf8f5]">
                Positive
              </h3>
            }
            year="2021"
            className="bg-[#b78762] text-[#fbf8f5] lg:w-[300px] h-full mt-8 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorks;
