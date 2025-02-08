import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Farnsworth-Munsell 100 Hue Test",
  description: "Farnsworth-Munsell 100 Hue Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[800px] mx-auto">
          <div>
            <div>
              <Header />
            </div>
            <main className="min-h-[80vh]">
              {children}
            </main>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
