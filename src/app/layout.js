import "./globals.css";
import Navbar from "../components/Navbar";
import { Archivo } from "next/font/google";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import Nossr from "@/utils/NoSsr";

export const archivo = Archivo({
  weight: ["200", "400", "700"],
  variable: "--font-archivo",
  subsets: ["latin"],
});
export const inter = Inter({
  weight: ["100", "400", "800"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vanana Gayrimenkul",
  description: "Vanana Gayrimenkul Danışmanlığı",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
      <body
        id="body"
        className={`relative ${archivo.variable}  font-sans ${inter.variable} overflow-y-visible overflow-x-clip `}
      >
        <Nossr>
          <Navbar />
          {children}
          <Footer />
        </Nossr>
      </body>
    </html>
  );
}
