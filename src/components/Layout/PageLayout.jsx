import React from "react";
import Navbar from "../Navbar/Navbar";
import CTA from "../../sections/CTA/CTA";
import Footer from "../../sections/Footer/Footer";

const PageLayout = ({ children, showCTA = true }) => {
  return (
    <div className="bg-[#1b1411] min-h-screen text-[#f4ebe1] flex flex-col justify-between selection:bg-[#7b5137] selection:text-[#fbf8f5]">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showCTA && <CTA />}
      <Footer />
    </div>
  );
};

export default PageLayout;
