import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import WaterfallLoader from "./components/PageTransition/WaterfallLoader";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import TermsPage from "./pages/TermsPage";

const App = () => {
  return (
    <Router>
      <TransitionProvider>
        <WaterfallLoader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </TransitionProvider>
    </Router>
  );
};

export default App;
