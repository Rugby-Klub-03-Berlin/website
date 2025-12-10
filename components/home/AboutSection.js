"use client";
import { Carousel } from "antd";
import { montserrat, space } from "@/public/fonts/fonts";
import React, { useState, createRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const carouselRef = createRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations();

  const onChange = (_, nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  const handleClick = (slideIndex) => {
    carouselRef.current.goTo(slideIndex, false);
  };

  const paginationItems = [
    {
      id: 0,
      image: "/images/Männer.jpg",
      text_1: t("home.explore.first.bottom"),
      text_2: t("home.explore.first.top"),
    },
    {
      id: 1,
      image: "/images/Jugend.jpeg",
      text_1: t("home.explore.second.bottom"),
      text_2: t("home.explore.second.top"),
    },
    {
      id: 2,
      image: "/images/Frauen.jpg",
      text_1: t("home.explore.third.bottom"),
      text_2: t("home.explore.third.top"),
    },
  ];

  return (
    <section
      id="about"
      className="bg-neutral-950  md:min-h-[55rem] w-screen z-[2]"
    >
      <div className="">
        <div className="absolute md:min-h-[55rem] h-screen flex flex-row w-screen z-[2] ">
          <div className="absolute bottom-0 hidden md:flex h-3/12 w-[30%] left-[5%] border-neutral-950 border-4 border-t-0 text-gray-300 justify-left items-center">
            <h1 className={space.className}>
              <div className="font-normal text-5xl">
                {t("home.explore.title")}
                <div className="textDominantcolor">
                  {t("home.explore.markedTitle")}
                </div>
              </div>
            </h1>
          </div>
          <div className="hidden md:flex h-full w-[5%] flex-col">
            <div className="h-2/12 bg-none w-full border-neutral-950 border-4 border-t-8 border-l-8"></div>
            <div className="h-10/12 bg-neutral-950 w-full border-neutral-950 border-4 border-l-8"></div>
          </div>

          <div className="flex h-7/12 md:h-full flex-col w-[17.5%] md:w-[15%] border-neutral-950 border-l-2 md:border-l-0">
            <div className="h-6/12 bg-none w-full border-neutral-950 border-2 md:border-4 border-t-4 md:border-t-8"></div>
            <div className="h-1/12 bg-neutral-950 w-full border-neutral-950 border-2 md:border-4"></div>
            <div className="h-2/12 bg-neutral-950 w-full border-neutral-950 border-2 md:border-4 flex flex-col items-center">
              <div className="flex-row w-full justify-evenly hidden md:flex">
                <button
                  onClick={() => {
                    carouselRef.current.prev();
                  }}
                  className="flex items-center justify-center w-14 h-14 rounded-full text-gray-400 hover:text-gray-300 hover:bg-neutral-900 focus:outline-none transition duration-500"
                >
                  <svg
                    className="w-10 h-10 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.8"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                </button>

                <button
                  onClick={() => {
                    carouselRef.current.next();
                  }}
                  className="flex items-center justify-center w-14 h-14 rounded-full text-gray-400 hover:text-gray-300 hover:bg-neutral-900  focus:outline-none transition duration-500"
                >
                  <svg
                    className="w-10 h-10 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.8"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="pt-4 hidden md:flex w-min h-15 rounded-full transition duration-500">
                {paginationItems.map((item) => (
                  <button
                    key={item.id}
                    className={`w-10 h-10 transition duration-300 rounded-full ${
                      item.id === currentSlide ? "text-white" : "text-gray-700"
                    }`}
                    onClick={() => handleClick(item.id)}
                  >
                    <svg
                      className="w-6 h-6 m-auto"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 10 T 10 10"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-3/12 bg-neutral-950 w-full border-neutral-950 border-2 md:border-4"></div>
          </div>
          <div className="flex h-7/12 md:h-full flex-col w-[17.5%] md:w-[15%]">
            <div className="h-3/12 bg-none w-full border-neutral-950 border-2 md:border-4 border-t-4 md:border-t-8"></div>
            <div className="h-9/12 bg-neutral-950 w-full border-neutral-950 border-4"></div>
          </div>
          <div className="flex h-7/12 md:h-full flex-col w-[32.5%] md:w-[30%]">
            <div className="h-1/4 bg-tranparent w-full border-neutral-950 border-2 md:border-4 border-t-4 md:border-t-8"></div>
            <div className="h-2/4 bg-none w-full border-neutral-950 border-2 md:border-4"></div>
            <div className="h-1/4 bg-neutral-950 w-full px-6 border-neutral-950 border-2 md:border-4 text-gray-300 flex justify-center items-center">
              <div>
                <p className="font-extralight hidden md:block">
                  {
                    paginationItems.find((obj) => obj.id === currentSlide)
                      .text_1
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-7/12 md:h-full flex-col w-[32.5%] md:w-[30%] border-neutral-950 border-r-2 md:border-r-0">
            <div className="h-1/4 bg-neutral-950 w-full px-6 border-neutral-950 border-2 md:border-4 border-t-4 md:border-t-8 text-gray-300 flex justify-center items-center ">
              <div>
                <p className="font-extralight hidden md:block">
                  {
                    paginationItems.find((obj) => obj.id === currentSlide)
                      .text_2
                  }
                </p>
              </div>
            </div>
            <div className="h-2/4 bg-none w-full border-neutral-950 border-2 md:border-4"></div>
            <div className="h-1/4 bg-none w-full border-neutral-950 border-2 md:border-4"></div>
          </div>
          <div className="hidden md:flex h-full flex-col w-[5%]">
            <div className="h-7/12 bg-neutral-950 w-full border-neutral-950 border-4 border-t-8 border-r-8"></div>
            <div className="h-5/12 bg-none w-full border-neutral-950 border-4 border-r-8"></div>
          </div>
        </div>
        <Carousel
          className="absolute bg-neutral-900"
          autoplay
          autoplaySpeed={5000}
          dots={false}
          effect="fade"
          ref={carouselRef}
          beforeChange={onChange}
        >
          {paginationItems.map((item) => (
            <div
              className="h-[58.33333vh] md:min-h-[55rem] md:h-screen w-screen text-center"
              key={item.id}
            >
              <div className="h-full w-full bg-neutral-800 animate-pulse" />

              <Image
                src={item.image}
                alt="Background"
                fill
                fetchPriority="high"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
        <div className="md:hidden px-[3%] mt-[-1px] pb-20 relative bg-neutral-950">
          <div className="flex w-min h-min rounded-full transition duration-500 pb-5">
            {paginationItems.map((item) => (
              <button
                key={item.id}
                className={`w-6 h-6 transition duration-300 rounded-full ${
                  item.id === currentSlide ? "text-white" : "text-gray-500"
                }`}
                onClick={() => handleClick(item.id)}
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 10 T 10 10"
                  />
                </svg>
              </button>
            ))}
          </div>
          <div className="w-2/3 text-gray-300 pb-5">
            <h1 className={space.className}>
              <div className="font-normal text-3xl">
                {t("home.explore.title")}
                <div className="textDominantcolor">
                  {t("home.explore.markedTitle")}
                </div>
              </div>
            </h1>
          </div>
          <div className={montserrat.className}>
            <p className="font-extralight text-gray-300 w-5/6 text-lg">
              {paginationItems.find((obj) => obj.id === currentSlide).text_1}
            </p>
            <p className="font-extralight text-gray-300 w-5/6 text-lg">
              {paginationItems.find((obj) => obj.id === currentSlide).text_2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
