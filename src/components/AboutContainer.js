import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";

const AboutContainer = (props) => {
  const visibilityRef = useRef();
  const isVisible = useIsVisible(visibilityRef);

  return (
    <div
      className={`relative flex flex-col xl:flex-row gap-4 lg:gap-8 w-full h-[480px] md:h-[640px] lg:h-[720px] 2xl:h-[640px] max-w-[1905px] px-6 md:my-12 xl:my-20 xl:px-20 mx-auto`}
      ref={visibilityRef}
    >
      <div
        className={`relative flex justify-center ${
          props.direction == "right"
            ? "xl:order-2 xl:w-1/2"
            : "xl:order-1 xl:w-1/2"
        }`}
      >
        <div className="relative w-[320px] h-[200px] md:w-[640px] lg:w-full md:h-[400px] lg:h-[450px] 2xl:h-[545px]">
          <Image
            src={props.source}
            alt="bg"
            fill
            objectFit="cover"
            objectPosition="center center"
            className="z-0 brightness-75 saturate-[0.55] shadow-[4px_0px_32px_4px_rgba(112,99,56,0.35)] md:shadow-[0px_8px_48px_10px_rgba(112,99,56,0.65)]  xl:shadow-[0px_32px_145px_10px_rgba(112,99,56,0.65)]"
          />
        </div>
      </div>
      <div
        className={`relative md:w-full xl:w-1/2 flex justify-center ${
          props.direction == "right" ? "xl:order-1 " : "xl:order-2 "
        } `}
      >
        <div
          className={`w-[320px] md:w-[640px] lg:w-full h-min xl:pt-32 md:mx-auto lg:mx-0 `}
        >
          <h1
            className={`inline z-10 text-gold text-2xl md:text-4xl text-left mb-4 transition-opacity ease-in 
    duration-[1500ms] ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {props.h1}
            <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white_200 to-gray">
              {props.keyword}
            </span>
          </h1>
          <p className="mt-4 font-light text-white ">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutContainer;
