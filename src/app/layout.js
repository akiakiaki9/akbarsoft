import './styles/styles.css'

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