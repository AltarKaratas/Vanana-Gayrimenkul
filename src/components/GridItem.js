"use client"
import Image from "next/image";
import Link from "next/link";

export default function GridItem(props) {
    return (
      <div
        id={props.id}
        className="relative h-[600px] md:h-[600px] min-[1900px]:h-[720px] flex flex-col justify-center items-end bg-gradient-to-br from-gold_100 via-black_200 to-black_200 shadow-[0px_32px_145px_10px_rgba(64,64,64,0.9)]"
      >
        <div className="absolute top-0 left-0 h-0" />
        <div className="h-full w-full ">
          <div className="absolute w-full z-10 px-3 lg:px-6 py-6 flex justify-between">
            <Image
              src={`${props.companyImageUrl}`}
              alt=""
              width={128}
              height={44}
            />
            <Link
              href={`${props.projectUrl}`}
              target="_blank"
              className="bg-black_100 flex items-end rounded-sm text-white  lg:text-xl p-2 transition-all duration-300 ease-in-out hover:scale-110"
            >
              Projeyi ziyaret et
            </Link>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={`${props.imageUrl}`}
              fill={true}
              objectFit="cover"
              alt=""
              className="brightness-75 relative"
            />
          </div>
        </div>
        <div className="h-3/4 relative z-10 w-full flex flex-col justify-between  p-2 lg:p-4  bg-gradient-to-r from-black_100 via-black_100 to-black_200 overflow-hidden ">
          <h3 className="relative p-2 w-full z-10 font-inter  text-2xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 to-gray  border-b-4 border-gold_100  ">
            {props.title}
          </h3>
          <p className="text-white h-full font-light p-2 ">{props.text}</p>
        </div>
      </div>
    );
  }