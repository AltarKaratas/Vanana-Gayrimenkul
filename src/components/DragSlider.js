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
    id: "",
    slogan: "",
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
    <section className="relative z-12  h-[480px] sm:h-[540px] md:h-[760px] lg:h-[680px] xl:h-[720px] py-40 bg-black_000">
      
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />
      
      <div className="relative flex justify-between items-center w-full px-8 md:px-14">
        <h1 className="relative z-20 leading-none text-4xl md:text-7xl xl:text-8xl text-white ">
          Öne Çıkan
          {screenSize.width < 1024 && <br />} Projeler
        </h1>
        <div className="flex justify-end self-end mb-2 sm:mb-4 md:mb-8">
          <Link
            href="/Projeler"
            className=" w-2/3 sm:w-full font-inter text-white text-base md:text-xl leading-tight lg:text-2xl border-b border-white"
          >
            Tüm projeleri görüntüle
          </Link>
        </div>
      </div>
      <Splide
        className="z-10 px-6 xl:px-20 pb-8 mx-auto overflow-visible"
        options={{
          type: "loop",
          snap: true,
          drag: true,
          autoWidth: true,
          arrows: false,
          gap: "8px",
        }}
      >
        {images.map((imgObj, index) => (
          <SplideSlide
            key={index}
            id
            className="w-[320px] min-[400px]:w-[360px] md:w-[640px] h-[246px] min-[400px]:h-[276px] md:h-[492px]"
          >
            <div
              className="relative z-10 flex items-end w-[320px] min-[400px]:w-[360px] min-[400px]:h-[276px] md:w-[640px] h-[246px] md:h-[492px] font-inter overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
            >
              <div className="relative z-10 w-full flex justify-between items-center p-6 bg-gradient-to-r from-black_100 via-black_100 to-black_200">
                <h3 className="w-full z-10 font-inter font-medium text-xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200  border-b-4 border-gold_100">
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
              <div className="absolute bottom-7 right-6  z-20  transition-all duration-500 ease-in-out hover:scale-125 hover:mr-2">
                <Link
                  href={imgObj.title}
                  className="relative w-[25%] text-xs md:text-base lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200"
                >
                  Detayları Gör
                </Link>
              </div>
            </div>
          </SplideSlide>
        ))}
        <SplideTrack className="w-[500px] h-2" />
      </Splide>
    </section>
  );
};
export default DragSlider;
