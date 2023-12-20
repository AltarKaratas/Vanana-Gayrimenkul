"use client";

import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HakkimizdaContainer from "@/components/HakkimizdaContainer";
import GridElement from "@/components/GridElement";
import useScreenSize from "@/utils/hooks/useScreenSize";
import HakkimizdaContainerDesktop from "@/components/HakkimizdaContainerDesktop";

const advantages = [
  {
    h1: "Personel Eğitimi",
    text: "Uzman kadromuzu sizin projenize özel eğitimler vererek projenize özel, daha etkili satış politikları uyguluyoruz.",
    icon: "/VectorPersonnel.svg",
  },
  {
    h1: "Raporlama",
    text: "Piyasa takibi, müşteri satış raporları sistematik bir şekilde elinizde olsun.",
    icon: "VectorReports.svg",
  },
  {
    h1: "Raporlama",
    text: "Piyasa takibi, müşteri satış raporları sistematik bir şekilde elinizde olsun.",
    icon: "VectorReports.svg",
  },
  {
    h1: "Fiyat Analizi",
    text: "Gayrimenkul piyasasını aktif bir şekilde takip ederek doğru fiyatlama yapıyoruz.",
    icon: "VectorBarChart.svg",
  },
  {
    h1: "Fiyat Analizi",
    text: "Gayrimenkul piyasasını aktif bir şekilde takip ederek doğru fiyatlama yapıyoruz.",
    icon: "VectorBarChart.svg",
  },
];

