import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

import AboutContainer from "./AboutContainer";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import useScreenSize from "@/utils/hooks/useScreenSize";

const About = () => {
  const visibilityRef = useRef();
  const isVisible = useIsVisible(visibilityRef);
  const screenSize = useScreenSize();

  return (
    <section id="scrollPoint" className="h-min w-full relative ">
      <div
        className="z-10 px-6 lg:px-20 h-[320px] md:h-[480px] lg:h-[720px] flex justify-center items-center bg-gradient-to-b from-[#171717] to-beige "
        ref={visibilityRef}
      >
        <h2
          className={`relative font-inter z-30 w-full h-min text-white text-left text-2xl md:text-5xl xl:text-7xl transition-all ease-in-out
          duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          İnşaat projenizde satış ortağınız
          <br /> her zaman yanınızda
        </h2>
      </div>
      <div className="flex h-min bg-gradient-to-t from-beige to-[#0a0a0a] ">
        <div className="h-min">
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
        <div className="w-[28vw] relative flex-col gap-8 mt-16 lg:mt-40">
        <div className="relative  w-[25vw] mx-auto h-[320px] sm:h-[320px] md:h-[640px] lg:h-[720px] transition-all duration-300 ease-in-out hover:scale-110">
            <Image
              src="/BannerVanana.svg"
              alt="Banner"
              fill
              className="absolute z-40 saturate-0"
            />
            </div>
          {screenSize.width <= 768 && (
            <div className="relative  w-[25vw] mx-auto h-[320px] sm:h-[320px] md:h-[640px] lg:h-[720px] mt-32">
            <Image
              src="/BannerVanana.svg"
              alt="Banner"
              fill
              className="absolute z-40 saturate-0"
            />
            </div>
          )}
        </div>
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
