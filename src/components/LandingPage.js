"use client";
import useScreenSize from "@/utils/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage(props) {
  const screenSize = useScreenSize();

  return (
    <section className="relative h-[560px] md:h-[720px] lg:h-[880px] xl:h-screen bg-gradient-to-b from-[#0f0f0f] to-[#171717]">
      <div className="absolute w-full h-[calc(100%-64px)] lg:h-[calc(100%-80px)] flex justify-center items-center">
        <div className="absolute w-full h-full  md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 flex flex-col">
          <div className="relative w-32 md:w-48 lg:w-64 xl:w-96 h-12 md:h-24 lg:h-32 xl:h-64 self-end">
            <Image
              src="/backgroundImage.svg"
              fill
              className="self-end rotate-180"
            />
          </div>
          <div className="relative w-32 md:w-48 lg:w-80 xl:w-96 h-12 md:h-24 lg:h-32 xl:h-64 self-start">
            <Image src="/backgroundImage.svg" fill className="self-start" />
          </div>
        </div>
        <div className="relative z-10 w-80 sm:w-[540px] lg:w-[720px] xl:w-[720px] 2xl:w-[1200px] min-[2560px]:w-[1660px]  h-24 md:h-32 lg:h-48 2xl:h-64 min-[2560px]:h-80">
          <Image
            src="/LandingVananaText.svg"
            fill
            className="-translate-y-10 md:-translate-y-20 lg:-translate-y-12 xl:-translate-y-20 min-[2560px]:-translate-y-56"
          />
        </div>
      </div>
      <div className="relative w-full h-full flex flex-col">
        <div className="w-full h-full flex justify-center items-end">
          <div className="relative z-20 w-[240px] sm:w-[280px] md:w-[360px] 2xl:w-[640px] min-[2560px]:w-[960px] h-[260px] md:h-[360px] 2xl:h-[640px] min-[2560px]:h-[960px]">
            <Image src="/ARP KULE1.png" alt="" fill objectFit="contain" />
          </div>
          <div className="absolute z-0">
            <div className="relative w-[286px] min-[500px]:w-[520px] md:w-[520px] lg:w-[640px] 2xl:w-[960px] min-[2560px]:w-[1440px] h-[50vh] max-h-[360px] sm:h-[400px] md:max-h-none md:h-[500px] lg:h-[640px] 2xl:h-[740px] min-[2560px]:h-[1080px]">
              <Image
                src="/ArpKuleBulut.svg"
                alt=""
                fill
                objectFit="cover"
                className="brightness-75"
              />
            </div>
          </div>
        </div>
        {screenSize.width >= 768 ? (
          <div className="absolute w-full h-full px-6 py-12 lg:py-20 lg:px-12 xl:px-20 flex justify-between items-end">
            <div className="relative w-16 md:w-24 h-16 md:h-24">
              <Link href="#scrollPoint">
                <Image
                  src="/VectorArrowDown.svg"
                  alt=""
                  fill
                  className="animate-[bounce_3s_cubic-bezier(0,.41,.77,.28)_infinite]"
                />
              </Link>
            </div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold text-right text-4xl">
              Konut ve Kurumsal
              <br /> Emlak Satışında
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold relative z-20">
                Uzman İsim
              </span>
            </h1>
          </div>
        ) : (
          <div className="w-full h-min p-6 md:my-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-light_gold  text-2xl">
              Konut ve Kurumsal Emlak Satışında Uzman İsim
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}