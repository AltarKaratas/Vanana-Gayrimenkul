import React from "react";

import Image from "next/image";
import Link from "next/link";
import useScroll from "next/router";

import useScreenSize from "@/utils/hooks/useScreenSize";

const Landing = (props) => {
  const screenSize = useScreenSize();
  const pageWidth = screenSize.width;

  let calculatedHeight = "h-[75vh]";
  if (pageWidth < 768) calculatedHeight = "h-[75vh]";
  else if (pageWidth >= 768 && pageWidth <= 1024) calculatedHeight = "h-[70vh]";
  else if (pageWidth > 1024) calculatedHeight = "h-[100dvh]";

  return (
    <section
      className={`${calculatedHeight} pt-16 lg:pt-20 flex justify-center items-end bg-gradient-to-b from-[#0a0a0a] to-[#171717]`}
    >
      <div className="absolute px-6 md:px-12 lg:px-20 w-full flex flex-col self-start">
        <Image
          src="/backgroundImage.svg"
          width={screenSize.width <= 768 ? 200 : 400}
          height={500}
          className="self-end"
        />
        <Image
          src="/backgroundImage.svg"
          width={screenSize.width <= 768 ? 200 : 400}
          height={500}
          className="self-start"
        />
      </div>
      {screenSize.width < 768 && (
        <div className="w-full h-full absolute px-6 md:px-12 z-40 flex justify-start items-end ">
          <div className="relative h-1/3 md:h-1/4 flex items-start">
            <Link href="#scrollPoint">
              <Image
                src="/VectorArrowDown.svg"
                alt="VANANA"
                width={screenSize.width <= 768 ? 64 : 96}
                height={350}
                className="animate-[bounce_3s_ease-in-out_infinite] relative z-20"
              />
            </Link>
          </div>
        </div>
      )}

      <div className="relative h-full w-full flex flex-col items-center pt-6 md:pt-12">
        <div className="absolute z-30  mt-[10vh]  h-[15dvw] sm:h-[100px] md:h-[120px] lg:h-[200px] 2xl:h-[250px] w-[290px] sm:w-[540px] md:w-[640px] lg:w-[720px] xl:w-[960px] 2xl:w-[1150px] ">
          <Image
            src="/Landing Vanana Text.svg"
            alt=""
            fill
            objectFit="contain"
            className="absolute"
          />
        </div>
        <div className="flex relative h-full w-full flex-col items-center justify-end">
          <div className="relative flex flex-col items-center justify-end h-full  w-[320px] sm:w-[480px] md:w-[540px] lg:w-[640px] xl:w-[720px]">
            <Image src="/ArpKuleBulut.svg" alt="" fill objectFit="cover" className="brightness-75"/>
            <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] w-[270px] sm:w-[320px] md:w-[360px]  lg:w-[480px]">
              <Image
                src="/ARP KULE1.png"
                alt=""
                fill
                className="z-30"
                objectFit="contain"
                objectPosition="bottom"
              />
            </div>
            <div className="absolute z-40 h-full w-[100vw]">
              {screenSize.width >= 768 && (
                <div className="relative h-full w-full flex justify-between items-end md:p-8 lg:p-20">
                  <Link href="#scrollPoint">
                    <Image
                      src="/VectorArrowDown.svg"
                      alt="VANANA"
                      width={96}
                      height={350}
                      className="animate-[bounce_3s_ease-in-out_infinite] relative z-20"
                    />
                  </Link>

                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold text-right md:text-4xl relative invisible md:visible">
                    Konut ve Kurumsal
                    <br /> Emlak Satışında
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold relative z-20">
                      Uzman İsim
                    </span>
                  </h1>
                </div>
              )}
            </div>
          </div>
          {screenSize.width < 768 && (
            <div className="relative p-6 md:p-12">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold text-2xl sm:text-4xl">
                Konut ve Kurumsal Emlak Satışında
                <br />
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold relative z-20">
                  Uzman İsim
                </h1>
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Landing;
