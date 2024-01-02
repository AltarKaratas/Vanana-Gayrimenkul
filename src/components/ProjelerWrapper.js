"use client";
import Image from "next/image";
import { images } from "@/components/DragSlider";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import GridItem from "@/components/GridItem";



export default function ProjelerWrapper() {
  const params = useSearchParams();
  const match = params.get("id") ? true : false;
  useEffect(() => {
    if (match) {
      var timer = setTimeout(() => {
        const element = document.getElementById(params.get("id"));
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
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
