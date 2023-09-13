"use client";

import React, { useState } from "react";
import {
  List,
  ServicesOffers,
  DropdownContent,
  Dropdown,
  ServiceTitle,
  ServiceText,
} from "./StylingComponents";

import { PlusIcon } from "lucide-react";

const Service = ({ title, content, isOpen, toggle }) => {
  return (
    <>
      <ServicesOffers onClick={toggle} isOpen={isOpen}>
        <ServiceText>{title}</ServiceText>
        <div className="text-white">
          <PlusIcon
            className={`w-12 h-12 md:w-24 md:h-24 ${
              isOpen ? "transform rotate-45" : ""
            }`}
          />
        </div>
      </ServicesOffers>
      {isOpen && (
        <Dropdown>
          <DropdownContent>{content}</DropdownContent>
        </Dropdown>
      )}
      <br />
    </>
  );
};

const OurServicesSection = () => {
  const [isOpen, setIsOpen] = useState({
    Electric: false,
    Carpentry: false,
    Fabrication: false,
    Plumbing: false,
    Painting: false,
    Civil: false,
    Security: false,
    HouseKeeping: false,
  });

  const toggleService = (service) => {
    setIsOpen((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  return (
    <>
      <List>
        <ServiceTitle>What Do We Offer?</ServiceTitle>
        <br />
        <Service
          title="Electrical Support."
          content={`Electrical work can be dangerous and work should only be attempted
              by qualified electricians who have the relevant skills and tools
              to complete the work safely. Our electricians are highly
              experienced, fully qualified, fully insured. All this means you
              can rely on us to do the work safely, professionally and with care
              and skill. It is our investment in the training of our technicians
              that allows us to ensure that all work is carried out to the
              highest standard.\n\nBelow are indicators on what our work involves:\n- Electrical wiring/ re-wiring of Branches.\n- Fault finding and repair of fault.\n- Repair of faulty lights switches and plugs.\n- Repair of tripping switches.\n- Assist with power supply issues.\n- General electrical related repairs.`}
          isOpen={isOpen.Electric}
          toggle={() => toggleService("Electric")}
        />
        <Service
          title="Carpentry Support."
          content={`Our experienced team is comprised of master tradesmen who
              specialise in producing detailed, high quality finishes and sturdy
              workmanship that is designed to last a lifetime. We thrive on jobs
              that challenge us; unique designs that are functional, beautiful
              and environmentally sound. As one of the leading carpentry
              companies in Karnataka, our work comes with a guarantee of
              excellence. We only want the best for our clients; as such, we
              combine our impressive skill set with the finest materials
              available to deliver results that meet the exacting needs of our
              clients We love a challenge and are always willing to work
              alongside our clients to deliver the desired outcome.\n Below are the works we undertakes:\n- Providing or repairing workstation tables/chairs/furniture/storages etc…\n- Aluminium and glass work.`}
          isOpen={isOpen.Carpentry}
          toggle={() => toggleService("Carpentry")}
        />
        <Service
          title="Fabrication Work."
          content={`Fabrication Works have employed well qualified Design and development engineers, Experienced Tool makers, Machinists, fitters and welders to perform the tool room works and fabrication indicated above and is in the process of recruiting more staff for this purpose. A certified (level II) quality inspector has also been employed to ensure good quality of the works being performed.
          .`}
          isOpen={isOpen.Fabrication}
          toggle={() => toggleService("Fabrication")}
        />
        <Service
          title="Plumbing Support"
          content={`As one of the largest plumbing companies in the state, we are uniquely qualified to offer you more solutions and in a more timely fashion than other area plumbing companies.
          For plumbing needs small and large, we’re not satisfied until each job is done to the very best of our ability. At the same time, we’re always looking for better and more efficient ways to complete any task.
          We offer much more than plumbing solutions…we offer sound advice. Again, no matter what size the job, we help you make the best possible decision for your Branch and budget.
          We are relentless in our pursuit of greater safety…for your sake, and that of our own employees.
          Sustainability isn’t just one of our priorities. It’s a responsibility, and one we take most seriously.
          Our goal is to be your plumber for life. That means earning a level of trust that’s hard to come by these days. But we’ll work faithfully to earn and keep yours.
          
          .`}
          isOpen={isOpen.Plumbing}
          toggle={() => toggleService("Plumbing")}
        />
        <Service
          title="Painting Support"
          content={`When you work with a professional painter, of course you expect a high quality of workmanship. No mess-ups, just premium work and high quality ﬁnishes. Flash Yash enterprises is renowned for this, in business for over 15 years, we have established ourselves as the most highly reputed painting services provider in Karnataka.
          Understanding the importance of seamless results and professional care for the success of a project, we have made quality control the cornerstone of our services. With supervisors on every site and a diligent quality control system, we are capable of exceeding expectations, every time. Our clients depend on us for the superior results; we wouldn't deliver anything less.
          Our team specialises in a variety of painting and ﬁnishing services including external and internal ﬁnishes, commercial and residential painting. With a commitment to our work and conscientious customer service, over the years we have grown into a large company, one that is capable and fully equipped to deliver our customers premium painting services quickly and eﬃciently. We work with both builders and individual clients, viewing every customer relationship as an opportunity to demonstrate the transformative power of our craft.`}
          isOpen={isOpen.Painting}
          toggle={() => toggleService("Painting")}
        />
        <Service
          title="Civil Work."
          content={`Gunsite Construction, as the name implies, offers excellent construction solutions to clients located in Karnataka . Our skilled workers use robust raw materials to provide personalised and quality construction solutions to individual houses, apartments and offices. We have earned numerous patrons by offering timely and efficient construction assistance at competitive prices. We believe that our work reflects the values and aspirations of our clients. 
          We undertake minor and Major civil work also as per the customer requirement.
          `}
          isOpen={isOpen.Civil}
          toggle={() => toggleService("Civil")}
        />
        <Service
          title="Security Services."
          content={`We provide security services`}
          isOpen={isOpen.Security}
          toggle={() => toggleService("Security")}
        />
        <Service
          title="House Keeping"
          content={`We Prodive houseKeeping Services.`}
          isOpen={isOpen.HouseKeeping}
          toggle={() => toggleService("HouseKeeping")}
        />
        {/* Add other services here */}
      </List>
    </>
  );
};

export default OurServicesSection;
