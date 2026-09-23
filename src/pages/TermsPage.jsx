import React, { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import { FiChevronRight, FiArrowLeft, FiShield, FiLock, FiFileText, FiEye, FiAlertTriangle, FiGlobe, FiBook } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const termsSections = [
  {
    id: "engagement",
    icon: FiFileText,
    category: "Engagement",
    title: "Scope of Work",
    preview: "How project scopes and deliverables are defined",
    content: [
      {
        heading: "Engagement & Scope of Work",
        body: "All website design and development, web application development, mobile app development, custom software engineering, and AI-powered digital solutions delivered by Nexlink Solutions are executed according to individualized Statements of Work (SOW) executed between Nexlink Solutions and the Client.",
      },
      {
        heading: "Amendments",
        body: "Any modifications or expansions of agreed project deliverables must be confirmed via written amendment prior to implementation. Verbal or implied changes will not be considered binding.",
      },
    ],
  },
  {
    id: "ip",
    icon: FiBook,
    category: "Intellectual Property",
    title: "Ownership & IP Rights",
    preview: "Who owns what — creative assets, code & frameworks",
    content: [
      {
        heading: "Client Ownership",
        body: "Upon receipt of full payment for completed milestones or retainer periods, the Client owns 100% of final custom creative assets, designs, codebases, and written copy produced specifically for their brand.",
      },
      {
        heading: "Agency Retained Rights",
        body: "Nexlink Solutions retains ownership of proprietary agency frameworks, pre-existing code libraries, and internal optimization methodologies. These may be reused across engagements without restriction.",
      },
    ],
  },
  {
    id: "confidentiality",
    icon: FiEye,
    category: "Confidentiality",
    title: "Data Security & NDA",
    preview: "Non-disclosure, encryption & security safeguards",
    content: [
      {
        heading: "Confidentiality & Data Security",
        body: "We adhere to strict non-disclosure protocols regarding proprietary client metrics, financial data, and market strategy. Nexlink Solutions implements rigorous industry-standard security safeguards to protect all client information, including TLS/SSL encryption, role-based access controls, and regular security audits.",
      },
    ],
  },
  {
    id: "gdpr",
    icon: FiShield,
    category: "GDPR Compliance",
    title: "EU Data Protection",
    preview: "Rights, lawful basis, transfers & breach notification",
    content: [
      {
        heading: "Lawful Basis for Processing",
        body: "Nexlink Solutions processes personal data of EU data subjects under one or more of the following lawful bases as defined in GDPR Article 6: (a) Consent — the data subject has given clear, affirmative consent for a specific purpose; (b) Contractual necessity — processing is necessary for the performance of a contract; (c) Legitimate interest — processing is necessary for our legitimate business interests, provided these do not override the data subject's rights.",
      },
      {
        heading: "Data Subject Rights",
        body: "Under the General Data Protection Regulation, individuals have the following rights: Right of access (Article 15) — obtain confirmation and a copy of personal data being processed. Right to rectification (Article 16) — correct inaccurate personal data. Right to erasure (Article 17) — request deletion of personal data where no compelling reason for continued processing exists. Right to restriction (Article 18) — restrict processing in certain circumstances. Right to data portability (Article 20) — receive personal data in a structured, commonly used, machine-readable format. Right to object (Article 21) — object to processing based on legitimate interests or direct marketing. Right not to be subject to automated decision-making (Article 22).",
      },
      {
        heading: "International Data Transfers",
        body: "When transferring personal data outside the European Economic Area (EEA), Nexlink Solutions relies on EU-approved Standard Contractual Clauses (SCCs) as per Article 46(2)(c) GDPR. We conduct Transfer Impact Assessments (TIAs) where required. All sub-processors are contractually bound to equivalent data protection standards.",
      },
      {
        heading: "Data Retention",
        body: "Personal data is retained only for as long as necessary to fulfil the specified processing purposes. Client engagement data: retained for the duration of the contract plus 24 months. Marketing consent data: retained until withdrawal. Website analytics data: anonymised after 14 months. Upon expiry, data is securely deleted or irreversibly anonymised.",
      },
      {
        heading: "Breach Notification",
        body: "In compliance with GDPR Articles 33 and 34, we will: Notify the relevant supervisory authority within 72 hours of becoming aware of a personal data breach. Notify affected data subjects without undue delay if the breach is likely to result in a high risk to their rights and freedoms. Document all breaches regardless of their severity, including facts, effects, and remedial actions taken.",
      },
      {
        heading: "Data Protection Officer",
        body: "For all GDPR-related inquiries, requests, or complaints, contact our Data Protection Officer at: nexlinksolutionsza@gmail.com. We respond to all data subject requests within 30 days.",
      },
    ],
  },
  {
    id: "popia",
    icon: FiLock,
    category: "POPIA Compliance",
    title: "South African Privacy",
    preview: "Conditions for lawful processing & your POPIA rights",
    content: [
      {
        heading: "Responsible Party",
        body: "Nexlink Solutions (Pty) Ltd, registered in Bedworth Park, Germiston, Gauteng, South Africa, is the 'responsible party' as defined in Section 1 of the Protection of Personal Information Act 4 of 2013 (POPIA).",
      },
      {
        heading: "Conditions for Lawful Processing",
        body: "We process personal information in compliance with the eight conditions for lawful processing as defined in Chapter 3 of POPIA: (1) Accountability — we ensure compliance and can demonstrate it. (2) Processing limitation — we process only with consent or where necessary. (3) Purpose specification — we collect for specific, explicitly defined purposes. (4) Further processing limitation — we do not process beyond the original purpose. (5) Information quality — we take steps to ensure data is accurate and up to date. (6) Openness — we notify data subjects when collecting their information. (7) Security safeguards — we implement appropriate measures to protect personal information. (8) Data subject participation — we facilitate data subject access and correction requests.",
      },
      {
        heading: "Data Subject Rights Under POPIA",
        body: "Under POPIA Section 23, you have the right to: (a) Request confirmation of whether we hold your personal information. (b) Request access to your personal information. (c) Request correction or deletion of your personal information. (d) Object to the processing of your personal information. (e) Object to the processing of your personal information for direct marketing by unsolicited electronic communications. (f) Not be subject to a decision based solely on automated processing. (g) Submit a complaint to the Information Regulator. (h) Institute civil proceedings for a breach of POPIA.",
      },
      {
        heading: "Cross-Border Transfers",
        body: "In compliance with POPIA Section 72, personal information may only be transferred outside of South Africa to: (a) A recipient subject to a law or binding agreement providing adequate protection. (b) A recipient where the data subject has consented to the transfer. (c) A recipient where the transfer is necessary for the performance of a contract. Nexlink Solutions ensures all cross-border transfers meet these requirements through binding data processing agreements.",
      },
      {
        heading: "Information Officer",
        body: "Our designated Information Officer, as required by POPIA Section 55, can be contacted at: nexlinksolutionsza@gmail.com. The Information Officer is registered with the South African Information Regulator and is responsible for ensuring POPIA compliance across all operations.",
      },
    ],
  },
  {
    id: "cookies",
    icon: FiGlobe,
    category: "Cookie Policy",
    title: "Cookies & Tracking",
    preview: "Types of cookies, consent management & opt-out",
    content: [
      {
        heading: "Types of Cookies Used",
        body: "Essential cookies: Required for core site functionality including session management, security tokens, and load balancing. These cannot be disabled. Analytics cookies: Anonymous usage data collected via privacy-respecting analytics (with IP anonymisation) to understand traffic patterns and improve our services. Marketing cookies: Used only with your explicit, informed consent for personalised advertising and retargeting. Preference cookies: Store your language, region, and accessibility settings.",
      },
      {
        heading: "Consent Management",
        body: "On your first visit, a cookie consent banner will request your explicit opt-in for non-essential cookies, in compliance with both GDPR Article 7 and POPIA. Your preferences are stored and can be modified at any time through our cookie settings panel. We never use pre-ticked checkboxes or implied consent mechanisms.",
      },
      {
        heading: "Opt-Out Instructions",
        body: "You can opt out of non-essential cookies at any time by: (1) Clicking 'Manage Cookies' in the site footer. (2) Adjusting your browser's cookie settings to block third-party cookies. (3) Using browser extensions such as uBlock Origin or Privacy Badger. Opting out of analytics or marketing cookies will not affect the functionality of our website.",
      },
    ],
  },
  {
    id: "liability",
    icon: FiAlertTriangle,
    category: "Liability",
    title: "Limitation & Disputes",
    preview: "Liability caps, governing law & dispute resolution",
    content: [
      {
        heading: "Limitation of Liability",
        body: "To the maximum extent permitted by applicable law, Nexlink Solutions' total aggregate liability arising from or related to services provided shall not exceed the total fees paid by the Client during the 12-month period preceding the event giving rise to the claim. Nexlink Solutions shall not be liable for any indirect, incidental, consequential, special, or punitive damages including loss of profits, data, business opportunities, or goodwill.",
      },
      {
        heading: "Dispute Resolution & Governing Law",
        body: "These terms shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any dispute arising from these terms shall first be submitted to good-faith mediation. If mediation is unsuccessful within 30 days, the dispute shall be resolved through binding arbitration conducted under the Arbitration Act 42 of 1965 (South Africa). The seat of arbitration shall be Johannesburg, Gauteng. Each party bears its own costs unless the arbitrator determines otherwise.",
      },
    ],
  },
];

const TermsPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <PageLayout>
      {/* Header Banner */}
      <section className="bg-[#f4ebe1] text-[#1b1411] rounded-b-[2.5rem] lg:rounded-b-[4rem] py-16 px-6 md:px-12 border-b border-[#d8b493]/30">
        <div className="max-w-[1200px] m-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1411] text-[#f4ebe1] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-md">
            <span>Legal & Governance</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] lg:w-[65%]"
            >
              Terms & Agreements
            </motion.h1>

            <div className="lg:w-[35%]">
              <p className="text-[#5c4033] font-medium text-sm md:text-base">
                Last Updated: September 2026 &bull; Nexlink Solutions (Pty) Ltd.
              </p>
              <p className="text-[#5c4033]/70 text-xs mt-2">
                Compliant with GDPR (EU 2016/679) and POPIA (Act 4 of 2013)
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
              Sections
            </h2>
            <div className="space-y-2">
              {termsSections.map((section) => {
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

                  {/* Content Blocks */}
                  {selectedSection.content.map((block, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="bg-[#261d18] p-6 md:p-8 rounded-2xl border border-[#3d2e25]"
                    >
                      <h4 className="text-lg font-bold text-[#fbf8f5] mb-3 uppercase tracking-tight">
                        {block.heading}
                      </h4>
                      <p className="text-[#a89a8f] text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {block.body}
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
                    Select a Section
                  </h2>
                  {/* Bento Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {termsSections.map((section, idx) => (
                      <motion.button
                        key={section.id}
                        type="button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        onClick={() => setSelectedSection(section)}
                        className="text-left p-6 rounded-2xl border border-[#3d2e25] hover:border-[#d8b493] bg-[#261d18] hover:bg-[#2e231c] transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#3d2e25] text-[#d8b493] flex items-center justify-center mb-4 group-hover:bg-[#d8b493] group-hover:text-[#1b1411] transition-colors">
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
                          <span>{section.content.length} clauses</span>
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

export default TermsPage;
