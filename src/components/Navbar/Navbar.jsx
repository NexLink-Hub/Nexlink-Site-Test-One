import React, { useState, useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/images/Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  riseUpVariant,
  riseUpItem,
  navVariants,
  itemVariants,
  tagVariant,
} from "../../constants/animations";
import { usePageTransition } from "../../context/TransitionContext";
import { useLocation } from "react-router-dom";

const navLinks = [
  { to: "/about", label: "About Us", title: "About Us", sub: "WHO WE ARE" },
  { to: "/projects", label: "Project", title: "Our Projects", sub: "CASE STUDIES" },
  { to: "/services", label: "Services", title: "Services", sub: "CAPABILITIES" },
  { to: "/contact", label: "Contact Us", title: "Contact Us", sub: "LET'S TALK" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const location = useLocation();

  const handleNav = useCallback(() => {
    setNav((prev) => !prev);
  }, []);

  const closeNav = useCallback(() => {
    setNav(false);
  }, []);

  const handleLinkClick = (to, title, sub) => {
    closeNav();
    navigateWithTransition(to, title, sub);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && nav) {
        closeNav();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nav, closeNav]);

  return (
    <>
      <div className="bg-[#f4ebe1] relative z-10 border-b border-[#d8b493]/30">
        <motion.nav
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Main Navigation"
          className="flex flex-row justify-between items-center py-4 px-4 lg:px-8 pb-4 lg:pb-8 max-w-[1200px] m-auto"
        >
          <button
            type="button"
            onClick={() => handleLinkClick("/about", "About Us", "WHO WE ARE")}
            className={`cursor-pointer font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex transition-colors bg-transparent border-0 ${
              location.pathname === "/about"
                ? "text-[#7b5137] font-bold"
                : "text-[#3d2e25] hover:text-[#7b5137]"
            }`}
          >
            <motion.span variants={riseUpItem}>About Us</motion.span>
          </button>

          <button
            type="button"
            onClick={() =>
              handleLinkClick("/projects", "Our Projects", "CASE STUDIES")
            }
            className={`cursor-pointer font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex transition-colors bg-transparent border-0 ${
              location.pathname === "/projects"
                ? "text-[#7b5137] font-bold"
                : "text-[#3d2e25] hover:text-[#7b5137]"
            }`}
          >
            <motion.span variants={riseUpItem}>Project</motion.span>
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick("/", "Nexlink Solutions", "CREATIVE AGENCY")}
            className="cursor-pointer bg-transparent border-0"
            aria-label="Nexlink Solutions Home"
          >
            <motion.img
              variants={riseUpItem}
              src={Logo}
              alt="Nexlink Solutions Logo"
              className="h-[65px]"
            />
          </button>

          <button
            type="button"
            onClick={() =>
              handleLinkClick("/services", "Services", "CAPABILITIES")
            }
            className={`cursor-pointer font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex transition-colors bg-transparent border-0 ${
              location.pathname === "/services"
                ? "text-[#7b5137] font-bold"
                : "text-[#3d2e25] hover:text-[#7b5137]"
            }`}
          >
            <motion.span variants={riseUpItem}>Services</motion.span>
          </button>

          <button
            type="button"
            onClick={() =>
              handleLinkClick("/contact", "Contact Us", "LET'S TALK")
            }
            className={`cursor-pointer font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex transition-colors bg-transparent border-0 ${
              location.pathname === "/contact"
                ? "text-[#7b5137] font-bold"
                : "text-[#3d2e25] hover:text-[#7b5137]"
            }`}
          >
            <motion.span variants={riseUpItem}>Contact Us</motion.span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            type="button"
            variants={tagVariant}
            onClick={handleNav}
            aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={nav}
            className="md:hidden p-2 text-[#3d2e25] hover:text-[#7b5137] cursor-pointer bg-transparent border-0"
          >
            <HiOutlineMenuAlt3 size={25} />
          </motion.button>
        </motion.nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-[#1b1411]/95 backdrop-blur-md h-screen z-50 fixed inset-0 w-screen flex flex-col"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
              className="h-full flex flex-col justify-start"
            >
              <div className="flex justify-end p-6 text-[#f4ebe1]">
                <button
                  type="button"
                  onClick={closeNav}
                  aria-label="Close menu"
                  className="p-2 cursor-pointer text-[#f4ebe1] hover:text-[#d8b493] transition-colors bg-transparent border-0"
                >
                  <motion.span variants={tagVariant}>
                    <FaTimes size={25} />
                  </motion.span>
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 text-[#f4ebe1] gap-4">
                <button
                  type="button"
                  onClick={() =>
                    handleLinkClick("/", "Nexlink Solutions", "CREATIVE AGENCY")
                  }
                  className="p-4 text-[1.5rem] hover:text-[#d8b493] transition-all duration-150 font-semibold cursor-pointer bg-transparent border-0 text-[#f4ebe1]"
                >
                  <motion.span variants={itemVariants}>Home</motion.span>
                </button>

                {navLinks.map((link) => (
                  <button
                    key={link.to}
                    type="button"
                    onClick={() =>
                      handleLinkClick(link.to, link.title, link.sub)
                    }
                    className="p-4 text-[1.5rem] hover:text-[#d8b493] transition-all duration-150 font-semibold cursor-pointer bg-transparent border-0 text-[#f4ebe1]"
                  >
                    <motion.span variants={itemVariants}>
                      {link.label}
                    </motion.span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
