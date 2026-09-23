import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Tag from "../components/Tag/Tag";
import Button from "../components/Button/Button";
import { FiArrowUpRight, FiGlobe, FiLayers, FiSmartphone, FiCode, FiCpu } from "react-icons/fi";
import Crown from "../assets/images/Awarded Works Crown.png";
import ClientStar from "../assets/images/Client Star.png";
import { motion } from "framer-motion";
import { usePageTransition } from "../context/TransitionContext";

const servicesList = [
  {
    icon: FiGlobe,
    title: "Website Design & Development",
    desc: "Modern, responsive websites that establish a professional digital presence. From landing pages to full-scale business websites — designed to be fast, accessible, and built to convert visitors into customers.",
    deliverables: ["Custom UI/UX Design", "Responsive Development", "SEO-Optimized Architecture", "Content Management Systems"],
  },
  {
    icon: FiLayers,
    title: "Web Application Development",
    desc: "Full-stack web applications that automate processes, manage data, and power your business operations. Built on modern frameworks with scalable architectures designed to grow with your business.",
    deliverables: ["React / Next.js Applications", "Dashboard & Admin Portals", "API Development & Integration", "Database Design & Management"],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. We build apps that are intuitive, performant, and designed to solve specific problems for your users on the go.",
    deliverables: ["Cross-Platform Development", "Native iOS & Android", "Push Notifications & Offline Support", "App Store Deployment & Optimization"],
  },
  {
    icon: FiCode,
    title: "Custom Software Development",
    desc: "Specialized platforms and systems built specifically around your operations. When off-the-shelf tools don't fit, we design and build custom solutions tailored to your exact business requirements.",
    deliverables: ["Business Process Automation", "Enterprise Resource Planning", "Custom CRM & ERP Systems", "Third-Party API Integration"],
  },
  {
    icon: FiCpu,
    title: "AI-Powered Digital Solutions",
    desc: "Intelligent solutions that leverage artificial intelligence and machine learning to automate decisions, analyse data, and create smarter digital experiences for your business and customers.",
    deliverables: ["AI Chatbots & Virtual Assistants", "Predictive Analytics & Insights", "Intelligent Automation", "Natural Language Processing"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Understand",
    desc: "We start by understanding your problem, your business, and what success looks like. Every project begins with deep listening and clear objectives.",
  },
  {
    num: "02",
    title: "Plan & Design",
    desc: "We identify the opportunity and design a solution that aligns with your objectives. Wireframes, prototypes, and architecture — planned before a single line of code.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Practical engineering, agile development cycles, and continuous feedback. We build in sprints, test early, and refine until the solution is exactly right.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "Deployment, monitoring, and ongoing support. We don't just ship — we ensure your solution works in the real world and scales as your business grows.",
  },
];

const ServicesPage = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <PageLayout>
      {/* Header / Hero */}
      <section className="bg-[#f4ebe1] text-[#1b1411] rounded-b-[2.5rem] lg:rounded-b-[4rem] py-16 px-6 md:px-12 border-b border-[#d8b493]/30">
        <div className="max-w-[1200px] m-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1411] text-[#f4ebe1] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-md">
            <span>Our Services</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] lg:w-[65%]"
            >
              Digital Solutions Built For Your Business
            </motion.h1>

            <div className="lg:w-[35%]">
              <p className="text-[#5c4033] font-medium text-base md:text-lg mb-6">
                From websites and web apps to mobile applications, custom software,
                and AI-powered solutions — we build technology tailored to your unique needs.
              </p>
              <Button
                onClick={() =>
                  navigateWithTransition("/contact", "Contact Us", "START YOUR PROJECT")
                }
                className="flex items-center gap-2 bg-[#1b1411] text-[#f4ebe1]"
              >
                <span>Start Your Project</span>
                <FiArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1200px] m-auto px-6 md:px-10 py-16">
        {/* Services Breakdown */}
        <section className="mt-8">
          <SectionHeader
            title="What We Build"
            description="Technology that is practical, intuitive, and designed with the future in mind."
            badgeIcon={Crown}
            badgeValue="5 Core"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {servicesList.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`bg-[#261d18] p-8 md:p-10 rounded-3xl border border-[#3d2e25] hover:border-[#b78762] transition-colors shadow-xl flex flex-col justify-between ${
                  idx === servicesList.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#3d2e25] flex items-center justify-center text-[#d8b493] mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#fbf8f5] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#a89a8f] text-sm md:text-base leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-4">
                    Key Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-xs md:text-sm text-[#f4ebe1]/90 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d8b493]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4-Step Execution Process */}
        <section className="mt-24">
          <SectionHeader
            title="Our Process"
            description="We approach each project by understanding the problem, identifying the opportunity, and building a solution that aligns with your objectives."
            badgeIcon={ClientStar}
            badgeValue="4 Steps"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#261d18] p-8 rounded-3xl border border-[#3d2e25] relative overflow-hidden"
              >
                <span className="text-5xl font-extrabold font-lato text-[#d8b493]/20 absolute top-4 right-4">
                  {step.num}
                </span>
                <span className="text-sm font-extrabold font-lato text-[#d8b493] block mb-2">
                  STEP {step.num}
                </span>
                <h4 className="text-xl font-bold text-[#fbf8f5] uppercase mb-3">
                  {step.title}
                </h4>
                <p className="text-[#a89a8f] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
