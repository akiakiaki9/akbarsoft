import Script from 'next/script'

export const metadata = {
  title: "Заказать веб-сайт, Telegram бота и дизайн | Akbar Soft",
  description: "Закажите разработку сайта, Telegram бота и UI/UX дизайна под ключ. Работаем с Бухарой, Ташкентом и по всему Узбекистану. Недорого и качественно.",
  keywords: "заказать сайт, заказать веб сайт, создание сайтов, разработка сайтов, заказать телеграм бота, разработка телеграм ботов, заказать дизайн сайта, ui ux дизайн заказать, где заказать сайт, разработка под ключ, it компания Узбекистан, akbar soft, bukhara it, фриланс услуги",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/",
  openGraph: {
    title: "Заказать сайт, бота или дизайн в Узбекистане | Akbar Soft",
    description: "Профессиональная разработка веб-сайтов, Telegram ботов и дизайна. Работаем по всей Республике.",
    url: "https://akbarsoft.uz/",
    type: "website",
    locale: "ru_RU",
    siteName: "Akbar Soft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Заказать сайт, бота или дизайн | Akbar Soft",
    description: "Разработка веб-сайтов, телеграм ботов и дизайна. Закажите сейчас!",
  },
  other: {
    "yandex-verification": "f201683b2288240d",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="yandex-verification" content="f201683b2288240d" />
        <meta name="msvalidate.01" content="9727FEB9B9A0FBF3F14C214D959E9BB5" />
        <link rel="icon" href="/images/logo-website.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Akbar Soft",
              "url": "https://akbarsoft.uz/",
              "logo": "https://akbarsoft.uz/images/logo-website.png",
              "description": "Разработка веб-сайтов, Telegram ботов и дизайна в Узбекистане.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bukhara",
                "addressCountry": "UZ"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Заказ услуг",
                "availableLanguage": ["Russian", "Uzbek"]
              },
              "sameAs": [
                "https://t.me/akbar_soft"
              ]
            })
          }}
        />

        {/* Google Analytics */}
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
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          Заказать веб-сайт, Telegram бота и дизайн - Akbar Soft
        </h1>

        {children}
      </body>
    </html>
  );
}