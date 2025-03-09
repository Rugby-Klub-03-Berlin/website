import { montserrat } from "@/public/fonts/fonts";
import { urlFor } from "@/sanity/urlFor";
import { Link } from "@/i18n/navigation";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={"blogimage"}
          loading="lazy"
          className="h-auto max-h-[25rem] object-cover rounded-md py-6"
          src={urlFor(value)}
        />
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    hi: ({ children }) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-4xl py-70 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    normal: ({ children }) => (
      <div className={montserrat.className}>
        <p className="text-lg">{children}</p>
      </div>
    ),

    blockquote: ({ children }) => (
      <blockquote className=" border-l-[O#F7ABOA] border-1-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f5ca0d] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
