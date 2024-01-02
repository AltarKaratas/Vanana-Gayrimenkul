import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

import Script from "next/script";

import { Archivo } from "next/font/google";
import { Inter } from "next/font/google";

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
  title: {
    default:"Vanana Gayrimenkul | Emlak ve Konut Satışında Uzman İsim",
    template:"%s | Vanana Gayrimenkul | Emlak ve Konut Satışında Uzman İsim"
  },
  description:"Vanana Gayrimenkul, Emlak,Ankara,İstanbul, Türkiye, Gayrimenkul, Gayrimenkul Danışmanlığı",
  verification: { google: "ZjP3cc8OgDi8MAKv1-9V3t88Rpyohzi7YZx7Db0XvFM" },
};

export default function RootLayout({ children }) {
  return (
    <html id="main-html">
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
      <body
        id="body"
        className={`relative ${archivo.variable}  font-sans ${inter.variable} overflow-y-visible overflow-x-clip `}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
