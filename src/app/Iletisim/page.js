"use client"

import Image from "next/image";
import Maps from "@/components/Maps";
import { useForm } from "react-hook-form";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { useState,useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";


export default function Page(props) {
  const screenSize = useScreenSize();

  const [emailSent, setEmailSent] = useState("");

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
  
  async function onSubmit(data) {
    //if status code === 200 ? message sent ok
    console.log(data);
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(
        (response) => {response.status === 200 && setEmailSent("successful")
        console.log(response)
      },
        () => setEmailSent("error")
      )
      .catch(() => setEmailSent("error"));
  }

  const validEmail = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
  const validName = new RegExp(/^[A-Za-zşŞıİçÇöÖüÜĞğ ]+$/);

  const validTelephone = new RegExp(
    /^(?:\+90.?5|0090.?5|905|0?5)(?:[01345][0-9])\s?(?:[0-9]{3})\s?(?:[0-9]{2})\s?(?:[0-9]{2})$/
  );

  return (
    <>
    <Script src="https://smtpjs.com/v3/smtp.js"></Script>
    <div className="overflow-x-hidden bg-black">
      <div className="relative h-[540px] md:h-[480px]  w-full bg-black flex justify-center items-center">
        <Image
          src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/AnkaraNavigation.webp"
          alt=""
          fill={true}
          objectFit="cover"
          className="brightness-50 saturate-50 absolute z-0"
        />
        <div className="relative w-full px-6 xl:px-20 pt-16 sm:py-0">
          <h1 className="text-white text-5xl md:text-7xl self-start">
            Bize Ulaşın
          </h1>
        </div>
      </div>

      <div className="px-6 sm:px-8 xl:px-20 py-20 lg:py-40 flex flex-col justify-center lg:gap-8 2xl:gap-0 lg:flex-row xl:items-center bg-gradient-to-t from-[#736d5c] to-[#0d0d0d]">
        <div className="w-full ">
          <Maps
            width={screenSize.width < 1280 ? 320 : 605}
            height={screenSize.width < 1280 ? 320 : 400}
          />
        </div>
        <div className="w-full  h-full py-4 self-start flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-2xl 2xl:text-4xl">Adres</h1>
            <p className="text-white text-xl">
              Konutkent Mahallesi 3029. Cadde No:3/96 Çankaya - ANKARA
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-2xl 2xl:text-4xl">E-Mail</h1>
            <p className="text-white text-xl">turgay@vanana.com.tr</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-2xl 2xl:text-4xl">Telefon</h1>
            <p className="text-white text-xl">+90(312) 222 72 72</p>
          </div>
        </div>
      </div>

      <div id="iletisim-form" className="px-4 sm:px-8 lg:px-10 py-20 lg:py-40 flex flex-col justify-center items-center gap-8 lg:gap-16">
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
            <label className="after:content-['*'] text-white text-xl">
              Adınız Soyadınız
            </label>
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
            <label className="after:content-['*'] text-white text-xl">
              E-mail{" "}
            </label>
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
            <label className="after:content-['*'] text-white text-xl">
              Telefon
            </label>
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
          <div className="flex flex-col gap-4">
            <input
              value={`${emailSent === "successful" ? "Gönderildi" : "Gönder"}`}
              type="submit"
              disabled={emailSent === "successful" || emailSent === "error"}
              className={`text-white text-xl mb-5 px-2 py-4 rounded-md ${emailSent === "successful" ? "bg-gold_200" : "bg-gold_100"} transition-all duration-500 ease-in-out hover:scale-110`}
            />
            {emailSent === "successful" && (
              <span
                className={`transition-all duration-1000 ease-in-out ${
                  emailSent === "successful" ? "opacity-100" : "opacity-0"
                } w-full flex justify-between items-center text-white text-xl text-center bg-black_300 px-2 py-4 rounded-md`}
              >
                Mesajınızı aldık. En kısa süre içinde sizinle iletişime
                geçeceğiz.
                <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/tick.svg" alt="" width={48} height={48} />
              </span>
            )}
            {emailSent === "error" && (
              <span
                className={`transition-all duration-1000 ease-in-out ${
                  emailSent === "error" ? "opacity-100" : "opacity-0"
                } w-full flex justify-between items-center text-white text-xl text-center bg-black_300 px-2 py-4 rounded-md`}
              >
                Üzgünüz mesajınızı iletilemedi. Lütfen tekrar deneyin.
                <Image src="https://vananagayrimenkul.s3.eu-west-2.amazonaws.com/cancel.svg" alt="" width={48} height={48} />
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
