import useScreenSize from "@/utils/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

const Vanana = (props) => {
  return (
    <section className="relative flex flex-col justify-center items-center z-10 w-full h-[540px] sm:h-[960px] lg:h-[960px] pt-20 lg:pt-40 bg-black_000 overflow-visible">
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full mx-6  lg:mx-20 lg:px-6 py-16 md:py-20 text-2xl md:text-4xl text-center leading-relaxed bg-gradient-to-br from-black_000 via-black_100 to-black_000 ">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-[#706338] to-[#BFB286]">Vanana Gayrimenkul Danışmanlık </h2>
        <span className="text-white">
          olarak profesyonel ekibimizle, inşaat firmalaranın ve müteahhitlerin
          hedeflerini anlayarak, gayrimenkul satışında her aşamada yardımcı
          olmak için buradayız.
        </span>
      </div>

      <div className="absolute z-40 flex justify-end items-end -bottom-12 md:-bottom-20 xl:-bottom-24 w-full px-16 sm:px-32 md:px-40 lg:px-60 xl:px-80">
        <div className="relative w-[140px] md:w-[180px] lg:w-[240px] xl:w-[320px] h-[105px] md:h-[135px] lg:h-[180px] xl:h-[240px]  ">
          <Image src="/VananaLogo.svg" alt="V" fill className="absolute z-40" />
          <Image
            src="/Logovananagray.svg"
            alt="V"
            fill
            className="absolute ml-1 mt-1 z-40"
          />
        </div>
      </div>
    </section>
  );
};
export default Vanana;
