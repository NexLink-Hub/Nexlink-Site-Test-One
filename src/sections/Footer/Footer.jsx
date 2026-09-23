import React from "react";
import Logo from "../../assets/images/Logo White.png";
import FooterLink from "../../components/FooterLink/FooterLink";
import { motion } from "framer-motion";
import { riseUpVariant2, riseUpItem } from "../../constants/animations";
import { usePageTransition } from "../../context/TransitionContext";

const leftFooterLinks = [
  { text: "Faq", href: "/faq", title: "FAQ", subtitle: "KNOWLEDGE BASE" },
  { text: "Terms & Agreements", href: "/terms", title: "Terms & Agreements", subtitle: "LEGAL" },
];

const rightFooterLinks = [
  { text: "Email", handle: "nexlinksolutionsza@gmail.com", href: "mailto:nexlinksolutionsza@gmail.com" },
  { text: "Instagram", handle: "@NexlinkSolutions", href: "https://instagram.com" },
  { text: "Twitter", handle: "@NexlinkSolutions", href: "https://twitter.com" },
  { text: "Medium", handle: "@NexlinkSolutions", href: "https://medium.com" },
  { text: "Telegram", handle: "@NexlinkSolutions", href: "https://telegram.org" },
  { text: "LinkedIn", handle: "@NexlinkSolutions", href: "https://linkedin.com" },
  { text: "Facebook", handle: "@NexlinkSolutions", href: "https://facebook.com" },
];

const Footer = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <div data-scroll-section>
      <footer className="pb-[4rem] lg:w-[90%] max-w-[1200px] m-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between mt-[4rem]">
          {/* Left */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-[40%]"
          >
            <motion.h2
              variants={riseUpItem}
              className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[70%] leading-[3rem] text-[#f4ebe1]"
            >
              Keep in Touch
            </motion.h2>

            <button
              type="button"
              onClick={() => navigateWithTransition("/", "Nexlink Solutions", "CREATIVE AGENCY")}
              className="cursor-pointer inline-block my-4 bg-transparent border-0"
              aria-label="Nexlink Solutions Home"
            >
              <motion.img
                variants={riseUpItem}
                src={Logo}
                alt="Nexlink Solutions Logo White"
                className="h-[65px] brightness-95"
              />
            </button>

            <motion.p
              variants={riseUpItem}
              className="text-[#a89a8f] font-medium mb-8 lg:text-base text-[80%]"
            >
              Bedworth Park, Germiston, Gauteng, South Africa
            </motion.p>

            {leftFooterLinks.map((link) => (
              <motion.div key={link.text} variants={riseUpItem}>
                <FooterLink
                  text={link.text}
                  href={link.href}
                  pageTitle={link.title}
                  pageSubtitle={link.subtitle}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-[40%] flex flex-col justify-between mt-8 md:mt-0"
          >
            {rightFooterLinks.map((link) => (
              <motion.div key={link.text} variants={riseUpItem}>
                <FooterLink
                  text={link.text}
                  handle={link.handle}
                  href={link.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </footer>
      <div aria-hidden="true" className="arch w-[100%] h-4 bg-[#f4ebe1] rounded-t-xl" />
    </div>
  );
};

export default Footer;
