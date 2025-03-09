"use client";
import BoardSection from "@/components/club/BoardSection";
import Hero from "@/components/club/Hero";
import ImpressumSection from "@/components/club/ImpressumSection";
import StadionSection from "@/components/club/StadionSection";
import { ConfigProvider, theme } from "antd";
import { motion, AnimatePresence } from "framer-motion";

export default function Club() {
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
        <div className="pb-[15rem] lg:pb-[12rem] bg-neutral-950">
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
            }}
          >
            <Hero />
            <BoardSection />
            <div className="club">
              <StadionSection />
            </div>
            <ImpressumSection />
          </ConfigProvider>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
