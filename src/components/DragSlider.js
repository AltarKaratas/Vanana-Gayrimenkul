import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@/utils/hooks/useScreenSize";

export const featuredProjects = [
  {
    title: "High Hill",
    imageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasHighHill.webp",
    id: "FarasHighHill",
    alt:"Faras High Hill",
    text: "Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla ayaklarınızın altına seriyor. Size, her günü masal diyarına açılan bir pencereden hayatı seyretmek kalıyor.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://highhillincek.com.tr/",
  },
  {
    title: "Gold Wings 1",
    imageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GoldWings1.webp",
    id: "GoldWings1",
    alt:"Deso Gold Wings 1",
    text: "Konforunuzu ve rahatlığınızı düşünen Gold Wings sizin için güvenlik sisteminde de aynı özeni göstermiştir. Özel korumalı duvarları 7/24 kamera sistemi her daireye özel şifreli giriş çıkış kontrolü, gaz ve su dedektörleri, özel yangın sistemi gibi özellikleriyle de sizi kanatlarının altına alacak.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/gold-wings-1",
  },
  {
    title: "Gold Wings 2",
    imageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GoldWings2.webp",
    id: "GoldWings2",
    alt:"Deso Gold Wings 2",
    text: "Mutluluğunuzu en ince ayrıntısına kadar düşünen Gold Wings II, sizin için sosyal alanlarında doğayla barışık olarak basketbol-futbol-voleybol sahası, koşu yolu, açık ve kapalı çocuk oyun alanı, dinlenme-seyir teraslarının ve her daireye özel hobi bahçesi oluşturmuştur.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/gold-wings-2",
  },
  {
    title: "Faras Ofis",
    imageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasOfis.webp",
    id: "FarasOfis",
    alt:"Faras Ofis",
    text: '50-60-80 m2 olmak üzere 320 adet ofisten oluşan ofis kompleksimiz aynı zamanda 18 dükkana ev sahipliği yapmaktadır. Açık ve kapalı otopark, dilediğiniz gibi yürüyüş yapabileceğiniz alanların yanı sıra, aradığınız her ihtiyacı karşılayabilecek "Faras Ofis" projesi sizlere.',
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://www.farasofis.com/",
  },
  {
    title: "Deniz Life",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/DenizLife.webp",
    id: "DenizLife",
    alt:"Deso Deniz Life",
    text: "DENİZ LIFE şehir merkezi Mustafa Kemal mahallesinde mimari yapısı, lüksü, konforu ve yüksek güvenlikli iş yaşamı sürdürmesi amaçlı olarak inşa edilmiştir.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/deniz-life",
  },
  {
    title: "Otto Ville",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Ottoville.webp",
    id: "Ottoville",
    alt:"IMY Yapı Otto Ville",
    text: "2731. Sokak No:23 Prof Dr Ahmet Taner Kışlalı Mah, Çayyolu, Ankara​.",
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IMYYapiLogo.webp",
    projectUrl: "https://www.imyyapi.com/tamamlanan-projeler",
  },
  {
    title: "Panorama",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Faraspanorama.webp",
    id: "Faraspanorama",
    alt:"Faras Panorama",
    text: "Faras imzasıyla Ankara’nın en gözde lokasyonu İncek’te bölgesinde ayrıcalıklı donanımlarıyla güvenilir yatırım fırsatı sunan Faras Panorama, sakinleri için mutluluk, yatırımcısı için ‘kazanç’ sunuyor.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://faraspanoramaincek.com/",
  },
  {
    title: "Lita Astoria",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Arissaincek.webp",
    id: "arissalitaastoria",
    alt:"Arissa Lita Astoria",
    text:`Hayallerin hayata dönüştüğü muhteşem bir mimari İncek’in en gözde lokasyonunda avantajlı koşullarla sizleri bekliyor.Arissa Lita Astoria, şehrin orta yerinde, şehir karmaşasının uzağında, tatil tadında bir yaşam sunuyor!`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArissaLogo.webp",
    projectUrl: "https://www.arissainsaat.com/arissa-incek/",
  },
  {
    title: "Deso Plaza",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/DenizPlaza.webp",
    id: "desoplaza",
    alt:"Deso Plaza",
    text:`DESO PLAZA Şehir merkezi Mustafa Kemal Mahallesin de Mimari yapısı ve Yüksek Güvenlikli iş yaşamı sürdürmesi amaçlı olarak inşa edilmiştir. DESO PLAZA da sadece iş hayatı düşünülmemiştir, Yeşile ve Peyzaj alanına verilen önemle huzurlu iş hayatı benimsenmiştir.`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/deso-plaza-aselsannet",
  },
  {
    title: "Başkent Loft",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/BaskentLoft.webp",
    id: "baskentloft",
    alt:"Gözüm Başkent Loft",
    text:`Gözüm İnşaat tarafından hayata geçirilen Başkent Loft projesi zemin+16 katlı tek bloktan oluşuyor. Projede toplam 51 daire yer alıyor. Dairelerin tamamı 4 oda 1 salon tipinde. Net kullanım alanları ise 220 metrekare.`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GozumInsaat.webp",
    projectUrl: "",
  },
  {
    title: "Arp Kule",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArpKuleProjesi.webp",
    id: "arpkule",
    alt:"Gözüm Arp Kule",
    text:`Gözüm İnşaat tarafından hayata geçirilen ARP Kule projesi 5 bin 40 metrekarelik arsa üzerine kuruluyor. 2 bin 300 metrekare bina oturuma sahip olan proje 21 kattan oluşuyor. 42 ofislik projede ofisler 250 metrekare olarak tasarlandı.`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GozumInsaat.webp",
    projectUrl: "",
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
        className="z-10 px-4 xl:px-20 pb-8 mx-auto overflow-visible bg-gradient-to-b from-black_000 via-75% via-beige to-100% to-transparent "
        options={{
          type: "slide",
          snap: true,
          rewind: true,
          drag: true,
          autoWidth: true,
          arrows: false,
          gap: `${screenSize.width < 500 ? "4px" : "32px"}`,
        }}
      >
        {featuredProjects.map((project, index) => (
          <SplideSlide
            key={index}
            className="max-[320px]:w-[280px]  min-[360px]:w-[340px]  min-[400px]:w-[360px] md:w-[640px] h-[276px] min-[400px]:h-[276px] md:h-[492px] "
          >
            <div className="relative z-10 flex flex-col max-[320px]:w-[280px]  min-[360px]:w-[340px]  min-[400px]:w-[360px] md:w-[640px] h-[276px] min-[400px]:h-[276px] md:h-[492px]  font-inter overflow-hidden ">
              <div className="absolute bg-black_100 max-w-[500px]:w-[128px] min-w-[500px]:w-[184px] min-w-[500px]:h-16 max-w-[500px]:h-12 z-10 px-3 lg:px-6 py-3  bg-transparent xl:py-6 flex justify-center items-center  rounded-md">
                <Image
                  src={`${project.companyImageUrl}`}
                  alt={project.alt}
                  width={screenSize.width < 500 ? 96 : 144}
                  height={48}
                  className="z-0 "
                />
              </div>
              <div className="relative h-full">
                <Image
                  src={project.imageUrl}
                  title={project.title}
                  alt={project.title}
                  fill
                  objectFit="cover"
                  className="brightness-[0.8] transition-all duration-300 ease-in-out hover:scale-125 hover:saturate-50"
                />
              </div>
              <div className="relative z-10  flex justify-between items-center p-4  bg-gradient-to-r from-black_300  to-black_300">
                <h4 className="relative lg:p-2  w-full  z-10 font-inter font-medium text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 to-gray  border-b-4 border-gold_100 border-spacing-8">
                  {project.title}
                </h4>
              </div>

              <div className="absolute bottom-[20px] lg:bottom-[28px] right-6  z-20 transition-all duration-500 ease-in-out hover:scale-125 hover:mr-2">
                <Link
                  href={`/Projeler/?id=${project.id}`}
                  className="relative w-[25%]  md:text-xl lg:text-2xl text-transparent text-white"
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
