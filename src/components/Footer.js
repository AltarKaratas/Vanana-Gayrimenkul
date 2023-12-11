"use client";

import Image from "next/image";
import Link from "next/link";

import useScreenSize from "@/utils/hooks/useScreenSize";

const navLinks = [
  { text: "Hakkımızda", link: "Hakkimizda" },
  { text: "Projeler", link: "Projeler" },
  { text: "İletişim", link: "İletisim" },
  { text: "Galeri", link: "Galeri" },
];

const Footer = (props) => {
  const screenSize = useScreenSize();

  return (
    <nav className="relative flex-col px-6 xl:px-20 py-8 lg:py-16 bg-black_000 ">
      {screenSize.width < 768 ? (
        <div className="h-full flex-col">
          <Link href="/">
            <Image
              src="/LandingVananaText.svg"
              alt="V"
              width={screenSize.width < 500 ? 160 : 320}
              height={64}
            />
          </Link>
          <div className="flex justify-between w-full md:w-[160px]">
            <p className="mt-4 text-xs text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
              Konut ve Kurumsal Emlak Satışında Uzman
            </p>
          </div>
          <ul className="flex flex-col justify-between items-start mt-8 text-white">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="flex justify-start items-start mb-4 transition-all ease-in-out duration-500 hover:scale-125"
              >
                <Link href={`/${item.link}`} className="text-xl">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex mt-4 border-t border-dark_gray">
            <p className="mt-4 text-gray text-[10px]">
              Copyright(C) VANANA DIŞ TİCARET TURİZM A.Ş TÜM HAKLARI SAKLIDIR
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-end">
            <Link href="/">
              <Image
                src="/LandingVananaText.svg"
                alt="V"
                width={screenSize.width < 1280 ? 160 : 320}
                height={64}
                className="lg:pb-2"
              />
            </Link>
            <ul className="flex flex-wrap justify-between items-end gap-8">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-end mt-4 transition-all ease-in-out duration-500 hover:scale-125"
                >
                  <Link href={`/${item.link}`} className="text-white text-2xl">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between w-full md:w-[160px] xl:w-[320px]">
            <p className="mt-4 xl:pl-2 text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
              Konut ve Kurumsal Emlak Satışında Uzman
            </p>
          </div>

          <div className="flex justify-end border-t border-dark_gray mt-8 lg:mt-16">
            <p className="text-gray text-[10px] mt-4 ">
              Copyright(C) VANANA DIŞ TİCARET TURİZM A.Ş TÜM HAKLARI SAKLIDIR
            </p>
          </div>
        </>
      )}
    </nav>
  );
};
export default Footer;
