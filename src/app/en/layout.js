import Script from 'next/script'

export const metadata = {
  title: "Order Website, Telegram Bot & Design | Akbar Soft",
  description: "Order professional website development, Telegram bot creation, and UI/UX design in Uzbekistan. We offer turnkey solutions for your business in Bukhara, Tashkent and worldwide.",
  keywords: "order website, website development, create website, order web design, order telegram bot, telegram bot development, ui ux design, web development Uzbekistan, freelance web developer, buy website, website builder, bot developer, design services, it company Uzbekistan, akbar soft, bukhara it, заказать сайт, разработка сайтов, заказать телеграм бота, заказать дизайн",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/en",
  openGraph: {
    title: "Order Website, Telegram Bot & Design | Akbar Soft",
    description: "Professional development of websites, Telegram bots, and UI/UX design. Turnkey solutions in Uzbekistan.",
    url: "https://akbarsoft.uz/en",
    type: "website",
    locale: "en_US",
    siteName: "Akbar Soft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Website, Telegram Bot & Design | Akbar Soft",
    description: "Professional web development, Telegram bots, and design services in Uzbekistan.",
  },
  other: {
    "yandex-verification": "f201683b2288240d",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
              "url": "https://akbarsoft.uz/en",
              "logo": "https://akbarsoft.uz/images/logo-website.png",
              "description": "Professional website development, Telegram bot creation, and UI/UX design services in Uzbekistan.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bukhara",
                "addressCountry": "UZ"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Order services",
                "availableLanguage": ["English", "Russian", "Uzbek"]
              },
              "sameAs": [
                "https://t.me/akbar_soft"
              ]
            })
          }}
        />
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
        {/* 6. СКРЫТЫЙ H1 ДЛЯ ПОИСКОВИКОВ (английский) */}
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          Order website, Telegram bot and design - Akbar Soft
        </h1>

        {children}
      </body>
    </html>
  );
};