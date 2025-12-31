import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <div className="px-12 md:px-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
