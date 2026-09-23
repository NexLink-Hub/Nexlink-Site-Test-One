import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../assets/images/Home Trump Banner Brown.png";
import TrumpTag from "../../assets/images/Trump Tag.png";
import Button from "../../components/Button/Button";
import { FaTiktok, FaApple, FaAmazon } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { riseUpVariant, riseUpItem, fade } from "../../constants/animations";
import { usePageTransition } from "../../context/TransitionContext";

const socialBadges = [
  { id: "tiktok", Icon: FaTiktok, label: "TikTok", href: "https://tiktok.com" },
  { id: "apple", Icon: FaApple, label: "Apple", href: "https://apple.com" },
  { id: "amazon", Icon: FaAmazon, label: "Amazon", href: "https://amazon.com" },
];

const Home = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section id="home" data-scroll-section>
      <Navbar />
      <div className="bg-[#f4ebe1] rounded-bl-[2rem] lg:rounded-bl-[4rem] rounded-br-[2rem] lg:rounded-br-[4rem] relative overflow-hidden md:overflow-visible">
        {/* Mobile View Background Image (Full bleed edge-to-edge) */}
        <div className="absolute inset-0 md:hidden pointer-events-none z-0">
          <img
            src={HomeBanner}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
          />
        </div>

        <div className="min-h-[85vh] md:h-[85vh] sl:h-[60vh] max-w-[1200px] m-auto relative z-10">
          <div className="py-[2rem] flex flex-col items-center lg:flex-row lg:gap-8 lg:px-[2rem] px-[1rem]">
            <motion.div
              variants={riseUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-[60%] text-center lg:text-left mb-8 lg:mb-0"
            >
              <div className="md:flex items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={fade}
                  viewport={{ once: true }}
                  className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-[-2px] lg:tracking-[-6px] leading-[4rem] lg:leading-[5rem] font-bold text-[#1b1411]"
                >
                  Sharing
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.7, duration: 1 },
                  }}
                  viewport={{ once: true }}
                  className="lg:h-[60px] h-[50px] md:ml-4 md:block hidden object-contain"
                  src={TrumpTag}
                  alt="Vision Badge"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={fade}
                viewport={{ once: true }}
                className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-[-2px] lg:tracking-[-6px] leading-[4rem] lg:leading-[5rem] font-bold text-[#1b1411]"
              >
                Your Vision
              </motion.div>
            </motion.div>

            <div className="lg:w-[40%] text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={fade}
                viewport={{ once: true }}
                className="lg:mb-8 mb-4 text-sm lg:text-base md:w-[80%] lg:w-full m-auto font-semibold text-[#5c4033]"
              >
                We love to create experiences that enable people to connect,
                express themselves and establish meaningful relationships.
              </motion.p>
              <div className="flex flex-col items-center md:flex-row md:justify-center lg:justify-start">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={fade} viewport={{ once: true }}>
                  <Button
                    onClick={() =>
                      navigateWithTransition(
                        "/contact",
                        "Contact Us",
                        "START YOUR PROJECT"
                      )
                    }
                    className="flex items-center w-fit mb-4 md:mb-0 font-semibold bg-[#1b1411] text-[#f4ebe1]"
                  >
                    <span className="mr-4">Start Project</span>
                    <FiArrowUpRight size={18} />
                  </Button>
                </motion.div>
                <motion.div
                  variants={riseUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="md:ml-8 flex items-center"
                >
                  {socialBadges.map((badge, index) => (
                    <a
                      key={badge.id}
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${badge.label} profile`}
                      className={`inline-block ${index > 0 ? "-ml-2" : ""}`}
                    >
                      <motion.div
                        variants={riseUpItem}
                        className="bg-[#261d18] flex items-center justify-center text-[#f4ebe1] p-2 rounded-[50%] h-[50px] w-[50px] border-2 border-[#f4ebe1] transition-all duration-200 hover:scale-110 hover:bg-[#7b5137] hover:z-10 relative"
                      >
                        <badge.Icon size={20} />
                      </motion.div>
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet View Bottom Banner Card (100% Full-bleed fill) */}
          <div className="absolute bottom-[-14rem] translate-y-[25px] hidden md:block w-full pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={fade}
              viewport={{ once: true }}
              className="w-[85%] lg:w-[80%] m-auto pointer-events-auto overflow-hidden rounded-3xl shadow-2xl border border-[#d8b493]/20 bg-[#1b1411]"
            >
              <img
                src={HomeBanner}
                className="w-full h-auto object-cover block"
                alt="Nexlink Solutions - Web Development & Digital Solutions Showcase"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
