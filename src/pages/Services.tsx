import ServicesHeader from "../components/ServicesHeader";
import WhatWeOffer from "../components/WhatWeOffer";
import LoanServices from "../components/LoanServices";
import WhyChooseServices from "../components/WhyChooseServices";
import ServicesOverview from "../components/ServicesOverview";

export default function Services() {
  return (
    <>
      <ServicesHeader />
      <ServicesOverview />
      <WhatWeOffer />
      <LoanServices />
      <WhyChooseServices />
    </>
  );
}