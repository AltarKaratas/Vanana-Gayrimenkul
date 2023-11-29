"use client";
import Image from "next/image";
import Link from "next/link";
import useScreenSize from "@/utils/hooks/useScreenSize";

const CustomerGallery = (props) => {
  const screenSize = useScreenSize();

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row h-min ">
        <div className="absolute top-[-9999px] left-[-9999px] lg:top-0 lg:left-0 invisible lg:relative lg:visible lg:w-1/3 p-10 h-[400px] bg-black"></div>
        <div className="relative flex justify-end items-end  p-10 md:p-20  lg:w-2/3 h-[180px] sm:h-[200px] md:h-[240px] lg:h-[400px] bg-gradient-to-tr from-beige to-black">
          <Image
            src="/skyline1.svg"
            alt=""
            fill
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
      </div>
      {screenSize.width < 1024 ? (
        <section className="w-[100%] h-min mx-auto py-20 flex flex-col relative bg-[#121212]">
          <div className="w-3/4 h-[180px] sm:h-[360px] relative">
            <div className={`absolute self-end top-0 right-0 shadow-xl`}>
              <Image
                src="/4.jpg"
                width={screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-2 right-2 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-4 right-4 shadow-xl`}>
              <Image
                src="/1.jpg"
                width={screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-6 right-6 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={screenSize.width / 2}
                height={1}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-8 relative">
            <h1 className="text-white text-2xl md:text-4xl border-b-4 border-gold">
              Müşteri
              <br />
              odaklı
              <br />
              çalışıyoruz
            </h1>
            <p className="flex justify-center mx-8 sm:mx-12 text-white  font-light">
              Önceki satışlarımız ve memnun müşterilerimiz, işimizin temelini
              oluşturan referanslarımızdır. Siz de bu memnuniyete şahit olmak
              ister misiniz?
            </p>
          </div>
        </section>
      ) : (
        <section className="w-[100%] h-min mx-auto  py-80 flex flex-row  overflow-visible relative bg-[#121212]">
          <div className="w-1/2  flex justify-end items-center relative bg-beige">
            <div className={`absolute top-4 right-0 shadow-xl`}>
              <Image
                src="/4.jpg"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-12 right-8 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-20 right-16 shadow-xl`}>
              <Image
                src="/1.jpg"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={` absolute top-28 right-24 shadow-xl`}>
              <Image
                src="/3.jpg"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8 justify-center items-start relative bg-beige ">
            <h1 className="relative lg:ml-8 leading-snug text-white text-5xl border-b-4 border-black">
              Müşteri
              <br />
              odaklı
              <br />
              çalışıyoruz
            </h1>
            <p className="w-2/3 lg:ml-8 text-slate-100 text-2xl font-light">
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
