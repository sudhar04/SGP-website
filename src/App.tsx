import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import DRASection from "./components/DRASection";
import WhatWeOffer from "./components/WhatWeOffer";
import PartnerWithSGP from "./components/PartnerWithSGP";
import EnquiryBanner from "./components/EnquiryBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsCounter />
      <DRASection />
      <WhatWeOffer />
      <PartnerWithSGP />
      <EnquiryBanner />
      <Footer />
    </>
  );
}

