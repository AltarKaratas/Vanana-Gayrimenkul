"use client";

import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";

import dynamic from "next/dynamic";
import Vanana from "@/components/Vanana";
import About from "@/components/About";
import DragSlider from "@/components/DragSlider";
import LandingPage from "@/components/LandingPage";
import Nossr from "@/utils/NoSsr";

export const archivo = Archivo({
  weight: ["200", "400", "700"],
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["100", "400", "500", "800"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Nossr>
    <main
      className={`${archivo.variable} ${inter.variable}  font-sans h-min bg-gradient-to-b from-[#0f0f0f]  to-[#121212] antialiased scroll-smooth  `}
    >

      <LandingPage />
      <About />
      <Vanana />
      <DragSlider />
      <CustomerGallery1 />
    </main>
    </Nossr>
  );
}

const CustomerGallery1 = dynamic(
  () => import("../components/CustomerGallery"),
  { ssr: false }
);
