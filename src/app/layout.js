import './styles/styles.css'
import './styles/header.css'
import './styles/section.css'
import './styles/section2.css'
import './styles/section3.css'
import './styles/section6.css'
import './styles/section7.css'
import './styles/offers.css'
import './styles/title.css'
import './styles/carousel.css'
import './styles/footer.css'
import './styles/pagename.css'
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
import './styles/switcher.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
};