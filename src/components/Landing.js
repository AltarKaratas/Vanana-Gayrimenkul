import React from "react";

import Image from "next/image";

import useScreenSize from "@/utils/hooks/useScreenSize";


const Landing = (props) => {
  const screenSize = useScreenSize();

  return (
    <section className="h-[80vh] lg:h-[100dvh] w- flex justify-center items-end">
      <div className="absolute pt-16 md:pt-20 px-10 md:px-20 z-[5] w-full flex flex-col self-start">
        <Image
          src="/backgroundImage.svg"
          width={screenSize.width < 769 ? 200 : 400}
          height={500}
          className="self-end"
        />
        <Image
          src="/backgroundImage.svg"
          width={screenSize.width < 769 ? 200 : 400}
          height={500}
          className="self-start"
        />
      </div>
      <div className="absolute top-[20vh] lg:top-[15vh] xl:top-[25vh] z-20 w-full flex justify-center ">
        <div className="h-[15dvw] sm:h-[100px] md:h-[120px] lg:h-[200px] 2xl:h-[250px] w-[290px] sm:w-[320px] md:w-[420px] lg:w-[600px] xl:w-[800px] 2xl:w-[1150px] ">
          <Image
            src="/Landing Vanana Text.svg"
            alt=""
            fill={true}
            objectFit="contain"
            className="absolute"
          />
        </div>
      </div>

      <div
        className={`${
          screenSize.width < 1024
            ? "relative h-[80vh]  w-full flex flex-col justify-end"
            : "relative h-[calc(100vh-80px)] w-full flex flex-col justify-end"
        } `}
      >
          <div className="flex relative w-full h-full flex-col items-center pt-24 ">
            <div className="relative flex flex-col justify-end h-[50vh] sm:h-[45vh] md:h-[55vh] lg:h-[80vh] w-[270px] sm:w-[320px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[850px]">
              <Image
                src="/ArpKuleBulut.svg"
                alt=""
                fill={true}
                sizes=""
                className="z-10 opacity-100 saturate-[85%]"
                objectFit="cover"
              />
              <div className="absolute h-[40vh] md:h-[50vh] lg:h-[60vh] w-[270px] sm:w-[320px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[850px] flex justify-center">
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
              <div className="relative py-6 px-10">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac] text-2xl md:text-4xl">
                  Konut ve Kurumsal Emlak Satışında<br/>
                  <h1 className="text-[#A59564] relative z-20 font-semibold">
                    Uzman İsim
                  </h1>
                </h1>
              </div>
            ) : (
              <div className="absolute z-40 h-[50vh] md:h-[60dvh] lg:h-[70vh] w-[100vw] flex justify-between items-end px-10 md:px-20">
                <Image
                  src="/VectorArrowDown.svg"
                  alt="VANANA"
                  width={screenSize.width > 768 ? 96 : 64}
                  height={350}
                  className="animate-[bounce_3s_ease-in-out_infinite]  relative z-20"
                />
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac]  md:text-4xl xl:text-4xl md:w-[280px] lg:w-[300px] xl:w-[320px] relative invisible md:visible transition-all duration-300 ease-in-out tran">
                    Konut ve Kurumsal Emlak Satışında{" "}
                    <span className="text-gold relative z-20 font-semibold ">
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
