"use client";
import { poppins, space } from "@/public/fonts/fonts";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownToLine,
  CheckCircle,
  FileText,
  Mail,
  PenLine,
} from "lucide-react";
import classNames from "classnames";
import { getDocuments } from "@/sanity/sanity-utils";
import { useTranslations } from "next-intl";

export default function Dokumente() {
  const [documents, setDocuments] = useState([]);
  const t = useTranslations();

  useEffect(() => {
    document.getElementById("documents").onmousemove = (e) => {
      for (const documentcard of document.getElementsByClassName(
        "documentcard"
      )) {
        const rect = documentcard.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        documentcard.style.setProperty("--mouse-x", `${x}px`);
        documentcard.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const documents = await getDocuments();
      setDocuments(documents);
    };

    fetchData();
  }, []);

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
        <div className="pt-28 pb-[15rem] bg-neutral-950 text-white min-h-screen">
          <div className="max-w-[81rem] mx-auto px-[3%]">
            <div className={poppins.className}>
              <div
                className={classNames(
                  "text-4xl pb-14 text-white",
                  space.className
                )}
              >
                {t("documents.title")}
              </div>
              <div className="text-neutral-200 pb-10">
                {t("documents.description")}
                <br />
              </div>
              <div
                id="documents"
                className={classNames(
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                  poppins.className
                )}
              >
                {documents.map((document, index) => (
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 7,
                    }}
                    href={document.file}
                    alt="alt text"
                    target="_blank"
                    className="documentcard h-[4.25rem]"
                    key={index}
                  >
                    <div className={"documentcard-content bg-neutral-900"}>
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2] blackoverlay" />
                      <div className="z-[3] px-3 py-2 h-full justify-between flex flex-col">
                        <div className="flex items-center pb-6">
                          <FileText className="w-6 h-6 mr-2" />
                          <h1 className="text-xl">{document.name}</h1>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-10 md:mt-14">
                {t("documents.member.titleStart")}
                <text className=" bg-dominantColor text-black px-1 mx-1">
                  {t("documents.member.marked")}
                </text>
                {t("documents.member.titleEnd")}
                <ul class="relative flex flex-col md:flex-row gap-2 mb-10 mt-10">
                  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div class="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                      <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-neutral-800 font-medium text-gray-800 rounded-full">
                        <ArrowDownToLine className="flex-shrink-0 w-4 h-4 rounded-full text-white" />
                      </span>
                      <div class="mt-2 w-px h-full min-h-[70px] md:min-h-0 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                      <p class="text-sm text-neutral-300">
                        {t("documents.member.steps.first")}
                      </p>
                    </div>
                  </li>

                  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div class="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                      <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-neutral-800 font-medium text-gray-800 rounded-full">
                        <PenLine className="flex-shrink-0 w-4 h-4 rounded-full text-white" />
                      </span>
                      <div class="mt-2 w-px h-full min-h-[70px] md:min-h-0 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                      <p class="text-sm text-neutral-300">
                        {t("documents.member.steps.second")}
                      </p>
                    </div>
                  </li>

                  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div class="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                      <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-neutral-800 font-medium text-gray-800 rounded-full">
                        <Mail className="flex-shrink-0 w-4 h-4 rounded-full text-white" />
                      </span>
                      <div class="mt-2 w-px h-full min-h-[70px] md:min-h-0 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                      <p class="text-sm text-neutral-300">
                        {t("documents.member.steps.third")}
                      </p>
                    </div>
                  </li>
                  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div class="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                      <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-green-600 font-medium text-gray-800 rounded-full">
                        <CheckCircle className="flex-shrink-0 w-4 h-4 rounded-full text-white" />
                      </span>
                      <div class="mt-2 w-px h-full min-h-[70px] md:min-h-0 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                      <p class="text-sm text-neutral-300">
                        {t("documents.member.steps.fourth")}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
