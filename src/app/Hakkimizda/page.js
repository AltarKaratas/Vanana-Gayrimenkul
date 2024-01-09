import Image from "next/image";


import HakkımızdaSlider from "@/components/HakkımızdaSlider";
import HakkımızdaWrapper from "@/components/HakkımızdaWrapper";
import References from "@/components/References";



export const metadata = {
  title: "Hakkımızda",
  description:
    "Vanana, Türkiye'nin Konut ve Kurumsal  Gayrimenkul Danışmanlığı",
};


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
            <b>Vanana A.Ş</b> olarak müteahhitlerin ve inşaat firmalarının projelerinin satışını
            kapsayan bir süreci yönetiyoruz. İnşaat projelerinin başlangıcından satış
            sonrası hizmetlere kadar her adımda sizin yanınızdayız.
          </p>
        </div>
      </div>

      <div className={"px-6 xl:px-20 py-20 md:py-40"}>
        <h3 className="text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
          İnşaat projenize değer katın
          <br />
          Adımlarınızı bizimle atın
        </h3>
      </div>
      <HakkımızdaWrapper />
      <section className="relative flex flex-col justify-center items-center mb-40">
        <div className="relative w-[290px] sm:w-[320px] md:w-[420px] lg:w-[600px] xl:w-[960px] min-[1900px]:w-[1150px]  h-[54px] sm:h-[100px] md:h-[120px] lg:h-[170px] min-[1900px]:h-[216px] ">
          <Image
            src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/LandingVananaText.svg"
            alt=""
            fill={true}
            objectFit="contain"
          />
        </div>
        <HakkımızdaSlider />
        
        
      </section>
      <References />
    </main>
  );
}
