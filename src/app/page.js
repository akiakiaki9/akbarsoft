import Head from "next/head";
import Header from "./components/header/header";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Akbar Soft</title>
        <meta name="description" content="Freelance Company For Your Business" />
      </Head>
      <Header />
      <Services />
      <Footer />
    </>
  );
};