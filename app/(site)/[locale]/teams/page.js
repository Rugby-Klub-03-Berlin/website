"use client";
import GroupCardSection from "@/components/teams/GroupCardsSection";
import { poppins, space } from "@/public/fonts/fonts";
import { ConfigProvider, theme } from "antd";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Teams() {
  const t = useTranslations();
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
        <div className="pt-28 pb-[15rem] lg:pb-[12rem] bg-neutral-950">
          <div className="max-w-[81rem] mx-auto px-[3%]">
            <div className="text-white">
              <div className={classNames("text-4xl mb-8 ", space.className)}>
                {t("teams.title")}
              </div>
              <div
                className={classNames(
                  "mb-6 text-neutral-300 text-md",
                  poppins.className
                )}
              >
                <span className="text-yellow-300 mr-2 mb-3">
                  {t("teams.join.title")}
                </span>
                {t("teams.join.content")}
                <div className="w-fit mt-2 flex flex-col gap-y-3">
                  <div className="sm:flex justify-between gap-x-2">
                    <div className="w-fit py-1">{t("teams.youth.title")}:</div>
                    <div className="bg-neutral-900 w-fit px-2 py-1 rounded-sm">
                      {t("teams.youth.email")}
                    </div>
                  </div>
                  <div className="sm:flex justify-between gap-x-2">
                    <div className="w-fit py-1">{t("teams.adults.title")}:</div>
                    <div className="bg-neutral-900 w-fit px-2 py-1 rounded-sm">
                      {t("teams.adults.email")}
                    </div>
                  </div>
                </div>
              </div>
              <ConfigProvider
                theme={{
                  algorithm: theme.darkAlgorithm,
                }}
              >
                <GroupCardSection />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
