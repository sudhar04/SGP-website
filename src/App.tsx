import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import DRASection from "./components/DRASection";
import WhatWeOffer from "./components/WhatWeOffer";
import LoanServices from "./components/LoanServices";
import InsuranceInvestments from "./components/InsuranceInvestments";
import Properties from "./components/Properties";
import AboutSGP from "./components/AboutSGP";
import WhyChooseUs from "./components/WhyChooseUs";
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
      <LoanServices />
      <InsuranceInvestments />
      <Properties />
      <AboutSGP />
      <WhyChooseUs />
      <Testimonials />
      <PartnerWithSGP />
      <EnquiryBanner />
      <Footer />
    </>
  );
}

