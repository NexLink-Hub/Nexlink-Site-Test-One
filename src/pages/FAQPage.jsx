import React, { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import { FiChevronRight, FiArrowLeft, FiShield, FiLock, FiHelpCircle, FiSettings, FiGlobe, FiDatabase } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqSections = [
  {
    id: "general",
    icon: FiHelpCircle,
    category: "General",
    title: "How We Work",
    preview: "Engagement models, timelines & onboarding",
    items: [
      {
        q: "How does Nexlink Solutions structure client engagements?",
        a: "We work through focused agile project sprints (2 to 8 weeks) as well as dedicated ongoing engineering partnerships. Every engagement includes transparent milestones, direct technical communication, and continuous delivery.",
      },
      {
        q: "How quickly can we launch a digital product or website?",
        a: "Depending on the scope, our rapid MVP development sprints deliver functional prototypes in 2 to 4 weeks. Comprehensive web applications, custom software platforms, and mobile apps typically launch in 6 to 12 weeks with continuous testing.",
      },
    ],
  },
  {
    id: "approach",
    icon: FiGlobe,
    category: "Development Approach",
    title: "Our Engineering Philosophy",
    preview: "Purposeful technology, practical design & agile delivery",
    items: [
      {
        q: "What makes your development approach different from typical agencies?",
        a: "We build technology around a simple belief: it should be purposeful, accessible, and designed to move businesses forward. Through thoughtful design, practical engineering, and close collaboration, we avoid unnecessary over-engineering and create digital products that solve real-world problems.",
      },
    ],
  },
  {
    id: "tech",
    icon: FiSettings,
    category: "Technology",
    title: "Tech Stack & Frameworks",
    preview: "Modern web ecosystems & engineering standards",
    items: [
      {
        q: "What technologies and frameworks do you specialize in?",
        a: "Our engineering and creative studio builds on modern web ecosystems including React, Next.js, Vite, Tailwind CSS, Framer Motion, TypeScript, Node.js, and headless e-commerce architectures (Shopify Plus, BigCommerce, custom backends).",
      },
      {
        q: "Do you offer post-launch maintenance and optimization support?",
        a: "Yes. Every bespoke digital build and brand campaign includes comprehensive post-launch support, ongoing technical maintenance, continuous A/B testing, and monthly performance reviews.",
      },
    ],
  },
  {
    id: "gdpr",
    icon: FiShield,
    category: "GDPR Compliance",
    title: "GDPR — Your Data Rights",
    preview: "EU data protection regulation compliance",
    items: [
      {
        q: "What is GDPR and how does Nexlink Solutions comply?",
        a: "The General Data Protection Regulation (GDPR) is the EU's comprehensive data protection law. Nexlink Solutions processes personal data only with a valid lawful basis (consent, contractual necessity, or legitimate interest). We implement data protection by design and by default across all our services.",
      },
      {
        q: "What rights do I have under GDPR?",
        a: "Under GDPR, you have the right to: (1) Access your personal data, (2) Rectify inaccurate data, (3) Erase your data ('right to be forgotten'), (4) Restrict processing, (5) Data portability — receive your data in a structured, machine-readable format, (6) Object to processing based on legitimate interest, and (7) Not be subject to solely automated decision-making. To exercise any of these rights, contact our Data Protection Officer at nexlinksolutionsza@gmail.com.",
      },
      {
        q: "How do you handle cross-border data transfers?",
        a: "When transferring personal data outside the European Economic Area (EEA), we rely on EU-approved Standard Contractual Clauses (SCCs) and ensure adequate safeguards are in place. All third-party processors undergo rigorous data protection assessments before engagement.",
      },
      {
        q: "What is your data breach notification procedure?",
        a: "In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach. If the breach poses a high risk to individuals' rights and freedoms, affected data subjects will be notified without undue delay.",
      },
    ],
  },
  {
    id: "popia",
    icon: FiLock,
    category: "POPIA Compliance",
    title: "POPIA — South African Privacy",
    preview: "Protection of Personal Information Act compliance",
    items: [
      {
        q: "What is POPIA and how does it affect my data?",
        a: "The Protection of Personal Information Act (POPIA) is South Africa's data protection legislation. As a South Africa-based company, Nexlink Solutions is a 'responsible party' under POPIA. We process personal information only for specific, explicitly defined, and lawful purposes. We apply the conditions for lawful processing as defined in Chapter 3 of POPIA.",
      },
      {
        q: "What are my rights under POPIA?",
        a: "Under POPIA, you have the right to: (1) Be notified when your personal information is collected, (2) Request access to your personal information, (3) Request correction or deletion of your personal information, (4) Object to the processing of your personal information, (5) Submit a complaint to the Information Regulator, and (6) Initiate civil proceedings for data breaches. Contact our Information Officer at nexlinksolutionsza@gmail.com.",
      },
      {
        q: "How do you handle consent under POPIA?",
        a: "We obtain voluntary, specific, and informed consent before processing your personal information. You may withdraw consent at any time by contacting our Information Officer. Withdrawal of consent does not affect the lawfulness of processing before withdrawal.",
      },
      {
        q: "Do you transfer data outside South Africa?",
        a: "Any cross-border transfer of personal information complies with Section 72 of POPIA. We only transfer data to jurisdictions that have adequate data protection laws, or where binding corporate rules or agreements ensure protection equivalent to POPIA's standards.",
      },
    ],
  },
  {
    id: "data-handling",
    icon: FiDatabase,
    category: "Data Handling",
    title: "Cookies, Retention & Security",
    preview: "How we store, protect & manage your data",
    items: [
      {
        q: "What types of cookies does your website use?",
        a: "We use: (1) Essential cookies — required for site functionality (session management, security), (2) Analytics cookies — anonymous usage data to improve our services (Google Analytics with IP anonymisation), and (3) Marketing cookies — used only with your explicit consent for personalised advertising. You can manage cookie preferences through your browser settings or our cookie consent banner.",
      },
      {
        q: "How long do you retain personal data?",
        a: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected. Client project data is retained for the duration of the engagement plus 2 years for reference. Marketing contact data is retained until you withdraw consent. All data is securely deleted or anonymised once the retention period expires.",
      },
      {
        q: "What security measures do you have in place?",
        a: "We implement industry-standard technical and organisational measures including: TLS/SSL encryption for data in transit, encrypted storage at rest, regular security audits, strict access controls with role-based permissions, employee security awareness training, and incident response procedures compliant with both GDPR Article 32 and POPIA Section 19.",
      },
    ],
  },
];

const FAQPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <PageLayout>
      {/* Header Banner */}
      <section className="bg-[#f4ebe1] text-[#1b1411] rounded-b-[2.5rem] lg:rounded-b-[4rem] py-16 px-6 md:px-12 border-b border-[#d8b493]/30">
        <div className="max-w-[1200px] m-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1411] text-[#f4ebe1] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-md">
            <span>Knowledge Base</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] lg:w-[65%]"
            >
              Frequently Asked Questions
            </motion.h1>

            <div className="lg:w-[35%]">
              <p className="text-[#5c4033] font-medium text-base md:text-lg">
                Everything you need to know about our capabilities, privacy
                practices, data protection rights, and compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Split-Panel Layout */}
      <div className="max-w-[1200px] m-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Panel: Section Navigation */}
          <div className="lg:w-[35%] lg:sticky lg:top-8 lg:self-start">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#d8b493] mb-6">
              Browse Topics
            </h2>
            <div className="space-y-2">
              {faqSections.map((section) => {
                const isActive = selectedSection?.id === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() =>
                      setSelectedSection(isActive ? null : section)
                    }
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? "bg-[#3d2e25] border-[#d8b493] shadow-lg"
                        : "bg-[#261d18] border-[#3d2e25] hover:border-[#b78762]/50 hover:bg-[#2e231c]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-[#d8b493] text-[#1b1411]"
                              : "bg-[#3d2e25] text-[#d8b493]"
                          }`}
                        >
                          <section.icon size={18} />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#d8b493] block">
                            {section.category}
                          </span>
                          <span
                            className={`text-sm font-semibold block mt-0.5 ${
                              isActive ? "text-[#fbf8f5]" : "text-[#a89a8f]"
                            }`}
                          >
                            {section.title}
                          </span>
                        </div>
                      </div>
                      <FiChevronRight
                        size={16}
                        className={`text-[#d8b493] transition-transform duration-300 ${
                          isActive ? "rotate-90" : "group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Content Area */}
          <div className="lg:w-[65%] min-h-[400px]">
            <AnimatePresence mode="wait">
              {selectedSection ? (
                <motion.div
                  key={selectedSection.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Expanded Section Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <button
                      type="button"
                      onClick={() => setSelectedSection(null)}
                      className="w-10 h-10 rounded-xl bg-[#3d2e25] text-[#d8b493] flex items-center justify-center hover:bg-[#d8b493] hover:text-[#1b1411] transition-colors cursor-pointer"
                    >
                      <FiArrowLeft size={18} />
                    </button>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#d8b493]">
                        {selectedSection.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#fbf8f5]">
                        {selectedSection.title}
                      </h3>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  {selectedSection.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="bg-[#261d18] p-6 md:p-8 rounded-2xl border border-[#3d2e25] hover:border-[#b78762]/40 transition-colors"
                    >
                      <h4 className="text-lg font-bold text-[#fbf8f5] mb-3 uppercase tracking-tight">
                        {item.q}
                      </h4>
                      <p className="text-[#a89a8f] text-sm md:text-base leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#d8b493] mb-6">
                    Select a Topic
                  </h2>
                  {/* Bento Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {faqSections.map((section, idx) => (
                      <motion.button
                        key={section.id}
                        type="button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        onClick={() => setSelectedSection(section)}
                        className={`text-left p-6 rounded-2xl border border-[#3d2e25] hover:border-[#d8b493] bg-[#261d18] hover:bg-[#2e231c] transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl ${
                          idx === 3 || idx === 4
                            ? "sm:col-span-1"
                            : ""
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-2xl bg-[#3d2e25] text-[#d8b493] flex items-center justify-center mb-4 group-hover:bg-[#d8b493] group-hover:text-[#1b1411] transition-colors"
                        >
                          <section.icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#d8b493] block mb-1">
                          {section.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#fbf8f5] uppercase mb-2">
                          {section.title}
                        </h3>
                        <p className="text-[#a89a8f] text-sm">
                          {section.preview}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#d8b493] group-hover:translate-x-1 transition-transform">
                          <span>{section.items.length} questions</span>
                          <FiChevronRight size={14} />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
