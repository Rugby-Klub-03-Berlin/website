"use client";
import { montserrat, space } from "@/public/fonts/fonts";
import { getBlogs } from "@/sanity/sanity-utils";
import { Link } from "@/i18n/navigation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";

const Box = ({ blog }) => {
  const boxVariant = {
    visible: {
      x: -5,
      transition: {
        duration: 0.025,
      },
    },
    hidden: {
      x: 0,
      transition: {
        duration: 0.025,
      },
    },
  };

  const control = useAnimation();

  return (
    <motion.div
      onHoverStart={() => {
        control.start("visible");
      }}
      onHoverEnd={() => {
        control.start("hidden");
      }}
    >
      <Link href={`/blogs/${blog.slug}`} key={blog._id} className="">
        <div className="flex flex-row justify-between pt-6">
          <div className="text-2xl">
            <h1 className={montserrat.className}>{blog.name}</h1>
          </div>
          <motion.div
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="flex items-center justify-center w-12 h-12 rounded-full text-gray-400 transition duration-500"
          >
            <svg
              className="w-8 h-8 "
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
          </motion.div>
        </div>
        <div className="text-sm text-gray-600 pt-3 pb-6">
          <p className={montserrat.className}>{blog.publishedAt}</p>
        </div>
        <div className="max-w-full h-[1px] bg-gray-500/50" />
      </Link>
    </motion.div>
  );
};

