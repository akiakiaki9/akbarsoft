import './styles/styles.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/services.css';
import './styles/contacts.css';
import './styles/title.css';

export const metadata = {
  title: "Akbar Soft",
  description: "Freelance Company For Your Business",
  keywords: "Freelance, IT Company, Business",
  robots: "index, follow",
  canonical: "https://akbarsoft.uz/",
  ogTitle: "Akbar Soft - Freelance Company",
  ogDescription: "We provide IT services for your business. Contact us to learn more.",
  ogUrl: "https://akbarsoft.uz/",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterTitle: "Akbar Soft - IT Solutions for Your Business",
  twitterDescription: "Discover freelance IT services for business growth at Akbar Soft.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:locale" content={metadata.ogLocale} />
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta name="twitter:description" content={metadata.twitterDescription} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};