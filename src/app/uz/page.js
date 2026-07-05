import Cases from "./components/Cases";
import Carousel from "./components/carousel/ReviewCarousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import RequestForm from "./components/requestForm/RequestForm";
import Faq from "./faq/Faq";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Header />
      <Cases />
      <RequestForm />
      <Carousel />
      <Faq />
      <Footer />
    </div>
  );
};