import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TransitionContext = createContext(null);

export const TransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [pageSubtitle, setPageSubtitle] = useState("NEXLINK SOLUTIONS");

  /**
   * Triggers the cascading brown waterfall transition to the destination route.
   * @param {string} to - Path to navigate to
   * @param {string} title - Human readable page title revealed during the transition
   * @param {string} [subtitle] - Optional category or subtitle tag
   */
  const navigateWithTransition = useCallback(
    (to, title = "Nexlink Solutions", subtitle = "NEXLINK SOLUTIONS") => {
      // If already on the same page, do not re-trigger
      if (location.pathname === to) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setPageTitle(title);
      setPageSubtitle(subtitle);
      setIsTransitioning(true);

      // Halfway through the curtain drop, switch the route
      setTimeout(() => {
        navigate(to);
        window.scrollTo(0, 0);
      }, 600);

      // Once title has been displayed and reverse exit animation finishes, reset
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1600);
    },
    [navigate, location.pathname]
  );

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        pageTitle,
        pageSubtitle,
        navigateWithTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within a TransitionProvider"
    );
  }
  return context;
};
