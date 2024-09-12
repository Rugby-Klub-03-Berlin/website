"use client";
import { Divider } from "antd";
import { space } from "@/public/fonts/fonts";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-left md:items-center">
        <div
          className={classNames(
            "text-4xl text-white pb-4 md:pb-0",
            space.className
          )}
        >
          {t("dates.title")}
        </div>
      </div>
      <Divider />
    </div>
  );
}
