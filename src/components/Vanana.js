import Image from "next/image";
import Link from "next/link";

const Vanana = (props) => {
  return (
    <section className="relative flex flex-col w-full h-min px-10 md:px-20 lg:px-40">
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />

      <div className="relative z-10 flex items-center h-min mt-40 xl:mt-60 mb-40 overflow-visible">
        <div className="absolute z-10 -bottom-8 sm:-bottom-16 lg:bottom-0 right-0  h-[132.35px] md:h-[183.8px] lg:h-[251px] w-[180px]  md:w-[250px]  lg:w-[342px] overflow-visible">
          <Image src="/VananaLogo.svg" alt="V" fill={true} objectFit="cover" />
        </div>
        <div className="absolute -bottom-8 sm:-bottom-16 lg:bottom-0 right-0 z-10 h-[177.7px] w-[240px] md:w-[360px] md:h-[266.6px] lg:h-[427px] lg:w-[580px] ">
          <Image
            src="/Logovananagray.svg"
            alt="V"
            fill={true}
            objectFit="cover"
          />
        </div>

        <div className="lg:mx-20 xl:mx-40 my-20 lg:my-40 z-20 text-2xl md:text-4xl text-center">
          <span className="text-[#706338] drop-shadow-md">
            Vanana Gayrimenkul Danışmanlık{" "}
          </span>
          <span className="text-white drop-shadow-md">
            olarak profesyonel ekibimizle, inşaat firmalaranın ve müteahhitlerin
            hedeflerini anlayarak, gayrimenkul satışında her aşamada yardımcı
            olmak için buradayız.
          </span>
        </div>
      </div>
      
    </section>
  );
};
export default Vanana;
