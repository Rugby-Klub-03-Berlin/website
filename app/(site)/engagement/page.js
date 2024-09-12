"use client";
import { poppins, space } from "@/public/fonts/fonts";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Engagement() {
  const t = useTranslation();

  const engagements = [
    {
      title: t("volunteer.workingGroups.gathering.title"),
      description: t("volunteer.workingGroups.gathering.content"),
      contact: "Mail: " + t("volunteer.workingGroups.gathering.email"),
      extra: <></>,
    },
    {
      title: t("volunteer.workingGroups.eventTeam.title"),
      description: t("volunteer.workingGroups.eventTeam.content"),
      contact: "Mail: " + t("volunteer.workingGroups.eventTeam.email"),
      extra: <></>,
    },
    {
      title: t("volunteer.workingGroups.financialSupport.title"),
      description: t("volunteer.workingGroups.financialSupport.content"),
      contact: "Mail: " + t("volunteer.workingGroups.financialSupport.email"),
      extra: (
        <div className="text-neutral-400 text-sm pt-10">
          {t("common.club")}
          <br />
          {t("volunteer.workingGroups.financialSupport.bankingDetails.bank")}
          <br />
          <text className="font-bold">IBAN:</text>{" "}
          {t("volunteer.workingGroups.financialSupport.bankingDetails.iban")}
          <br />
          <text className="font-bold">BIC:</text>{" "}
          {t("volunteer.workingGroups.financialSupport.bankingDetails.bic")}
        </div>
      ),
    },
  ];

  useEffect(() => {
    document.getElementById("categories").onmousemove = (e) => {
      for (const engagementcard of document.getElementsByClassName(
        "engagementcard"
      )) {
        const rect = engagementcard.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        engagementcard.style.setProperty("--mouse-x", `${x}px`);
        engagementcard.style.setProperty("--mouse-y", `${y}px`);
      }
    };
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
        <div
          className={
            "pt-28 pb-[15rem] lg:pb-[12rem] text-white bg-neutral-950 min-h-screen"
          }
        >
          <div className="max-w-[81rem] px-[3%] mx-auto mb-4">
            <h1 className={classNames("mb-10", poppins.className)}>
              <div className={classNames("text-4xl pb-10", space.className)}>
                {t("volunteer.title")}
              </div>
              <div className="text-neutral-200 text-md">
                {t("volunteer.content")}
              </div>
            </h1>
            <div
              id="categories"
              className={classNames(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10",
                poppins.className
              )}
            >
              {engagements.map((engagement, index) => (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 7 }}
                  className="engagementcard"
                  key={index}
                >
                  <div className={"engagementcard-content bg-neutral-900"}>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2] blackoverlay" />
                    <div className="z-[3] px-3 py-2 h-full justify-between flex flex-col">
                      <div className="">
                        <h1 className="text-2xl pb-5">{engagement.title}</h1>
                        <p className="text-sm text-neutral-400">
                          {engagement.description}
                        </p>
                        {engagement.extra}
                      </div>
                      <div className="">{engagement.contact}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
