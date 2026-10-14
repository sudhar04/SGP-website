import ServicesHeader from "../components/ServicesHeader";
import WhatWeOffer from "../components/WhatWeOffer";
import LoanServices from "../components/LoanServices";
import InsuranceInvestments from "../components/InsuranceInvestments";
import DRASection from "../components/DRASection";

export default function Services() {
  return (
    <>
      <ServicesHeader />
      <DRASection />
      <WhatWeOffer />
      <LoanServices />
      <InsuranceInvestments />
    </>
  );
}