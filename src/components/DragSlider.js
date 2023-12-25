import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@/utils/hooks/useScreenSize";

export const images = [
  {
    title: "Faras HighHill",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasHighHill.webp",
    id: "FarasHighHill",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://highhillincek.com.tr/",
  },
  {
    title: "Gold Wings 1",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GoldWings1.webp",
    id: "GoldWings1",
    text: "Konforunuzu ve rahatlığınızı düşünen Gold Wings sizin için güvenlik sisteminde de aynı özeni göstermiştir. Özel korumalı duvarları 7/24 kamera sistemi her daireye özel şifreli giriş çıkış kontrolü, gaz ve su dedektörleri, özel yangın sistemi gibi özellikleriyle de sizi kanatlarının altına alacak.",
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/gold-wings-1",
  },
  {
    title: "Gold Wings 2",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GoldWings2.webp",
    id: "GoldWings2",
    text: "Rahatlığınızı ve mutluluğunuzu en ince ayrıntısına kadar düşünen Gold Wings II, sizin için sosyal alanlarında doğayla barışık olarak basketbol-futbol-voleybol sahası, koşu-bisiklet-yürüyüş yolu, açık ve kapalı çocuk oyun alanı, dinlenme-seyir teraslarının yanı sıra her daireye özel hobi bahçesi oluşturmuştur.",
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/gold-wings-2",
  },
  {
    title: "Faras Ofis",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasOfis.webp",
    id: "FarasOfis",
    text: '50-60-80 m2 olmak üzere 320 adet ofisten oluşan ofis kompleksimiz aynı zamanda 18 dükkana ev sahipliği yapmaktadır. Açık ve kapalı otopark, dilediğiniz gibi yürüyüş yapabileceğiniz alanların yanı sıra, aradığınız her ihtiyacı karşılayabilecek "Faras Ofis" projesi sizlere.',
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://www.farasofis.com/",
  },
  {
    title: "Deniz Life",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/DenizLife.webp",
    id: "DenizLife",
    text: "DENİZ LIFE şehir merkezi Mustafa Kemal mahallesinde mimari yapısı, lüksü, konforu ve yüksek güvenlikli iş yaşamı sürdürmesi amaçlı olarak inşa edilmiştir.",
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/deniz-life",
  },

];

const DragSlider = () => {
  const screenSize = useScreenSize();

  return (
    <section className="relative z-12  h-[480px] sm:h-[540px] md:h-[760px] lg:h-[680px] xl:h-[720px] py-32 bg-black_000">
      <Image
        src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GrayLines.svg"
        alt="lines"
        fill={true}
        objectFit="cover"
        className="z-0"
      />

      <div className="relative flex justify-between items-center w-full px-6 xl:px-20">
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
          type: "slide",
          snap: true,
          rewind: true,
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
            <div className="relative z-10 flex flex-col w-[320px] min-[400px]:w-[360px] min-[400px]:h-[276px] md:w-[640px] h-[246px] md:h-[492px] font-inter overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="relative  h-full ">
                <Image
                  src={project.imageUrl}
                  title={project.title}
                  alt={project.title}
                  fill
                  objectFit="cover"
                  className="brightness-50 transition-all duration-300 ease-in-out hover:scale-125 hover:saturate-50"
                />
              </div>
              <div className="relative z-10  flex justify-between items-center p-4  bg-gradient-to-r from-black_100 via-black_100 to-black_200">
                <h3 className="relative p-2 w-full  z-10 font-inter font-medium text-xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200  border-b-4 border-gold_100 border-spacing-8">
                  {project.title}
                </h3>
              </div>

              <div className="absolute bottom-7 right-6  z-20 transition-all duration-500 ease-in-out hover:scale-125 hover:mr-2">
                <Link
                  href={`/Projeler/?id=${project.id}`}
                  className="relative w-[25%]  md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200"
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
