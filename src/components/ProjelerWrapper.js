"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import GridItem from "@/components/GridItem";

const allProjects = [
  {
    title: "HighHill",
    imageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasHighHill.webp",
    id: "FarasHighHill",
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
    text: "Mutluluğunuzu en ince ayrıntısına kadar düşünen Gold Wings II, sizin için sosyal alanlarında doğayla barışık olarak basketbol-futbol-voleybol sahası, koşu yolu, açık ve kapalı çocuk oyun alanı, dinlenme teraslarının yanı sıra her daireye özel hobi bahçesi oluşturmuştur.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/gold-wings-2",
  },
  {
    title: "Faras Ofis",
    imageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasOfis.webp",
    id: "FarasOfis",
    text: '50-60-80 m2 olmak üzere 320 adet ofisten oluşan ofis kompleksimiz aynı zamanda 18 dükkana ev sahipliği yapmaktadır. Açık ve kapalı otopark, dilediğiniz gibi yürüyüş yapabileceğiniz alanların yanı sıra, aradığınız her ihtiyacı karşılayabilecek "Faras Ofis" projesi sizlere.',
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://www.farasofis.com/",
  },
  {
    title: "Deniz Life",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/DenizLife.webp",
    id: "DenizLife",
    text: "DENİZ LIFE şehir merkezi Mustafa Kemal mahallesinde mimari yapısı, lüksü, konforu ve yüksek güvenlikli iş yaşamı sürdürmesi amaçlı olarak inşa edilmiştir.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/deniz-life",
  },
  {
    title: "Otto Ville",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Ottoville.webp",
    id: "Ottoville",
    text: "2731. Sokak No:23 Prof Dr Ahmet Taner Kışlalı Mah, Çayyolu, Ankara​.",
    companyImageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IMYYapiLogo.webp",
    projectUrl: "https://www.imyyapi.com/tamamlanan-projeler",
  },
  {
    title: "Panorama",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Faraspanorama.webp",
    id: "Faraspanorama",
    text: "Faras imzasıyla Ankara’nın en gözde lokasyonu İncek’te bölgesinde ayrıcalıklı donanımlarıyla güvenilir yatırım fırsatı sunan Faras Panorama, sakinleri için mutluluk, yatırımcısı için ‘kazanç’ sunuyor.",
    companyImageUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp",
    projectUrl: "https://faraspanoramaincek.com/",
  },
  {
    title: "Lita Astoria",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Arissaincek.webp",
    id: "arissalitaastoria",
    text:`Hayallerin hayata dönüştüğü muhteşem bir mimari İncek’in en gözde lokasyonunda avantajlı koşullarla sizleri bekliyor.Arissa Lita Astoria, şehrin orta yerinde, şehir karmaşasının uzağında, tatil tadında bir yaşam sunuyor!`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArissaLogo.webp",
    projectUrl: "https://www.arissainsaat.com/arissa-incek/",
  },
  {
    title: "Deso Plaza",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/DenizPlaza.webp",
    id: "desoplaza",
    text:`DESO PLAZA Şehir merkezi Mustafa Kemal Mahallesin de Mimari yapısı ve Yüksek Güvenlikli iş yaşamı sürdürmesi amaçlı olarak inşa edilmiştir. DESO PLAZA da sadece iş hayatı düşünülmemiştir, Yeşile ve Peyzaj alanına verilen önemle huzurlu iş hayatı benimsenmiştir.`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png",
    projectUrl: "https://www.deso.com.tr/projelerimiz/deso-plaza-aselsannet",
  },
  {
    title: "Başkent Loft",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/BaskentLoft.webp",
    id: "baskentloft",
    text:`Gözüm İnşaat tarafından hayata geçirilen Başkent Loft projesi zemin+16 katlı tek bloktan oluşuyor. Projede toplam 51 daire yer alıyor. Dairelerin tamamı 4 oda 1 salon tipinde. Net kullanım alanları ise 220 metrekare.`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GozumInsaat.webp",
    projectUrl: "",
  },
  {
    title: "Arp Kule",
    imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArpKuleProjesi.webp",
    id: "arpkule",
    text:`Gözüm İnşaat tarafından hayata geçirilen ARP Kule projesi 5 bin 40 metrekarelik arsa üzerine kuruluyor. 2 bin 300 metrekare bina oturuma sahip olan proje 21 kattan oluşuyor. 42 ofislik projede ofisler 250 metrekare olarak tasarlandı.`,
    companyImageUrl:"https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GozumInsaat.webp",
    projectUrl: "",
  },
];

export default function ProjelerWrapper() {
  const params = useSearchParams();
  const match = params.get("id") ? true : false;
  useEffect(() => {
    if (match) {
      var timer = setTimeout(() => {
        const element = document.getElementById(params.get("id"));
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
      }, 300);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [params.get("id")]);

  return (
    <section className="relative pb-8 bg-black_200">
      <div className="relative flex justify-center min-[500px]:items-center h-[540px] md:h-[480px] ">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ProjelerBg.webp"
          alt=""
          fill={true}
          objectFit="cover"
          className="brightness-[0.25] saturate-50"
        />
        <div className="relative w-full flex flex-col justify-center px-6 xl:px-20 pt-24  md:pt-32">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-4 lg:mb-8">
            Tüm Satış Projeleri
          </h1>
          <p className=" text-white text-xl md:text-2xl leading-loose pr-6 md:pr-12 xl:pr-20 ">
            Satışını yaptığımız projelere göz atın.
          </p>
        </div>
      </div>
      <div className="px-6 xl:px-20 pt-20 md:pt-40">
        <h3 className="text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
          İnşaat projenizi taçlandırın
          <br />
          Adımlarınızı bizimle atın
        </h3>
      </div>
      <div className="w-full pb-10 lg:pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-x-12 gap-y-16 px-6 xl:px-20 py-20 lg:py-40">
        {allProjects.map((project) => (
          <GridItem
            title={project.title}
            imageUrl={project.imageUrl}
            id={project.id}
            text={project.text}
            companyImageUrl={project.companyImageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div> 
    </section>
  );
}
