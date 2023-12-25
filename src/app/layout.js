"use client"
import "./globals.css";
import Navbar from "../components/Navbar";
import { Archivo } from "next/font/google";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

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



export default function RootLayout({ children }) {
  return (
    <html>
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
