"use client";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import AboutContainer from "./AboutContainer";
import useScreenSize from "@/utils/hooks/useScreenSize";

const sloganArray = ["Satış Gücü", "Deneyim", "Profesyonellik"];
const time_between_text = 2;

const transition_duration = 0.5;


const About = () => {
  const [fadeProp, setFadeProp] = useState(0);
  const screenSize = useScreenSize();

  useEffect(() => {
    const timerId = setInterval(() => {
      setFadeProp(p => {
        if (p === sloganArray.length - 1) p = -transition_duration;
        else p = p + transition_duration;
        return p;
      });
    }, time_between_text * 1000)

    return () => clearInterval(timerId);
  }, [])


  // useEffect(() => {
  //   const fadeTimeout = setInterval(() => {
  //     fadeProp === "opacity-100"
  //       ? setFadeProp("opacity-0")
  //       : setFadeProp("opacity-100");
  //   }, FADE_INTERVAL_MS);

  //   return () => clearInterval(fadeTimeout);
  // }, [fadeProp]);

  // useEffect(() => {
  //   const wordTimeout = setInterval(() => { 
  //     setSloganArrayIndex(
  //       (prevWordOrder) => (prevWordOrder + 1) % sloganArray.length
  //     );
  //   }, WORD_CHANGE_INTERVAL_MS);

  //   return () => clearInterval(wordTimeout);
  // }, []);

  return (
    <section
      id="scrollPoint"
      className={`relative transition-all duration-[3500ms] ease-in-out bg-black_000 `}
    >
      <div
        className={`relative z-10 flex h-[720px] px-6 xl:px-20 py-16 lg:py-32  transition-all duration-[3500ms] ease-in-out`}
      >
        <div className="flex flex-col gap-12 xl:gap-16 justify-start items-start xl:justify-between">
          <h2
            className={`relative text-left text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200`}
          >
            Aradığınız
            <br />
            {
              <span
                className={`relative w-full text-left text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200 transition-all duration-1000 ease-in-out`}
              >
                {sloganArray.map((t, i) => <p key={i} style={{ opacity: `${fadeProp === i ? 1 : 0}`, transitionDuration: `${time_between_text + transition_duration}s` }} className={`absolute top-0 left-0 w-[320px] xl:w-[720px] text-white_100`} >{t}</p>)}
              </span>
            }
            <br />
            Vanana Gayrimenkulde.
            <div className="relative w-[240px] md:w-[480px] xl:w-[720px] 2xl:w-[960px] h-[48px]">
              <Image src="line.svg" alt="" fill />
            </div>
          </h2>
          <div className="w-2/3">
            <p className="  text-transparent bg-clip-text bg-gradient-to-r from-gold_200 via-gray to-gray font-archivo xl:font-semibold  xl:text-xl leading-relaxed text-left">Yeni sitesiyle Vanana sizlerle.<br /></p>
            <span className="w-3/4 text-white_100 font-light text-sm">Müteahhit ve inşaat firmalarına <span className="text-white font-semibold">müşteri desteği</span>,<span className="text-white font-bold"> satış planlaması</span> gibi satış öncesi ve sonrası hizmetler sunan <span className="text-gold_200 font-semibold ">Vanana</span>, konut ve kurumsal projelerinizin değerini arttırmak için burada.</span>
          </div>

        </div>
        <div className="absolute right-6 xl:right-20 bottom-16 lg:bottom-32 ">
          <div
            className="relative w-32 h-32 sm:w-48 sm:h-48 xl:w-[320px] xl:h-[360px]"
          >
            <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Vectorhouse.svg" fill alt="" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="">
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/AboutPlan.webp"
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
          <div className="w-3/5 lg:h-[360px] bg-gradient-to-r from-beige to-transparent" />
        )}
        <div
          className={`flex flex-col lg:justify-center gap-4 lg:gap-8 lg:w-2/5 h-[180px] md:h-[240px] lg:h-[360px] font-inter py-12 px-6 xl:px-20 ${screenSize.width < 1024
            ? "bg-gradient-to-t from-beige to-black_200"
            : "bg-gradient-to-r from-transparent to-transparent"
            } `}
        >
          <h3 className="inline xl:text-right text-xl text-gold_100">
            Daha fazla bilgi almak ister misiniz?
          </h3>
          <div className="flex flex-row items-center xl:justify-end
           gap-4">
            <Link
              href="/Hakkimizda"
              className="inline text-white text-right text-base md:text-2xl  relative border-b border-white border-spacing-4"
            >
              Hakkımızda bilgi alın
            </Link>
            <Link
              href="/Hakkimizda"
              className="relative text-white h-8 w-8 md:w-16 md:h-16 "
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
