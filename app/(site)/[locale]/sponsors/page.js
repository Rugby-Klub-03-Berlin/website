"use client";
import { montserrat, space } from "@/public/fonts/fonts";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSponsors } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/urlFor";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";
import { ConfigProvider, theme } from "antd";
import classNames from "classnames";
import { Link } from "@/i18n/navigation";

const Sponsors = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [sponsors, setSponsors] = useState([{}]);
  const t = useTranslations();

  useEffect(() => {
    document.getElementById("sponsors").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const sponsors = await getSponsors();

      setSponsors(sponsors);
      console.log(sponsors);
    };

    fetchData();
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
        <div className="pt-28 pb-[15rem] lg:pb-[12rem] bg-neutral-950">
          <div className="max-w-[81rem] mx-auto px-[3%]">
            <div className="text-white">
              <ConfigProvider
                theme={{
                  algorithm: theme.darkAlgorithm,
                }}
              >
                <div className={montserrat.className}>
                  <div className="text-2xl pb-4">
                    <div
                      className={classNames("text-4xl pb-10", space.className)}
                    >
                      {t("volunteer.sponsoring.title")}
                    </div>
                  </div>
                  <div
                    id="sponsors"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10"
                  >
                    {sponsors.length > 0 ? (
                      <>
                        {sponsors.map((sponsor, index) => (
                          <Link href={sponsor.url || ""} key={index}>
                            <motion.div
                              whileHover={{ scale: 1.01 }}
                              transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 7,
                              }}
                              className="card hover:shadow-lg hover:shadow-[#f5cb0d16]"
                              onClick={() => {
                                setSelectedCard(sponsor);
                              }}
                            >
                              <div className={"card-content overflow-hidden"}>
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center">
                                  <img
                                    src={
                                      sponsor.image != null &&
                                      urlFor(sponsor.image).crop("center")
                                    }
                                    className="flex-1 h-full object-cover"
                                  />
                                </div>
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] blackoverlay" />
                                <div className="z-[3] items-end flex h-full p-4">
                                  <div className="text-white">
                                    <div className="text-2xl font-semibold">
                                      <h1 className={space.className}>
                                        {sponsor.name}
                                      </h1>
                                    </div>
                                    <div className="text-l font-extralight">
                                      <h1 className={montserrat.className}>
                                        {sponsor.shortDescription}
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </>
                    ) : (
                      <div className="flex flex-row items-center justify-center h-[260px] rounded-[10px] bg-neutral-900 space-x-5 animate-pulse" />
                    )}
                  </div>
                </div>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sponsors;
