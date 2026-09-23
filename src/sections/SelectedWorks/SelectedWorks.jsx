import React, { useState, useRef, useEffect } from "react";
import SelectedWork from "../../components/Work/SelectedWork";
import WorksBanner from "../../assets/images/Selected Works Card Bg.png";
import Button from "../../components/Button/Button";
import {
  FiArrowUpRight,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { fade } from "../../constants/animations";
import { usePageTransition } from "../../context/TransitionContext";

const projectsData = [
  {
    id: "classic-blue",
    title: "Classic Blue",
    shortTitle: "Classic Blue",
    category: "Web Application & Cloud Platform",
    year: "2025",
    client: "Global Logistics Corp",
    headline: "Scalable Cloud-Native Enterprise Management Platform",
    metric: "10x Operational Throughput",
    metricLabel: "Efficiency Increase",
    description:
      "A comprehensive enterprise web application engineered to centralize fleet tracking, dispatching, and automated compliance auditing into a unified real-time operations dashboard.",
    challenge:
      "Legacy fragmented systems caused communication delays between dispatchers and drivers, resulting in high overhead and compliance tracking errors.",
    solution:
      "Architected a custom cloud application with real-time WebSocket telemetry, automated routing engines, and role-based permissions designed for multi-tier enterprise scale.",
    tags: ["React 18", "Node.js", "Cloud Architecture", "Tailwind CSS", "WebSockets"],
    deliverables: [
      "Real-time fleet tracking & live telemetry",
      "Automated dispatching & route optimization",
      "Role-based security & audit logging",
      "Custom analytics & reporting engine",
    ],
    accentColor: "bg-[#7b5137]",
    cardClass: "bg-[#7b5137]",
  },
  {
    id: "beefness",
    title: (
      <h3 className="text-[2rem] lg:text-[3.25rem] font-semibold uppercase w-[70%] break-all leading-[3rem] text-[#fbf8f5]">
        <span className="block">Beef</span>
        <span>ness</span>
      </h3>
    ),
    shortTitle: "Beefness Digital",
    category: "Website Design & E-Commerce",
    year: "2025",
    client: "Beefness Global",
    headline: "High-Performance Modern Web Storefront & Digital Presence",
    metric: "+240% Sales Conversion",
    metricLabel: "Growth Rate",
    description:
      "A fast, modern web platform built from the ground up to establish digital brand authority, maximize customer conversion, and provide a frictionless checkout journey.",
    challenge:
      "The client's previous website suffered from sluggish page load times, poor mobile UX, and a high checkout abandonment rate of over 68%.",
    solution:
      "Engineered an ultra-fast, responsive web experience with optimized asset delivery, intuitive product discovery, and single-click checkout workflows.",
    tags: ["Modern Web", "Performance", "E-Commerce", "UI/UX Design", "Framer Motion"],
    deliverables: [
      "Custom responsive design system",
      "Sub-second page transitions & caching",
      "Frictionless conversion funnel",
      "Mobile-first responsive architecture",
    ],
    className: "bg-[#7b5137] text-[#fbf8f5] shadow-lg",
    cardClass: "bg-[#7b5137]",
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
    shortTitle: "Bookly Platform",
    category: "Custom Software Development",
    year: "2025",
    client: "Bookly Technologies",
    headline: "Custom Workflow & Resource Scheduling Software",
    metric: "120k+ Bookings",
    metricLabel: "Processed Monthly",
    description:
      "A specialized resource and scheduling automation platform designed around client operations to eliminate manual coordination friction and sync across calendar ecosystems.",
    challenge:
      "Double bookings and manual email confirmations were consuming hundreds of staff hours every month as booking volume surged.",
    solution:
      "Built a tailored software platform with an algorithmic conflict-resolution engine, automated reminders, and client self-service portals.",
    tags: ["Custom Software", "Workflow Engine", "REST APIs", "Database Design", "Security"],
    deliverables: [
      "Automated scheduling & conflict prevention",
      "Client self-service reservation portals",
      "Calendar ecosystem synchronization",
      "Automated SMS/Email notification flows",
    ],
    className: "bg-[#d8b493] text-[#1b1411] shadow-lg",
    cardClass: "bg-[#d8b493]",
    delay: 0.5,
  },
  {
    id: "positive",
    title: (
      <h3 className="text-[2rem] lg:text-[5rem] font-semibold uppercase w-full text-[#fbf8f5]">
        Positive
      </h3>
    ),
    shortTitle: "Positive Health",
    category: "Mobile App Development",
    year: "2025",
    client: "Positive Health ZA",
    headline: "Patient Companion & Telehealth Mobile Application",
    metric: "50k+ Active Users",
    metricLabel: "Mobile Patients",
    description:
      "An intuitive, secure mobile companion app offering telehealth consultations, instant prescription requests, and secure health metric tracking with full POPIA compliance.",
    challenge:
      "Patients in regional areas struggled to access timely specialist consultations and track chronic medication refills securely on mobile devices.",
    solution:
      "Developed a cross-platform mobile application adhering to strict POPIA data privacy standards, featuring biometric login and lightweight video consultations.",
    tags: ["React Native", "iOS & Android", "POPIA Compliant", "Telehealth", "UI/UX"],
    deliverables: [
      "Secure encrypted patient record access",
      "Direct telehealth consultation booking",
      "Automated prescription refill alerts",
      "Offline sync & biometric authentication",
    ],
    className: "bg-[#b78762] text-[#fbf8f5] lg:w-[300px] h-full mt-8 shadow-lg",
    cardClass: "bg-[#b78762]",
    delay: 0.5,
  },
];

const SelectedWorks = () => {
  const [selectedId, setSelectedId] = useState(null);
  const detailRef = useRef(null);
  const { navigateWithTransition } = usePageTransition();

  const selectedProject = projectsData.find((p) => p.id === selectedId);

  const handleSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (selectedId && detailRef.current) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [selectedId]);

  // Keyboard navigation: Escape closes details
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    const currentIndex = projectsData.findIndex((p) => p.id === selectedId);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedId(projectsData[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = projectsData.findIndex((p) => p.id === selectedId);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedId(projectsData[prevIndex].id);
  };

  return (
    <section
      id="project"
      data-scroll-section
      className="text-[#f4ebe1] pb-[4rem] lg:w-[90%] max-w-[1200px] mt-16 m-auto px-6 md:px-10 xxl:pt-[3rem]"
    >
      {/* Bento Grid Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-stretch">
        {/* Left 70% Area */}
        <div className="left lg:w-[70%] items-center lg:mr-12 mt-10 lg:mt-0 flex flex-col justify-between">
          {/* Top Bento Card: Classic Blue Banner (Clickable) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.3 },
            }}
            viewport={{ once: true }}
            onClick={() => handleSelect("classic-blue")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelect("classic-blue");
              }
            }}
            className={`w-full relative rounded-2xl overflow-hidden cursor-pointer group select-none transition-all duration-300 border ${
              selectedId === "classic-blue"
                ? "ring-4 ring-[#d8b493] ring-offset-4 ring-offset-[#1b1411] border-[#d8b493]"
                : "border-[#d8b493]/20 hover:border-[#d8b493]/60 hover:shadow-2xl"
            }`}
          >
            <img
              src={WorksBanner}
              alt="Classic Blue - Enterprise Operations Platform"
              className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient & Hover Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1411]/90 via-[#1b1411]/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#d8b493] block mb-1">
                    Web Application & Cloud Platform
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold uppercase text-[#fbf8f5]">
                    Classic Blue
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b1411]/80 backdrop-blur-md text-[#f4ebe1] text-xs font-semibold uppercase tracking-wider border border-[#d8b493]/30 group-hover:bg-[#d8b493] group-hover:text-[#1b1411] transition-all">
                  <span>{selectedId === "classic-blue" ? "Active" : "Explore Project"}</span>
                  <FiArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bento Cards: Beefness & Bookly */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-8 w-full gap-6">
            <motion.div
              className="lg:w-[48%] w-full"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.5 },
              }}
            >
              <SelectedWork
                title={projectsData[1].title}
                year={projectsData[1].year}
                category="Website & E-Commerce"
                className={projectsData[1].className}
                isActive={selectedId === "beefness"}
                onClick={() => handleSelect("beefness")}
              />
            </motion.div>

            <motion.div
              className="lg:w-[48%] w-full"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.7 },
              }}
            >
              <SelectedWork
                title={projectsData[2].title}
                year={projectsData[2].year}
                category="Custom Software"
                className={projectsData[2].className}
                isActive={selectedId === "bookly"}
                onClick={() => handleSelect("bookly")}
              />
            </motion.div>
          </div>
        </div>

        {/* Right 30% Area: Section Header + Positive Vertical Bento Card */}
        <div className="right lg:w-[30%] flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={fade}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#261d18] text-[#d8b493] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#3d2e25]">
              <span>Featured Portfolio</span>
            </div>
            <h2 className="uppercase text-[1.8rem] lg:text-[2.8rem] font-bold w-full leading-[2.6rem] mb-3 text-[#f4ebe1]">
              Selected Works
            </h2>
            <p className="text-[#a89a8f] font-medium text-sm lg:text-base leading-relaxed">
              Click any project in the bento grid to inspect deep-dive case studies, technical architecture, and measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <SelectedWork
              rotate={true}
              title={projectsData[3].title}
              year={projectsData[3].year}
              category="Mobile Application"
              className={projectsData[3].className}
              isActive={selectedId === "positive"}
              onClick={() => handleSelect("positive")}
            />
          </motion.div>
        </div>
      </div>

      {/* Expandable Project Detail Section */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            ref={detailRef}
            key={selectedProject.id}
            initial={{ opacity: 0, y: 40, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden mt-12"
          >
            <div className="bg-[#261d18] rounded-3xl p-6 md:p-10 lg:p-12 border border-[#d8b493]/30 shadow-2xl relative">
              {/* Header Navigation & Close Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#3d2e25]">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1b1411] text-[#d8b493] border border-[#3d2e25]">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-[#a89a8f] font-semibold">
                    Client: {selectedProject.client} • {selectedProject.year}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Project"
                    className="p-2.5 rounded-full bg-[#1b1411] text-[#f4ebe1] hover:text-[#d8b493] hover:bg-[#3d2e25] transition-colors border border-[#3d2e25]"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Project"
                    className="p-2.5 rounded-full bg-[#1b1411] text-[#f4ebe1] hover:text-[#d8b493] hover:bg-[#3d2e25] transition-colors border border-[#3d2e25]"
                  >
                    <FiChevronRight size={18} />
                  </button>
                  <button
                    onClick={() => setSelectedId(null)}
                    aria-label="Close Details"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1b1411] text-[#a89a8f] hover:text-[#fbf8f5] hover:bg-red-950/40 border border-[#3d2e25] text-xs font-semibold uppercase tracking-wider transition-colors ml-2"
                  >
                    <FiX size={16} />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* Main Detail Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-start">
                {/* Left 7 Columns: Story, Challenge & Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#fbf8f5] mb-3">
                      {selectedProject.shortTitle}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-[#d8b493] leading-relaxed">
                      {selectedProject.headline}
                    </p>
                  </div>

                  <p className="text-[#e5e5e5] text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-[#1b1411] border border-[#3d2e25]">
                      <span className="text-xs uppercase font-bold tracking-wider text-red-400/90 block mb-1.5">
                        The Challenge
                      </span>
                      <p className="text-xs md:text-sm text-[#a89a8f] leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#1b1411] border border-[#3d2e25]">
                      <span className="text-xs uppercase font-bold tracking-wider text-[#d8b493] block mb-1.5">
                        The Solution
                      </span>
                      <p className="text-xs md:text-sm text-[#a89a8f] leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      onClick={() =>
                        navigateWithTransition(
                          "/contact",
                          "Contact Us",
                          `START YOUR ${selectedProject.shortTitle.toUpperCase()} PROJECT`
                        )
                      }
                      className="bg-[#d8b493] text-[#1b1411] font-bold hover:bg-[#f4ebe1] flex items-center gap-2 shadow-lg"
                    >
                      <span>Inquire About Similar Solution</span>
                      <FiArrowUpRight size={18} />
                    </Button>
                    <span className="text-xs text-[#a89a8f]">
                      Consultations are free & non-binding
                    </span>
                  </div>
                </div>

                {/* Right 5 Columns: Metrics, Tech Stack & Deliverables */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Highlight Metric Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1b1411] to-[#261d18] border border-[#d8b493]/30 shadow-lg">
                    <div className="flex items-center gap-2 text-[#d8b493] text-xs font-bold uppercase tracking-wider mb-2">
                      <FiTrendingUp size={16} />
                      <span>{selectedProject.metricLabel}</span>
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#fbf8f5] tracking-tight mb-1">
                      {selectedProject.metric}
                    </div>
                    <p className="text-xs text-[#a89a8f]">
                      Verified production outcome delivered for {selectedProject.client}.
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="p-6 rounded-2xl bg-[#1b1411] border border-[#3d2e25]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-3">
                      <FiLayers size={16} />
                      <span>Technology Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#261d18] text-[#f4ebe1] border border-[#3d2e25]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="p-6 rounded-2xl bg-[#1b1411] border border-[#3d2e25]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d8b493] block mb-3">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {selectedProject.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#e5e5e5]">
                          <FiCheckCircle size={16} className="text-[#d8b493] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedWorks;
