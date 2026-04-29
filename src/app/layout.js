import './styles/styles.css'
import './styles/header.css'
import './styles/title.css'
import './styles/footer.css'
import './styles/pagename.css'
import './styles/contacts.css'
import './styles/navbar.css'
import './styles/pricing.css'
import './styles/cases.css'
import './styles/cassec.css'
import './styles/404.css'
import './styles/join.css'
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