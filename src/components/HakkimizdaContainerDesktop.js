import Image from "next/image";

export default function HakkimizdaContainerDesktop(props) {
  return (
    <div className="flex">
      <div className={`${props.direction === "right" ? "order-1" : "order-2"} flex flex-col w-1/2 py-20 md:py-40 px-6 xl:px-20`}>
        <div className="flex flex-col mb-8">
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-l from-white_200 via-gray to-gold_100">{props.h1}</h1>
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_100">{props.h1_side}</h1>
        </div>
        <p className="text-xl mb-4 text-white font-light ">
        {props.p1}
        </p>
        <p className="text-xl text-white font-light">
        {props.p2}
        </p>
      </div>
      <div className={`w-1/2 ${props.direction === "right" ? "order-2" : "order-1"}`}>
        <div className="relative h-[300px] md:h-[540px]">
          <Image
            src={`${props.image}`}
            fill={true}
            objectFit="cover"
            alt=""
            className="brightness-50 saturate-50"
          />
        </div>
      </div>
    </div>
  );
}
