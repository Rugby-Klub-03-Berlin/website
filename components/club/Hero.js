import { montserrat, poppins } from "@/public/fonts/fonts";
import classNames from "classnames";
import { useTranslations } from "next-intl";

import React from "react";
const Hero = () => {
  const t = useTranslations();

  return (
    <section id="about" className=" text-white py-28 sm:pt-36">
      <div className="max-w-5xl px-[3%] mx-auto sm:px-6 lg:px-8 ">
        <h1 className={montserrat.className}>
          <div
            className={classNames(
              "text-4xl pb-10 font-light",
              poppins.className,
            )}
          >
            {t("club.aboutUs.title")}
          </div>
          <div className="text-neutral-200 text-lg">
            {t("club.aboutUs.firstParagraph")} <br />
            {t("club.aboutUs.secondParagraph")} <br />
            <br />
            {t("club.aboutUs.thirdParagraph")}
            <br />
            <br /> {t("club.aboutUs.fourthParagraph")}
            <br />
            <br />
            {t.rich("club.aboutUs.fifthParagraph", {
              email: (chunks) => (
                <a
                  href="mailto:info@rugbyklub03.berlin"
                  className="text-dominantColor hover:underline transition-all"
                >
                  {chunks}
                </a>
              ),
            })}
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
