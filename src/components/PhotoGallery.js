"use client"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";



const photoArray = [
  { imageUrl: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1c3RvbWVyfGVufDB8fDB8fHww", title: "Faras HighHill" },
  { imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Faras HighHill" },
  { imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Faras HighHill" },
  { imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Faras HighHill" },
];

export default function PhotoGallery(props) {
  return (
    <section className="relative pb-8 bg-black_200">
      <div className="relative flex justify-center  items-center h-[540px] md:h-[480px] ">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/GalleryBg.webp"
          alt="Vanana Gayrimenkul Tüm Medyalar"
          fill={true}
          objectFit="cover"
          className="brightness-[0.25] saturate-50"
        />
          <div className="relative w-full px-6 xl:px-20 pt-16 sm:py-0">
          <h1 className="text-white text-5xl md:text-7xl self-start">
            Tüm Medyalar
          </h1>
        </div>
      </div>
      <div id="spacer" className={"px-6 xl:px-20 py-20"}>
  
      </div>
      <Splide
        className="z-10 px-6 xl:px-20 pb-8 md:pb-16 mx-auto overflow-visible"
        options={{
          type: "loop",
          snap: true,
          drag: true,
          autoWidth: true,
          gap: "8px",
        }}
      >
        {photoArray.map((item, index) => {
          return (
            <SplideSlide className="w-full xl:w-1/2 h-[246px] min-[400px]:h-[276px] md:h-[492px]">
              <Image src={item.imageUrl} fill objectFit="cover" alt="" className="brightness-75" />
            </SplideSlide>
          );
        })}
        <SplideTrack className="w-[500px] h-2" />
        
      </Splide>
    </section>
  );
}
