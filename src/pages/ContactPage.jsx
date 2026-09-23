import React, { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Tag from "../components/Tag/Tag";
import Button from "../components/Button/Button";
import { FiMail, FiMapPin, FiSend, FiCheck, FiPhone } from "react-icons/fi";
import Crown from "../assets/images/Awarded Works Crown.png";
import { motion } from "framer-motion";
import { sanitizeText, sanitizeEmail } from "../utils/sanitize";
import { useLocaleCurrency } from "../utils/useLocaleCurrency";

const serviceOptions = [
  "Website Design & Development",
  "Web Application Development",
  "Mobile App Development",
  "Custom Software Development",
  "AI-Powered Solutions",
];

const ContactPage = () => {
  const { budgetOptions } = useLocaleCurrency();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: ["Website Design & Development"],
    message: "",
  });

  // Set default budget once options are available
  React.useEffect(() => {
    if (budgetOptions.length > 1 && !formData.budget) {
      setFormData((prev) => ({ ...prev, budget: budgetOptions[1] }));
    }
  }, [budgetOptions]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Defensive input sanitization & validation
    const cleanedName = sanitizeText(formData.name);
    const cleanedCompany = sanitizeText(formData.company);
    const cleanedMessage = sanitizeText(formData.message);
    const cleanedEmail = formData.email.trim();

    if (!cleanedName) {
      setError("Please provide your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!cleanedMessage) {
      setError("Please share a brief summary of your project requirements.");
      return;
    }

    // Process submission safely
    console.log("Sanitized submission:", {
      name: cleanedName,
      email: cleanedEmail,
      company: cleanedCompany,
      budget: formData.budget,
      services: formData.services,
      message: cleanedMessage,
    });

    setSubmitted(true);
  };

  return (
    <PageLayout showCTA={false}>
      {/* Header Banner */}
      <section className="bg-[#f4ebe1] text-[#1b1411] rounded-b-[2.5rem] lg:rounded-b-[4rem] py-16 px-6 md:px-12 border-b border-[#d8b493]/30">
        <div className="max-w-[1200px] m-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1411] text-[#f4ebe1] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-md">
            <span>Get in Touch</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] lg:w-[65%]"
            >
              Let's Build Something Exceptional Together
            </motion.h1>

            <div className="lg:w-[35%]">
              <p className="text-[#5c4033] font-medium text-base md:text-lg mb-4">
                Have a project in mind, need a forensic performance audit, or looking
                for a long-term growth partner? Our strategists respond within 24 hours.
              </p>
              <motion.a
                href="mailto:nexlinksolutionsza@gmail.com?subject=Free%2015-Minute%20Strategy%20Call&body=Hi%20Nexlink%20Solutions%2C%0A%0AI'd%20like%20to%20schedule%20a%20free%2015-minute%20strategy%20call.%0A%0AName%3A%20%0ACompany%3A%20%0ABrief%20description%3A%20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1b1411] text-[#f4ebe1] font-bold text-sm md:text-base uppercase tracking-wide shadow-lg hover:bg-[#3d2e25] hover:shadow-xl transition-all duration-300 group"
              >
                <FiPhone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Get in Touch for a Free 15-Minute Call</span>
              </motion.a>
              <p className="mt-3 text-xs text-[#5c4033]/70 font-medium">
                <FiMail className="inline mr-1" size={12} />
                nexlinksolutionsza@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <div className="max-w-[1200px] m-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-8 bg-[#261d18] p-8 md:p-12 rounded-3xl border border-[#3d2e25] shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 rounded-full bg-[#7b5137] text-[#fbf8f5] flex items-center justify-center m-auto mb-6 shadow-xl">
                  <FiCheck size={36} />
                </div>
                <h3 className="text-3xl font-bold uppercase text-[#fbf8f5] mb-3">
                  Proposal Request Received!
                </h3>
                <p className="text-[#a89a8f] max-w-md m-auto text-base mb-8">
                  Thank you, <strong className="text-[#f4ebe1]">{formData.name}</strong>. Our senior strategy director is reviewing your brief and will connect within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#d8b493] text-[#1b1411] hover:bg-[#f4ebe1] font-semibold"
                >
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold uppercase text-[#fbf8f5] mb-2">
                    Project Brief & Discovery
                  </h3>
                  <p className="text-[#a89a8f] text-sm">
                    Select your areas of focus and tell us about your goals.
                  </p>
                </div>

                {/* Service Interest Tags */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-3">
                    Select Services Needed:
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((service) => {
                      const selected = formData.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase transition-all duration-200 cursor-pointer ${
                            selected
                              ? "bg-[#d8b493] text-[#1b1411] shadow-md"
                              : "bg-[#1b1411] text-[#a89a8f] border border-[#3d2e25] hover:border-[#b78762]"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Travolta"
                      className="w-full bg-[#1b1411] border border-[#3d2e25] rounded-xl px-4 py-3 text-[#fbf8f5] placeholder-[#a89a8f]/50 focus:outline-none focus:border-[#d8b493] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-[#1b1411] border border-[#3d2e25] rounded-xl px-4 py-3 text-[#fbf8f5] placeholder-[#a89a8f]/50 focus:outline-none focus:border-[#d8b493] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-[#1b1411] border border-[#3d2e25] rounded-xl px-4 py-3 text-[#fbf8f5] placeholder-[#a89a8f]/50 focus:outline-none focus:border-[#d8b493] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-2">
                      Estimated Budget Tier
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#1b1411] border border-[#3d2e25] rounded-xl px-4 py-3 text-[#fbf8f5] focus:outline-none focus:border-[#d8b493] transition-colors cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1b1411]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d8b493] mb-2">
                    Project Details & Key Objectives *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, challenges, and what success looks like..."
                    className="w-full bg-[#1b1411] border border-[#3d2e25] rounded-xl p-4 text-[#fbf8f5] placeholder-[#a89a8f]/50 focus:outline-none focus:border-[#d8b493] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-950/50 border border-red-800/50 text-red-200 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full py-4 bg-[#d8b493] text-[#1b1411] font-bold text-base hover:bg-[#f4ebe1] flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Submit Partnership Request</span>
                  <FiSend size={18} />
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Direct Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#261d18] p-8 rounded-3xl border border-[#3d2e25]">
              <div className="w-12 h-12 rounded-2xl bg-[#3d2e25] text-[#d8b493] flex items-center justify-center mb-6">
                <FiMapPin size={24} />
              </div>
              <h4 className="text-xl font-bold uppercase text-[#fbf8f5] mb-2">
                South Africa Headquarters
              </h4>
              <p className="text-[#a89a8f] text-sm leading-relaxed mb-4">
                Bedworth Park, Germiston, Gauteng, South Africa
              </p>
              <span className="text-xs text-[#d8b493] font-semibold uppercase">
                Timezone: GMT+2 (SAST)
              </span>
            </div>

            <div className="bg-[#261d18] p-8 rounded-3xl border border-[#3d2e25]">
              <div className="w-12 h-12 rounded-2xl bg-[#3d2e25] text-[#d8b493] flex items-center justify-center mb-6">
                <FiMail size={24} />
              </div>
              <h4 className="text-xl font-bold uppercase text-[#fbf8f5] mb-2">
                Direct Communication
              </h4>
              <p className="text-[#a89a8f] text-sm leading-relaxed mb-4">
                Prefer email or rapid chat? Reach out directly to our partnerships team.
              </p>
              <a
                href="mailto:nexlinksolutionsza@gmail.com"
                className="text-[#d8b493] font-bold text-base hover:underline block mb-2"
              >
                nexlinksolutionsza@gmail.com
              </a>
              <span className="text-xs text-[#a89a8f]">
                Average reply time: &lt; 2 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
