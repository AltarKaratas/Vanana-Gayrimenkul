"use client";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { useRef, useState, useEffect, useLayoutEffect } from "react";

import AboutContainer from "./AboutContainer";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import useScreenSize from "@/utils/hooks/useScreenSize";

const sloganArray = ["Satış Gücü", "Deneyim", "Profesyonellik"];
const FADE_INTERVAL_MS = 1800;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

const holimount = localFont({ src: "../Holimountswash.otf" });

const About = () => {
  const [sloganArrayIndex, setSloganArrayIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState("opacity-100");
  const visibilityRef = useRef();
  const isVisible = useIsVisible(visibilityRef);

  const screenSize = useScreenSize();

  useLayoutEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp === "opacity-100"
        ? setFadeProp("opacity-0")
        : setFadeProp("opacity-100");
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useLayoutEffect(() => {
    const wordTimeout = setInterval(() => {
      setSloganArrayIndex(
        (prevWordOrder) => (prevWordOrder + 1) % sloganArray.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <section
      id="scrollPoint"
      className={`relative  transition-all duration-[3500ms] ease-in-out ${
        isVisible ? "bg-black_000" : "bg-black_200"
      } `}
    >
      <div
        className={`relative z-10 flex h-[480px] md:h-[720px] px-6 xl:px-20 py-16 lg:py-32  transition-all duration-[3500ms] ease-in-out`}
      >
        <div className="flex flex-col gap-4 ">
          <h2
            className={`relative text-left text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200`}
          >
            Aradığınız
            <br />
            {
              <span
                className={`${fadeProp} relative text-left text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200 transition-all duration-1000 ease-in-out`}
              >
                {sloganArray[sloganArrayIndex]}
              </span>
            }
            <br />
            Vanana Gayrimenkulde.
            <span
            className={`${holimount.className} absolute -bottom-16 left-0 text-8xl sm:text-[160px] lg:text-[240px] xl:text-[360px] 2xl:text-[480px] text-white select-none`}
          >
            N
          </span>
          </h2>
          
        </div>
        <div className="absolute right-6 xl:right-20 bottom-16 lg:bottom-32 ">
          <div
            className="relative w-32 h-32 sm:w-48 sm:h-48 xl:w-[320px] xl:h-[360px]"
            ref={visibilityRef}
          >
            <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Vectorhouse.svg" fill alt="" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="">
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/AboutPlan.svg"
          h1={"Satış Öncesi Planınız "}
          keyword={"Bizimle Hazır"}
          text={
            "A’dan Z’ ye Planlama. Müşterilerin karşılanmasından etkili satış yöntemlerine kadar tüm detayları sizin için hazırlıyoruz. Konut ve ofis projelerinizin satışını istikrarlı bir şekilde  gerçekleştiriyoruz."
          }
        />
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VananaReklam.jpg"
          h1={"Hedef Kitleye "}
          keyword={"Doğru Reklam "}
          direction="right"
          text={
            "İnşaat sektöründe tecrübeli reklam ajanslarıyla çalışarak hedef müşteri kitlenize  hitap ediyoruz. Projenizi sosyal medyada da tanıtıyoruz."
          }
        />
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/AboutHandshake.webp"
          h1={"Müşterilerinize Farklı"}
          keyword={"Satış Deneyimleri Sunun."}
          text={
            "Örnek dairenin hazırlanmasından, satış ofisinin düzenine kadar , akılda kalıcı, eşsiz bir deneyim sunuyoruz. "
          }
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        {screenSize.width >= 1024 && (
          <div className="w-3/5 lg:h-[360px] bg-gradient-to-r from-beige to-black_000" />
        )}
        <div
          className={`flex flex-col lg:justify-center items-start lg:items-end gap-4 lg:gap-8 lg:w-2/5 h-[180px] md:h-[240px] lg:h-[360px] font-inter py-12 px-6 xl:px-20 ${
            screenSize.width < 1024
              ? "bg-gradient-to-t from-beige to-black_000"
              : "bg-gradient-to-r from-black_000 to-black_000"
          } `}
        >
          <h3 className="inline text-left  lg:text-left xl:text-right text-xl md:text-3xl  text-gold_100">
            Daha fazla bilgi almak ister misiniz?
          </h3>
          <div className="flex flex-row items-center justify-start lg:justify-end gap-6">
            <Link
              href="/Hakkimizda"
              className="inline text-white text-base md:text-xl lg:text-2xl relative border-b border-white border-spacing-4"
            >
              Hakkımızda sayfasını ziyaret edin
            </Link>
            <Link
              href="/Hakkimizda"
              className="relative text-white h-8 w-8 md:w-16 md:h-16 lg:w-24 lg:h-24"
            >
              <Image
                src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorArrowDown.svg"
                alt="VANANA"
                fill
                objectFit="contain"
                className="relative z-20 -rotate-90 transition-all duration-200 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
