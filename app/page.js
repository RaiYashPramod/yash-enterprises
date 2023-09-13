import Image from "next/image";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import StatsSection from "./components/StatsSection";
import QuoteSection from "./components/QuoteSection";
import OurServicesSection from "./components/OurServicesSection";
import RecentProjectsSection from "./components/RecentProjectsSection";
import ContactUsSection from "./components/ContactUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <QuoteSection />
      <OurServicesSection />
      <StatsSection />
      <RecentProjectsSection />
      {/* <ContactUsSection /> */}
    </>
  );
}
