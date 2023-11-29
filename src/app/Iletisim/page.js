"use client";
import Image from "next/image";
import Maps from "@/components/Maps";
import { useForm } from "react-hook-form";
import Script from 'next/script'
import useScreenSize from "@/utils/hooks/useScreenSize";

export default function Page(props) {
  const screenSize = useScreenSize();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      userMessage: "",
    },
  });
  const smtpConfig = {
    Host: "smtp.elasticemail.com",
    Username: "karatasaltar@gmail.com",
    Password: "52095756D8200F0A606048AF5B97D3C4D5AE",
    To: "karatasaltar@gmail.com",
    From: "karatasaltar@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  };
  const onSubmit = (data) => {
    if (window.Email)
      window.Email.send(smtpConfig).then((message) => alert(message));
  };
  
  const validEmail = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
  const validName = new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);

  const validTelephone = new RegExp(
    /^(?:\+90.?5|0090.?5|905|0?5)(?:[01345][0-9])\s?(?:[0-9]{3})\s?(?:[0-9]{2})\s?(?:[0-9]{2})$/
  );

  return (
    <div className="overflow-x-hidden bg-black">
       <Script src="https://smtpjs.com/v3/smtp.js" />
      <div className="relative h-[600px] w-full bg-black flex justify-center items-center">
        <Image
          src="/ankara.webp"
          alt=""
          fill={true}
          objectFit="cover"
          className="brightness-50 saturate-50 absolute z-0"
        />
        <div className="relative w-full px-8 lg:px-20 pt-16 sm:py-0">
          <h1 className="text-white text-5xl md:text-7xl self-start">
            Bize Ulaşın
          </h1>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-10 py-20 lg:py-40 flex flex-col justify-center xl:flex-row xl:items-center bg-gradient-to-t from-[#736d5c] to-[#0d0d0d]">
        <div className="w-full xl:w-1/2">
          <Maps
            width={screenSize.width < 768 ? "320" : "640"}
            height={screenSize.width < 1024 ? "360" : "640"}
          />
        </div>
        <div className="w-full xl:w-1/2 h-full py-8 self-start flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl lg:5xl">Adres</h1>
            <p className="text-white text-xl">
              Konutkent Mahallesi 3029. Cadde No:3/96 Çankaya - ANKARA
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl lg:5xl">E-Mail</h1>
            <p className="text-white text-xl">turgay@vanana.com.tr</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl lg:5xl">Telefon</h1>
            <p className="text-white text-xl">
            +90(312) 222 72 72
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-10 py-20 lg:py-40 flex flex-col justify-center items-center gap-8 lg:gap-16">
        <div className="w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-[#434343] text-4xl lg:text-5xl">
          <h2>
            Daha fazla bilgi almak ister misiniz? <br />
            <span> İletişime geçin.</span>
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full md:w-[360px] lg:w-[480px] xl:w-[540px] px-4 sm:px-0 font-inter"
        >
          <div className="w-full flex flex-col gap-2">
            <label className="text-white text-xl">Adınız Soyadınız (*)</label>
            {errors.firstName && (
              <p className="text-red-500">Adınızı doğru formatta girin</p>
            )}
            <input
              {...register("firstName", {
                validate: (value) => validName.test(value),
              })}
              className="mb-5 px-2 py-4 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-white text-xl">E-mail (*)</label>
            {errors.email && (
              <p className="text-red-500">
                Email adresinizi doğru formatta girin
              </p>
            )}

            <input
              {...register("email", {
                validate: (value) => validEmail.test(value),
              })}
              className="mb-5 px-2 py-4 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-white text-xl">Telefon</label>
            {errors.telephone && (
              <p className="text-red-500">
                Telefon numaranızı doğru formatta girin
              </p>
            )}

            <input
              {...register("telephone", {
                validate: (value) => validTelephone.test(value),
              })}
              className="mb-5 px-2 py-4 rounded-md"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-white text-xl">Mesajınız</label>

            <input
              {...register("userMessage")}
              className="mb-5 px-2  pt-4 pb-10 rounded-md"
            />
          </div>
          <input
            value="Gönder"
            type="submit"
            className="w-full text-white text-xl mb-5 px-2 py-4 rounded-md bg-gold transition-all duration-500 ease-in-out hover:scale-110"
          />
        </form>
      </div>
    </div>
  );
}
