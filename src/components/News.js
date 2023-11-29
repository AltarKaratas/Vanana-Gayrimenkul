import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";

const newsArray = [
  { h1: "Vanana Gayrimenkul websitesi açıldı" },
  { h1: "Vanana Gayrimenkul websitesi açıldı" },
  { h1: "Vanana Gayrimenkul websitesi açıldı" },
  { h1: "Vanana Gayrimenkul websitesi açıldı" },
];

function GridElement(props) {
  return (
    <div className=" px-4 py-8 flex flex-col gap-4 w-full  max-h-">
      <div className="relative h-[240px] md:h-[320px] lg:h-[280px] w-full flex justify-center items-center mx-auto">
        <Image src="/1.jpg" alt="" fill objectFit="cover" />
      </div>
      <h4 className="text-white text-2xl">Faras HighHill Projesi satışta.</h4>
      <p className="text-white">
        Tüm ayrıcalıklarıyla ultra lüks konseptli bir yaşamı tek bir merkezde
        bir araya getiren High Hill, Ankara’yı panoramik bir manzarayla
        ayaklarınızın altına seriyor.
      </p>
    </div>
  );
}

export default function News(props) {
  return (
    <section className="h-min w-full px-10 md:px-20 py-20 md:py-40 bg-gradient-to-t from-black  to-black shadow-xl shadow-light_gold ">
      <h2 className="text-7xl pb-4 md:pb-8 text-center text-transparent bg-clip-text bg-gradient-to-b from-gold  via-black  to-gold">En Son Haberler</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GridElement />
        <GridElement />
        <GridElement />
        <GridElement />
      </div>
    </section>
  );
}
