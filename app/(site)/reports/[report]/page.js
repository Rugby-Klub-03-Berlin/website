"use client";
import { RichTextComponents } from "@/components/Sanity Studio/RichTextComponents";
import { montserrat } from "@/public/fonts/fonts";
import { getGameReport } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

export default function GameReport({ params }) {
  const slug = params.report;
  const [gamereport, setGameReport] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const gamereport = await getGameReport(slug);

      const germanLocale = require("dayjs/locale/de");
      dayjs.locale(germanLocale);
      const eventDate = dayjs(gamereport.publishedAt, "YYYY-MM-DD");
      const gamereportdate = `${dayjs(eventDate).format("DD")}. ${dayjs(
        eventDate
      ).format("MMMM")} ${dayjs(eventDate).format("YYYY")}`;

      gamereport.publishedAt = gamereportdate;

      setGameReport(gamereport);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 md:pt-28 pb-[13rem] md:pb-[15rem] bg-neutral-950">
      <div className="max-w-[81rem] mx-auto px-[3%]">
        <div className="relative w-full md:mb-4">
          <img
            src={gamereport.image}
            alt={gamereport.name}
            className="aspect-video object-cover w-full h-full"
          />
        </div>
        <div className="text-white font-extrabold py-8">
          <div className={montserrat.className}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium italic hyphens-auto break-words underline decoration-dominantColor">
              {gamereport.name}
            </h1>
          </div>
          <div className="text-lg font-normal pt-2 text-neutral-500">
            <p className={montserrat.className}>{gamereport.publishedAt}</p>
          </div>
        </div>
        <div className="text-neutral-300">
          <PortableText
            value={gamereport.content}
            components={RichTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
