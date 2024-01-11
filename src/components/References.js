"use client"

import GridElement from "@/components/GridElement";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const referenceArray = [{ imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/IMYYapiLogo.webp", title: "İMY Yapı Mühendislik" }, { imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GozumInsaat.webp", title: "Gözüm İnşaat" }, { imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png", title: "Deso İnşaat" }, { imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/ArissaLogo.webp", title: "Arissa İnşaat" },{ imageUrl: "https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/FarasLogo.webp", title: "Faras İnşaat" }, ]


export default function References(props) {

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
    return <section className="px-6 xl:px-20 py-8 lg:py-16">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_100 text-4xl md:text-5xl">
            Referanslarımız
        </h1>

        <div id="referanslar" className=" grid grid-flow-row  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative  py-8 md:py-16">
            {referenceArray.map((item) => {
                return <GridElement imageUrl={item.imageUrl} title={item.title} />
            })}

        </div>
    </section>
}