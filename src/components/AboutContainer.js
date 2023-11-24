import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useRef, useContext } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import generalContext from "@/utils/general_context";

const AboutContainer = (props) => {
  const ref1 = useRef();
  const isVisible = useIsVisible(ref1);
  const generalCtx = useContext(generalContext);

  return (
    <>
      {generalCtx.screenSize.width >= 1024 ? (
        <div
          className={`${
            props.direction === "right" ? "justify-end" : "justify-start"
          }  h-min flex px-10 md:px-20 relative transition-transform ease-in
      duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-1/3"
      } font-bold`}
          ref={ref1}
        >
          <div
            className={`relative flex flex-col justify-center items-center h-[400px] my-12 z-10 max-w-xs lg:max-w-xl`}
          >
            <h1
              className={`text-white w-[70%] self-start text-4xl xl:text-5xl mb-6 transition-opacity ease-in
    duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {props.h1}
              <br />
              <span className="text-gold">{props.keyword}</span>
            </h1>
            <p className="text-white ">{props.text}</p>
          </div>
          <Image
            src={props.source}
            alt="bg"
            fill={true}
            objectFit="cover"
            className=" brightness-[0.25] saturate-[0.25]"
          />
        </div>
      ) : (
        <div
          className={`flex items-center px-10 md:px-20 relative transition-transform ease-in
      duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-1/3"
      } font-bold`}
          ref={ref1}
        >
          <div
            className={`relative flex flex-col justify-center items-center h-[240px] md:h-[320px] my-12 z-10 max-w-sm  lg:max-w-xl`}
          >
            <h1
              className={`text-white w-[70%] self-start text-2xl md:text-4xl xl:text-5xl mb-6 transition-opacity ease-in
    duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {props.h1}
              <br />
              <span className="text-[#706338]">{props.keyword}</span>
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
    </>
  );
};
export default AboutContainer;
