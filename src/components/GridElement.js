import Image from "next/image";

export default function GridElement(props) {
  return (
    <div className="w-full h-full rounded-md bg-gradient-to-t from-beige via-beige via-90 to-black_400  shadow-[0px_4px_72px_10px_#404040] opacity-[100%]">
      <div className="w-32 h-32 lg:w-48 lg:h-48  min-[1900px]:w-64 min-[1900px]:h-64  relative flex justify-center items-center m-auto  ">
        <Image
          src={props.imageUrl}
          fill={true}
          objectFit="contain"
          alt={props.title}
          quality={85}
        />
      </div>
    </div>
  );
}
