import Script from 'next/script'

export const metadata = {
  title: "Veb-sayt, Telegram bot va dizayn buyurtma qilish | Akbar Soft",
  description: "Veb-sayt, Telegram bot va UI/UX dizayn ishlarini Buxoro, Toshkent va O'zbekiston bo'ylab buyurtma qiling. Professional frilanserlar jamoasi bilan hamkorlik qiling.",
  keywords: "sayt buyurtma qilish, veb-sayt yaratish, telegram bot yaratish, bot buyurtma qilish, dizayn buyurtma qilish, ui ux dizayn, sayt yasash, internet do'kon yaratish, veb-sayt ishlab chiqish, it kompaniya, frilanser xizmatlari, akbar soft, buxoro, toshkent, o'zbekiston, заказать сайт, заказать телеграм бота, заказать дизайн",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/uz/",
  openGraph: {
    title: "Veb-sayt, Telegram bot va dizayn buyurtma qilish | Akbar Soft",
    description: "Veb-saytlar, Telegram botlar va UI/UX dizayn ishlarini professional jamoadan buyurtma qiling.",
    url: "https://akbarsoft.uz/uz/",
    type: "website",
    locale: "uz_UZ",
    siteName: "Akbar Soft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veb-sayt, Telegram bot va dizayn buyurtma qilish | Akbar Soft",
    description: "Professional veb-sayt, Telegram bot va dizayn xizmatlari O'zbekiston bo'ylab.",
  },
  other: {
    "yandex-verification": "f201683b2288240d",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
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
              "url": "https://akbarsoft.uz/uz/",
              "logo": "https://akbarsoft.uz/images/logo-website.png",
              "description": "Veb-sayt, Telegram bot va dizayn ishlab chiqish xizmatlari O'zbekiston bo'ylab.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bukhara",
                "addressCountry": "UZ"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Xizmatlarni buyurtma qilish",
                "availableLanguage": ["Uzbek", "Russian", "English"]
              },
              "sameAs": [
                "https://t.me/akbarsoft"
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
          Veb-sayt, Telegram bot va dizayn buyurtma qilish - Akbar Soft
        </h1>

        {children}
      </body>
    </html>
  );
}