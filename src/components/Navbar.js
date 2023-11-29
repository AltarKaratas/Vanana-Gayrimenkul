"use client";

import Image from "next/image";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { useContext } from "react";

import { Popover, Transition } from "@headlessui/react";

import generalContext from "../utils/general_context";
import Link from "next/link";

const navLinks = ["Hakkımızda", "Projeler", "İletişim", "Galeri"];

const Navbar = () => {
  const screenSize = useScreenSize()

  return (
    <nav className="fixed w-full z-[9999] top-0 h-16 lg:h-20 flex justify-between items-center bg-[#0A0A0A] border-b-thin border-dark_gray">
      <Popover className="h-full w-16 lg:w-20 xl:w-40 flex items-center justify-center border-r-thin border-dark_gray">
        {({ open }) => (
          <>
            <Popover.Button className="h-full w-full flex justify-center items-center">
              <Image
                src={`${open ? "/close.svg" : "/MenuBar.svg"}`}
                width={screenSize.width < 1024 ? 16 : 24}
                height={screenSize.width < 1024 ? 12 : 18}
                alt="Close"
              />
            </Popover.Button>

            <Transition
              show={open}
              enter="transition duration-1000 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-1000 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className={`absolute ${
                screenSize.width < 1024 ? "top-16" : "top-20"
              } left-0`}
            >
              <Popover.Panel
                className={`w-full fixed flex justify-between ${
                  screenSize.width < 1024
                    ? "top-16 h-[calc(100dvh-64px)]"
                    : "top-20 h-[calc(100dvh-80px)]"
                } bg-light_black`}
              ></Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <Link href="/" className="flex justify-center items-center p-4">
        <Image
          src="/VananaLogo.svg"
          alt="Vanana"
          width={screenSize.width < 1024 ? 30 : 45}
          height={screenSize.width < 1024 ? 22.55 : 33.75}
        />
      </Link>

      <div className="h-full w-16 lg:w-20 xl:w-40 flex items-center justify-center border-l-thin border-dark_gray">
        <Image
          src="/en-flag.png"
          alt="Language"
          width={screenSize.width < 1024 ? 16 : 27}
          height={screenSize.width < 1024 ? 11.85 : 20}
        />
      </div>
    </nav>
  );
};
export default Navbar;
