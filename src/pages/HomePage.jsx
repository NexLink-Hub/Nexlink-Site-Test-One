import React from "react";
import Home from "../sections/Home/Home";
import Deliver from "../sections/Deliver/Deliver";
import SelectedWorks from "../sections/SelectedWorks/SelectedWorks";
import AwardedWorks from "../sections/AwardedWorks/AwardedWorks";
import Team from "../sections/Team/Team";
import Clients from "../sections/Clients/Clients";
import CTA from "../sections/CTA/CTA";
import Footer from "../sections/Footer/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#1b1411] min-h-screen text-[#f4ebe1]">
      <Home />
      <Deliver />
      <SelectedWorks />
      <AwardedWorks />
      <Team />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
