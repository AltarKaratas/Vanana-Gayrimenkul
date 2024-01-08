"use client"
import Image from "next/image";
import Link from "next/link";
import useScreenSize from "@/utils/hooks/useScreenSize";

const CustomerGallery = () => {
  const screenSize = useScreenSize();

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row h-min ">
        <div className="relative w-full flex justify-end items-end  h-[180px] sm:h-[200px] md:h-[240px] lg:h-[400px] p-10 md:p-20 bg-gradient-to-b from-transparent to-beige">
          <Image
            src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/skyline1.svg"
            alt=""
            fill
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
      </div>
      {screenSize.width < 1024 ? (
        <section className="px-6 py-40 flex flex-col items-center gap-8 relative bg-gradient-to-t from-beige via-30% via-black_100 to-black_000">
          <Image src="/customer.jpg" width={screenSize.width / 1.6} height={1} />
          <div className="px-8 sm:px-12">
            <h1 className="mb-4 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 to-gray  border-b-4 border-gold_100">
              Müşteri odaklı çalışıyoruz
            </h1>
            <p className="flex justify-center text-white font-light mb-8">
              Önceki satışlarımız ve memnun müşterilerimiz, işimizin temelini
              oluşturan referanslarımızdır. Müşterilerimiz ile kareler için galeriyi ziyaret edin.
            </p>
            <div className="flex">
              <Link
                href="/Galeri"
                className="font-inter md:text-xl  text-white flex items-center border-b border-white border-spacing-4npm"
              >
                Galeriye Git
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex mx-auto py-80 overflow-visible bg-gradient-to-t from-beige via-30% via-black_100 to-black_000">
          <div className="w-1/2 flex justify-end items-center relative">
            <div className={`absolute top-4 right-0 shadow-xl`}>
              <Image
                src="/customer.jpg"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-12 right-8 shadow-xl`}>
              <Image
                src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IletisimNavigation.webp"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-20 right-16 shadow-xl`}>
              <Image
                src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IletisimNavigation.webp"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
            <div className={`absolute top-28 right-24 shadow-xl`}>
              <Image
                src="/customer.jpg"
                width={screenSize.width / 3}
                height={1}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-start gap-8 w-1/2 pl-10 pr-32 xl:pl-20 xl:pr-60">
            <h1 className="relative leading-snug text-white text-7xl border-b-4 border-gold_100">
              Müşteri
              <br />
              odaklı
              <br />
              çalışıyoruz
            </h1>
            <p className="font-light  text-white xl:text-xl">
              Önceki satışlarımız ve memnun müşterilerimiz, işimizin temelini
              oluşturan referanslarımızdır. Müşterilerimiz ile kareler için galeriye gidin.
            </p>
            <div className="flex justify-end">
              <Link
                href="/Galeri"
                className="font-inter text-2xl text-white flex items-center border-b border-white border-spacing-4npm"
              >
                Galeriye Git
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default CustomerGallery;
