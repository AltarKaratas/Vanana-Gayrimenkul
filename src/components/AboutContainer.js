import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useRef, useContext } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import generalContext from "@/utils/general_context";
import useScreenSize from "@/utils/hooks/useScreenSize";

const AboutContainer = (props) => {
  const ref1 = useRef();
  const isVisible = useIsVisible(ref1);
  const screenSize = useScreenSize();

  return (
    <div>
      {screenSize.width >= 1024 ? (
        <div
          className={`flex relative px-20 ${
            props.direction === "right" ? "justify-end" : "justify-start"
          }   p-10 md:p-20  h-[120px] sm:h-[240px] md:h-[320px] lg:h-[400px]`}
          ref={ref1}
        >
         <div className="relative h-min w-[45%]">
            <h1
              className={`relative z-10 text-gold   text-4xl xl:text-5xl mb-6 transition-opacity ease-in
    duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {props.h1}
              <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac]">
                {props.keyword}
              </span>
            </h1>
            <p className="relative z-10 text-white font-light text-xl">{props.text}</p>
            </div>
          <Image  
            src={props.source}
            alt="bg"
            fill
            objectFit="cover"
            className="absolute z-0 brightness-[0.25] saturate-[0.25]"
          />
        </div>
      ) : (
        <div
          className={`flex p-10 md:p-20 relative transition-transform ease-in
      duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-1/3"
      } font-bold`}
          ref={ref1}
        >
          <div
            className={`relative flex flex-col justify-center items-center h-[240px] md:h-[320px] z-10 max-w-sm  lg:max-w-xl `}
          >
            <h1
              className={`self-start text-2xl md:text-4xl xl:text-5xl mb-6 transition-opacity ease-in
    duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} text-gold  `}
            >
              {props.h1}
              <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] to-[#acacac]">
                {props.keyword}
              </span>
            </h1>
            <p className="text-white font-light">{props.text}</p>
          </div>
          <Image
            src={props.source}
            alt="bg"
            fill={true}
            objectFit="cover"
            className=" brightness-[0.25] saturate-[0.25]"
          />
        </div>
      )}
    </div>
  );
};
export default AboutContainer;
