import './styles/styles.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/services.css'
import './styles/contacts.css'

export const metadata = {
  title: "Akbar Soft",
  description: "Freelance Company For Your Business",
  keywords: ["Freelance", "IT Company", "Business"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};