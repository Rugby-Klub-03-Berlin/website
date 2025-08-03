"use client";
import { montserrat, space } from "@/public/fonts/fonts";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTraningsGroups } from "@/sanity/sanity-utils";
import dayjs from "dayjs";
import { Divider } from "antd";
import { urlFor } from "@/sanity/urlFor";
import { CalendarDays, Dumbbell, X } from "lucide-react";
import { useTranslations } from "next-intl";

const Newbies = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [newbies, setNewbies] = useState([{}]);
  const t = useTranslations();

  useEffect(() => {
    document.getElementById("newbies").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  function dayToLocalGerman(day) {
    switch (day) {
      case "Monday":
        return "Montag";
      case "Tuesday":
        return "Dienstag";
      case "Wednesday":
        return "Mittwoch";
      case "Thursday":
        return "Donnerstag";
      case "Friday":
        return "Freitag";
      case "Saturday":
        return "Samstag";
      case "Sunday":
        return "Sonntag";
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const traininggroups = await getTraningsGroups();
      const newbies = traininggroups.filter((group) => group.age == "newbies");

      const formateTime = (time) =>
        time ? dayjs(`1/1/1 ${time}`).format("HH:mm") : null;

      newbies.map((group) => {
        const times = [];
        group.availability.map((availability) => {
          if (
            Array.isArray(availability.availableTimes) &&
            availability.availableTimes.length != 0
          ) {
            times.push({
              day: dayToLocalGerman(availability.day),
              from: formateTime(availability.availableTimes[0].from),
              to: formateTime(availability.availableTimes[0].to),
            });
          }
        });
        group.availability = times;
      });

      setNewbies(newbies);
    };

    fetchData();
  }, []);

  return (
    <>
      <Divider />
      <div className="text-2xl pb-4">
        <h1 className={space.className}>{t("teams.youth.title")}</h1>
      </div>
      <div
        id="newbies"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {newbies.length > 0 ? (
          <>
            {newbies.map((group, index) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 7 }}
                className="card hover:shadow-lg hover:shadow-[#f5cb0d16]"
                onClick={() => {
                  setSelectedCard(group);
                }}
                key={index}
                data-hs-overlay="#hs-overlay-newbies"
              >
                <div className={"card-content overflow-hidden bg-gray-500"}>
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center">
                    <img
                      src={
                        group.image != null &&
                        urlFor(group.image).crop("center")
                      }
                      className="flex-1 h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] blackoverlay" />
                  <div className="z-[3] items-end p-4 flex h-full">
                    <div className="text-white">
                      <div className="text-2xl font-semibold">
                        <h1 className={space.className}>{group.name}</h1>
                      </div>
                      <div className="text-l font-extralight">
                        <h1 className={montserrat.className}>
                          {t("teams.training")}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        ) : (
          <div className="flex flex-row items-center justify-center h-[260px] rounded-[10px] bg-neutral-900 space-x-5 animate-pulse" />
        )}
      </div>
      {selectedCard != null && (
        <div
          id="hs-overlay-newbies"
          className="hs-overlay hidden w-full h-full bg-neutral-950/30 backdrop-blur-sm fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-300 mt-0 sm:m-3 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-start sm:items-center">
            <div className="flex flex-col bg-neutral-950 sm:rounded-2xl w-full">
              <div className="flex justify-between items-center py-3 px-4">
                <h3 className="font-bold text-xl text-neutral-300">
                  {selectedCard.name}
                </h3>
                <button
                  className="rounded-full bg-neutral-900 text-neutral-400 hover:bg-neutral-800 transition duration-300 p-1"
                  data-hs-overlay="#hs-overlay-newbies"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex flex-row items-center pb-4">
                  <span className="p-1 mr-2 rounded-full border-4 border-green-500/5 bg-green-500/20 text-green-700">
                    <Dumbbell className="w-5 h-5" />
                  </span>

                  <h3 className="text-xl font-bold text-neutral-300 ">
                    {t("teams.practice")}
                  </h3>
                </div>
                <div className="p-1.5 min-w-full inline-block align-middle border border-neutral-800 rounded-lg">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y-2 divide-neutral-600">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase"
                          >
                            {t("common.weekday")}
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase"
                          >
                            {t("common.time")}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-700">
                        {selectedCard.availability.map((availability) => (
                          <tr className="hover:bg-neutral-900 transition duration-300 text-neutral-300">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              {availability.day}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {availability.from} - {availability.to}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-4">{t("team.trainer")}:</div>
                  <div className="">
                    {selectedCard.trainer != null ? (
                      selectedCard.trainer.map((trainer) => (
                        <span className="inline-flex mr-2 mb-3 w-fit items-center gap-1.5 py-2 px-4 rounded-full text-xs font-medium bg-green-300/20 text-neutral-300">
                          {trainer}
                        </span>
                      ))
                    ) : (
                      <span className="inline-flex w-fit items-center gap-1.5 py-2 px-4 rounded-full text-xs font-medium bg-green-300/20 text-neutral-300">
                        {t("teams.notrainer")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4 pb-0">
                <div className="flex flex-row items-center">
                  <span className="p-1 mr-2 rounded-full border-4 border-green-500/5 bg-green-500/20 text-green-700">
                    <CalendarDays className="w-5 h-5" />
                  </span>

                  <h3 className="text-xl font-bold text-neutral-300 ">
                    {t("teams.gameplan")}
                  </h3>
                </div>

                <div className="text-sm py-4">
                  <p className="text-neutral-300">
                    {selectedCard.gameplan == null
                      ? t("teams.nogameplan")
                      : t("teams.gameplanlink")}
                  </p>
                  <a className="textDominantcolor" href={selectedCard.gameplan}>
                    {selectedCard.gameplan != null && selectedCard.gameplan}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Newbies;
