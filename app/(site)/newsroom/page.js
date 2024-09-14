"use client";
import { space } from "@/public/fonts/fonts";
import { getBlogs, getGamereports } from "@/sanity/sanity-utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Search } from "lucide-react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export default function News() {
  const [blogs, setBlogs] = useState([]);
  const [reports, setReports] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await getBlogs();
      blogs.map((blog) => {
        Object.assign(blog, { type: "blog" });
      });
      const reports = await getGamereports();
      reports.map((report) => {
        Object.assign(report, { type: "report" });
      });
      const allNews = blogs.concat(reports);

      allNews.sort((a, b) => {
        const dateA = dayjs(a.publishedAt, "YYYY-MM-DD");
        const dateB = dayjs(b.publishedAt, "YYYY-MM-DD");
        return dateB - dateA; // sort in descending order (newest first)
      });

      blogs.sort((a, b) => {
        const dateA = dayjs(a.publishedAt, "YYYY-MM-DD");
        const dateB = dayjs(b.publishedAt, "YYYY-MM-DD");
        return dateB - dateA; // sort in descending order (newest first)
      });

      reports.sort((a, b) => {
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

      reports.map((report) => {
        const germanLocale = require("dayjs/locale/de");
        dayjs.locale(germanLocale);
        const eventDate = dayjs(report.publishedAt, "YYYY-MM-DD");
        const reportdate = `${dayjs(eventDate).format("DD")}. ${dayjs(
          eventDate
        ).format("MMMM")} ${dayjs(eventDate).format("YYYY")}`;

        report.publishedAt = reportdate;
      });

      setBlogs(blogs);
      setReports(reports);
      setAllNews(allNews);
    };

    fetchData();
  }, []);

  return (
    <div className="pb-[9rem] md:pb-[15rem] pt-28 sm:pt-40 bg-neutral-950">
      <div className="max-w-[81rem] mx-auto px-[3%] min-h-screen mb-10">
        <div className="text-white font-black uppercase mx-auto w-full text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl pb-16 tracking-tighter">
          <p className={space.className}>
            <span className="">Rk03</span>
            <br />
            Newsroom
          </p>
        </div>
        <div className="bg-neutral-800 rounded-full p-2 justify-between flex items-center lg:mb-10">
          <nav
            className={classNames(
              "hidden w-full",
              isSearch ? "hidden" : "lg:flex"
            )}
            aria-label="Tabs"
            role="tablist"
          >
            <div className={classNames("space-x-2")}>
              <button
                type="button"
                className="hs-tab-active:bg-neutral-200 hover:bg-neutral-700 transition duration-150 rounded-full hs-tab-active:text-black py-2 px-5 items-center text-neutral-300 active"
                id="tabitem1"
                data-hs-tab="#tab1"
                aria-controls="tab1"
                role="tab"
              >
                {t("common.all")}
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-neutral-200 hover:bg-neutral-700 transition duration-150 rounded-full hs-tab-active:text-black py-2 px-5 items-center text-neutral-300"
                id="tabitem2"
                data-hs-tab="#tab2"
                aria-controls="tab2"
                role="tab"
              >
                {t("common.posts")}
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-neutral-200 hover:bg-neutral-700 transition duration-150 rounded-full hs-tab-active:text-black py-2 px-5 items-center text-neutral-300"
                id="tabitem3"
                data-hs-tab="#tab3"
                aria-controls="tab3"
                role="tab"
              >
                {t("common.reports")}
              </button>
            </div>
          </nav>
          <input
            className={classNames(
              "rounded-full bg-transparent w-full py-1.5 outline-none appearance-none border-none focus:ring-0 text-neutral-200",
              !isSearch && "lg:hidden"
            )}
            type="text"
            placeholder={t("common.searchNews")}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <div
            onClick={() => setIsSearch(!isSearch)}
            className="rounded-full p-2.5 ml-1 bg-neutral-700 cursor-pointer hover:bg-neutral-600 transition duration-300"
          >
            <Search className="text-neutral-300 sm:w-5 sm:h-5 w-4 h-4" />
          </div>
        </div>

        <nav
          className="flex space-x-2 lg:hidden my-4"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:bg-neutral-200 rounded-full hs-tab-active:text-black py-2 px-4 items-center text-neutral-300 active"
            id="tabitem1"
            data-hs-tab="#tab1"
            aria-controls="tab1"
            role="tab"
          >
            {t("common.all")}
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-neutral-200 rounded-full hs-tab-active:text-black py-2 px-4 items-center text-neutral-300"
            id="tabitem2"
            data-hs-tab="#tab2"
            aria-controls="tab2"
            role="tab"
          >
            {t("common.posts")}
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-neutral-200 rounded-full hs-tab-active:text-black py-2 px-4 items-center text-neutral-300"
            id="tabitem3"
            data-hs-tab="#tab3"
            aria-controls="tab3"
            role="tab"
          >
            {t("common.reports")}
          </button>
        </nav>

        <div className="grid lg:grid-cols-3 gap-3">
          {searchText != "" &&
            isSearch &&
            allNews
              .filter((event) =>
                event.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((event) => <NewsCard news={event} />)}
        </div>

        <div className={classNames(searchText != "" && isSearch && "hidden")}>
          <div id="tab1" role="tabpanel" aria-labelledby="tabitem1">
            {allNews.length > 0 ? (
              <div className={classNames("grid lg:grid-cols-3 gap-3")}>
                {allNews.map((news) => (
                  <NewsCard news={news} />
                ))}
              </div>
            ) : (
              <div className="text-white">{t("common.loading")}</div>
            )}
          </div>
          <div
            id="tab2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabitem2"
          >
            {blogs.length > 0 ? (
              <div className={classNames("grid lg:grid-cols-3 gap-3")}>
                {blogs.map((blog) => (
                  <NewsCard news={blog} />
                ))}
              </div>
            ) : (
              <div className="text-white">{t("common.loading")}</div>
            )}
          </div>
          <div
            id="tab3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabitem3"
          >
            {allNews.length > 0 ? (
              <div className={classNames("grid lg:grid-cols-3 gap-3")}>
                {reports.map((report) => (
                  <NewsCard news={report} />
                ))}
              </div>
            ) : (
              <div className="text-white">{t("common.loading")}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const NewsCard = ({ news }) => {
  const { t } = useTranslation();

  return (
    <Link
      className="group flex flex-col overflow-hidden hover:bg-neutral-800 rounded duration-300 p-2"
      href={
        news.type == "report" ? `/reports/${news.slug}` : `/blogs/${news.slug}`
      }
    >
      <div className="flex-shrink-0 relative overflow-hidden w-full h-72">
        <img
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover"
          src={news.image}
          alt="Image Description"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center px-3 h-16 bg-neutral-600 bg-opacity-10 backdrop-blur-md border-t border-neutral-600 border-opacity-50 justify-between">
          <div className=" font-semibold text-neutral-100">
            {news.publishedAt}
          </div>
          <div className=" bg-neutral-900 bg-opacity-60 py-1 px-1.5 rounded text-dominantColor group-hover:bg-neutral-700 group-hover:bg-opacity-70 transition duration-200">
            {news.type == "report" ? t("common.report") : t("common.post")}
          </div>
        </div>
      </div>

      <div className="mt-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-300 line-clamp-2">
            {news.name}
          </h3>
          <p className="mt-3 text-neutral-300 line-clamp-2">
            {news.shortDescription}
          </p>
        </div>

        <div className="mt-4 flex w-fit items-center gap-x-1.5 text-dominantColor decoration-2 hover:underline font-medium">
          {t("common.read")}
          <svg
            className="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
