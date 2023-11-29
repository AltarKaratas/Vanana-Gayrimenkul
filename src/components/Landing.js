import React from "react";

import Image from "next/image";
import Link from "next/link";
import useScroll from "next/router";

import useScreenSize from "@/utils/hooks/useScreenSize";

const Landing = (props) => {
  const screenSize = useScreenSize();

  return (
    <section className="h-[80vh] lg:h-[100dvh] pt-16 md:pt-20 flex justify-center items-end">
      <div className="absolute px-6 lg:px-12 w-full flex flex-col self-start">
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
      {screenSize.width <= 1024 && (
        <div className="w-full h-full absolute px-6 z-40 flex justify-start items-end ">
          <div className="relative h-1/3 flex items-start">
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

      <div
        className={`${
          screenSize.width < 1024
            ? "relative h-[80vh] w-full flex flex-col justify-end"
            : "relative h-[calc(100vh-80px)] w-full flex flex-col justify-end"
        } `}
      >
        <div className="flex relative w-full h-full flex-col items-center pt-24 md:pt-32 ">
          <div className="absolute z-30  mt-16 sm:mt-8 h-[15dvw] sm:h-[100px] md:h-[120px] lg:h-[200px] 2xl:h-[250px] w-[290px] sm:w-[540px] md:w-[640px] lg:w-[840px] xl:w-[960px] 2xl:w-[1150px] ">
            <Image
              src="/Landing Vanana Text.svg"
              alt=""
              fill
              objectFit="contain"
              className="absolute"
            />
          </div>
          <div className="relative flex flex-col items-center justify-end h-[50vh] sm:h-[45vh] md:h-[55vh] lg:h-[80vh] w-[270px] sm:w-[480px] md:w-[540px] lg:w-[640px] xl:w-[720px]">
            <Image
              src="/ArpKuleBulut.svg"
              alt=""
              fill
              sizes=" (min-width:640px) 270px, (min-width:768px) 480w, (min-width:1024px) 640w, (min-width:1280px) 720px,100vw"
              className="z-10 opacity-100 saturate-[85%]"
              objectFit="cover"
            />
            <div className="absolute h-[40vh] md:h-[50vh] lg:h-[70vh] w-[270px] sm:w-[320px] md:w-[360px] lg:w-[480px] flex justify-center">
              <Image
                src="/ARP KULE1.png"
                alt=""
                fill={true}
                className="relative brightness-90 z-30 saturate-[85%]"
                objectFit="contain"
                objectPosition="bottom"
              />
            </div>
          </div>
          {screenSize.width <= 1024 ? (
            <div className="relative p-6">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac] text-2xl sm:text-4xl">
                Konut ve Kurumsal Emlak Satışında
                <br />
                <h1 className="text-light_gold relative z-20 font-semibold">
                  Uzman İsim
                </h1>
              </h1>
            </div>
          ) : (
            <div className="absolute z-40 h-[50vh] md:h-[60dvh] lg:h-[70vh] w-[100vw] flex justify-between items-end px-12">
              {screenSize.width > 1024 && (
                <Link href="#scrollPoint">
                  <Image
                    src="/VectorArrowDown.svg"
                    alt="VANANA"
                    width={96}
                    height={350}
                    className="animate-[bounce_3s_ease-in-out_infinite] relative z-20"
                  />
                </Link>
              )}
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac] md:text-4xl xl:text-4xl md:w-[280px] lg:w-[300px] xl:w-[320px] relative invisible md:visible transition-all duration-300 ease-in-out tran">
                Konut ve Kurumsal Emlak Satışında{" "}
                <span className="text-light_gold relative z-20 font-semibold ">
                  Uzman İsim
                </span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Landing;
