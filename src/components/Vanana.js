import useScreenSize from "@/utils/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

const Vanana = (props) => {
  const screenSize = useScreenSize();
  return (
    <section className="relative flex flex-col justify-center items-center z-20 w-full h-[540px] sm:h-[640px] lg:h-[800px]  bg-black overflow-visible">
      <div className="w-full lg:w-2/3 px-4 flex flex-col h-min text-2xl md:text-4xl text-center leading-relaxed z-30">
        <span className="text-[#706338] ">Vanana Gayrimenkul Danışmanlık </span>
        <span className="text-white">
          olarak profesyonel ekibimizle, inşaat firmalaranın ve müteahhitlerin
          hedeflerini anlayarak, gayrimenkul satışında her aşamada yardımcı
          olmak için buradayız.
        </span>
      </div>

      <div className="absolute w-full -bottom-12 md:-bottom-20 xl:-bottom-24 flex  justify-end px-16 sm:px-32 md:px-40 lg:px-60 xl:px-80  items-end">
        <div className="relative  w-[140px] md:w-[180px] lg:w-[240px] xl:w-[320px] h-[105px] md:h-[135px] lg:h-[180px] xl:h-[240px] ">
          <Image
            src="/VananaLogo.svg"
            alt="V"
            fill
            className="absolute"
          /> 
          <Image src="/Logovananagray.svg" alt="V" fill className="absolute ml-2 mt-2" />
        </div>
      </div>
    </section>
  );
};
export default Vanana;
