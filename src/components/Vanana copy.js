import Image from "next/image";
import Link from "next/link";

const Vanana = (props) => {
  return (
    <section className="relative flex flex-col z-20 w-full h-[480px] md:h-screen p-10 md:p-20 lg:p-40 bg-black overflow-visible">
     

      <div className="relative z-10 flex flex-col justify-center items-center w-full ">
        <div className="w-full lg:w-2/3 z-20 text-2xl md:text-4xl text-center max-w-3xl pt-16">
          <span className="text-[#706338] leading-loose">
            Vanana Gayrimenkul Danışmanlık{" "}
          </span>
          <span className="text-white leading-loose">
            olarak profesyonel ekibimizle, inşaat firmalaranın ve müteahhitlerin
            hedeflerini anlayarak, gayrimenkul satışında her aşamada yardımcı
            olmak için buradayız.
          </span>
        </div>
        <div className="relative lg:self-end lg:pt-80 lg:w-1/3 flex items-end lg:items-center overflow-visible">
          <div className="absolute flex self-end z-10  h-[132.35px] md:h-[183.8px] lg:h-[251px] w-[180px]  md:w-[250px]  lg:w-[342px] overflow-visible">
            <Image
              src="/VananaLogo.svg"
              alt="V"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div className="absolute flex self-end  z-10 h-[177.7px] w-[240px] md:w-[360px] md:h-[266.6px] lg:h-[427px] lg:w-[580px] ">
            <Image
              src="/Logovananagray.svg"
              alt="V"
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Vanana;
