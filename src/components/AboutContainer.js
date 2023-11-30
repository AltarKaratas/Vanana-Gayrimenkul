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
      className={`flex relative px-6 py-24 md:px-12 md:py-20  lg:py-20 lg:px-20 ${
        props.direction === "right" ? "justify-end" : "justify-start"
      }     min-h-[500px] sm:min-h-0 h-[calc(75vh-64px)] md:h-[480px]`}
      ref={visibilityRef}
    >
      <div className="relative h-min w-full lg:w-1/2">
        <h1
          className={`relative inline z-10 text-transparent bg-clip-text bg-gradient-to-r from-beige via-[#736130] to-gold text-2xl md:text-4xl mb-4 transition-opacity ease-in
    duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {props.h1}
          <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac]">
            {props.keyword}
          </span>
        </h1>
        <p className="relative mt-4 mb-8 md:mb-16 z-10 text-white font-light sm:text-base md:text-xl">
          {props.text}
        </p>
      </div>
      
      <Image
        src={props.source}
        alt="bg"
        fill
        objectFit="cover"
        objectPosition="center bottom"
        className="z-0 brightness-[0.2] saturate-[0.2]"
      />
    </div>
  );
};
export default AboutContainer;
