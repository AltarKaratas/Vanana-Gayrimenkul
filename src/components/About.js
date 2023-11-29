import Image from "next/image";
import AboutContainer from "./AboutContainer";
import { Transition } from "@headlessui/react";
import { useRef } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import Link from "next/link";

const About = () => {
  const ref1 = useRef();
  const isVisible = useIsVisible(ref1);
  return (
    <section className="h-min w-full ">
      <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] lg:h-[440px]  relative flex ">
        <Image
          src="/VectorLines.svg"
          alt="Lines"
          fill
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      <div
        className="flex h-[240px] lg:h-[400px] mt-8 pt-8 md:pt-16 md:mt-16 px-10 md:px-20 "
        ref={ref1}
      >
        <h2
          className={`text-white h-min w-full lg:w-2/3 text-left text-4xl lg:text-7xl transition-transform ease-in
          duration-700 ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
        >
          İnşaat projenizde satış ortağınız
          <br />
          <span className="text-gold font-normal text-left">
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
       
        <div className="lg:w-2/3 h-[160px] lg:h-[400px] bg-gradient-to-r from-beige  to-black" />
        <div className="font-inter lg:w-1/3 p-10 md:p-20  h-[320px] lg:h-[400px] flex flex-col lg:justify-center items-center lg:items-end gap-8  bg-black">
          <h3 className="text-gold text-xl md:text-2xl  pt-10 md:pt-0">
            Daha fazla bilgi almak ister misiniz?
          </h3>
          <div className="flex w-full flex-col lg:flex-row items-center lg:justify-end gap-4  ">
            <Link href="/Iletisim" className="text-white text-xl md:text-2xl relative">
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
