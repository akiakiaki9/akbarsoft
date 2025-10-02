import Cases from "./cases/Cases";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Section3 from "./components/section/Section3";
import Section5 from "./components/section/Section5";
import Faq from "./faq/Faq";
import PricingPlan from "./pricing-plan/PricingPlan";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Header />
      <Section3 />
      <Cases />
      <Offers />
      <PricingPlan />
      <Section5 />
      <Carousel />
      <Faq />
      <Footer />
    </div>
  );
};