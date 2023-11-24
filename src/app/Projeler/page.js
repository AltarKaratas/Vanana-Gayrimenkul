"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState,useContext } from "react";
import GeneralContext from "@/utils/general_context";

function GridItem(props) {
  const [mouseHovered, setMouseHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[calc(80vh-64px)] md:h-[480px] lg:h-[640px] flex justify-center items-end"
      onClick={() => setMouseHovered((prev) => !prev)}
      onMouseLeave={() => setTimeout(() => setMouseHovered(false), 1500)}
    >
      <Image
        src="/FarasHighHill.webp"
        alt=""
        fill
        objectFit="cover"
        className="brightness-50 z-0"
      />
      <div
        className={`relative z-10 w-full px-4 lg:px-8 py-8  transition-all duration-500 ease-in-out ${
          mouseHovered ? "h-full bg-black/100" : "h-1/3 bg-black/90"
        }  flex flex-col gap-4`}
      >
        <h5
          className={`py-2 text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-[#434343] font-inter `}
        >
          Faras<br/> HighHill
        </h5>
        <Transition
          show={mouseHovered}
          enter="transition-all duration-300"
          enterFrom="h-min opacity-0"
          enterTo="h-full opacity-100"
          leave="transition-all duration-300"
          leaveFrom="h-full opacity-100"
          leaveTo="h-min opacity-0"
        >
          <div className="relative h-full flex flex-col gap-4 justify-end">
            <h4 className="text-white md:text-xl">
              High Hill Gökyüzünün Sonsuzluğundan Alınan İlham...
            </h4>
            <p className="text-white text-sm md:text-base ">
              High Hill projesinde, estetiğe ve kullanışlılığa büyük önem
              verildi. Mimaride ve iç tasarımda denge, harmoni ve doğru orantı
              çok önemli bir rol oynar. Bu kadar karışık bir dünyada
              yaşanabilir, barış ve huzur dolu, insanların kendilerini çok rahat
              hissedebilecekleri alanlar oluşturmayı hedefler.
            </p>
            <Link target="_blank" href={props.href} className="mt-8 p-4 bg-[#736D5C]">
              Proje Sitesine Git
            </Link>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default function Page() {
  const generalCtx = useContext(GeneralContext);

  return (
    <section className="relative w-full h-min px-8 lg:px-20 mt-16 lg:mt-20 pb-8 bg-light_black">
      
      <div className="w-full pt-10 lg:pt-20 pb-4">
        <h3 className="text-white text-5xl lg:text-8xl">Tüm Satış Projeleri</h3>
      </div>
      <div className="w-full pb-10 lg:pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
        <GridItem href={"https://www.instagram.com/highhillincekevleri/"} />
      </div>
      <div className="w-full p-4 lg:p-8  flex justify-between items-center bg-gradient-to-bl from-[#171717] via-[#736D5C] to-bg-black">
        <h1 className="text-white font-inter text-4xl lg:text-5xl flex">
          Daha fazla bilgi almak ister misiniz?
        </h1>
        <Link href={"/Iletisim"} className="hover:scale-105">
        <Image
            src="/VectorArrowDown.svg"
            alt="VANANA"
            width={generalCtx.screenSize.width > 1024 ? 96 : 64}
            height={350}
            className="relative -rotate-90"
          />
          </Link>
      </div>
    </section>
  );
}
