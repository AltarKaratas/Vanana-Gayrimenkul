import React from "react";

import Image from "next/image";

import useScreenSize from "@/utils/hooks/useScreenSize";

const LandingCopy = (props) => {
  const screenSize = useScreenSize()


  return (
    <section>
      <div className="absolute pt-16 md:pt-20 z-[5] w-full flex flex-col">
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
      <div className="absolute top-[20vh] lg:top-[15vh] z-20 w-full flex justify-center ">
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
            ? "relative h-[70vh]  flex flex-col justify-end"
            : "relative h-[calc(100vh-80px)] flex flex-col justify-end"
        } `}
      >
        <div className="relative h-min w-full">
          <div className="flex relative top-16 lg:top-20 w-full h-min flex-col items-center">
            <div className="relative flex flex-col justify-end h-[50vh] sm:h-[45vh] md:h-[55vh] lg:h-[80vh] w-[270px] sm:w-[320px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[850px]">
              <Image
                src="/ArpKuleBulut.svg"
                alt=""
                fill={true}
                sizes=""
                className="z-10 opacity-100 saturate-[85%]"
                objectFit="cover"
              />
              <div className="absolute h-[40vh] md:h-[50vh] lg:h-[60vh] w-[270px] sm:w-[320px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[850px] flex justify-center mx-auto">
                <Image
                  src="/ARP KULE1.png"
                  alt=""
                  fill={true}
                  className="brightness-90 z-30 saturate-[85%]"
                  objectFit="contain"
                  objectPosition="bottom"
                />
              </div>
            </div>
            {screenSize.width < 769 ? (
              <div className="relative visible md:invisible py-6 px-6">
                <h1 className="text-white text-[24px]">
                  Konut ve Kurumsal Emlak Satışında{" "}
                  <h1 className="text-[#A59564] font-semibold inline ">
                    Uzman İsim
                  </h1>
                </h1>
              </div>
            ) : (
              <div className="absolute z-40 h-[50vh] md:h-[60dvh] lg:h-[70vh] w-full flex justify-between items-end px-8 md:px-10 lg:px-20">
                <Image
                  src="/VectorArrowDown.svg"
                  alt="VANANA"
                  width={screenSize.width > 768 ? 96 : 64}
                  height={350}
                  className="animate-[bounce_3s_ease-in-out_infinite]  relative z-20"
                />
                <h1 className="text-white text-right md:text-4xl xl:text-4xl md:w-[280px] lg:w-[300px] xl:w-[320px] relative invisible md:visible">
                  Konut ve Kurumsal Emlak Satışında{" "}
                  <span className="text-[#A59564] font-semibold ">
                    Uzman İsim
                  </span>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingCopy;
