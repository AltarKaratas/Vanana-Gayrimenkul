import Image from "next/image";

export default function GridElement() {
  return (
    <div className="w-full h-full rounded-md bg-gradient-to-br from-beige via-beige to-black_200  shadow-[0px_32px_145px_10px_#404040] opacity-[90%]">
      <div className="w-32 h-32 lg:w-48 lg:h-48  min-[1900px]:w-64 min-[1900px]:h-64  relative flex justify-center items-center m-auto  ">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/deso.png"
          fill={true}
          objectFit="contain"
          alt=""
          
        />
      </div>
    </div>
  );
}
