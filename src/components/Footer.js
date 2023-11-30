"use client";

import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@/utils/hooks/useScreenSize";

const navLinks = ["Hakkimizda", "Projeler", "Iletisim", "Galeri"];

const Footer = (props) => {
  const screenSize = useScreenSize();

  return (
    <nav className="relative h-min flex flex-col p-8 sm:p-10 md:p-20 pb-4 sm:pb-5 md:pb-10 bg-[#0a0a0a]">
      {screenSize.width < 768 ? (
        <div className="w-full h-full flex-col">
          <Image
            src="/Landing Vanana Text.svg"
            alt="V"
            width={screenSize.width < 1280 ? 160 : 320}
            height={64}
          />
          <div className="w-full md:w-[160px] flex justify-between">
            <p className="mt-4 text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-[#434343]">
              Konut ve Kurumsal Emlak Satışında Uzman
            </p>
          </div>
          <ul className="flex flex-col justify-between items-start mt-8 text-white">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="mb-4 flex justify-start items-start transition-all ease-in-out duration-500 hover:scale-125"
              >
                <Link href={`/${item}`} className="text-xl">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex border-t border-dark_gray mt-4">
            <p className="text-gray text-[10px] mt-4">
              Copyright(C) VANANA DIŞ TİCARET TURİZM A.Ş TÜM HAKLARI SAKLIDIR
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-between">
            <Image
              src="/Landing Vanana Text.svg"
              alt="V"
              width={screenSize.width < 1280 ? 160 : 320}
              height={64}
              className="lg:pb-2"
            />
            <ul className="flex flex-wrap justify-between items-end ">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="sm:ml-10 xl:ml-20 mt-4 flex justify-end transition-all ease-in-out duration-500 hover:scale-125"
                >
                  <Link href={`/${item}`} className="text-white text-2xl">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[160px] xl:w-[320px] flex justify-between">
            <p className="mt-4 lg:pl-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-[#434343]">
              Konut ve Kurumsal Emlak Satışında Uzman
            </p>
          </div>
          <div className="w-full h-full flex self-end my-8">
            <div className="flex md:w-[160px] xl:w-[320px] justify-between">
              <Image
                src="/facebook.svg"
                alt="FB"
                width={screenSize.width < 1024 ? 24 : 32}
                height={32}
              />
              <Image
                src="/instagram.svg"
                alt="I"
                width={screenSize.width < 1024 ? 36 : 48}
                height={32}
              />
              <Image
                src="/linkedin.svg"
                alt="Li"
                width={screenSize.width < 1024 ? 24 : 32}
                height={32}
              />
            </div>
          </div>
          <div className="flex justify-end border-t border-dark_gray mt-4">
            <p className="text-gray text-[10px] mt-4">
              Copyright(C) VANANA DIŞ TİCARET TURİZM A.Ş TÜM HAKLARI SAKLIDIR
            </p>
          </div>
        </>
      )}
    </nav>
  );
};
export default Footer;
