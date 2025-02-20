import Script from 'next/script'

export const metadata = {
  title: "Akbar Soft",
  description: "Your path to digital excellence",
  keywords: "Freelance, IT Company, Business, uz, Uzbekistan, Akbar, Soft, Akbar Soft, Akbar Soft uz, soft uz, Bukhara, Bukhara IT company, IT company, Akbar Soft IT company, Freelance, IT company, Business, uz, Uzbekistan, Akbar, Soft, Akbar Soft, Akbar Soft uz, soft uz, Bukhara, Bukhara IT company, IT company, Akbar Soft IT company",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/",
  openGraph: {
    title: "Akbar Soft - Freelance Team",
    description: "We develop various websites for your business. Contact us to learn more.",
    url: "https://akbarsoft.uz/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Soft - IT Solutions for Your Business",
    description: "Discover freelance IT services to grow your business with the Akbar Soft team.",
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