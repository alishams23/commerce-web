import ReactQueryProvider from "@/providers/ReactQueryProvider";

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
      <body className="flex min-h-dvh flex-col">
        <ReactQueryProvider>
          <Header />
          <div className="grow pb-5 lg:pb-21">{children}</div>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
