"use client";
import useScreenSize from "@/utils/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage(props) {
  const screenSize = useScreenSize();

  return (
    <section className="relative h-[560px] md:h-[720px] lg:h-[800px] xl:h-screen bg-gradient-to-b from-black_000 to-black_200">
      <div className="absolute flex justify-center items-center w-full h-[calc(100%-64px)] lg:h-[calc(100%-80px)]">
        <div className="absolute flex flex-col w-full h-full px-6  xl:px-20 py-16 md:py-20">
          <div className="relative self-end w-32 md:w-48 lg:w-64 xl:w-96 h-12 md:h-24 lg:h-32 xl:h-64 ">
            <Image
              src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/backgroundImage.svg"
              fill
              className="rotate-180"
            />
          </div>
          <div className="relative self-start w-32 md:w-48 lg:w-80 xl:w-96 h-12 md:h-24 lg:h-32 xl:h-64 ">
            <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/backgroundImage.svg" fill/>
          </div>
        </div>
        <div className="relative z-10 w-80 sm:w-[540px] lg:w-[720px] min-[1900px]:w-[1200px] h-24 md:h-32 lg:h-48 2xl:h-64 min-[2560px]:h-80">
          <Image
            src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/LandingVananaText.svg"
            fill
            className="-translate-y-10 md:-translate-y-20 lg:-translate-y-12 xl:-translate-y-20 min-[2560px]:-translate-y-56"
          />
        </div>
      </div>
      <div className="relative flex flex-col h-full">
        <div className="flex justify-center items-end h-full ">
          <div className="relative z-20 w-[240px] sm:w-[280px] md:w-[360px] xl:w-[480px] min-[1900px]:w-[640px] min-[2560px]:w-[960px] h-[260px] md:h-[360px] xl:h-[480px] min-[1900px]:h-[640px] min-[2560px]:h-[640px]">
            <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ARPKULE1.png" alt="" fill objectFit="contain" />
          </div>
          <div className="absolute z-0">
            <div className="relative w-[286px] min-[480px]:w-[360px] md:w-[520px] lg:w-[640px] min-[1900px]:w-[960px] min-[2560px]:w-[1440px] h-[40vh] sm:h-[400px] md:h-[500px] lg:h-[540px] min-[1900px]:h-[740px] min-[2560px]:h-[740px]">
              <Image
                src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArpKuleBulut.svg"
                alt=""
                fill
                objectFit="cover"
                className="brightness-75"
              />
            </div>
          </div>
        </div>
        {screenSize.width >= 768 ? (
          <div className="absolute flex justify-between items-end w-full h-full py-12 lg:py-20 px-6 xl:px-20">
            <div className="relative w-16 md:w-24 h-16 md:h-24">
              <Link href="#scrollPoint">
                <Image
                  src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorArrowDown.svg"
                  alt=""
                  fill
                  className="animate-[bounce_3s_cubic-bezier(0,.41,.77,.28)_infinite]"
                />
              </Link>
            </div>
            <h1 className="text-right text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
              Konut ve Kurumsal
              <br /> Emlak Satışında
              <br />
              <span className="relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
                Uzman İsim
              </span>
            </h1>
          </div>
        ) : (
          <div className="w-full h-min p-6 md:my-4">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
              Konut ve Kurumsal Emlak Satışında Uzman İsim
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
