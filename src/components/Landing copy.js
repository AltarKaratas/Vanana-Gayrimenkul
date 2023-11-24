import React, { useContext } from "react";
import GeneralContext from "@/utils/general_context";
import { Transition } from "@headlessui/react";
import Image from "next/image";

import useScreenSize from "@/utils/hooks/useScreenSize";

const Landing = (props) => {
  const generalContext = useContext(GeneralContext);

  const screenSize = useScreenSize();

  const height = screenSize.height;
  
  return (
    <Transition
      show={true}
      appear={true}
      enter="transition duration-5000 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-5000 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={`relative w-full`}
    >
      <div className={`absolute w-[100vw] h-[${height}px] mx-auto flex flex-col justify-center`}>
        <div
          className={`relative z-[20] flex justify-end h-1/2 top-[20%] sm:top-0  right-[10%] md:right-[15%] lg:right-[20%]`}
        >
          <Image
            src="/backgroundImage.svg"
            alt="lines"
            width={screenSize.width < 769 ? 200 : 500}
            height={168}
          />
        </div>
        <div className="relative sm:-top-[0]  md:-top-[10%] lg:-top-[15%] sm:left-[15%]  ">
          <Image
            src="/backgroundImage.svg"
            alt="lines"
            width={screenSize.width < 769 ? 200 : 500}
            height={268}
          />
        </div>
      </div>

      <div className="flex justify-center items-start  w-full h-2/3 lg:h-screen px-4 lg:px-20">
        <div className="absolute z-[10] top-[20%] sm:top-[15%] md:top-[18%]  lg:top-[20%]">
          <Image
            src="/Landing Vanana Text.svg"
            alt="VANANA"
            width={screenSize.width < 1024 ? 270 : 1000}
            height={1}
          />
        </div>

        <div className=" flex items-start justify-center w-2/3 md:w-1/2 h-1/2  absolute top-[22%] sm:top-[25%] md:top-[27%]  lg:top-[25%] xl:top-[28%]">
          <Image
            src="/ArpKule.svg"
            alt="VANANA"
            width={screenSize.width > 1280 ? 1050 : screenSize.width/2}
            height={350}
            className={`absolute z-5 ${
              screenSize.width < 1281 ? "scale-y-[208%]" : ""
            }`}
          />
          <Image
            src="/ArpKuleBg.svg"
            alt="VANANA"
            width={screenSize.width > 1280 ? 682 : screenSize.width/2}
            height={350}
            className="absolute z-10"
          />
        </div>

        <Image
          src="/VectorArrowDown.svg"
          alt="VANANA"
          width={screenSize.width > 768 ? 96 : 64}
          height={350}
          className="animate-bounce absolute z-20 invisible md:visible  md:top-[50%] xl:top-[60%] left-[6%]"
        />
        <div className="flex gap-1 justify-center md:block  md:w-min absolute z-20 top-[50%] sm:top-[65%] sm:right-[3%] px-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl  md:w-[350px] text-slate-200">
            Konut ve Kurumsal Emlak Satışında Uzman
          </h2>
        </div>
      </div>
    </Transition>
  );
};
export default Landing;
