import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import DRASection from "./components/DRASection";
import WhatWeOffer from "./components/WhatWeOffer";
import Testimonials from "./components/Testimonials";
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
      <Testimonials />
      <PartnerWithSGP />
      <EnquiryBanner />
      <Footer />
    </>
  );
}

