"use client";

import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";

import Landing from "@/components/Landing";
import Vanana from "@/components/Vanana";
import About from "@/components/About";
import DragSlider from "@/components/DragSlider";
import CustomerGallery from "@/components/CustomerGallery";
import News from "@/components/News";

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

export default function Home() {
  return (
      <main
        className={`${archivo.variable} ${inter.variable} font-sans h-min bg-gradient-to-b from-[#0f0f0f]  to-[#121212] antialiased scroll-smooth overflow-hidden `}
      >
        <Landing />
        <About />
        <Vanana />
        <DragSlider />
        <CustomerGallery />
      </main>
  );
}
