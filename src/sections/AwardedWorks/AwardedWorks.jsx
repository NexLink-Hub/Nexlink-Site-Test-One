import React from "react";
import AwardedWork from "../../components/Work/AwardedWork";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ClassicBlueTag from "../../assets/images/Classic Blue Tag.png";
import Crown from "../../assets/images/Awarded Works Crown.png";
import OrangyWaveTag from "../../assets/images/Orangy Wave Tag.png";

const awardedWorksData = [
  {
    id: "classic-blue",
    labels: [
      { name: "Web App", delay: 0 },
      { name: "Cloud Architecture", delay: 0.2 },
      { name: "Custom Platform", delay: 0.4 },
    ],
    caption: "Enterprise Platform",
    title: "Classic Blue",
    icon: ClassicBlueTag,
    className: "bg-work-banner-1 mb-[3rem] sm:mb-0 shadow-xl",
  },
  {
    id: "orangy-wave",
    labels: [
      { name: "AI Solutions", delay: 0 },
      { name: "Mobile App", delay: 0.2 },
      { name: "Automation", delay: 0.4 },
    ],
    caption: "Intelligent Platform",
    title: "Orangy Wave",
    icon: OrangyWaveTag,
    className: "bg-work-banner-2 shadow-xl",
  },
];

const AwardedWorks = () => {
  return (
    <section
      id="services"
      data-scroll-section
      className="text-[#f4ebe1] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 xxl:pt-[3rem]"
    >
      <SectionHeader
        title="Featured Works"
        description="We are a technology and digital solutions company dedicated to crafting digital experiences and functional software products our clients can be truly proud of."
        badgeIcon={Crown}
        badgeValue="290"
      />

      {awardedWorksData.map((work) => (
        <AwardedWork
          key={work.id}
          labels={work.labels}
          caption={work.caption}
          title={work.title}
          icon={work.icon}
          className={work.className}
        />
      ))}
    </section>
  );
};

export default AwardedWorks;
