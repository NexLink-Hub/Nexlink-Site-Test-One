import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Tag from "../components/Tag/Tag";
import Button from "../components/Button/Button";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Crown from "../assets/images/Awarded Works Crown.png";
import TeamMember1 from "../assets/images/Team Member 1.png";
import TeamMember2 from "../assets/images/Team Member 2.png";
import DeliverTrumpCircle from "../assets/images/Deliver Trump Circle.png";
import { motion } from "framer-motion";
import { riseUpVariant, riseUpItem, fade } from "../constants/animations";
import { usePageTransition } from "../context/TransitionContext";

const milestones = [
  {
    year: "Jul 2025",
    title: "Founded",
    description:
      "Nexlink Solutions was founded in Bedworth Park, South Africa with a mission to help businesses turn ideas into meaningful digital experiences and functional software products.",
  },
  {
    year: "2025",
    title: "First Clients",
    description:
      "Launched our first web development and custom software projects, helping small businesses establish professional digital presences and streamline their operations.",
  },
  {
    year: "2026",
    title: "Expanding Services",
    description:
      "Expanded into mobile app development, AI-powered solutions, and custom software platforms — building technology that is practical, intuitive, and future-ready.",
  },
  {
    year: "Beyond",
    title: "Building Forward",
    description:
      "Continuously experimenting, learning, and creating new ways to solve real-world challenges through our own technology products and client partnerships.",
  },
];

const values = [
  {
    title: "Purposeful Technology",
    desc: "Technology should do more than simply exist — it should solve problems, simplify processes, connect people, and create opportunities for growth.",
  },
  {
    title: "Practical Engineering",
    desc: "We build solutions that are practical, intuitive, and designed with the future in mind. No overengineering, no unnecessary complexity — just what works.",
  },
  {
    title: "Collaborative Approach",
    desc: "We approach each project by understanding the problem, identifying the opportunity, and building a solution that aligns precisely with the client's objectives.",
  },
];

const AboutPage = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <PageLayout>
      {/* Page Header / Hero */}
      <section className="bg-[#f4ebe1] text-[#1b1411] rounded-b-[2.5rem] lg:rounded-b-[4rem] py-16 px-6 md:px-12 border-b border-[#d8b493]/30">
        <div className="max-w-[1200px] m-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1411] text-[#f4ebe1] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-md">
            <span>About Nexlink Solutions</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] lg:w-[65%]"
            >
              Technology That Moves Businesses Forward
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[35%]"
            >
              <p className="text-[#5c4033] font-medium text-base md:text-lg mb-6">
                Nexlink Solutions is a technology and digital solutions company
                dedicated to helping businesses, entrepreneurs, and organizations
                turn ideas into meaningful digital experiences and functional
                software products.
              </p>
              <Button
                onClick={() =>
                  navigateWithTransition("/contact", "Contact Us", "LET'S TALK")
                }
                className="flex items-center gap-2 bg-[#1b1411] text-[#f4ebe1]"
              >
                <span>Partner With Us</span>
                <FiArrowUpRight size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1200px] m-auto px-6 md:px-10 py-16">
        {/* Company Description */}
        <section className="mt-8">
          <div className="bg-[#261d18] p-8 md:p-12 rounded-3xl border border-[#3d2e25] shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#fbf8f5] mb-6">
              What We Do
            </h2>
            <div className="space-y-4 text-[#a89a8f] text-sm md:text-base leading-relaxed">
              <p>
                We specialize in designing and developing modern websites, web
                applications, mobile applications, custom software, and AI-powered
                solutions tailored to the unique needs of our clients. From helping
                a small business establish a professional digital presence to
                developing specialized platforms and systems that support complex
                operations, our goal is to create technology that is practical,
                intuitive, and built with the future in mind.
              </p>
              <p>
                At Nexlink Solutions, we work with businesses at different stages of
                their journey. Some may be looking to launch their first website or
                digital product, while others may need to improve an existing system,
                automate processes, or develop a solution designed specifically around
                their operations. We approach each project by understanding the
                problem, identifying the opportunity, and building a solution that
                aligns with the client's objectives.
              </p>
              <p>
                Our services include website design and development, web application
                development, mobile app development, custom software development,
                and AI-driven digital solutions. We also explore and develop our own
                technology products, allowing us to continuously experiment, learn,
                and create new ways to solve real-world challenges.
              </p>
              <p className="text-[#fbf8f5] font-semibold text-base md:text-lg mt-6 border-l-4 border-[#d8b493] pl-4">
                We are building Nexlink Solutions around a simple belief: technology
                should be purposeful, accessible, and designed to move businesses
                forward.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy & Values */}
        <section className="mt-24">
          <SectionHeader
            title="Our Philosophy"
            description="Through thoughtful design, practical engineering, and collaboration, we help our clients build stronger digital foundations and turn their ideas into products that matter."
            badgeIcon={Crown}
            badgeValue="100%"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="bg-[#261d18] p-8 rounded-3xl border border-[#3d2e25] hover:border-[#b78762] transition-colors shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#3d2e25] flex items-center justify-center text-[#d8b493] mb-6">
                  <FiCheckCircle size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-[#fbf8f5] mb-3">
                  {val.title}
                </h3>
                <p className="text-[#a89a8f] text-sm md:text-base leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Milestones */}
        <section className="mt-24">
          <SectionHeader
            title="Our Journey"
            description="From founding in Bedworth Park to building digital solutions that help businesses across South Africa and beyond."
            badgeIcon={DeliverTrumpCircle}
            badgeValue="2025"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {milestones.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[#261d18] p-6 rounded-3xl border border-[#3d2e25] flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl md:text-4xl font-extrabold font-lato text-[#d8b493] block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-[#fbf8f5] uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#a89a8f] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership Team Showcase */}
        <section className="mt-24">
          <SectionHeader
            title="Leadership"
            description="Driven by a passion for technology and a commitment to building digital solutions that matter."
            badgeIcon={Crown}
            badgeValue="Team"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#261d18] p-8 rounded-3xl border border-[#3d2e25] flex flex-col sm:flex-row items-center gap-6"
            >
              <img
                src={TeamMember1}
                alt="John Travolta"
                className="w-32 h-32 rounded-2xl object-cover border border-[#d8b493]/30"
              />
              <div>
                <h3 className="text-2xl font-bold uppercase text-[#fbf8f5]">
                  John Travolta
                </h3>
                <p className="text-[#d8b493] text-sm font-semibold mb-3">
                  Chief Executive Officer & Co-Founder
                </p>
                <p className="text-[#a89a8f] text-sm leading-relaxed">
                  Passionate about building technology that is purposeful, accessible, and designed to move businesses forward.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#261d18] p-8 rounded-3xl border border-[#3d2e25] flex flex-col sm:flex-row items-center gap-6"
            >
              <img
                src={TeamMember2}
                alt="Frank Staven"
                className="w-32 h-32 rounded-2xl object-cover border border-[#d8b493]/30"
              />
              <div>
                <h3 className="text-2xl font-bold uppercase text-[#fbf8f5]">
                  Frank Staven
                </h3>
                <p className="text-[#d8b493] text-sm font-semibold mb-3">
                  Technical Director & Co-Founder
                </p>
                <p className="text-[#a89a8f] text-sm leading-relaxed">
                  Specializing in modern web architectures, mobile development, and AI-powered solutions that solve real-world challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
