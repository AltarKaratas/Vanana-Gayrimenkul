import Image from "next/image";
import AboutContainer from "./AboutContainer";
import { Transition } from "@headlessui/react";
import { useRef } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";

const About = () => {
  const ref1 = useRef();
  const isVisible = useIsVisible(ref1);
  return (
    <section className="h-min w-full bg-gradient-to-b from-[#0d0d0] to-[#171717]">
      <div className="w-full h-[120px] sm:h-[240px] md:h-[320px] lg:h-[400px] mb-[60px] sm:mb-[120px] md:mb-[160px] lg:mb-[200px] relative flex">
        <Image
          src="/VectorLines.svg"
          alt="Lines"
          fill={true}
          objectFit="cover"
        />
      </div>

      <div
        className="flex items-center mx-10 md:mx-20  my-20 md:my-40"
        ref={ref1}
      >
        <h1
          className={`text-white text-left text-2xl md:text-4xl lg:text-5xl font-light w-1/2 transition-transform ease-in
          duration-700 ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
        >
          İnşaat projenizde satış ortağınız
          <h1 className="text-[#706338]">Her zaman yanınızda</h1>
        </h1>
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
        direction="right"
      />
      <AboutContainer
        source="/handshake.jpg"
        h1={"Müşterilerinize farklı bir "}
        keyword={"satış deneyimi yaşatın."}
        text={
          "Örnek dairenin hazırlanmasından, satış ofisinin düzenine kadar , akılda kalıcı, eşsiz bir deneyim sunuyoruz. "
        }
      />
    </section>
  );
};
export default About;
