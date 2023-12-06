import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useRef, useContext } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import generalContext from "@/utils/general_context";
import useScreenSize from "@/utils/hooks/useScreenSize";
import Link from "next/link";

const AboutContainer = (props) => {
  const visibilityRef = useRef();
  const isVisible = useIsVisible(visibilityRef);
  const screenSize = useScreenSize();

  return (
    <div
      className={`flex flex-col xl:flex-row gap-4 md:gap-8 lg:gap-16 relative px-6 md:my-12 xl:my-20 lg:px-20 w-full h-[480px] md:h-[640px] lg:h-[720px] 2xl:h-[640px]`}
      ref={visibilityRef}
    >
      <div className={`relative  h-min w-full flex justify-center md:justify-start ${props.direction == "right" ? "xl:order-2 xl:w-1/2" : "xl:order-1 xl:w-1/2"}`}>
        <div className="w-[320px] h-[200px] md:w-[640px] md:h-[400px] lg:w-[720px] 2xl:w-[840px] lg:h-[450px] 2xl:h-[545px] relative">
          <Image
            src={props.source}
            alt="bg"
            fill
            objectFit="cover"
            objectPosition="center center"
            className="z-0 brightness-50 saturate-[0.55]"
          />
        </div>
      </div>
      <div className={`relative md:w-full xl:w-1/2 h-min ${props.direction == "right" ? "xl:order-1 " : "xl:order-2 "} `}>
        <div
          className={`relative mx-auto md:mx-0 h-min w-[320px] xl:mx-auto md:w-[640px] lg:w-[720px] xl:w-[840px] 2xl:w-[840px] xl:pt-32 `}
        >
          <h1
            className={`relative inline z-10 text-gold text-2xl md:text-4xl lg:text-5xl  text-left mb-4 transition-opacity ease-in 
    duration-[1500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {props.h1}
            <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac]">
              {props.keyword}
            </span>
          </h1>
          <p className="relative mt-4 z-10 text-white font-light sm:text-base md:text-xl">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutContainer;
