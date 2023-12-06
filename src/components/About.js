"use client";
import Image from "next/image";

import Link from "next/link";

import { useRef, useState, useEffect, useLayoutEffect } from "react";

import AboutContainer from "./AboutContainer";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import useScreenSize from "@/utils/hooks/useScreenSize";
import localFont from "next/font/local";

const sloganArray = ["Satış Gücü", "Deneyim", "Profesyonellik"];
const FADE_INTERVAL_MS = 1800;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

const holimount = localFont({ src: "../Holimountswash.otf" });

const About = () => {
  const [sloganArrayIndex, setSloganArrayIndex] = useState(0);
  const visibilityRef = useRef();
  const visibilityRef1 = useRef();
  const isVisible = useIsVisible(visibilityRef);
  const isVisible1 = useIsVisible(visibilityRef1)
  const screenSize = useScreenSize();
  const [showAnim, setShowAnim] = useState(true);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      showAnim ? setShowAnim(false) : setShowAnim(true);
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [showAnim]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setSloganArrayIndex(
        (prevWordOrder) => (prevWordOrder + 1) % sloganArray.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  console.log(isVisible1)

  return (
    <section id="scrollPoint" className={`transition-all duration-[3500ms] ease-in-out h-min w-full relative  ${isVisible1 ? "bg-black":"bg-[#171717]"}`}>
      <div
        className={`relative z-10 px-6 lg:px-20 h-[480px]  md:h-[720px] 2xl:h-[720px] flex py-16 lg:py-32 transition-all duration-[3500ms] ease-in-out`}
        ref={visibilityRef}
      >
        <div className="w-full md:w-1/2 relative flex flex-col gap-4" >
          <h2
            className={`text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold  z-30  h-min  text-left text-4xl sm:text-4xl md:text-5xl xl:text-7xl  `}
          >
            Aradığınız
            <br />
            {
              <span
                className={`transition-all duration-1000 ease-in-out ${
                  showAnim ? "opacity-100" : "opacity-0"
                } relative text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold  z-30 w-full h-min  text-left text-4xl sm:text-4xl md:text-5xl xl:text-7xl `}
              >
                {sloganArray[sloganArrayIndex]}
              </span>
            }
            <br />
            Vanana Gayrimenkulde.
          </h2>
          <span className={`${holimount.className} absolute bottom-32 sm:bottom-[320px] lg:bottom-40 text-8xl sm:text-[160px] lg:text-[480px] text-white w-full" `} >N</span>
        </div>
        <div className="absolute md:relative w-1/2 bottom-16 right-6 flex items-end justify-end">
          <div className="relative w-32 h-32 sm:w-60 sm:h-60 lg:w-[320px] lg:h-[360px]" ref={visibilityRef1}>
            <Image src="/Vectorhouse.svg" fill alt="" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="flex w-full h-min">
        <div className="w-full h-min">
          <AboutContainer
            source="/Plan.svg"
            h1={"Satış Öncesi Planınız "}
            keyword={"Bizimle Hazır"}
            text={
              "A’dan Z’ ye Planlama. Müşterilerin karşılanmasından etkili satış yöntemlerine kadar tüm detayları sizin için hazırlıyoruz. Konut ve ofis projelerinizin satışını istikrarlı bir şekilde  gerçekleştiriyoruz."
            }
          />
          <AboutContainer
            source="/skyline.jpg"
            h1={"Hedef Kitleye "}
            keyword={"Doğru Reklam "}
            direction="right"
            text={
              "İnşaat sektöründe tecrübeli reklam ajanslarıyla çalışarak hedef müşteri kitlenize  hitap ediyoruz. Projenizi sosyal medyada da tanıtıyoruz."
            }
          />
          <AboutContainer
            source="/handshake.jpg"
            h1={"Müşterilerinize farklı"}
            keyword={"satış deneyimleri yaşatın."}
            text={
              "Örnek dairenin hazırlanmasından, satış ofisinin düzenine kadar , akılda kalıcı, eşsiz bir deneyim sunuyoruz. "
            }
          />
        </div>
        {false && <div className="w-[28vw] relative flex-col mt-12">
          <div className="relative  w-[240px] ml-auto mr-20 h-[320px]  md:h-[640px] lg:h-[720px] transition-all duration-500 delay-200 ease-in-out hover:scale-110">
            <Image
              src="/BannerVanana.svg"
              alt="Banner"
              fill
              className="absolute z-40 saturate-0"
              objectFit="contain"
            />
          </div>
          {screenSize.width <= 768 && (
            <>
              <div className="relative  w-[25vw] mx-auto h-[320px]  md:h-[640px] lg:h-[720px] mt-20 ">
                <Image
                  src="/BannerVanana.svg"
                  alt="Banner"
                  fill
                  className="absolute z-40 saturate-0"
                />
              </div>
              <div className="relative  w-[25vw] mx-auto h-[320px]  md:h-[640px] lg:h-[720px] mt-20 ">
                <Image
                  src="/BannerVanana.svg"
                  alt="Banner"
                  fill
                  className="absolute z-40 saturate-0"
                />
              </div>
            </>
          )}
        </div>}
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        {screenSize.width >= 1024 && (
          <div className="w-3/5 lg:h-[360px] bg-gradient-to-r from-beige to-black" />
        )}
        <div
          className={`font-inter lg:w-2/5 py-12 px-6 lg:px-20 h-[180px] lg:h-[360px] flex flex-col lg:justify-center items-start lg:items-end gap-4 lg:gap-8 ${
            screenSize.width < 1024
              ? "bg-gradient-to-t from-beige to-black"
              : "bg-gradient-to-r from-black to-black"
          } `}
        >
          <h3 className="inline text-left sm:text-right lg:text-left xl:text-right text-gold text-xl lg:text-4xl">
            Daha fazla bilgi almak ister misiniz?
          </h3>
          <div className="flex flex-row items-center justify-start lg:justify-end gap-6">
            <Link
              href="/Iletisim"
              className="inline text-white text-base md:text-2xl relative border-b border-white border-spacing-4"
            >
              İletişim sayfasını ziyaret edin
            </Link>
            <Link href="/Iletisim" className="text-white">
              <Image
                src="/VectorArrowDown.svg"
                alt="VANANA"
                width={screenSize.width < 768 ? 32 : 48}
                height={350}
                className="-rotate-90 transition-all duration-200 ease-in-out hover:scale-110 relative z-20 "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
