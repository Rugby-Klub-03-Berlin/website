"use client";
import { Badge, Calendar, ConfigProvider, theme } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getEvents } from "@/sanity/sanity-utils";
import { useGlobalContext } from "@/app/context/GlobalContext";

export default function GameCalendar() {
  const [value, setValue] = useState();
  const [loaded, setLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(dayjs());
  const { selectedEvent, setSelectedEvent } = useGlobalContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const event = await getEvents();
      setEvents(event);
      setLoaded(true);
    };

    fetchData();
  }, []);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const monthCellRender = (value) => {
    const year = value.year();
    const month = value.month();
    const monthListData = events
      .filter(({ date }) => {
        const eventDate = dayjs(date, "YYYY-MM-DD");
        return eventDate.year() === year && eventDate.month() === month;
      })
      .map((event) => {
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
    return (
      <ul className="events">
        {monthListData.map((item) => (
          <li key={item.slug}>
            <Badge
              status={"success"}
              text={item.name}
              data-hs-overlay="#hs-overlay"
              onClick={() => {
                setSelectedEvent(item);
              }}
            />
          </li>
        ))}
      </ul>
    );
  };
  const dateCellRender = (value) => {
    const stringValue = value.format("YYYY-MM-DD");
    const listData = events
      .filter(({ date }) => date === stringValue)
      .map((event) => {
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
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.slug}>
            <Badge
              status={"success"}
              text={item.name}
              data-hs-overlay="#hs-overlay"
              onClick={() => {
                setSelectedEvent(item);
              }}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const monthCellRender_mobile = (value) => {
    const year = value.year();
    const month = value.month();
    const monthListData = events.filter(({ date }) => {
      const eventDate = dayjs(date, "YYYY-MM-DD");
      return eventDate.year() === year && eventDate.month() === month;
    });
    return (
      <ul className="events">
        {monthListData.length > 0 && (
          <li className="h-full w-full">
            <Badge status={"success"} />
          </li>
        )}
      </ul>
    );
  };
  const dateCellRender_mobile = (value) => {
    const stringValue = value.format("YYYY-MM-DD");
    const listData = events.filter(({ date }) => date === stringValue);
    return (
      <ul className="events">
        {listData.length > 0 && (
          <li>
            <Badge status={"success"} />
          </li>
        )}
      </ul>
    );
  };
  const cellRender_mobile = (current, info) => {
    if (info.type === "date") return dateCellRender_mobile(current);
    if (info.type === "month") return monthCellRender_mobile(current);
    return info.originNode;
  };

  return (
    <div className="pt-4 mx-auto">
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#0a0a0a",
          },
        }}
      >
        <Calendar
          cellRender={cellRender}
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          className="hidden md:block"
        />
        <Calendar
          value={value}
          cellRender={cellRender_mobile}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          fullscreen={false}
          className="md:hidden"
        />
      </ConfigProvider>
      <div className="md:hidden text-white text-lg px-4 mt-4">
        <p className="pb-2">An diesem Tag:</p>
        {events
          .filter(({ date }) => date === selectedValue.format("YYYY-MM-DD"))
          .map((event) => {
            const eventDate = dayjs(event.date, "YYYY-MM-DD");

            return {
              id: event.id,
              name: event.name,
              shortDescription: event.shortDescription,
              date: `${dayjs(eventDate).format("DD")}. ${dayjs(
                eventDate
              ).format("MMMM")} ${dayjs(eventDate).format("YYYY")}`,
              time: event.time,
            };
          }).length > 0 ? (
          dateCellRender(selectedValue)
        ) : (
          <p className="text-sm py-1">Keine Events</p>
        )}
      </div>
    </div>
  );
}
