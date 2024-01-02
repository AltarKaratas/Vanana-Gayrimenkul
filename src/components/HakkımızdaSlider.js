"use client"
import useScreenSize from "@/utils/hooks/useScreenSize";

import Image from "next/image";


import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const advantages = [
    {
      h1: "Personel Eğitimi",
      text: "Uzman kadromuzu sizin projenize özel eğitimler vererek projenize özel, daha etkili satış politikları uyguluyoruz.",
      icon: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorPersonnel.svg",
    },
    {
      h1: "Raporlama",
      text: "Piyasa takibi, müşteri satış raporları sistematik bir şekilde elinizde olsun.",
      icon: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorReports.svg",
    },
    {
      h1: "Raporlama",
      text: "Piyasa takibi, müşteri satış raporları sistematik bir şekilde elinizde olsun.",
      icon: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorReports.svg",
    },
    {
      h1: "Fiyat Analizi",
      text: "Gayrimenkul piyasasını aktif bir şekilde takip ederek doğru fiyatlama yapıyoruz.",
      icon: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorBarChart.svg",
    },
    {
      h1: "Fiyat Analizi",
      text: "Gayrimenkul piyasasını aktif bir şekilde takip ederek doğru fiyatlama yapıyoruz.",
      icon: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorBarChart.svg",
    },
  ];


export default function HakkımızdaSlider(props){
    const screenSize = useScreenSize();

    let dragSliderWidth = "752px" 

    if(screenSize.width >= 768) dragSliderWidth="752px"
    if(screenSize.width >= 1024) dragSliderWidth="992px"
    if(screenSize.width >= 1280) dragSliderWidth= "1328px" 
    if(screenSize.width >= 1900) dragSliderWidth= "1648px" 

    return (<Splide
          hasTrack={false}
          className="relative z-10 overflow-visible "
          options={{
            type: "loop",
            width: `${dragSliderWidth}`,
            gap: "16px",
            autoWidth: true,
            snap: true,
            drag: "free",
            arrows: false,
          }}
        >
          <ul className="splide__pagination mt-20"></ul>
          <SplideTrack>
            {advantages.map((advantage_item) => (
              <SplideSlide className="flex justify-center w-[240px] h-[420px] lg:w-[320px] min-[1900px]:h-[540px]  pt-20 bg-gradient-to-b from-black_300 via-black_000 to-black_000 rounded-xs">
                <div className="flex flex-col items-center gap-8 p-4 text-center">
                  <div className="w-[100px] lg:w-[150px] h-[71px] lg:h-[106px] relative flex justify-center items-center">
                    <Image
                      src={`${advantage_item.icon}`}
                      alt=""
                      fill={true}
                      objectFit="contain"
                      
                    />
                  </div>
                  <h1 className="text-white text-xl md:text-2xl font-inter font-bold">
                    {advantage_item.h1}
                  </h1>
                  <p className="text-white">{advantage_item.text}</p>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>)
}