import React from "react";
import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import TeamMember1 from "../../assets/images/Team Member 1.png";
import TeamMember2 from "../../assets/images/Team Member 2.png";
import { motion } from "framer-motion";
import {
  riseUpVariant2,
  riseUpVariant,
  tagVariant,
  riseUpItem,
} from "../../constants/animations";

const teamMembers = [
  {
    id: "john",
    name: "John Travolta",
    role: "CEO Nexlink Solutions",
    image: TeamMember1,
    alt: "John Travolta, CEO Nexlink Solutions",
  },
  {
    id: "frank",
    name: "Frank Staven",
    role: "Art Director Nexlink Solutions",
    image: TeamMember2,
    alt: "Frank Staven, Art Director Nexlink Solutions",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="flex flex-col-reverse lg:flex-row lg:justify-between align-top text-[#f4ebe1] pb-[2rem] lg:w-[90%] max-w-[1200px] mt-8 m-auto px-6 md:px-10 xxl:pt-[3rem]"
      data-scroll-section
    >
      <div className="flex md:justify-between w-full md:w-[50%] lg:w-[46%]">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            variants={riseUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col items-center ${index === 0 ? "mr-8 md:mr-0" : ""}`}
          >
            <motion.img
              variants={tagVariant}
              src={member.image}
              alt={member.alt}
              className="max-w-[18rem] lg:max-w-[18rem] h-auto mb-3 lg:mb-6 w-[6rem] lg:w-[10rem] object-contain rounded-2xl border border-[#d8b493]/20"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.6 },
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-[#fbf8f5] md:text-xl lg:text-2xl font-semibold">
                {member.name}
              </p>
              <span className="text-[#d8b493] text-[80%] lg:text-[100%] font-medium">
                {member.role}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={riseUpVariant2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:items-start lg:text-left w-full mb-8 lg:mb-0 lg:w-[46%]"
      >
        <motion.h2
          variants={riseUpItem}
          className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold leading-[3rem] text-[#f4ebe1] mb-4"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          variants={riseUpItem}
          className="text-[#a89a8f] font-medium lg:text-base text-[80%]"
        >
          Our team consists of more than 80 experienced and passionate
          professionals at the cutting edge of all things digital marketing. We
          always give our best for you.
        </motion.p>
        <motion.div variants={riseUpItem}>
          <Button className="flex items-center w-fit mt-8 md:mb-0 text-[#1b1411] bg-[#f4ebe1] hover:bg-[#fbf8f5] font-semibold transition-colors">
            <span className="mr-4">All Nexlink Team</span>
            <FiArrowUpRight size={18} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;
