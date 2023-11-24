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
    <div className="relative w-[90vw] mx-4 sm:mx-8 lg:mx-20 my-20 z-10">
      <div className="w-full flex justify-between ">
        <h1 className="mb-4 md:mb-8 relative z-20 leading-none  text-4xl md:text-7xl  text-white whitespace-pre">
          Öne Çıkan
          <br />
          Projeler
        </h1>
        <Image
          src="/carouselLines.svg"
          width={screenSize.width / 4}
          height={154}
          alt="lines"
          className=""
        />
      </div>

      <Splide
        className="z-10 pb-10 overflow-visible"
        options={{
          type: "loop",
          width: "90vw",
          gap: "20px",
          autoWidth: true,
          snap: true,
          drag: "free",
          arrows: false,
        }}
      >
        {images.map((img, index) => (
          <SplideSlide
            className={`${
              index % 2 == 0
                ? "w-[90vw] md:w-[650px]  h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] relative z-10 "
                : "w-[90vw] md:w-[650px]  h-[200px] md:h-[360px] shadow-2xl shadow-[#c0c0c01b] relative z-10"
            } `}
            key={index}
          >
            <div className="w-full h-full flex items-end p-4 sm:p-8">
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
                fill={true}
                objectFit={`${index % 2 == 1 ? "cover" : ""}`}
                className="brightness-50 saturate-50"
              />
            </div>
          </SplideSlide>
        ))}
        <SplideTrack className="w-[500px] h-2 bg-slate-100" />
      </Splide>
    </div>
  );
};
export default DragSlider;