export default function Page() {
  const screenSize = useScreenSize();

  return (
    <main className="overflow-x-hidden bg-black_000">
      <div className="relative flex justify-center md:items-center h-[540px] md:h-[600px] pt-16 lg:pt-20">
        <Image
          src="/skyscraper.jpg"
          alt=""
          fill={true}
          objectFit="cover"
          className="brightness-[0.25] saturate-50"
        />
        <div className="relative flex flex-col  px-6 xl:px-20 pt-8  md:pt-0">-
          <h1 className="text-white text-5xl md:text-7xl mb-4 lg:mb-8">Biz Kimiz ?</h1>
          <p className="text-white text-xl md:text-2xl leading-loose pr-6 md:pr-12 xl:pr-20 ">
            <span className="font-bold text-light_gold">
              Vanana Gayrimenkul Danışmanlığı
            </span>{" "}
            olarak müteahhitlere ve inşaat firmalarının projelerinin satışını
            kapsayan bir süreci yönetiyoruz. İnşaatın başlangıcından satış
            sonrası hizmetlere kadar her adımda sizin yanınızdayız.
          </p>
        </div>
      </div>

      <div className={"px-6 xl:px-20 py-20 md:py-40"}>
        <h3 className="text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
          İnşaat projenizi taçlandırın
          <br />
          Adımlarınızı bizimle atın
        </h3>
      </div>
      {screenSize.width < 1024 ? (
        <div className="flex flex-col gap-20 w-full pt-20 pb-40 ">
          <HakkimizdaContainer
            h1="Büyük İş"
            h1_side="Büyük Planlama"
            image="/Plan.webp"
            p1="İnşaat projelerinin başlangıcında size mülklerinizi tanıtmak,
                pazarlamak ve satışını gerçekleştirmek için size rehberlik
                ediyoruz. Ayrıca, müşteri memnuniyetini en üst düzeye çıkarmak
                için satış sonrası destek sağlıyoruz."
            p2="Projenize isim bulunması, satış ofisinin oluşturulması, örnek
                daire planı yapılması gibi detayları sizin için düşünüyoruz."
          />
          <HakkimizdaContainer
            h1="Reklam"
            h1_side="ve Tanıtım"
            image="/billboard.jpg"
            p1="Ankara`da bulunan emlak danışmanlık firmamız, geniş bir portföyü
            kapsayan mülklerin satışında uzmanız. Etkin pazarlama ile
            mülklerinizin hedef müşteriye ulaşmasını sağlıyoruz."
            p2="Yetkin Reklam ajanslarıyla çalışarak sosyal medya ve
            billboardlar gibi araçlar aracılığıyla müşterilerinize hitap
            ediyoruz. İnşaat projenize özel broşür, görsel hazırlayarak
            projelerinizi destekliyoruz . İnternet ilanlarında projelerinizi
            öne çıkararak satışta ivme yakalıyoruz."
          />
          <HakkimizdaContainer
            h1="Müşteri"
            h1_side="Yönetimi"
            image="/handshake1.jpg"
            p1="Müşterilerinize en üst düzeyde hizmet sunma taahhüdümüzün bir
            parçası olarak, her müşterinize özel ilgi gösteriyor ve
            ihtiyaçlarına duyarlı bir şekilde yaklaşıyoruz."
            p2="Müşterinin karşılanmasından, satış sonrası takibine, her konunun
            üzerinde özenle duruyoruz. Gelecek projelerinizi benzer
            yatırımcı müşterilerimize duyuruyoruz."
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-20 2xl:gap-40 lg:py-40 2xl:pb-60">
            <HakkimizdaContainerDesktop
              direction={"right"}
              h1="Büyük İş"
              h1_side="Büyük Planlama"
              image="/Plan.webp"
              p1="İnşaat projelerinin başlangıcında size mülklerinizi tanıtmak,
                pazarlamak ve satışını gerçekleştirmek için size rehberlik
                ediyoruz. Ayrıca, müşteri memnuniyetini en üst düzeye çıkarmak
                için satış sonrası destek sağlıyoruz."
              p2="Projenize isim bulunması, satış ofisinin oluşturulması, örnek
                daire planı yapılması gibi detayları sizin için düşünüyoruz."
            />
            <HakkimizdaContainerDesktop
              h1="Reklam"
              h1_side="ve Tanıtım"
              image="/billboard.jpg"
              p1="Ankara`da bulunan emlak danışmanlık firmamız, geniş bir portföyü
            kapsayan mülklerin satışında uzmanız. Etkin pazarlama ile
            mülklerinizin hedef müşteriye ulaşmasını sağlıyoruz."
              p2="Yetkin Reklam ajanslarıyla çalışarak sosyal medya ve
            billboardlar gibi araçlar aracılığıyla müşterilerinize hitap
            ediyoruz. İnşaat projenize özel broşür, görsel hazırlayarak
            projelerinizi destekliyoruz . İnternet ilanlarında projelerinizi
            öne çıkararak satışta ivme yakalıyoruz."
            />
            <HakkimizdaContainerDesktop
              direction="right"
              h1="Müşteri"
              h1_side="Yönetimi"
              image="/handshake1.jpg"
              p1="Müşterilerinize en üst düzeyde hizmet sunma taahhüdümüzün bir
            parçası olarak, her müşterinize özel ilgi gösteriyor ve
            ihtiyaçlarına duyarlı bir şekilde yaklaşıyoruz."
              p2="Müşterinin karşılanmasından, satış sonrası takibine, her konunun
            üzerinde özenle duruyoruz. Gelecek projelerinizi benzer
            yatırımcı müşterilerimize duyuruyoruz."
            />
          </div>
        </>
      )}
      <section className="relative flex flex-col justify-center items-center mb-40">
        <div className="relative w-[290px] sm:w-[320px] md:w-[420px] lg:w-[600px] xl:w-[800px] 2xl:w-[1150px]  h-[54px] sm:h-[100px] md:h-[120px] lg:h-[160px] 2xl:h-[216px] ">
          <Image
            src="/LandingVananaText.svg"
            alt=""
            fill={true}
            objectFit="contain"
            
          />
        </div>
        <Splide
          hasTrack={false}
          className="relative z-10 overflow-visible "
          options={{
            type: "loop",
            width: `${screenSize.width <= 768 ? "752px" : "1656px"}`,
            gap: "16px",
            autoWidth: true,
            snap: true,
            drag: "free",
            arrows: false,
          }}
        >
          <ul className="splide__pagination mt-20"></ul>
          <SplideTrack>
            {advantages.map((advantage_item) => (
              <SplideSlide className="flex justify-center w-[240px] h-[420px] lg:w-[320px] lg:h-[540px]  pt-20 bg-gradient-to-b from-black_300 via-black_000 to-black_000 rounded-xs">
                <div className="flex flex-col items-center gap-8 p-4 text-center">
                  <div className="w-[100px] lg:w-[150px] h-[71px] lg:h-[106px] relative flex justify-center items-center">
                    <Image
                      src={`${advantage_item.icon}`}
                      alt=""
                      fill={true}
                      objectFit="contain"
                      
                    />
                  </div>
                  <h1 className="text-white text-xl md:text-2xl font-inter font-bold">
                    {advantage_item.h1}
                  </h1>
                  <p className="text-white">{advantage_item.text}</p>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </section>
      <section className="px-6 xl:px-20 py-8 lg:py-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_100 text-4xl md:text-5xl">
          Referanslarımız
        </h1>

        <div className=" grid grid-flow-row  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 relative shadow-inner py-8 md:py-16">
          <GridElement />
          <GridElement />
          <GridElement />
          <GridElement />
          <GridElement />
        </div>
      </section>
    </main>
  );
}
