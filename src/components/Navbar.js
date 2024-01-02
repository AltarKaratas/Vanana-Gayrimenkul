"use client";

import Image from "next/image";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { useContext, useState, useLayoutEffect, useEffect } from "react";

import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    text: "Hakkımızda",
    link: "Hakkimizda",
    imgUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/Hakk%C4%B1m%C4%B1zdaNavigation.webp",
  },
  {
    text: "Projeler",
    link: "Projeler",
    imgUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/SkylineNavigation.webp",
  },
  {
    text: "İletişim",
    link: "Iletisim",
    imgUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IletisimNavigation.webp",
  },
  {
    text: "Galeri",
    link: "Gallery",
    imgUrl:
      "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GaleriNavigation.webp",
  },
];

const Navbar = () => {
  const screenSize = useScreenSize();
  const [selectedItem, setSelectedItem] = useState("/");
  const [photoUrlIndicator, setPhotoUrlIndicator] = useState(-1);
  const [showAnim, setShowAnim] = useState(false);
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [timeoutID, setTimeoutID] = useState();

  useLayoutEffect(() => {
    isNavOpen
      ? document.getElementById("main-html").classList.toggle("overflow-hidden")
      : document
          .getElementById("main-html")
          .classList.toggle("overflow-hidden");
  }, [isNavOpen]);

  useEffect(() => {
    document.getElementById("main-html").classList.remove("overflow-hidden");

    if (pathArray[1] !== "" || pathArray !== "") {
      setSelectedItem(pathArray[1]);
      let findPhotoInArray;
      navLinks.forEach((item, index) => {
        if (item.link.toLowerCase() === pathArray[1].toLowerCase()) {
          findPhotoInArray = index;
        }
      });

      (findPhotoInArray || findPhotoInArray === 0) &&
        setPhotoUrlIndicator(findPhotoInArray);
    } else {
      setSelectedItem("/");
      setPhotoUrlIndicator(-1);
    }
  }, [pathname]);
  return (
    <nav
      id="nav"
      className={`fixed w-full  z-[9999] h-16 lg:h-20 flex justify-between items-center bg-[#0A0A0A] transition-all duration-200 ease-in-out font-inter`}
    >
      <Menu className="fixed h-screen flex items-center justify-center outline-0">
        {({ open }) => {
          !open && setIsNavOpen(false);
          return (
            <>
              <Menu.Button
                onClick={() => {
                  setIsNavOpen(true);
                }}
                className={`${
                  open ? "bg-beige" : "bg-transparent"
                } transition-all duration-700 ease-in-out h-full w-16 lg:w-20 xl:w-40 flex justify-center items-center border-r-thin border-dark_gray outline-0`}
              >
                <Image
                  src={`${
                    open
                      ? "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/close.svg"
                      : "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/MenuBar.svg"
                  }`}
                  width={screenSize.width < 1024 ? 16 : 24}
                  height={screenSize.width < 1024 ? 12 : 18}
                  alt="Close"
                />
              </Menu.Button>

              <Transition
                show={open}
                enter="transition duration-[1000ms] ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-[1000ms] ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className={`absolute z-[40] w-full ${
                  screenSize.width < 1024 ? "top-16" : "top-20"
                } left-0`}
              >
                <Menu.Items
                  className={`w-full flex justify-between ${
                    screenSize.width < 1024
                      ? "top-16 h-[calc(100dvh-64px)]"
                      : "top-20 h-[calc(100dvh-80px)]"
                  } bg-[#090909]`}
                >
                  {screenSize.width >= 768 && (
                    <div className="relative z-20 w-1/3 p-6 xl:p-20 shadow-xl">
                      <div className="flex flex-col gap-8 justify-between items-start mt-8 text-white">
                        {navLinks.map((item, index) => (
                          <Menu.Item
                            key={index}
                            className="flex justify-start items-start mb-4 transition-all ease-in-out duration-500 hover:scale-125"
                            onMouseLeave={() => {
                              setShowAnim(false);
                              navLinks.forEach((item, index) => {
                                if (
                                  item.link.toLowerCase() ===
                                  selectedItem.toLowerCase()
                                ) {
                                  let timeout = setTimeout(() => {
                                    setPhotoUrlIndicator(index);
                                    setShowAnim(true);
                                  }, 100);
                                  setTimeoutID(timeout);
                                } else if (selectedItem === "/") {
                                  setPhotoUrlIndicator(-1);
                                }
                              });
                            }}
                          >
                            {({ active }) => {
                              active && timeoutID && clearTimeout(timeoutID);
                              active && setPhotoUrlIndicator(index);
                              active && setShowAnim(true);

                              return (
                                <Link
                                  href={`/${item.link}`}
                                  className={`text-3xl  ${
                                    selectedItem === item.link || active
                                      ? "text-beige"
                                      : "text-white"
                                  }
                            `}
                                >
                                  {item.text}
                                </Link>
                              );
                            }}
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  )}
                  {screenSize.width < 768 && (
                    <div className="w-full p-6 xl:p-20">
                      <div className="flex flex-col gap-8 justify-between items-start mt-8 text-white">
                        {navLinks.map((item, index) => (
                          <Menu.Item
                            key={index}
                            classname="flex justify-start items-start mb-4 transition-all ease-in-out duration-500 hover:scale-125"
                          >
                            {({ active }) => (
                              <Link
                                href={`/${item.link}`}
                                className={`text-3xl  ${
                                  selectedItem === item.link || active
                                    ? "text-beige"
                                    : "text-white"
                                }
                            `}
                              >
                                {item.text}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  )}
                  {screenSize.width >= 768 && (
                    <div className="relative h-screen w-2/3 p-6 xl:p-20">
                      {showAnim &&
                        navLinks[photoUrlIndicator] &&
                        typeof navLinks[photoUrlIndicator].imgUrl !==
                          undefined && (
                          <Transition
                            show={true}
                            appear
                            enter="transition duration-[1000ms] ease-in-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition duration-[1000ms] ease-in-out"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Image
                              src={`${navLinks[photoUrlIndicator].imgUrl}`}
                              fill
                              objectFit="cover"
                              alt=""
                              className=" brightness-50"
                              style={{
                                boxShadow:
                                  "0px -23px 25px 0px rgba(0, 0, 0, 0.17) inset, 0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset, 0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset, 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09)",
                              }}
                            />
                          </Transition>
                        )}
                      {!showAnim && (
                        <Transition
                          show={true}
                          appear
                          enter="transition duration-[1000ms] ease-in-out"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition duration-[1000ms] ease-in-out"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Image
                            src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/AnkaraNavigation.webp"
                            fill
                            objectFit="cover"
                            alt=""
                            className=" brightness-50"
                            style={{
                              boxShadow:
                                "0px -23px 25px 0px rgba(0, 0, 0, 0.17) inset, 0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset, 0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset, 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09)",
                            }}
                          />
                        </Transition>
                      )}
                    </div>
                  )}
                </Menu.Items>
              </Transition>
            </>
          );
        }}
      </Menu>

      <Link href="/" className="flex justify-center items-center p-4">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VananaLogo.svg"
          alt="Vanana"
          width={screenSize.width < 1024 ? 30 : 45}
          height={screenSize.width < 1024 ? 22.55 : 33.75}
        />
      </Link>
      <Link
        href="/Iletisim?id=iletisim-form"
        onClick={() =>
          document
            .getElementById("main-html")
            .classList.contains("overflow-hidden") &&
          document
            .getElementById("main-html")
            .classList.toggle("overflow-hidden")
        }
        className={`${
          selectedItem === "Iletisim" ? "bg-beige" : "bg-transparent"
        } h-full w-16 lg:w-20 xl:w-40 border-l-thin border-dark_gray  flex items-center justify-center`}
      >
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/VectorIletisim.svg"
          alt="Language"
          width={screenSize.width < 1024 ? 20 : 29}
          height={20}
        />
      </Link>
    </nav>
  );
};
export default Navbar;
