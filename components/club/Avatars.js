import { urlFor } from "@/sanity/urlFor";
import React from "react";

const Avatars = ({ avatars }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
      {avatars.map((avatar) => (
        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-neutral-900 border border-neutral-800 justify-between">
          <div>
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-[4.5rem] h-[4.5rem] object-cover"
                src={
                  avatar.image != null && urlFor(avatar.image).crop("center")
                }
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-neutral-500">{avatar.name}</h3>
                <p className="text-xs uppercase text-neutral-700">
                  {avatar.position}
                </p>
              </div>
            </div>
            <p className="mt-3 text-neutral-500">{avatar.description}</p>
          </div>

          <div className="mt-3 space-x-1">
            <button
              type="submit"
              className="inline-flex justify-center items-center text-neutral-500 border border-neutral-800 w-8 h-8 rounded-md hover:text-neutral-600 hover:shadow-md transition duration-200"
              onClick={() => {
                window.location.href = `mailto:${avatar.email}`;
              }}
            >
              <svg
                viewBox="0 0 8 6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avatars;
