import ServicesHeader from "../components/ServicesHeader";
import AllServices from "../components/AllServices";
import WhyChooseServices from "../components/WhyChooseServices";
import ServicesOverview from "../components/ServicesOverview";

export default function Services() {
  return (
    <>
      <ServicesHeader />
      <ServicesOverview />
      <AllServices />
      <WhyChooseServices />
    </>
  );
}