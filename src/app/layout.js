import "./globals.css";
import Navbar from "../components/Navbar";
import { GeneralContextProvider } from "../utils/general_context";
import { Archivo } from "next/font/google";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Script from 'next/script'


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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${archivo.variable} font-sans ${inter.variable} `}>
      <Script src="https://smtpjs.com/v3/smtp.js" />
        <GeneralContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GeneralContextProvider>
       
      </body>
    </html>
  );
}
