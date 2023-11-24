"use client";
import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

import generalContext from "@/utils/general_context";

const CustomerGallery = (props) => {
  const generalCtx = useContext(generalContext);

  return (
    <>
      {generalCtx.screenSize.width < 1024 ? (
        <section className="w-[100%] h-min mx-auto py-40 flex flex-col relative bg-gradient-to-t from-[#736d5c] to-[#0d0d0d]">
          <div className="w-3/4 h-[180px] sm:h-[360px] flex justify-center items-center relative">
            <div
              className={"absolute w-[100dvw] h-60 right-0 top-10 bg-[#0d0d0d]"}
            />
            <div className={`absolute top-0 right-0 shadow-xl`}>
              <Image
                src="/4.jpg"
                width={generalCtx.screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-2 right-2 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={generalCtx.screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-4 right-4 shadow-xl`}>
              <Image
                src="/1.jpg"
                width={generalCtx.screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-6 right-6 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={generalCtx.screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-start relative">
            <h1 className="relative w-1/2  mx-8 sm:mx-12 text-slate-100 text-[24px] sm:text-4xl whitespace-pre-wrap ">
              Müşteri odaklı
            </h1>
            <h1 className="relative w-1/2  mx-8 sm:mx-12 border-b-[8px] border-[#706338] text-slate-100 text-[24px] sm:text-4xl whitespace-pre-wrap ">
              çalışıyoruz
            </h1>
            <p className="flex justify-center mx-8 sm:mx-12 text-slate-100 mt-8  font-light">
              Önceki satışlarımız ve memnun müşterilerimiz, işimizin temelini
              oluşturan referanslarımızdır. Siz de bu memnuniyete şahit olmak
              ister misiniz?
            </p>
          </div>
        </section>
      ) : (
        <section className="w-[100%] h-min mx-auto py-80 flex flex-row  overflow-visible relative bg-gradient-to-t from-[#736d5c] to-[#0d0d0d]">
          <div
            className={
              "absolute w-[1040px] h-80 right-0 top-[480px] bg-[#0d0d0d]"
            }
          ></div>
          <div className="w-1/2 flex justify-end items-center relative">
            <div className={`absolute top-0 right-0 shadow-xl`}>
              <Image
                src="/4.jpg"
                width={generalCtx.screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-8 right-8 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={generalCtx.screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-16 right-16 shadow-xl`}>
              <Image
                src="/1.jpg"
                width={generalCtx.screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-24 right-24 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={generalCtx.screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start relative">
            <h1 className="relative w-1/4 lg:ml-8 leading-12 text-slate-100 text-[54px] whitespace-pre-wrap ">
              Müşteri
            </h1>
            <h1 className="relative w-2/4 lg:ml-8 leading-12 text-slate-100 text-[54px] whitespace-pre-wrap">
              odaklı
            </h1>
            <h1 className="relative w-3/4 lg:ml-8 leading-12 border-b-[8px] border-[#706338] text-slate-100 text-[54px] whitespace-pre-wrap ">
              çalışıyoruz
            </h1>
            <p className="w-2/3 lg:ml-8 text-slate-100 text-2xl mt-8  font-light">
              Önceki satışlarımız ve memnun müşterilerimiz, işimizin temelini
              oluşturan referanslarımızdır. Siz de bu memnuniyete şahit olmak
              ister misiniz?
            </p>
            <div className="w-full mt-12 flex justify-center items-center">
              <Link
                href="/Gallery"
                className="text-xl font-light text-light_gold"
              >
                Galeriye gidin
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default CustomerGallery;
