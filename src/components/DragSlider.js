import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@/utils/hooks/useScreenSize";

export const images = [
  {
    title: "Test 1",
    imageUrl: "/FarasHighHill.webp",
    id: "Test1",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl: "/deso.png",
  },
  {
    title: "Test 2",
    imageUrl: "/FarasHighHill.webp",
    id: "Test2",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl: "/deso.png",
  },
  {
    title: "Test 3",
    imageUrl: "/FarasHighHill.webp",
    id: "Test3",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl: "/deso.png",
  },
  {
    title: "Faras HighHill",
    imageUrl: "/FarasHighHill.webp",
    id: "FarasHighHill",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl: "/deso.png",
  },
  {
    title: "Deniz Life",
    imageUrl: "/FarasHighHill.webp",
    id: "DenizLife",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl: "/deso.png",
  },
];

const DragSlider = (props) => {
  const screenSize = useScreenSize();

  return (
    <section className="relative z-12  h-[480px] sm:h-[540px] md:h-[760px] lg:h-[680px] xl:h-[720px] py-40 bg-black_000">
      <Image
        src="/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />

      <div className="relative flex justify-between items-center w-full px-8 md:px-14">
        <h1 className="relative z-20 leading-none text-4xl md:text-7xl xl:text-8xl text-white ">
          Öne Çıkan
          {screenSize.width < 1024 && <br />} Projeler
        </h1>
        <div className="flex justify-end self-end mb-2 sm:mb-4 md:mb-8">
          <Link
            href="/Projeler"
            className=" w-2/3 sm:w-full font-inter text-white text-base md:text-xl leading-tight lg:text-2xl border-b border-white"
          >
            Tüm projeleri görüntüle
          </Link>
        </div>
      </div>
      <Splide
        className="z-10 px-6 xl:px-20 pb-8 mx-auto overflow-visible"
        options={{
          type: "loop",
          snap: true,
          drag: true,
          autoWidth: true,
          arrows: false,
          gap: "8px",
        }}
      >
        {images.map((project, index) => (
          <SplideSlide
            key={index}
            className="w-[320px] min-[400px]:w-[360px] md:w-[640px] h-[246px] min-[400px]:h-[276px] md:h-[492px]"
          >
            <div className="relative z-10 flex items-end w-[320px] min-[400px]:w-[360px] min-[400px]:h-[276px] md:w-[640px] h-[246px] md:h-[492px] font-inter overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="relative z-10 w-full flex justify-between items-center p-4  bg-gradient-to-r from-black_100 via-black_100 to-black_200">
                <h3 className="relative p-2 w-full z-10 font-inter font-medium text-xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200  border-b-4 border-gold_100 border-spacing-8">
                  {project.title}
                </h3>
              </div>
              <Image
                src={project.imageUrl}
                title={project.title}
                alt={project.title}
                fill
                objectFit={`${index % 2 == 1 ? "cover" : ""}`}
                className="brightness-50 saturate-[0.0] transition-all duration-300 ease-in-out hover:scale-125 hover:saturate-50"
              />
              <div className="absolute bottom-7 right-6  z-20 transition-all duration-500 ease-in-out hover:scale-125 hover:mr-2">
                <Link
                  href={`/Projeler/?id=${project.id}`}
                  className="relative w-[25%]   md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200"
                >
                  Detayları Gör
                </Link>
              </div>
            </div>
          </SplideSlide>
        ))}
        <SplideTrack className="w-[500px] h-2" />
      </Splide>
    </section>
  );
};
export default DragSlider;
