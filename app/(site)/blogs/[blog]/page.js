"use client";
import { RichTextComponents } from "@/components/Sanity Studio/RichTextComponents";
import { montserrat } from "@/public/fonts/fonts";
import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

export default function Blog({ params }) {
  const slug = params.blog;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const blog = await getBlog(slug);

      const germanLocale = require("dayjs/locale/de");
      dayjs.locale(germanLocale);
      const eventDate = dayjs(blog.publishedAt, "YYYY-MM-DD");
      const blogdate = `${dayjs(eventDate).format("DD")}. ${dayjs(
        eventDate
      ).format("MMMM")} ${dayjs(eventDate).format("YYYY")}`;

      blog.publishedAt = blogdate;

      setBlog(blog);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 md:pt-28 pb-[13rem] md:pb-[15rem] bg-neutral-950">
      <div className="max-w-[81rem] mx-auto px-[3%]">
        <div className="relative w-full md:mb-4">
          <img
            src={blog.image}
            alt={blog.name}
            className="aspect-video object-cover w-full h-full"
          />
        </div>
        <div className="text-white font-extrabold py-8">
          <div className={montserrat.className}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium italic hyphens-auto break-words underline decoration-dominantColor">
              {blog.name}
            </h1>
          </div>
          <div className="text-lg font-normal pt-2 text-neutral-500">
            <p className={montserrat.className}>{blog.publishedAt}</p>
          </div>
        </div>
        <div className="text-neutral-300">
          <PortableText value={blog.content} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
}
