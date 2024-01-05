import Image from "next/image";

import GridElement from "@/components/GridElement";

import HakkımızdaSlider from "@/components/HakkımızdaSlider";
import HakkımızdaWrapper from "@/components/HakkımızdaWrapper";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Vanana Gayrimenkul, Türkiye'nin Konut ve Kurumsal  Gayrimenkul Danışmanlığı",
};

const referenceArray = [{ imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IMYYapiLogo.webp", title: "İMY Yapı Mühendislik" }, { imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GozumInsaat.webp", title: "Gözüm İnşaat" }, { imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png", title: "Deso İnşaat" }, { imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArissaLogo.webp", title: "Arissa İnşaat" },{ imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp", title: "Faras İnşaat" }, ]

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-black_200">
      <div className="relative flex justify-center md:items-center h-[540px] md:h-[480px]  pt-16 lg:pt-20">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaSkyScraperBg.webp"
          alt=""
          fill
          objectFit="cover"
          className="brightness-[0.25] saturate-50"
        />
        <div className="relative flex flex-col  px-6 xl:px-20 pt-8  md:pt-0">
          -
          <h1 className="text-white text-5xl md:text-7xl mb-4 lg:mb-8">
            Biz Kimiz ?
          </h1>
          <p className="text-white text-xl md:text-2xl  leading-relaxed font-light pr-6 md:pr-12 xl:pr-20 ">
            <b>Vanana Gayrimenkul</b> olarak müteahhitlere ve inşaat firmalarının projelerinin satışını
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
      <HakkımızdaWrapper />
      <section className="relative flex flex-col justify-center items-center mb-40">
        <div className="relative w-[290px] sm:w-[320px] md:w-[420px] lg:w-[600px] xl:w-[800px] min-[1900px]:w-[1150px]  h-[54px] sm:h-[100px] md:h-[120px] lg:h-[150px] min-[1900px]:h-[216px] ">
          <Image
            src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/LandingVananaText.svg"
            alt=""
            fill={true}
            objectFit="contain"
          />
        </div>
        <HakkımızdaSlider />
      </section>
      <section className="px-6 xl:px-20 py-8 lg:py-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_100 text-4xl md:text-5xl">
          Referanslarımız
        </h1>

        <div className=" grid grid-flow-row  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative  py-8 md:py-16">
          {referenceArray.map((item) => {
            return <GridElement imageUrl={item.imageUrl} title={item.title} />
          })}

        </div>
      </section>
    </main>
  );
}
