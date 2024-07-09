"use client";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { poppins } from "@/public/fonts/fonts";

const FooterBottom = () => {
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
              Rugby Klub 03 Berlin
            </div>
          </Link>
          <div className="flex-row pt-2 lg:pt-0 flex lg:space-x-5 text-gray-500 text-sm">
            <Link href="/club" className="pr-2 hover:underline">
              Über uns
            </Link>
            <Link
              href="/admin"
              target="_parent"
              className="px-2 hover:underline"
            >
              Admin
            </Link>
            <Link href="/privacy" className="px-2 hover:underline">
              Datenschutz
            </Link>
            <Link href="/club#impressum" className="px-2 hover:underline">
              Impressum
            </Link>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="w-full max-w-7xl m-auto flex items-center justify-between">
          <div className="sm:flex gap-6">
            <div className="text-gray-500 text-sm flex">
              <p>© 2023&nbsp;</p>
              <a href="./#" className="hover:underline">
                Rugby Klub 03 Berlin
              </a>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] sm:[--placement:top]">
              <div class="hs-tooltip-toggle">
                <div className="text-gray-500 text-sm hover:underline cursor-pointer">
                  <p>Erstellt von Martin Behrmann</p>
                </div>

                <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 text-neutral-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 bg-neutral-900 text-start rounded-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full"
                  role="tooltip"
                >
                  <a
                    class="m-2 mb-2 p-3 flex justify-between items-center rounded-lg cursor-pointer hover:bg-neutral-800 hover:text-dominantColor text-gray-500"
                    href="https://www.linkedin.com/in/martin-behrmann-2a047329b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="inline-flex items-center gap-x-1.5 text-sm disabled:opacity-50 disabled:pointer-events-none ">
                      <BsLinkedin className="w-5 h-5" />
                      LinkedIn: Martin Behrmann
                    </div>
                  </a>
                  <div
                    class="m-2 p-3 flex justify-between items-center rounded-lg cursor-pointer hover:bg-neutral-800 hover:text-dominantColor text-gray-500"
                    onClick={() => {
                      window.location.href = `mailto:info@rugbyklub03.berlin`;
                    }}
                  >
                    <div class="inline-flex items-center cursor-pointer gap-x-1.5 text-sm  disabled:opacity-50 disabled:pointer-events-none">
                      <MdOutlineEmail className="w-5 h-5" />
                      E-Mail: martinbehrmann@gmx.net
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
