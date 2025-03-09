"use client";
import { space } from "@/public/fonts/fonts";
import { Timeline } from "flowbite-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getEvents } from "@/sanity/sanity-utils";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { useTranslations } from "next-intl";

export default function UpcomingGamesInformation() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { setSelectedEvent } = useGlobalContext();
  const t = useTranslations();

  const closestDates = findClosestDates();
  useEffect(() => {
    const fetchData = async () => {
      const event = await getEvents();

      event.map((event) => {
        const eventDate = dayjs(event.date, "YYYY-MM-DD");

        return {
          id: event.id,
          name: event.name,
          shortDescription: event.shortDescription,
          date: `${dayjs(eventDate).format("DD")}. ${dayjs(eventDate).format(
            "MMMM"
          )} ${dayjs(eventDate).format("YYYY")}`,
          time: event.time,
        };
      });

      setEvents(event);
    };

    fetchData();
  }, []);

  function findClosestDates() {
    const germanLocale = require("dayjs/locale/de");
    dayjs.locale(germanLocale);
    const currentDate = dayjs();
    const dates = events
      .filter((event) => dayjs(event.date, "YYYY-MM-DD").isAfter(currentDate))
      .map((event) => {
        const eventDate = dayjs(event.date, "YYYY-MM-DD");

        const diff = Math.abs(currentDate.diff(eventDate, "day")) + 1;
        return {
          id: event.id,
          name: event.name,
          shortDescription: event.shortDescription,
          date: `${dayjs(eventDate).format("DD")}. ${dayjs(eventDate).format(
            "MMMM"
          )} ${dayjs(eventDate).format("YYYY")}`,
          diff: diff,
          time: event.time,
        };
      });
    dates.sort((a, b) => a.diff - b.diff);
    return dates.slice(0, 3);
  }

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-300 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full p-2 pl-10 text-sm  text-gray-500 border-1 border-neutral-700 bg-[rgb(20,20,20)] rounded-lg focus:ring-transparent focus:border-dominantColor hover:border-dominantColor transition duration-300"
          placeholder="Suche Events"
        />
      </div>
      <div>
        {searchQuery != "" &&
          events
            .filter((event) =>
              event.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((event, i) => (
              <div
                className="text-white flex flex-col my-2 p-4 border-b border-neutral-900 cursor-pointer"
                key={i}
                data-hs-overlay="#hs-overlay"
                onClick={() => {
                  setSelectedEvent(event);
                }}
              >
                <p className="text-lg font-medium">{event.name}</p>
                <p className="text-sm font-light text-neutral-500">
                  {event.shortDescription}
                </p>
              </div>
            ))}
      </div>
      <div className="pt-10 pb-4">
        <div className="py-4 pb-6 text-2xl text-white">
          <h1 className={space.className}>{t("dates.upcomingEvents")}</h1>
        </div>

        <Timeline horizontal className="hidden sm:flex pl-1 my-8">
          {closestDates.map((event, i) => (
            <div
              key={i}
              data-hs-overlay="#hs-overlay"
              className="group flex-1 cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
              }}
            >
              <Timeline.Item className="">
                <Timeline.Point />
                <Timeline.Content className="pr-2 pt-4 rounded-lg justify-stretch flex flex-col">
                  <Timeline.Time>{event.date}</Timeline.Time>
                  <Timeline.Title className="py-2 text-white line-clamp-1">
                    {event.name}
                  </Timeline.Title>
                  <Timeline.Body className="line-clamp-2">
                    {event.shortDescription}
                  </Timeline.Body>
                  {event.time != null && (
                    <Timeline.Time className="pb-1">
                      {event.time.start} - {event.time.end}
                    </Timeline.Time>
                  )}
                  <Timeline.Time>noch {event.diff} Tage</Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>{" "}
            </div>
          ))}
        </Timeline>
        <Timeline className="sm:hidden pl-1">
          {closestDates.map((event, i) => (
            <div key={i} data-hs-overlay="#hs-overlay">
              <Timeline.Item className="">
                <Timeline.Point className="" />
                <Timeline.Content className="">
                  <Timeline.Time>{event.date}</Timeline.Time>
                  <Timeline.Title className="py-2 text-white">
                    {event.name}
                  </Timeline.Title>
                  <Timeline.Body className="line-clamp-2">
                    {event.shortDescription}
                  </Timeline.Body>
                  <Timeline.Time>noch {event.diff} Tage</Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>
            </div>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
