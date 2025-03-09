"use client";
import React, { useState, useEffect, useRef } from "react";
import { space } from "@/public/fonts/fonts";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { TitleComponent } from "./TitleComponent";
import { useTranslations } from "next-intl";

const draw = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: { duration: 1 },
      delay: 0.1,
    },
  },
};

export const HeroContent = () => {
  const [scroll, setScroll] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <motion.svg
        initial="hidden"
        animate="visible"
        className="absolute w-screen top-[3.9rem] z-[2] hidden md:block lg:block"
        strokeWidth="0.2mm"
      >
        <motion.path
          d="M 3000 1 L 0 1"
          stroke="#fff"
          variants={draw}
          className="z-[2]"
        />
      </motion.svg>
      <motion.svg
        initial="hidden"
        animate="visible"
        className="absolute h-screen mx-4 xl:mx-[3.9rem] left-0 z-[2] hidden md:block lg:block"
        strokeWidth="0.3mm"
      >
        <motion.path
          d="M 0 3000 L 0 1"
          stroke="#fff"
          variants={draw}
          className="z-[2]"
        />
      </motion.svg>

      <div className="h-screen w-full max-w-7xl m-0 relative z-[2] text-white ">
        <div className="transform -translate-y-2/5 text-center flex flex-col justify-center px-4 md:px-10">
          <h1 className="text-7xl sm:text-8xl text-start mb-10">
            <TitleComponent
              text={"Rugby Klub 03 "}
              delay={0.6}
              className={"leading-[5rem] sm:leading-[7rem] "}
            />
            <TitleComponent text={"Berlin"} delay={0.9} className={""} />
          </h1>

          <motion.div
            initial={{ y: "20%", opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 17,
              duration: 0.2,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="text-start"
          >
            <Link
              href="/documents"
              className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium textDominantcolor border-2 borderDominantColor rounded-none hover:text-black group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all backgroundDominantColor opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />

              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">
                <p className={space.className}>{t("home.becomeMember")}</p>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={"empty"}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 250,
            delay: 0.5,
            damping: 15,
          }}
          style={{
            textAlign: "center",
          }}
          className="flex z-[2] justify-center sticky bottom-5 inset-x-0 text-center mb-5"
        >
          <a
            type="button"
            href={"#about"}
            className={
              scroll
                ? " flex-col text-xs inline-flex items-center text-transparent duration-500"
                : " flex-col text-xs inline-flex items-center text-gray-100 hover:text-yellow-300/40 duration-500"
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce w-4 h-4"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
