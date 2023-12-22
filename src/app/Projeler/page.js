"use client";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/components/DragSlider";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function GridItem(props) {
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
        <h3 className="relative p-2 w-full z-10 font-inter  text-2xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200  border-b-4 border-gold_100  ">
          {props.title}
        </h3>
        <p className="text-white h-full font-light p-2 ">{props.text}</p>
      </div>
    </div>
  );
}

export default function Page() {
  const params = useSearchParams();
  const match = params.get("id") ? true : false;
  useEffect(() => {
    if (match) {
      var timer = setTimeout(() => {
        const element = document.getElementById(params.get("id"));
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 300);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [params.get("id")]);

  return (
    <section className="relative pb-8 bg-black_000">
      <div className="relative flex justify-center min-[500px]:items-center h-[540px] md:h-[480px] ">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ProjelerBg.webp"
          alt=""
          fill={true}
          objectFit="cover"
          className="brightness-[0.25] saturate-50"
        />
        <div className="relative w-full flex flex-col justify-center px-6 xl:px-20 pt-24  md:pt-32">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-4 lg:mb-8">
            Tüm Satış Projeleri
          </h1>
          <p className=" text-white text-xl md:text-2xl leading-loose pr-6 md:pr-12 xl:pr-20 ">
            Satışını yaptığımız projelere göz atın.
          </p>
        </div>
      </div>
      <div className={"px-6 xl:px-20 pt-20 md:pt-40"}>
        <h3 className="text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_200">
          İnşaat projenizi taçlandırın
          <br />
          Adımlarınızı bizimle atın
        </h3>
      </div>
      <div className="w-full pb-10 lg:pb-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-16 px-6 xl:px-20 py-20 lg:py-40">
        {images.map((project) => (
          <GridItem
            title={project.title}
            imageUrl={project.imageUrl}
            id={project.id}
            text={project.text}
            companyImageUrl={project.companyImageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
}
