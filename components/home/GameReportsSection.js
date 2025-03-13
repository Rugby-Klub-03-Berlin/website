"use client";
import React, { useEffect, useState } from "react";
import { montserrat } from "@/public/fonts/fonts";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { getGamereports } from "@/sanity/sanity-utils";
import dayjs from "dayjs";

const Box = ({ report }) => {
  const imageVariant = {
    visible: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      transition: {
        duration: 0.5,
      },
      scale: 1,
    },
  };

  const control = useAnimation();

  return (
    <motion.div
      onHoverStart={() => {
        control.start("visible");
      }}
      onHoverEnd={() => {
        control.start("hidden");
      }}
      className="py-3 md:py-0"
    >
      <Link href={`/reports/${report.slug}`} className="relative">
        <div className="md:space-y-4 space-x-4 md:space-x-0 flex md:inline">
          <div className="relative md:w-full overflow-hidden basis-1/3 rounded-sm">
            <motion.img
              variants={imageVariant}
              initial="hidden"
              animate={control}
              className="aspect-[3/2] object-cover w-full h-full"
              src={report.image}
              alt="Report"
            />
          </div>
          <div className="space-y-2 basis-2/3 m-auto">
            <div className="flex flex-row text-xs">
              <div className="pr-4 text-dominantColor uppercase">
                <p className={montserrat.className}>Spielbericht</p>
              </div>
              <div className="border-l-2 border-neutral-500 pl-4 text-neutral-500 w-max">
                {report.publishedAt}
              </div>
            </div>
            <div className="text-white text-xs sm:text-sm line-clamp-2">
              <div className={montserrat.className}>{report.name}</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function GameReportsSection() {
  const [gamereports, setGameReports] = useState([{}]);

  const control = useAnimation();

  const imageVariant = {
    visible: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      transition: {
        duration: 0.5,
      },
      scale: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const gamereports = await getGamereports();

      gamereports.sort((a, b) => {
        const dateA = dayjs(a.publishedAt, "YYYY-MM-DD");
        const dateB = dayjs(b.publishedAt, "YYYY-MM-DD");
        return dateB - dateA; // sort in descending order (newest first)
      });

      gamereports.map((gamereport) => {
        const germanLocale = require("dayjs/locale/de");
        dayjs.locale(germanLocale);
        const eventDate = dayjs(gamereport.publishedAt, "YYYY-MM-DD");
        const gamereportdate = `${dayjs(eventDate).format("DD")}. ${dayjs(
          eventDate
        ).format("MMMM")} ${dayjs(eventDate).format("YYYY")}`;

        gamereport.publishedAt = gamereportdate;
      });

      setGameReports(gamereports);
    };

    fetchData();
  }, []);

  return (
    gamereports.length > 0 && (
      <div className="relative  pb-[15rem] pt-10 lg:pt-0 bg-neutral-950">
        <div className="px-[3%] w-screen flex flex-col">
          <div className="w-full">
            <motion.div
              className={`text-white text-4xl top-1/2 transform -translate-y-1/2 flex flex-row`}
            >
              <div className={montserrat.className}>
                <div className="flex flex-row">
                  RK03 <p className="textDominantcolor"> Reports</p>
                </div>
              </div>
            </motion.div>
          </div>
          <Link href={`/reports/${gamereports[0].slug}`} className="w-full">
            <motion.div
              className="w-full h-full pb-4 md:py-4 grid md:grid-cols-2 relative"
              onHoverStart={() => {
                control.start("visible");
              }}
              onHoverEnd={() => {
                control.start("hidden");
              }}
            >
              <div className="relative w-full overflow-hidden rounded-sm">
                <motion.img
                  variants={imageVariant}
                  initial="hidden"
                  animate={control}
                  className="aspect-[5/3.5] object-cover w-full h-full"
                  src={gamereports[0].image}
                  alt="Top Report"
                />
              </div>
              <div className="w-full md:h-full py-2 px-10 pl-0 md:pl-10 md:py-4">
                <motion.div
                  className={`text-white font-semibold text-2xl md:text-4xl lg:text-5xl relative top-1/2 transform -translate-y-1/2 space-y-2 md:space-y-8 `}
                >
                  <div className="flex flex-row text-xs">
                    <div className="pr-4 textDominantcolor uppercase">
                      <p className={montserrat.className}>Spielbericht</p>
                    </div>
                    <div className="border-l-2 border-neutral-500 pl-4 text-neutral-500">
                      {gamereports[0].publishedAt}
                    </div>
                  </div>
                  <div className={montserrat.className}>
                    <h1>{gamereports[0].name}</h1>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Link>

          <div className="w-full md:h-[45%]">
            <div className="w-full divide-y-[0.5px] md:divide-none divide-neutral-700 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
              {gamereports.slice(1, 5).map((report, index) => (
                <Box report={report} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-screen pt-10 text-center">
          <Link
            href="/newsroom"
            className="relative inline-flex items-center justify-center py-3 pl-4 pr-4 font-light hover:shadow-sm-light hover:shadow-white/20 text-white transition duration-300 bg-neutral-900 hover:bg-neutral-800 "
          >
            <span className="relative w-full">
              <p className={montserrat.className}>Mehr Ansehen</p>
            </span>
          </Link>
        </div>
      </div>
    )
  );
}
