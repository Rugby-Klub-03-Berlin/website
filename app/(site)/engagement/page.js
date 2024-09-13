"use client";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { poppins, space } from "@/public/fonts/fonts";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Engagement() {
  const { t } = useTranslation();

  const engagements = [
    {
      title: t("volunteer.workingGroups.gathering.title"),
      description: t("volunteer.workingGroups.gathering.content"),
      contact: "Mail: " + t("volunteer.workingGroups.gathering.email"),
      extra: <></>,
    },
    {
      title: t("volunteer.workingGroups.eventTeam.title"),
      description: t("volunteer.workingGroups.eventTeam.content"),
      contact: "Mail: " + t("volunteer.workingGroups.eventTeam.email"),
      extra: <></>,
    },
    {
      title: t("volunteer.workingGroups.financialSupport.title"),
      description: t("volunteer.workingGroups.financialSupport.content"),
      contact: "Mail: " + t("volunteer.workingGroups.financialSupport.email"),
      extra: (
        <div className="text-neutral-400 text-sm pt-10">
          {t("common.club")}
          <br />
          {t("volunteer.workingGroups.financialSupport.bankingDetails.bank")}
          <br />
          <text className="font-bold">IBAN:</text>{" "}
          {t("volunteer.workingGroups.financialSupport.bankingDetails.iban")}
          <br />
          <text className="font-bold">BIC:</text>{" "}
          {t("volunteer.workingGroups.financialSupport.bankingDetails.bic")}
        </div>
      ),
    },
  ];

  const sponsoringImages = [
    "/images/sponsoring/Biltong.png",
    "/images/sponsoring/CB.png",
    "/images/sponsoring/Elch.png",
    "/images/sponsoring/Kortas.png",
    "/images/sponsoring/Oranke-Bodenleger.png",
    "/images/sponsoring/Rewe-Daniel-Kühn.png",
    "/images/sponsoring/VeitBraml.png",
  ];

  const firstRow = sponsoringImages.slice(
    0,
    Math.ceil(sponsoringImages.length / 2)
  );
  const secondRow = sponsoringImages.slice(
    Math.ceil(sponsoringImages.length / 2)
  );

  useEffect(() => {
    document.getElementById("categories").onmousemove = (e) => {
      for (const engagementcard of document.getElementsByClassName(
        "engagementcard"
      )) {
        const rect = engagementcard.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        engagementcard.style.setProperty("--mouse-x", `${x}px`);
        engagementcard.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  const sendMail = () => {
    window.location.href = `mailto:vorsitzender@rugbyklub03.berlin`;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 20, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ y: -20, x: 0, opacity: 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <div
          className={
            "pt-28 pb-[15rem] lg:pb-[12rem] text-white bg-neutral-950 min-h-screen"
          }
        >
          <div className="max-w-[81rem] px-[3%] mx-auto mb-4">
            <h1 className={classNames("mb-10", poppins.className)}>
              <div className={classNames("text-4xl pb-10", space.className)}>
                {t("volunteer.title")}
              </div>
              <div className="text-neutral-200 text-md">
                {t("volunteer.content")}
              </div>
            </h1>
            <div
              id="categories"
              className={classNames(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10",
                poppins.className
              )}
            >
              {engagements.map((engagement, index) => (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 7 }}
                  className="engagementcard"
                  key={index}
                >
                  <div className={"engagementcard-content bg-neutral-900"}>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2] blackoverlay" />
                    <div className="z-[3] px-3 py-2 h-full justify-between flex flex-col">
                      <div className="">
                        <h1 className="text-2xl pb-5">{engagement.title}</h1>
                        <p className="text-sm text-neutral-400">
                          {engagement.description}
                        </p>
                        {engagement.extra}
                      </div>
                      <div className="">{engagement.contact}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-2xl pb-4">
              <h1 className={space.className}>
                {t("volunteer.sponsoring.title")}
              </h1>
            </div>
            <div className="text-neutral-200 pb-8 text-md">
              {t("volunteer.sponsoring.content")}
            </div>
            <div className="relative flex w-full my-10 flex-col gap-4 items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Logo ${index}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-20 w-40 object-contain"
                  />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Logo ${index}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-20 w-40 object-contain"
                  />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-neutral-950"></div>
            </div>
            <div className="text-xs sm:text-sm text-neutral-500">
              {t("volunteer.sponsoring.contribute")}
            </div>
            <div className="border border-neutral-800 sm:p-1.5 sm:pl-5 mt-20 mb-10 rounded-xl sm:rounded-full">
              <div className="flex flex-col sm:flex-row items-center gap-x-3 sm:gap-y-0 gap-y-3 p-3 sm:p-0 sm:justify-between">
                <span className="text-xs sm:text-sm text-neutral-500">
                  {t("volunteer.sponsoring.contribute")}
                </span>
                <button
                  onClick={sendMail}
                  className="flex w-full sm:w-fit justify-center items-center gap-x-2 text-center bg-neutral-900 border border-neutral-800 hover:border-neutral-900 text-xs sm:text-sm textDominantcolor hover:text-yellow-500 font-medium rounded-full focus:outline-none transition py-2 pl-4 pr-3 duration-300"
                >
                  Kontaktieren
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
