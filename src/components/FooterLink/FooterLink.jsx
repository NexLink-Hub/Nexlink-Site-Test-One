import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { sanitizeUrl, sanitizeMailto } from "../../utils/sanitize";
import { usePageTransition } from "../../context/TransitionContext";

const FooterLink = ({ text, handle, href, className = "", pageTitle, pageSubtitle }) => {
  const { navigateWithTransition } = usePageTransition();

  let destination = "#";
  if (href) {
    destination = sanitizeUrl(href);
  } else if (handle && handle.includes("@") && handle.includes(".")) {
    destination = sanitizeMailto(handle);
  } else if (handle && handle.startsWith("@")) {
    destination = sanitizeUrl(`https://twitter.com/${handle.replace("@", "")}`);
  }

  const isInternalRoute = destination.startsWith("/");
  const isExternal = destination.startsWith("http");

  const handleClick = (e) => {
    if (isInternalRoute) {
      e.preventDefault();
      navigateWithTransition(destination, pageTitle || text, pageSubtitle || "NEXLINK SOLUTIONS");
    }
  };

  return (
    <a
      href={destination}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex text-[#a89a8f] justify-between items-center border-b border-[#3d2e25] py-3 font-semibold transition-colors duration-200 hover:text-[#fbf8f5] hover:border-[#b78762] cursor-pointer ${className}`}
    >
      <span className="uppercase">{text}</span>
      <div className="flex items-center">
        {handle && (
          <p className="mr-2 font-normal lg:text-base text-[80%] text-[#a89a8f] group-hover:text-[#d8b493] transition-colors">
            {handle}
          </p>
        )}
        <FiArrowUpRight
          size={20}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#b78762] group-hover:text-[#fbf8f5]"
        />
      </div>
    </a>
  );
};

export default FooterLink;
