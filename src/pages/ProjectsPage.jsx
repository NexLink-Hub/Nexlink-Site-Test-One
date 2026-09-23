import React, { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Tag from "../components/Tag/Tag";
import Button from "../components/Button/Button";
import Label from "../components/Label/Label";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
import Crown from "../assets/images/Awarded Works Crown.png";
import ClientStar from "../assets/images/Client Star.png";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "../context/TransitionContext";

const categories = ["All", "Web Apps", "Websites", "Mobile Apps", "Custom Software", "AI Solutions"];

const portfolioData = [
  {
    id: "classic-blue",
    title: "Classic Blue",
    category: "Web Apps",
    year: "2025",
    client: "Global Logistics Corp",
    result: "10x Operational Throughput",
    desc: "Scalable cloud-native enterprise management application with real-time tracking, role-based workflows, and automated reporting.",
    tags: ["React", "Cloud Architecture", "Dashboard"],
    colorClass: "bg-[#7b5137]",
  },
  {
    id: "orangy-wave",
    title: "Orangy Wave",
    category: "AI Solutions",
    year: "2025",
    client: "FinTech Innovations",
    result: "85% Process Automation",
    desc: "Intelligent automation and predictive analytics platform streamlining compliance document analysis and decision support.",
    tags: ["AI Platform", "NLP", "Machine Learning"],
    colorClass: "bg-[#b78762]",
  },
  {
    id: "beefness",
    title: "Beefness Digital",
    category: "Websites",
    year: "2025",
    client: "Beefness Global",
    result: "+240% Direct Sales Conversion",
    desc: "Modern, high-performance web storefront engineered for fast load speeds, accessible UX, and frictionless customer checkout.",
    tags: ["Modern Web", "Performance", "E-Commerce"],
    colorClass: "bg-[#261d18]",
  },
  {
    id: "bookly",
    title: "Bookly Platform",
    category: "Custom Software",
    year: "2025",
    client: "Bookly Technologies",
    result: "Streamlined 120k Monthly Bookings",
    desc: "Custom scheduling and resource management system tailored specifically to client workflows, eliminating legacy friction.",
    tags: ["Custom Software", "Workflow Engine", "API Hub"],
    colorClass: "bg-[#d8b493] text-[#1b1411]",
  },
  {
    id: "zenith-app",
    title: "Zenith Mobile",
    category: "Mobile Apps",
    year: "2026",
    client: "Zenith Retail",
    result: "4.9-Star App Store Rating",
    desc: "Cross-platform iOS and Android mobile app featuring offline functionality, instant biometric auth, and push notifications.",
    tags: ["React Native", "iOS & Android", "Real-Time Sync"],
    colorClass: "bg-[#3d2e25]",
  },
  {
    id: "positive-app",
    title: "Positive Health",
    category: "Mobile Apps",
    year: "2025",
    client: "Positive Health ZA",
    result: "50k+ Active Mobile Patients",
    desc: "Intuitive, secure patient companion app built for rapid consultation booking, record retrieval, and telehealth integration.",
    tags: ["Mobile Healthcare", "HIPAA/POPIA Compliant", "UI/UX"],
    colorClass: "bg-[#8c5a3c]",
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { navigateWithTransition } = usePageTransition();

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <PageLayout>
      {/* Header Banner */}
      <section className="bg-[#f4ebe1] text-[#1b1411] rounded-b-[2.5rem] lg:rounded-b-[4rem] py-16 px-6 md:px-12 border-b border-[#d8b493]/30">
        <div className="max-w-[1200px] m-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1411] text-[#f4ebe1] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-md">
            <span>Our Work & Case Studies</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] lg:w-[65%]"
            >
              Purposeful Engineering. Functional Products.
            </motion.h1>

            <div className="lg:w-[35%]">
              <p className="text-[#5c4033] font-medium text-base md:text-lg mb-6">
                Explore our portfolio of web applications, mobile platforms, custom software, and AI solutions built to solve real-world problems.
              </p>
              <Button
                onClick={() =>
                  navigateWithTransition(
                    "/contact",
                    "Contact Us",
                    "START YOUR PROJECT"
                  )
                }
                className="flex items-center gap-2 bg-[#1b1411] text-[#f4ebe1]"
              >
                <span>Launch Your Project</span>
                <FiArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid Container */}
      <div className="max-w-[1200px] m-auto px-6 md:px-10 py-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 pb-8 border-b border-[#3d2e25]">
          <span className="text-sm font-semibold uppercase text-[#a89a8f] mr-4">
            Filter by:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? "bg-[#d8b493] text-[#1b1411] shadow-lg scale-105"
                  : "bg-[#261d18] text-[#a89a8f] border border-[#3d2e25] hover:text-[#fbf8f5] hover:border-[#b78762]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-8 md:p-10 rounded-3xl border border-[#d8b493]/20 flex flex-col justify-between shadow-2xl transition-transform duration-300 hover:scale-[1.01] ${proj.colorClass}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs md:text-sm font-bold tracking-wider uppercase opacity-80">
                      {proj.client} &bull; {proj.year}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-black/20 backdrop-blur-sm">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 tracking-tight">
                    {proj.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/25 mb-6 text-sm font-bold">
                    <FiTrendingUp size={16} />
                    <span>{proj.result}</span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed opacity-90 mb-8">
                    {proj.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
