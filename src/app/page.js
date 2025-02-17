import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Section from "./components/section/Section";
import Section2 from "./components/section/Section2";
import Section3 from "./components/section/Section3";
import Section4 from "./components/section/Section4";
import Section5 from "./components/section/Section5";
import Section6 from "./components/section/Section6";
import Section7 from "./components/section/Section7";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Offers />
      <Section5 />
      <Section6 />
      <Section7 />
      <Carousel />
      <Footer />
    </div>
  );
};