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
            Vanana'da.
            <div className="relative w-[240px] md:w-[480px] xl:w-[720px] 2xl:w-[960px] h-[48px]">
              <Image src="line.svg" alt="background" fill />
            </div>
          </h2>
          <div className="w-2/3 pr-2">
            <p className="mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gold_200 via-gray to-gray font-archivo xl:font-semibold  xl:text-2xl leading-relaxed text-left">İnşaat projenizin satışında profesyonel destek mi arıyorsunuz? <br /></p>
            <span className="w-3/4 text-white_100 font-light xl:text-xl">Ankara'da faaliyet gösteren <span className="text-white font-semibold ">gayrimenkul satış danışmanlığı firması olarak</span>, müteahhit ve inşaat firmalarına yönelik <span className="text-white font-semibold">müşteri yönetimi</span>,<span className="text-white font-bold"> satış planlaması</span> gibi satış öncesi ve sonrası hizmetler ile konut ve kurumsal projelerinizin değerini arttırmak için buradayız.</span>
          </div>

        </div>
        <div className="absolute right-6 xl:right-20 bottom-16 lg:bottom-32 ">
          <div
            className="relative w-24 h-24 sm:w-48 sm:h-48 xl:w-[308px] xl:h-[328px]"
          >
            <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Vectorhouse.svg" fill alt="Vanana Giriş Slogan Logo" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="">
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/plan.webp"
          h1={"Satış Öncesi Planınız "}
          keyword={"Bizimle Hazır"}
          text={
            `A’dan Z’ ye Planlama. Müşterilerin karşılanmasından etkili satış yöntemlerine kadar tüm detayları sizin için hazırlıyoruz. Konut ve ofis projelerinizin satışını istikrarlı bir şekilde  gerçekleştiriyoruz.`
          }
          dangerousHTML = {true}
          text2 ={"Gayrimenkul sektöründeki saygın firmalarla iş birliği yapan <b>Vanana</b>, bu tecrübeler ışığında müşterilerine profesyonel çözümler ve kanıtlanmış bir \"<b>yol haritası</b>\" sunmaktadır."}
          link ={"/Hakkimizda?id=referanslar"}
          linkText = {"Referanslarımız"} 
        />
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VananaReklam.jpg"
          h1={"Hedef Kitleye "}
          keyword={"Doğru Reklam"}
          direction="right"
          text={
            "İnşaat projenize ve müşteri kitlenize uygun, \"etkili\" sosyal medya reklamları ve ve fiziksel reklamlar veriyoruz."
          }
          dangerousHTML = {true}
          text2 ={"Özellikle <b>inşaat konusunda uzman reklam ajanslarıyla çalışarak, profesyonel satış ekibimizle</b> koordineli bir şekilde satış reklam çalışmaları yapıyoruz. Billboardlar ve broşürler ile markanızın bilinirliğini arttırıyoruz."}
        />
        <AboutContainer
          source="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/AboutHandshake.webp"
          h1={"Müşterilerinize Farklı"}
          keyword={"Satış Deneyimleri Sunun."}
          text={
            "Örnek dairenin hazırlanmasından, satış ofisinin düzenine kadar, akılda kalıcı, eşsiz bir deneyim sunuyoruz."
          }
          dangerousHTML = {true}
          text2={"Sadece satış yaptığımız müşteriler değil aynı zamanda inşaat firmalarının ihtiyaçlarına yönelik hizmetler de sunuyoruz. İnşaat projenizde <b>çevre proje analizi, fiyatlandırma, hedef müşteri analizi</b> gibi raporlar düzenli olarak elinizde olsun."}
          
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
                alt="Hakkımızda Sayfası"
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
