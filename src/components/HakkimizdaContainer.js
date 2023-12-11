import Image from "next/image";

export default function HakkimizdaContainer(props) {
  return (
    <div className="flex flex-col items-end gap-16 ">
      <div className="w-full pl-8">
        <div className="w-full h-[360px] relative">
          <Image
            src={`${props.image}`}
            fill={true}
            objectFit="cover"
            alt=""
            className="brightness-50 saturate-50 absolute z-0"
          />
        </div>
      </div>
      <div className="px-8 flex flex-col gap-8">
        <div className="flex flex-col ">
          <h1 className="text-5xl md:text-7xl text-neutral-700">{props.h1}</h1>
          <h1 className="text-5xl md:text-7xl text-white"> {props.h1_side}</h1>
        </div>
        <p className="text-xl md:text-2xl text-white ">
          {props.p1}
        </p>
        <p className="text-xl md:text-2xl text-white ">
         {props.p2}
        </p>
      </div>
    </div>
  );
}
