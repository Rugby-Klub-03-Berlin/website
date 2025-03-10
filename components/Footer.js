"use client";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import classNames from "classnames";
import { poppins } from "@/public/fonts/fonts";
import { useTranslations } from "next-intl";

const FooterBottom = () => {
  const t = useTranslations();
  return (
    <footer className="bg-neutral-950 absolute bottom-0 text-center z-[5]">
      <div className="relative text-center w-screen p-2 py-6 lg:py-8 ">
        <div className="w-full max-w-7xl m-auto justify-between lg:flex sm:items-center sm:justify-between">
          <Link href="./#" className="flex flex-row items-center mb-2 ">
            <div className="">
              <Image width={25} height={25} src={"/images/logo.png"} />
            </div>

            <div
              className={classNames(
                "text-gray-500 text-2xl font-medium ml-2",
                poppins.className
              )}
            >
              {t("common.club")}
            </div>
          </Link>
          <div className="flex-row pt-2 lg:pt-0 flex lg:space-x-5 text-gray-500 text-sm">
            <Link href="/club" className="pr-2 hover:underline">
              {t("club.aboutUs.title")}
            </Link>
            <Link
              href="/admin"
              target="_parent"
              className="px-2 hover:underline"
            >
              Admin
            </Link>
            <Link href="/privacy" className="px-2 hover:underline">
              {t("privacy.title")}
            </Link>
            <Link href="/club#impressum" className="px-2 hover:underline">
              {t("navbar.club.imprint")}
            </Link>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="w-full max-w-7xl m-auto flex items-center justify-between">
          <div className="sm:flex gap-6">
            <div className="text-gray-500 text-sm flex">
              <p>© 2023&nbsp;</p>
              <a href="./#" className="hover:underline">
                {t("common.club")}
              </a>
            </div>

            <Link
              href="https://www.linkedin.com/in/martin-behrmann-2a047329b"
              className="text-gray-500 text-sm hover:underline cursor-pointer"
            >
              <p>{t("common.createdBy")}</p>
            </Link>
          </div>

          <div className="flex space-x-6 mt-0 justify-center">
            <Link
              href="https://www.facebook.com/rugbyklub03berlin/?locale=de_DE"
              className="text-gray-500"
            >
              <BsFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/rk03berlin/?hl=de"
              className="text-gray-500"
            >
              <BsInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
