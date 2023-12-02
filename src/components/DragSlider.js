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
    <section className="relative z-12 w-full h-[600px] sm:h-[540px] md:h-[760px] lg:h-[680px] xl:h-[720px] bg-[#121212]  py-40">
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />
      <div className="relative w-full px-8 md:px-14 flex justify-between items-center">
        <h1 className="relative z-20 leading-none text-5xl md:text-7xl xl:text-8xl  text-white ">
          Öne Çıkan
          {screenSize.width < 1024 && <br />}
          {" "}Projeler
        </h1>
        <div className="self-end flex justify-end mb-2 sm:mb-4 md:mb-8">
          <Link
            href="/Projeler"
            className="font-inter w-2/3 sm:w-full text-white text-base md:text-[18px] leading-tight lg:text-2xl border-b border-white"
          >
            Tüm projeleri görüntüle
          </Link>
        </div>
      </div>
      <Splide
        className="z-10 px-6 md:px-12 pb-8 mx-auto overflow-visible"
        options={{
          type: "loop",
          width: "w-full",
          gap: "48px",
          autoWidth: true,
          snap: true,
          drag: true,
          arrows: false,
        }}
      >
        {images.map((imgObj, index) => (
          <SplideSlide key={index}>
            <Link href={imgObj.title}>
              <div
                className={`${
                  index % 2 == 0
                    ? "w-[90vw] md:w-[640px] h-[320px] md:h-[492px] relative z-10 flex items-end font-inter overflow-hidden"
                    : "w-[90vw] md:w-[640px] h-[320px] md:h-[492px]  relative z-10 flex items-end  font-inter overflow-hidden shadow-2xl shadow-[#c0c0c01b]"
                } `}
              >
                <div className=" relative w-full flex justify-between items-center bg-gradient-to-r from-black via-[#0a0a0a] to-black p-6  z-10 ">
                  <h3 className="w-full font-inter font-medium  border-b-4 border-gold text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#e2e2e2]  to-light_gold  sm:w-full text-2xl md:text-4xl lg:text-5xl  z-10 uppercase ">
                    {imgObj.title}
                  </h3>
                  
                </div>
                <Image
                  src={imgObj.url}
                  title={imgObj.title}
                  alt={imgObj.title}
                  fill
                  objectFit={`${index % 2 == 1 ? "cover" : ""}`}
                  className="brightness-50 saturate-[0.0] transition-all duration-300 ease-in-out hover:scale-125 hover:saturate-50"
                />
                <div className="absolute bottom-7 right-6  z-20  transition-all duration-200 ease-in-out hover:scale-125 hover:mr-2">
                  <Link href={imgObj.title} className="relative w-[25%] text-xs md:text-base lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold h-full" >
                    Detayları Gör
                  </Link>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
        <SplideTrack className="w-[500px] h-2 bg-slate-100" />
      </Splide>
    </section>
  );
};
export default DragSlider;
