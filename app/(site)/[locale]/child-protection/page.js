"use client";
import { getChildProtection } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/Sanity Studio/RichTextComponents";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Calendar() {
  const [childProtection, setChildProtection] = useState({});
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      const childProtection = await getChildProtection();
      childProtection.publishedAt = new Date(
        childProtection.publishedAt
      ).toLocaleDateString();
      setChildProtection(childProtection);
      console.log(childProtection);
    };

    fetchData();
  }, []);
  const sendMail = () => {
    window.location.href = `mailto:${
      childProtection.email || "kinderschutz@rugbyklub03.berlin"
    }`;
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
          className={"pt-28 pb-[15rem] lg:pb-[12rem] text-white bg-neutral-950"}
        >
          <div className="max-w-[81rem] px-[3%] mx-auto">
            <div className="relative w-full md:mb-4">
              <img
                src={childProtection?.image}
                alt={childProtection?.name}
                className="aspect-video object-cover w-full h-full"
              />
            </div>
            <div className="text-neutral-300">
              <PortableText
                value={childProtection?.content}
                components={RichTextComponents}
              />
            </div>
            <div className="border border-neutral-800 sm:p-1.5 sm:pl-5 mt-20 mb-10 rounded-xl sm:rounded-full">
              <div className="flex flex-col sm:flex-row items-center gap-x-3 sm:gap-y-0 gap-y-3 p-3 sm:p-0 sm:justify-between">
                <span className="text-xs sm:text-sm text-neutral-500">
                  {t("club.childProtection.contact", {
                    email: childProtection?.email,
                  })}
                </span>
                <button
                  onClick={sendMail}
                  className="flex w-full sm:w-fit justify-center items-center gap-x-2 text-center bg-neutral-900 border border-neutral-800 hover:border-neutral-900 text-xs sm:text-sm textDominantcolor hover:text-yellow-500 font-medium rounded-full focus:outline-none transition py-2 pl-4 pr-3 duration-300"
                >
                  {t("navbar.contact")}
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
