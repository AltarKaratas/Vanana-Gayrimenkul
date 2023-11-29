import { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import generalContext from "@/utils/general_context";
import useScreenSize from "@/utils/hooks/useScreenSize";

const images = [
  {
    title: "Faras HighHill",
    url: "https://images.unsplash.com/photo-1610047803562-7260ebe516cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Faras HighHill",
    url: "/FarasHighHill.jpg",
  },
  {
    title: "Arp Kule",
    url: "https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "OttoVille",
    url: "https://images.unsplash.com/photo-1608241175281-722a1c6111be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Deniz Life",
    url: "https://images.unsplash.com/photo-1523288863878-c79329df9b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1386&q=80",
  },
];

const DragSlider = (props) => {
  const screenSize = useScreenSize();

  return (
    <section className="relative w-full h-[580px] sm:h-[600px] md:h-[800px] lg:h-[880px] xl:h-[900px] z-10 bg-[#121212] py-40 flex-col items-center justify-end">
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />
      <div className="relative w-[90vw] mx-auto flex justify-between items-center">
        <h1 className="relative z-20 leading-none  text-4xl sm:text-5xl md:text-7xl lg:text-9xl  text-white ">
          Öne Çıkan
          <br />
          Projeler
        </h1>
        <div className="self-end flex justify-end mb-2 sm:mb-4 md:mb-8">
          <Link
            href="/Projeler"
            className="inline w-2/3 sm:w-full text-white text-base md:text-[18px] leading-tight lg:text-2xl border-b border-white"
          >
            Tüm projeleri görüntüle
          </Link>
        </div>
      </div>
      <Splide
        className="z-10 pb-10 mx-auto overflow-visible"
        options={{
          type: "loop",
          width: "90vw",
          gap: "20px",
          autoWidth: true,
          snap: true,
          drag: true,
          arrows: false,
        }}
      >
        {images.map((img, index) => (
          <SplideSlide key={index}>
            <div
              className={`${
                index % 2 == 0
                  ? "w-[90vw] md:w-[640px] h-[360px] md:h-[540px] relative z-10 flex items-end p-4 sm:p-8 font-inter overflow-hidden"
                  : "w-[90vw] md:w-[640px] h-[360px] md:h-[496px]  shadow-2xl shadow-[#c0c0c01b] relative z-10 flex items-end p-4 sm:p-8 font-inter overflow-hidden"
              } `}
            >
              <div className=" relative w-full flex justify-between items-center bg-black_overlay p-4 z-10">
                <h3 className="font-inter text-white w-1/2 sm:w-full text-xl md:text-4xl font-semibold z-10 uppercase">
                  {img.title}
                </h3>
                <div className="flex justify-center items-center w-[64px] h-[64px] z-10">
                  <Link href={`/Projeler/${index}`} className=" text-white">
                    <Image
                      src="/arrow.svg"
                      width={screenSize.width < 768 ? 36 : 64}
                      height={2}
                      className="right-0 z-10 self-center hover:scale-125"
                    />
                  </Link>
                </div>
              </div>
              <Image
                src={img.url}
                title={img.title}
                alt={img.title}
                fill
                objectFit={`${index % 2 == 1 ? "cover" : ""}`}
                className="brightness-50 saturate-50 transition-all duration-300 ease-in-out hover:scale-125"
              />
            </div>
          </SplideSlide>
        ))}
        <SplideTrack className="w-[500px] h-2 bg-slate-100" />
      </Splide>
    </section>
  );
};
export default DragSlider;
