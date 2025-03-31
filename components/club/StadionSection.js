"use client";
import React, { useEffect } from "react";
import { montserrat } from "@/public/fonts/fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import trainingPicture from "public/images/club/stadion/training.jpg";
import { useTranslations } from "next-intl";

const StadionSection = () => {
  const [ref, inView] = useInView();
  const t = useTranslations();

  useEffect(() => {
    if (inView) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        document.getElementById("stadiontitle").innerText = document
          .getElementById("stadiontitle")
          .innerText.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return document.getElementById("stadiontitle").dataset.value[
                index
              ];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (
          iteration >=
          document.getElementById("stadiontitle").dataset.value.length
        ) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 20);
    }
  }, [inView]);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.getElementById("stadiontitle").onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 20);
    };
  }, []);

  return (
    <section
      id="stadion"
      className="relative text-center text-white mt-32 min-h-screen w-screen"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-neutral-950/80 to-neutral-950 z-[2]" />
      <div className="absolute top-0 left-0 right-0 bottom-0 grid-wrapper mx-2 min-h-screen overflow-hidden z-[0]">
        <div>
          <Image src={trainingPicture} alt="stadion description" quality={50} />
        </div>
        <div>
          <img
            src="./images/club/stadion/9c271fb8-fc30-4d3c-bea7-90221353876f.JPG"
            alt="stadion description"
          />
        </div>
        <div className="tall relative">
          <img
            src="./images/club/stadion/IMG_9396.HEIC"
            alt="stadion description"
          />
          <span className="top absolute rounded-lg"></span>
          <span className="right absolute rounded-lg"></span>
          <span className="bottom absolute rounded-lg"></span>
          <span className="left absolute rounded-lg"></span>
        </div>
        <div className="wide">
          <img
            src="./images/club/stadion/IMG_9335.HEIC"
            alt="stadion description"
          />
        </div>
        <div className="relative">
          <img
            src="./images/club/stadion/241207512_4620394721316489_9117248961296380675_n.jpg"
            alt="stadion description"
          />
          <span className="top absolute rounded-lg"></span>
          <span className="right absolute rounded-lg"></span>
          <span className="bottom absolute rounded-lg"></span>
          <span className="left absolute rounded-lg"></span>
        </div>
        <div className="tall">
          <img
            src="./images/club/stadion/IMG_9396.HEIC"
            alt="stadion description"
          />
        </div>
        <div className="big">
          <img
            src="./images/club/stadion/BRC U 10-4974.jpg"
            alt="stadion description"
          />
        </div>
        <div>
          <img
            src="./images/club/stadion/IMG_2545.JPG"
            alt="stadion description"
          />
        </div>
        <div className="wide">
          <img
            src="./images/club/stadion/IMG_2656.HEIC"
            alt="stadion description"
          />
        </div>
        <div className="big relative">
          <img
            src="./images/club/stadion/IMG_4796.HEIC"
            alt="stadion description"
          />
          <span className="top absolute rounded-lg"></span>
          <span className="right absolute rounded-lg"></span>
          <span className="bottom absolute rounded-lg"></span>
          <span className="left absolute rounded-lg"></span>
        </div>
        <div className="tall">
          <img
            src="./images/club/stadion/IMG_5520.HEIC"
            alt="stadion description"
          />
        </div>
        <div>
          <img
            src="./images/club/stadion/IMG_7830.HEIC"
            alt="stadion description"
          />
        </div>
        <div>
          <img
            src="./images/club/stadion/IMG_8013.HEIC"
            alt="stadion description"
          />
        </div>
        <div>
          <img
            src="./images/club/stadion/WhatsApp Image 2023-08-29 at 17.26.35.JPEG"
            alt="stadion description"
          />
        </div>
        .–{" "}
      </div>

      <div className="z-[10] px-[5%] py-10 md:py-20 relative text-center min-h-screen w-screen">
        <div className="max-w-5xl text-start items-center justify-center flex flex-col h-full mx-auto sm:px-6 lg:px-8 py-4 space-y-10">
          <div className="text-start w-full ">
            <motion.h1
              data-value={t("club.stadium.title")}
              id="stadiontitle"
              className="text-5xl sm:text-6xl md:text-7xl text-neutral-300 w-fit"
              ref={ref}
            >
              {t("club.stadium.title")}
            </motion.h1>
          </div>
          <div className="text-start text-neutral-400 ">
            <div className="md:w-2/3">
              <p className={montserrat.className}>
                {t("club.stadium.firstParagraph")}
                <br />
                <br /> {t("club.stadium.secondParagraph")}
                <br /> {t("club.stadium.thirdParagraph")}
              </p>
            </div>
          </div>
          <div className={montserrat.className}>
            <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div>
                <h4 className="text-lg sm:text-xl font-medium text-neutral-300">
                  {t("club.stadium.address.title")}
                </h4>

                <p className="mt-3 text-neutral-400">
                  {t("club.stadium.address.address")}
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-300 ">
                  {t("club.stadium.address.accessibility")}
                </h4>
                <div className="items-center mt-2">
                  <div className="mt-3 text-neutral-400 text-lg font-bold flex items-center space-x-4">
                    <div className="flex items-center">
                      <img
                        src={"./images/club/Tram-Logo.svg.png"}
                        className="w-7 h-7 mr-2"
                        alt="Tram"
                      />
                      <div>M4</div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={"./images/club/BUS-Logo-BVG.svg.png"}
                        className="w-7 h-7 mr-2"
                        alt="Bus"
                      />
                      <div>156 & 158</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-medium text-neutral-300">
                  {t("club.stadium.address.stop")}
                </h4>

                <p className="mt-3 text-neutral-400">
                  Stadion Buschallee /<br /> Hansastraße
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StadionSection;
