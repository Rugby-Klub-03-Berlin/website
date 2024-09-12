import { montserrat, poppins } from "@/public/fonts/fonts";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import React from "react";

const ImpressumSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="impressum"
      className="text-white py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 mt-32 md:mt-10"
    >
      <div className={montserrat.className}>
        <div className="max-w-5xl px-[5%] m-auto sm:px-6 lg:px-8 relative flex flex-col items-center justify-center">
          <div
            className={classNames(
              "text-4xl pb-10 w-full font-light",
              poppins.className
            )}
          >
            {t("club.legal.title")}
          </div>
          <div className="w-full">
            <div className="font-bold">{t("club.legal.imprint.title")}</div>
            {t("club.legal.imprint.address")}
            <br />
            <br />{" "}
            <div className="font-semibold">
              {t("club.legal.register.association.title")}
            </div>{" "}
            {t("club.legal.register.association.content")} <br />
            <div className="font-semibold">
              {t("club.legal.register.court.title")}
            </div>{" "}
            {t("club.legal.register.court.content")} <br /> <br />
            <div className="font-semibold">
              {t("club.legal.represented.title")}
            </div>{" "}
            {t("club.legal.represented.content")}
            <br />
            <br />
            <div className="font-bold">{t("club.legal.contact.title")}</div>
            {t("club.legal.contact.email")}
            <br /> <br />
            <div className="font-bold">{t("club.legal.tax.title")}</div>
            {t("club.legal.tax.content")}
            <br /> {t("club.legal.tax.id")}
            <br /> <br />
            <div className="font-bold">{t("club.legal.consumer.title")}</div>
            {t("club.legal.consumer.content")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressumSection;
