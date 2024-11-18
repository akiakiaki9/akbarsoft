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

/*
  <Head>
        <title>Akbar Soft</title>
        <meta name="description" content="Freelance Company For Your Business" />
      </Head>
      <div className="home">
        <div className="home-blok">
          <div className="loader"></div>
          <h1>Сайт на разработке</h1>
          <p>Пока переходите на проекты</p>
          <a href="https://portfolio-aki.netlify.app"><button>Submit</button></a>
          <div className="home__tg">
            <a href="https://t.me/akbarsoftowner"><FaTelegram className="home__icon" /></a>
          </div>
        </div>
      </div>
*/