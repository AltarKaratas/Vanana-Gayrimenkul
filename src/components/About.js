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
    <section id="scrollPoint" className="h-min w-full ">
      <div className="relative w-full h-[80px] sm:h-[240px] md:h-[320px] lg:h-[440px]">
        <Image
          src="/VectorLines.svg"
          alt="Lines"
          fill
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      <div
        className="pt-8 pb-16 md:pt-16 md:pb-32 px-6 md:px-12 lg:px-20 flex"
        ref={visibilityRef}
      >
        <h2
          className={`text-white w-full  text-left text-2xl lg:text-5xl transition-all ease-in-out
          duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          İnşaat projenizde <br/>satış ortağınız
          <br />
          <span className="text-gold">
            Her zaman yanınızda
          </span>
        </h2>
      </div>

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
        h1={"Müşterilerinize farklı bir "}
        keyword={"satış deneyimi yaşatın."}
        text={
          "Örnek dairenin hazırlanmasından, satış ofisinin düzenine kadar , akılda kalıcı, eşsiz bir deneyim sunuyoruz. "
        }

      />
      <div className="flex flex-col-reverse lg:flex-row">
        {screenSize.width >=1024 && <div className="lg:w-3/5 h-[160px] lg:h-[400px] bg-gradient-to-r from-beige to-black" />}
        <div className={`font-inter lg:w-2/5 p-10 md:p-20  h-[320px] lg:h-[400px] flex flex-col lg:justify-center items-center lg:items-end gap-6 ${screenSize.width < 1024 ? "bg-gradient-to-t from-beige to-black":"bg-gradient-to-r from-black to-black"} `}>
          <h3 className="inline text-center sm:text-right text-gold text-2xl md:text-4xl pt-10 md:pt-0">
            Daha fazla bilgi almak ister misiniz?
          </h3>
          <div className="flex flex-col lg:flex-row items-center lg:justify-end gap-6">
            <Link href="/Iletisim" className="text-white text-base md:text-2xl relative border-b border-white border-spacing-4">
              İletişim sayfasını ziyaret et
            </Link>
            <Link href="/Iletisim" className="text-white">
              <Image
                src="/VectorArrowDown.svg"
                alt="VANANA"
                width={64}
                height={350}
                className="-rotate-90 transition-all duration-200 ease-in-out hover:scale-110 relative z-20"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
