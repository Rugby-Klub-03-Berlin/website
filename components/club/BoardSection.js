"use client";
import React, { useEffect, useState } from "react";
import Avatars from "./Avatars";
import { montserrat, poppins } from "@/public/fonts/fonts";
import { Divider } from "antd";
import { useGlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import classNames from "classnames";
import { getBoards } from "@/sanity/sanity-utils";

const BoardSection = () => {
  const { data, setData } = useGlobalContext();
  const [avatars, setAvatars] = useState([{}]);
  const persons = [
    {
      id: 1,
      name: "Marc Berger",
      position: "1. Vorsitzender",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description:
        "Vereinsvorsitz, vertritt den Verein nach außen, Verbandsarbeit",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 2,
      name: "Sophie Doering",
      position: "2. Vorsitzende",
      image:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description: "Vertragsmanagement, Vereinsstruktur",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 3,
      name: "Kolja Nährig",
      position: "2. Vorsitzender",
      image:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description: "Schutzkommission, ethische Fragen",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 4,
      name: "Julie Cunningham",
      position: "2. Vorsitzende",
      image:
        "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description: "Internafonale Beziehungen, Eventkoordination",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 5,
      name: "Thomas Gabler",
      position: "Kassenwart",
      image:
        "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description: "Zahlungsverkehr, Kassenverwaltung, Finanzpläne",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 6,
      name: "Gert Lieck",
      position: "Sportwart",
      image:
        "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description:
        "Koordination des Sportbetriebs, Schnittstelle zum Bezirksamt",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 8,
      name: "Martin Tormann",
      position: "Mitgliederbeauftragter",
      image:
        "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description: "Mitgliederverwaltung, Konfliktmanagement",
      email: "vorsitzender@rugbyklub03.berlin",
    },
    {
      id: 9,
      name: "Svenja Holper",
      position: "Pressewartin",
      image:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      description: "Website, Social Media, Kontakt zu externen Medien",
      email: "vorsitzender@rugbyklub03.berlin",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const boards = await getBoards();

      setAvatars(boards);
    };

    fetchData();
  }, []);

  return (
    <div
      id="board"
      className="bg-gradient-to-b from-neutral-900 to-neutral-950 w-screen h-max"
    >
      <div className="max-w-5xl w-full sm:px-6 lg:px-8 mx-auto px-[5%]">
        <div className="mx-auto text-left mb-10 lg:mb-14">
          <h2
            className={classNames(
              "text-3xl pt-20 sm:text-4xl md:leading-tight text-white font-light",
              poppins.className
            )}
          >
            Vorstand
          </h2>
          <div className={montserrat.className}>
            <p className="text-white py-8 text-sm sm:text-base">
              Hier findest du den bei der JHV 2023 gewählten Vorstand des Rugby
              Klub 03 Berlin e.V. sowie die dazugehörigen Kontaktdaten:
            </p>
          </div>
          <div className="w-fit justify-center pb-3">
            <div className="border border-neutral-800 p-1.5 pl-5 rounded-full">
              <div className="flex items-center gap-x-3">
                <span className="text-xs sm:text-sm text-neutral-500">
                  Du möchtest mehr für den Verein tun?
                </span>
                <Link
                  className="inline-flex justify-center items-center gap-x-2 text-center bg-neutral-900 border border-neutral-800 hover:border-neutral-900 text-xs sm:text-sm textDominantcolor hover:text-yellow-500 font-medium rounded-full focus:outline-none transition py-2 px-4 duration-300"
                  href="/engagement"
                >
                  Mehr Erfahren
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
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Divider />
        </div>
        <Avatars avatars={avatars} />
      </div>
    </div>
  );
};

export default BoardSection;
