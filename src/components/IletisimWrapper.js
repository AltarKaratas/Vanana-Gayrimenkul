"use client";

import Image from "next/image";
import Maps from "@/components/Maps";
import { useForm } from "react-hook-form";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {Switch } from "@headlessui/react";
import Link from "next/link";
import DisclaimerDialog from "@/components/DisclaimerDialog";

export default function IletisimWrapper(props) {
  const screenSize = useScreenSize();

  const [emailSent, setEmailSent] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const params = useSearchParams();
  const match = params.get("id") ? true : false;

  let warningText;
  let infoText;

  if (emailSent === "error") {
    warningText = "Mesajınız iletilemedi";
    infoText = "Lütfen tekrar deneyin";
  } else if (emailSent === "forbidden") {
    warningText = "Günde 1 mail atma hakkınız bulunmaktadır.";
    infoText = "Teşekkür ederiz";
  } else {
    warningText = "Mesajınız iletildi";
    infoText = "Teşekkür ederiz.";
  }

  useEffect(() => {
    if (match) {
      var timer = setTimeout(() => {
        const element = document.getElementById(params.get("id"));
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
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
    reset,
    formState: { errors },
  } = useForm({
    resetOptions: {
      keepErrors: true,
    },
    defaultValues: {
      firstName: "",
      email: "",
      userMessage: "",
    },
  });

  async function onSubmit(data) {
    console.log(showPopUp);
    if (!isAccepted) {
      setShowPopUp(true);
    } else {
      const body = JSON.stringify(data);
      const response = await fetch("/.netlify/functions/checkUserHasEmailed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      reset()
      if (response.status === 202) {
        setEmailSent("successful");
        setShowEmailModal(true);
      } else if (response.status === 403) {
        setEmailSent("forbidden");
        setShowEmailModal(true);
      } else {
        setEmailSent("error");
        setShowEmailModal(true);
      }
    }
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
              <h1 className="text-white font-bold text-2xl 2xl:text-4xl">
                Adres
              </h1>
              <p className="text-white text-xl">
                Konutkent Mahallesi 3029. Cadde No:3/96 Çankaya - ANKARA
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-2xl 2xl:text-4xl">
                E-Mail
              </h1>
              <p className="text-white text-xl">turgay@vanana.com.tr</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-bold text-2xl 2xl:text-4xl">
                Telefon
              </h1>
              <p className="text-white text-xl">+90(312) 222 72 72</p>
            </div>
          </div>
        </div>

        <div
          id="iletisim-form"
          className="px-4 sm:px-8 lg:px-10 py-20 lg:py-40 flex flex-col justify-center items-center gap-8 min-[1900px]:gap-16"
        >
          <div className="w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F6F6F6] via-[#676767] to-[#434343] text-4xl lg:text-5xl">
            <h2>
              Daha fazla bilgi almak ister misiniz? <br />
              <span> İletişime geçin.</span>
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full md:w-[360px] lg:w-[420px] min-[1900px]:w-[540px] px-4 sm:px-0 font-inter"
          >
            <div className="w-full flex flex-col ">
              <label className="after:content-['*'] text-white">
                Adınız Soyadınız
              </label>
              {errors.firstName && (
                <p className="text-neutral-400 text-sm" role="alert">
                  Ad ve soyad alanı <i>Adınız Soyadınız</i> şeklinde ve 30
                  harften kısa olmalıdır
                </p>
              )}
              <input
                {...register("firstName", {
                  validate: (value) =>
                    validName.test(value) && value.length < 30,
                  required: true,
                })}
                className={`mb-5 px-2 py-2 min-[1900px]:py-4 rounded-md bg-white ${
                  errors.firstName ? "border-[3px] border-red-700" : ""
                }`}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="after:content-['*'] text-white ">E-mail </label>
              {errors.email && (
                <p className="text-neutral-400 text-sm" role="alert">
                  Email adresinizi <i>örnekEmail@alanAdı.com</i> şeklinde olmalıdır
                </p>
              )}

              <input
                {...register("email", {
                  validate: (value) =>
                    validEmail.test(value) && value.length < 100,
                })}
                className={`mb-5 px-2 py-2 min-[1900px]:py-4 rounded-md bg-white ${
                  errors.email ? "border-[3px] border-red-700" : ""
                }`}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label className="after:content-['*'] text-white">Telefon</label>
              {errors.telephone && (
                <p className="text-neutral-400 text-sm" role="alert">
                  Örnek numara:<i>555 444 55 55</i> şeklinde olmalıdır
                </p>
              )}

              <input
                {...register("telephone", {
                  validate: (value) => validTelephone.test(value),
                })}
                className={`mb-5 px-2 py-2 min-[1900px]:py-4 rounded-md bg-white ${
                  errors.telephone ? "border-[3px] border-red-700" : ""
                }`}
              />
            </div>

            <div className="w-full flex flex-col ">
              <label className="text-white">Mesajınız</label>

              <input
                {...register("userMessage")}
                className="mb-5 px-2 pt-4 pb-10 rounded-md bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="relative w-full flex justify-between items-start gap-4 ">
                <div className="relative w-5 h-5 bg-white">
                  <Switch
                    checked={isAccepted}
                    onClick={() => setIsAccepted((prevState) => !prevState)}
                    className="relative w-5 h-5  z-10"
                  >
                    {isAccepted && (
                      <Image
                        src="./done.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="relative z-0"
                      />
                    )}
                  </Switch>
                </div>
                <label className="text-xs text-white">
                  Tarafıma sunulan Aydınlatma Metni kapsamında, VANANA DIŞ
                  TİCARET A.Ş. tarafından yukarıda yer alan iletişim bilgilerime
                  reklam, promosyon gibi amaçlarla ticari elektronik ileti
                  gönderilmesine, kişisel verilerimin bu amaçla işlenmesine ve
                  paylaşılmasına{" "}
                  <Link href="/acikriza" className="underline">
                    Açık Rıza
                  </Link>{" "}
                  veriyorum.
                </label>
              </div>
              <input
                value={`${
                  emailSent === "successful" ? "Gönderildi" : "Gönder"
                }`}
                type="submit"
                disabled={emailSent === "successful" || emailSent === "error"}
                className={`text-white w-1/2 mx-auto text-xl mb-5 px-2 py-2 min-[1900px]:py-4 rounded-md ${
                  emailSent === "successful" ? "bg-gold_200" : "bg-gold_100"
                } transition-all duration-500 ease-in-out hover:scale-110`}
              />
            </div>
            {showPopUp && (
              <DisclaimerDialog
                setShowPopUp={setShowPopUp}
                showPopUp={showPopUp}
                warningText={"Lütfen aydınlatma metnini kabul edin"}
                infoText={"Aydınlatma metnini okumak için tıklayınız"}
              />
            )}
            {showEmailModal && (
              <DisclaimerDialog
                setShowPopUp={setShowEmailModal}
                showPopUp={showEmailModal}
                warningText={warningText}
                infoText={infoText}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}