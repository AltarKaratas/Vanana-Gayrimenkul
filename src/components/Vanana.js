import useScreenSize from "@/utils/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

const Vanana = (props) => {
  return (
    <section className="relative flex flex-col justify-center items-center z-10  h-[540px] sm:h-[720px] lg:h-[960px] pt-20 lg:pt-40  overflow-visible ">
      <Image
        src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-40 flex flex-col items-center justify-center  text-left sm:text-center  h-[480px] lg:h-[480px] min-[1900px]:h-[540px] mx-6 xl:mx-20 lg:px-6 py-8  text-2xl md:text-4xl  leading-relaxed overflow-visible  rounded-sm bg-black_000">
        <span className="relative z-40 px-12 xl:px-40 text-white ">
          Vanana Gayrimenkul Danışmanlık olarak profesyonel ekibimizle, inşaat
          firmalaranın ve müteahhitlerin hedeflerini anlayarak, gayrimenkul
          satışında her aşamada yardımcı olmak için buradayız.
        </span>
        <div className="absolute z-30 flex justify-end items-end -bottom-12 md:-bottom-20 xl:-bottom-24 w-full px-16 sm:px-32 md:px-40 lg:px-60 xl:px-80">
          <div className="relative z-20 w-[140px] md:w-[180px] lg:w-[240px] min-[1900px]:w-[320px] h-[105px] md:h-[135px] lg:h-[180px] min-[1900px]:h-[240px]  ">
            <Image
              src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VananaLogo.svg"
              alt="V"
              fill
              className="absolute z-30"
            />
            <Image
              src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Logovananagray.svg"
              alt="V"
              fill
              className="absolute ml-1 mt-1 z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Vanana;
