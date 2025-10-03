import Script from 'next/script'

export const metadata = {
  title: "Akbar Soft | Создание сайтов и дизайнов",
  description: "Мы команда фрилансеров разрабатываем веб-сайты, веб-дизайны и т.д.",
  keywords: "Freelance, сайты, делать сайт, sayt taxlash, sayt zakaz, веб-сайт, создать веб-сайт, разработка веб-сайтов, разработка онлайн магазина, заказать веб-сайт, IT Company, Business, uz, Uzbekistan, Akbar, Soft, Akbar Soft, Akbar Soft uz, soft uz, bukhara, bukhara it company, it company, akbar soft it company, Фриланс, IT компания, Бизнес, uz, Узбекистан, Akbar, Soft, Akbar Soft, Akbar Soft uz, soft uz, Бухара, Бухарская it компания, it компания, akbar soft it компания",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/",
  openGraph: {
    title: "Akbar Soft",
    description: "Мы команда фрилансеров разрабатываем веб-сайты, веб-дизайны и т.д.",
    url: "https://akbarsoft.uz/",
    type: "website",
    locale: "uz_UZ",
    locale: "ru_RU",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Soft",
    description: "Мы команда фрилансеров разрабатываем веб-сайты, веб-дизайны и т.д.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
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