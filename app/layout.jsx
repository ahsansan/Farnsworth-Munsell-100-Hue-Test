import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Farnsworth-Munsell 100 Hue Test",
  description: "Farnsworth-Munsell 100 Hue Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
