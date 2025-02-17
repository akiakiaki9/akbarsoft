import './styles/styles.css'
import './styles/header.css'
import './styles/section.css'
import './styles/section2.css'
import './styles/section3.css'
import './styles/section4.css'
import './styles/section5.css'
import './styles/section6.css'
import './styles/section7.css'
import './styles/offers.css'
import './styles/title.css'
import './styles/carousel.css'
import './styles/footer.css'
import './styles/pagename.css'
import './styles/team.css'
import './styles/contacts.css'
import './styles/navbar.css'
import './styles/pricing.css'
import './styles/cases.css'
import './styles/cassec.css'
import './styles/servicedetail1.css'
import './styles/servicedetail2.css'
import './styles/services.css'
import './styles/404.css'
import './styles/join.css'
import './styles/faq.css'
import './styles/faqcomp.css'
import Script from 'next/script'

export const metadata = {
  title: "Akbar Soft",
  description: "Фриланс команда улучшит ваш бизнес",
  keywords: "Freelance, IT Company, Business, uz, Uzbekistan, Akbar, Soft, Akbar Soft, Akbar Soft uz, soft uz, bukhara, bukhara it company, it company, akbar soft it company, Фриланс, IT компания, Бизнес, uz, Узбекистан, Akbar, Soft, Akbar Soft, Akbar Soft uz, soft uz, Бухара, Бухарская it компания, it компания, akbar soft it компания",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/",
  openGraph: {
    title: "Akbar Soft - Фриланс Команда",
    description: "Мы разрабатываем разные веб-сайты для вашего бизнеса. Свяжитесь с нами, чтобы узнать больше.",
    url: "https://akbarsoft.uz/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Soft - IT-решения для вашего бизнеса",
    description: "Откройте для себя внештатные ИТ-услуги для развития бизнеса с командой Akbar Soft.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="yandex-verification" content="f201683b2288240d" />
        <meta name="msvalidate.01" content="9727FEB9B9A0FBF3F14C214D959E9BB5" />
        <link rel="icon" href="/images/logo-website.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TVGXYSNSY9"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TVGXYSNSY9');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};