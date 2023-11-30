import useScreenSize from "@/utils/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

const Vanana = (props) => {
  const screenSize = useScreenSize();
  return (
    <section className="relative  flex flex-col justify-center items-center z-10 w-full h-[540px] sm:h-[960px] lg:h-[1120px]   overflow-visible pt-40 ">
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10 w-full h-full px-4 flex flex-col items-center justify-center text-2xl md:text-4xl text-center leading-relaxed bg-black overflow-visible">
        <h2 className="text-[#706338] ">Vanana Gayrimenkul Danışmanlık </h2>
        <span className="text-white">
          olarak profesyonel ekibimizle, inşaat firmalaranın ve müteahhitlerin
          hedeflerini anlayarak, gayrimenkul satışında her aşamada yardımcı
          olmak için buradayız.
        </span>
      </div>

      <div className="absolute z-40 w-full -bottom-12 md:-bottom-20 xl:-bottom-24 flex  justify-end px-16 sm:px-32 md:px-40 lg:px-60 xl:px-80 items-end overflow-visible">
        <div className="relative z-40 w-[140px] md:w-[180px] lg:w-[240px] xl:w-[320px] h-[105px] md:h-[135px] lg:h-[180px] xl:h-[240px] overflow-visible ">
          <Image src="/VananaLogo.svg" alt="V" fill className="absolute z-40" />
          <Image
            src="/Logovananagray.svg"
            alt="V"
            fill
            className="absolute ml-2 mt-2 z-40"
          />
        </div>
      </div>
    </section>
  );
};
export default Vanana;
