import Image from "next/image";

export default function HakkimizdaContainer(props) {
  return (
    <div className="flex flex-col items-end gap-8">
      <div className="w-full pl-6">
        <div className="h-[240px] md:h-[360px] relative">
          <Image
            src={`${props.image}`}
            fill={true}
            objectFit="cover"
            alt=""
            className="brightness-50 saturate-50 absolute z-0"
          />
        </div>
      </div>
      <div className="px-6 xl:px-20 flex flex-col gap-4">
        <div className="flex flex-col ">
          <h1 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-white_200 via-gray to-gold_100">{props.h1}</h1>
          <h1 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white_200 via-gray to-gold_100"> {props.h1_side}</h1>
        </div>
        <p className="text-white font-light">
          {props.p1}
        </p>
        <p className="text-white font-light">
         {props.p2}
        </p>
      </div>
    </div>
  );
}
