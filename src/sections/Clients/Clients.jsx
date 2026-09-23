import React from "react";
import Stars from "../../assets/images/Client Star.png";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { FaApple, FaAmazon, FaTiktok, FaMicrosoft } from "react-icons/fa";

const clientLogos = [
  { id: "apple", Icon: FaApple, label: "Apple" },
  { id: "amazon", Icon: FaAmazon, label: "Amazon" },
  { id: "tiktok", Icon: FaTiktok, label: "TikTok" },
  { id: "microsoft", Icon: FaMicrosoft, label: "Microsoft" },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="text-[#f4ebe1] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 xxl:pt-[3rem]"
      data-scroll-section
    >
      <SectionHeader
        title="Happy Clients"
        description="We are encouraged and inspired when our clients share their project results with us. We consistently achieve noted, outstanding results for our work."
        badgeIcon={Stars}
        badgeValue="620"
        descriptionWidth="lg:w-[40%]"
      />

      {/* Client logos */}
      <div className="flex flex-wrap justify-between gap-4 md:gap-0 lg:flex-nowrap items-center md:justify-between py-[1rem] border-b border-t border-[#3d2e25] mt-3 md:mt-7 lg:mt-14 text-[#f4ebe1]">
        {clientLogos.map((client, index) => (
          <React.Fragment key={client.id}>
            <client.Icon
              aria-label={client.label}
              className="text-[2rem] md:text-[4rem] my-6 transition-all duration-200 hover:scale-110 hover:text-[#d8b493]"
            />
            {index < clientLogos.length - 1 && (
              <div
                aria-hidden="true"
                className="bg-[#3d2e25] hidden md:block h-[.5rem] w-[.5rem] lg:h-[1rem] lg:w-[1rem] rounded-[50%]"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Clients;
