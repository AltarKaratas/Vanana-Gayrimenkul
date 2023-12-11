"use client";

import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HakkimizdaContainer from "@/components/HakkimizdaContainer";
import GridElement from "@/components/GridElement";
import useScreenSize from "@/utils/hooks/useScreenSize";

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
    <main className="overflow-x-hidden bg-black_300">
      <div className="relative flex justify-center h-[600px] pt-16 lg:pt-20">
        <Image
          src="/skyscraper.jpg"
          alt=""
          fill={true}
          objectFit="cover"
          className="brightness-50 saturate-50 absolute z-0"
        />
        <div className="relative flex flex-col gap-4 lg:gap-8 px-6 xl:px-20 pt-8 md:pt-16 xl:pt-32">
          <h1 className="text-white text-5xl md:text-7xl">Biz Kimiz ?</h1>
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
        <h3 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
          İnşaat projenizi taçlandırın
          <br />
          Adımlarınızı bizimle atın
        </h3>
      </div>
      {screenSize.width <= 1024 ? (
        <div className="flex flex-col gap-40 w-full pt-20 pb-40">
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
          <div className="flex flex-col gap-40 py-20 md:py-40">
            <div className="flex">
              <div className="flex flex-col gap-8 w-1/2  py-20 md:py-40 px-10 md:px-20">
                <div className="flex flex-col">
                  <h1 className="text-5xl md:text-7xl text-neutral-700">
                    Büyük İş{" "}
                  </h1>
                  <h1 className="text-5xl md:text-7xl text-white">
                    Büyük Planlama
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-white ">
                  İnşaat projelerinin başlangıcında size mülklerinizi tanıtmak,
                  pazarlamak ve satışını gerçekleştirmek için size rehberlik
                  ediyoruz. Ayrıca, müşteri memnuniyetini en üst düzeye çıkarmak
                  için satış sonrası destek sağlıyoruz.
                </p>
                <p className="text-xl md:text-2xl text-white ">
                  Projenize isim bulunması, satış ofisinin oluşturulması, örnek
                  daire planı yapılması gibi detayları sizin için düşünüyoruz.
                </p>
              </div>
              <div className="w-1/2">
                <div className=" relative h-[300px] md:h-[540px]">
                  <Image
                    src="/Plan.jpg"
                    fill={true}
                    objectFit="cover"
                    alt=""
                    className="brightness-50 saturate-50"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-1/2">
                <div className=" relative h-[300px] md:h-[540px]">
                  <Image
                    src="/billboard.jpg"
                    fill={true}
                    objectFit="cover"
                    alt=""
                    className="brightness-50 saturate-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 w-1/2  py-20 md:py-40 p-10 md:p-20">
                <div className="flex flex-col">
                  <h1 className="text-5xl md:text-7xl text-neutral-700">
                    Reklam{" "}
                  </h1>
                  <h1 className="text-5xl md:text-7xl text-white">
                    ve Tanıtım
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-white ">
                  Ankara`da bulunan emlak danışmanlık firmamız, geniş bir
                  portföyü kapsayan mülklerin satışında uzmanız. Etkin pazarlama
                  ile mülklerinizin hedef müşteriye ulaşmasını sağlıyoruz.
                </p>
                <p className="text-xl md:text-2xl text-white ">
                  Yetkin Reklam ajanslarıyla çalışarak sosyal medya ve
                  billboardlar gibi araçlar aracılığıyla müşterilerinize hitap
                  ediyoruz. İnşaat projenize özel broşür, görsel hazırlayarak
                  projelerinizi destekliyoruz . İnternet ilanlarında
                  projelerinizi öne çıkararak satışta ivme yakalıyoruz.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col gap-8 w-1/2  py-20 md:py-40 px-10 md:px-20">
                <div className="flex flex-col">
                  <h1 className="text-5xl md:text-7xl text-neutral-700">
                    Müşteri{" "}
                  </h1>
                  <h1 className="text-5xl md:text-7xl text-white">Yönetimi</h1>
                </div>
                <p className="text-xl md:text-2xl text-white ">
                  Müşterilerinize en üst düzeyde hizmet sunma taahhüdümüzün bir
                  parçası olarak, her müşterinize özel ilgi gösteriyor ve
                  ihtiyaçlarına duyarlı bir şekilde yaklaşıyoruz.
                </p>
                <p className="text-xl md:text-2xl text-white ">
                  Müşterinin karşılanmasından, satış sonrası takibine, her
                  konunun üzerinde özenle duruyoruz. Gelecek projelerinizi
                  benzer yatırımcı müşterilerimize duyuruyoruz.
                </p>
              </div>
              <div className="w-1/2">
                <div className=" relative h-[300px] md:h-[540px]">
                  <Image
                    src="/handshake1.jpg"
                    fill={true}
                    objectFit="cover"
                    alt=""
                    className="brightness-50 saturate-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <section className="w-full h-min flex flex-col justify-center items-center gap-20 relative my-40">
        <div className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[200px] 2xl:h-[250px] w-[290px] sm:w-[320px] md:w-[420px] lg:w-[600px] xl:w-[800px] 2xl:w-[1150px] absolute -top-[80px] sm:-top-[100px] md:-top-[120px] lg:-top-[200px]  2xl:-top-[250px] ">
          <Image
            src="/LandingVananaText.svg"
            alt=""
            fill={true}
            objectFit="contain"
            className="absolute"
          />
        </div>
        <Splide
          hasTrack={false}
          className="relative z-10 overflow-visible"
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
              <SplideSlide className="w-[240px] h-[420px] lg:w-[320px] lg:h-[540px] flex justify-center pt-20 bg-gradient-to-b from-[#0a0a0a] via-black to-black ">
                <div className="flex flex-col gap-8 p-4 items-center text-center">
                  <div className="w-[75px] h-[53px] lg:w-[150px] lg:h-[106px] relative flex justify-center items-center">
                    <Image
                      src={`${advantage_item.icon}`}
                      alt=""
                      fill={true}
                      objectFit="contain"
                    />
                  </div>
                  <h1 className="text-white text-xl md:text-4xl font-inter font-bold">
                    {advantage_item.h1}
                  </h1>
                  <p className="text-white">{advantage_item.text}</p>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </section>
      <section className="w-full h-min  px-8 py-10 lg:px-20 lg:py-20">
        <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-semibold ">
          Referanslarımız
        </h1>

        <div className="w-full h-min grid grid-flow-row  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16  relative shadow-inner py-8 md:py-16">
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
