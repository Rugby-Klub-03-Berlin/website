"use client";
import React, { useEffect, useState } from "react";
import Avatars from "./Avatars";
import { montserrat, poppins } from "@/public/fonts/fonts";
import { Divider } from "antd";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { Link } from "@/i18n/navigation";
import classNames from "classnames";
import { getBoards } from "@/sanity/sanity-utils";
import { useTranslations } from "next-intl";

const BoardSection = () => {
  const [avatars, setAvatars] = useState([{}]);
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      const boards = await getBoards();

      setAvatars(boards);
    };

    fetchData();
  }, []);

  return (
    <div
      id="board"
      className="bg-gradient-to-b from-neutral-900 to-neutral-950 w-screen h-max"
    >
      <div className="max-w-5xl w-full sm:px-6 lg:px-8 mx-auto px-[5%]">
        <div className="mx-auto text-left mb-10 lg:mb-14">
          <h2
            className={classNames(
              "text-3xl pt-20 sm:text-4xl md:leading-tight text-white font-light",
              poppins.className
            )}
          >
            {t("club.board.title")}
          </h2>
          <div className={montserrat.className}>
            <p className="text-white py-8 text-sm sm:text-base">
              {t("club.board.description")}
            </p>
          </div>
          <div className="w-fit justify-center pb-3">
            <div className="border border-neutral-800 p-1.5 pl-5 rounded-full">
              <div className="flex items-center gap-x-3">
                <span className="text-xs sm:text-sm text-neutral-500">
                  {t("club.board.doMore")}
                </span>
                <Link
                  className="inline-flex justify-center items-center gap-x-2 text-center bg-neutral-900 border border-neutral-800 hover:border-neutral-900 text-xs sm:text-sm textDominantcolor hover:text-yellow-500 font-medium rounded-full focus:outline-none transition py-2 px-4 duration-300"
                  href="/engagement"
                >
                  {t("club.board.findOutMore")}
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
                </Link>
              </div>
            </div>
          </div>
          <Divider />
        </div>
        <Avatars avatars={avatars} />
      </div>
    </div>
  );
};

export default BoardSection;
