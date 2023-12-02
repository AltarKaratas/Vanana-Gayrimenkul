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

  let mobileResizeWidth = "";

  !props.isFullWidth && screenSize.width <= 500
    ? (mobileResizeWidth = "w-[72vw]")
    : (mobileResizeWidth = "w-[75vw]");

  return (
    <div
      className={`flex relative  px-6 py-12 lg:px-20 ${mobileResizeWidth}  h-[400px] md:h-[360px]   ${
        props.direction === "right" ? "justify-end" : "justify-start"
      }`}
      ref={visibilityRef}
    >
      <div className={`relative h-min ${mobileResizeWidth}`}>
        <h1
          className={`relative inline z-10 text-gold text-2xl md:text-4xl lg:text-5xl mb-4 transition-opacity ease-in
    duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
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

      <Image
        src={props.source}
        alt="bg"
        fill
        objectFit="cover"
        objectPosition="center bottom"
        className="z-0 brightness-50 saturate-[0.15]"
      />
    </div>
  );
};
export default AboutContainer;
