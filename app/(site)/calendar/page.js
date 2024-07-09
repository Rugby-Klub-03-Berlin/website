"use client";
import GameCalendar from "@/components/calendar/Calendar";
import CalendarSheet from "@/components/calendar/CalendarSheet";
import Hero from "@/components/calendar/Hero";
import UpcomingGamesInformation from "@/components/calendar/UpcomingGamesInformation";
import { ConfigProvider, theme } from "antd";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendar() {
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
        <div className={"pt-28 pb-[15rem] lg:pb-[12rem] bg-neutral-950"}>
          <div className="max-w-[81rem] px-[3%] mx-auto">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#f5ca0d",
                },
                algorithm: theme.darkAlgorithm,
              }}
            >
              <Hero />
              <UpcomingGamesInformation />
              <GameCalendar />
              <CalendarSheet />
            </ConfigProvider>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