export default function PostSection() {
  const [blogs, setBlogs] = useState([{}]);
  const t = useTranslations();

  const boxVariant = {
    visible: {
      x: -5,
      transition: {
        duration: 0.025,
      },
    },
    hidden: {
      x: 0,
      transition: {
        duration: 0.025,
      },
    },
  };

  const control = useAnimation();

  const control2 = useAnimation();
  const [ref, inView] = useInView();

  const imageVariant = {
    visible: {
      scale: 1,
      transition: {
        duration: 0.25,
      },
    },
    hidden: {
      transition: {
        duration: 0.25,
      },
      scale: 0.9,
    },
  };

  useEffect(() => {
    if (inView) {
      control2.start("visible");
    } else {
      control2.start("hidden");
    }
  }, [control2, inView]);

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await getBlogs();

      blogs.sort((a, b) => {
        const dateA = dayjs(a.publishedAt, "YYYY-MM-DD");
        const dateB = dayjs(b.publishedAt, "YYYY-MM-DD");
        return dateB - dateA; // sort in descending order (newest first)
      });

      blogs.map((blog) => {
        const germanLocale = require("dayjs/locale/de");
        dayjs.locale(germanLocale);
        const eventDate = dayjs(blog.publishedAt, "YYYY-MM-DD");
        const blogdate = `${dayjs(eventDate).format("DD")}. ${dayjs(
          eventDate
        ).format("MMMM")} ${dayjs(eventDate).format("YYYY")}`;

        blog.publishedAt = blogdate;
      });

      setBlogs(blogs);
    };

    fetchData();
  }, []);

  return (
    blogs.length > 0 && (
      <section
        id="posts"
        className="bg-neutral-950 md:h-screen md:min-h-[55rem] relative items-center"
      >
        <div className="h-full py-[10%] absolute left-0 right-0 items-center text-center hidden xl:block">
          <div className="w-[28%] h-full object-cover inline-block text-white">
            <div className="relative h-full items-center text-center">
              <motion.div
                onHoverStart={() => {
                  control.start("visible");
                }}
                onHoverEnd={() => {
                  control.start("hidden");
                }}
              >
                <Link
                  href={`/blogs/${blogs[0].slug}`}
                  className="absolute z-[5] ml-[-0.5px] left-0 bottom-0 h-14 bg-neutral-950 w-1/2 text-center"
                >
                  <div className="relative top-1/2 transform -translate-y-1/2 flex justify-center">
                    <div>
                      <p className={space.className}>{t("common.readMore")}</p>
                    </div>
                    <motion.div
                      variants={boxVariant}
                      initial="hidden"
                      animate={control}
                      className=" transition duration-500"
                    >
                      <svg
                        className="w-6 h-6 ml-6"
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
                    </motion.div>
                  </div>
                </Link>
              </motion.div>

              <motion.img
                ref={ref}
                variants={imageVariant}
                initial="hidden"
                animate={control2}
                className="w-full h-full absolute top-0 left-0 object-cover z-[2]"
                src={blogs[0].image}
                alt={blogs[0].name}
              />
              <div className="w-full h-full absolute top-0 left-0  bg-black/60 z-[4]" />
            </div>
          </div>
        </div>

        <div className="bg-neutral-950 h-full hidden md:block absolute left-0 right-0 ">
          <div className="absolute top-[13%] left-0 flex flex-col space-y-6 justify-start items-start h-1/2 w-1/2">
            <div className="w-[12%] h-[1.5px] bg-gray-300/50"></div>
            <div className="w-[19%] h-[1.5px] bg-yellow-500/50"></div>
            <div className="w-[6%] h-[1.5px] bg-gray-50/70"></div>
          </div>
          <div className="absolute top-[11%] right-0 flex flex-col space-y-6 justify-start items-end h-1/2 w-1/2">
            <div className="w-[18%] h-[1.5px] bg-gray-50/70"></div>
            <div className="w-[28%] h-[1.5px] bg-yellow-500/50"></div>
            <div className="w-[8%] h-[1.5px] bg-gray-300/50"></div>
          </div>
          <div className="absolute bottom-[13%] left-0 flex flex-col space-y-6 justify-end items-start h-1/2 w-1/2">
            <div className="w-[3%] h-[1.5px] bg-gray-300/50"></div>
            <div className="w-[28%] h-[1.5px] bg-yellow-500/50"></div>
            <div className="w-[6%] h-[1.5px] bg-gray-50/70"></div>
          </div>
          <div className="absolute bottom-[13%] right-0 flex flex-col space-y-6 justify-end items-end h-1/2 w-1/2">
            <div className="w-[6%] h-[1.5px] bg-gray-300/50"></div>
            <div className="w-[8%] h-[1.5px] bg-yellow-500/50"></div>
            <div className="w-[3%] h-[1.5px] bg-gray-50/70"></div>
          </div>
        </div>
        <div className="xl:px-[10%] px-[3%] w-screen h-full flex flex-col md:space-x-10 xl:space-x-0 md:flex-row md:justify-between">
          <div className="h-full xl:w-[50%] md:w-[60%] pb-8 md:pb-0 justify-center flex flex-col z-[4] ">
            <div className="h-[55%] justify-between flex flex-col bg-neutral-900 p-3 md:p-0 rounded-md md:bg-transparent">
              <div className="bg-neutral-900 w-fit mb-2 md:mb-0 p-1 pr-2 rounded-full text-xs flex flex-row items-center text-gray-400">
                <div className="backgroundDominantColor w-fit p-1 px-2 rounded-full text-xs text-black mr-2">
                  <p className={space.className}>{t("common.new")}</p>
                </div>
                <p className={montserrat.className}>
                  {t("common.newestPosts")}
                </p>
              </div>

              <div className={montserrat.className}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold hyphens-auto break-words line-clamp-3">
                  {blogs[0].name}
                </h1>
              </div>
              <div className="md:w-[50%] pt-2 md:pt-8">
                <div className="text-gray-400 pb-2">
                  <p className={montserrat.className}>{blogs[0].publishedAt}</p>
                </div>
                <p className="md:text-gray-600 text-gray-400 line-clamp-3 pb-4">
                  {blogs[0].shortDescription}
                </p>
                <Link href={`/blogs/${blogs[0].slug}`} className="md:hidden">
                  <div className="bg-[rgb(35,35,35)] flex text-white text-center w-fit py-2 px-3 rounded">
                    <p className={montserrat.className}>
                      {t("common.continueRead")}
                    </p>
                    <svg
                      className="w-6 h-6 ml-4"
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
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-center z-[4] xl:items-end">
            <div className="h-[55%] xl:w-[45%] flex flex-col text-gray-200 ">
              <div className="md:w-[50%]">
                <div className="text-gray-500 uppercase md:text-sm text-base">
                  <p className={space.className}>{t("common.lastPosts")}</p>
                </div>
              </div>
              <div className="w-full flex flex-col space-y-1">
                {blogs.slice(1, 4).map((blog, index) => (
                  <Box blog={blog} key={blog._id} />
                ))}
              </div>

              <div className="w-fit mt-4 mb-12">
                <Link href="/newsroom" className={montserrat.className}>
                  <p className="text-sm hover:text-gray-400 uppercase hover:underline">
                    {t("common.readMore")}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
