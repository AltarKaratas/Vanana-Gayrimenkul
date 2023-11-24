import { Fauna_One } from "next/font/google";
import Image from "next/image";


export default function GridElement (){
  return (
    <div className=" h-64 w-64 relative flex justify-center items-center m-auto   bg-[#4c4c4c] ">
      <Image
        src="/deso.png"
        fill={true}
        objectFit="contain"
        alt=""
        className=""
      />
    </div>
  );
};
