"use client";
import { poppins, space } from "@/public/fonts/fonts";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const engagements = [
  {
    title: "Die Tafelrunde",
    description:
      "Du warst schon einmal bei einem Heimspieltag oder anderem Event bei uns in der Buschallee und hast dich über das reichhaltige Angebot an Kuchen, Grillgut und Getränken gefreut? Du freust dich, deine Mitmenschen kulinarisch glücklich zu machen? Dann bist du bei unserer Tafelrunde bestens aufgehoben. Herz und Seele einer jeder Veranstaltung bei uns in der Buschallee freut sich unsere allererste Reihe über jedes neue Mitglied.",
    contact: "Mail: tafelrunde@rugbyklub03.berlin",
    extra: <></>,
  },
  {
    title: "Das Event-Team",
    description:
      "Partys sind voll dein Ding? Dann bist du bei unserem Event-Team genau richtig! Egal ob Sommerfest, Weihnachtsmarkt, Laternenfest… dank dieser Arbeitsgruppe werden die Vereinsfeiern stets zu einem vollen Erfolg. Da es immer Gründe für eine Party gibt, hat das Event-Team immer alle Hände voll zu tun und du als leidenschaftlicher Partyplaner:in, Barkeeper:in, DJ, Entertainer:in oder Organisationstalent bist dort herzlich eingeladen.",
    contact: "Mail: event@rugbyklub03.berlin",
    extra: <></>,
  },
  {
    title: "Finanzielle Unterstützung",
    description:
      "Vor allem die Nachwuchsarbeit kostet unseren Verein einiges an Geld, sodass wir uns über jede finanzielle Spende freuen, um unseren Jüngsten tolle Trainings- und Wettkampferlebnisse zu ermöglichen. Unsere Kontodaten findet ihr hier, wir stellen auch gerne Spendenbescheinigungen aus:",
    contact: "Mail: finanzen@rugbyklub03.berlin",
    extra: (
      <div className="text-neutral-400 text-sm pt-10">
        Rugby Klub 03 Berlin <br />
        Berliner Sparkasse <br />
        <text className="font-bold">IBAN:</text> DE30 100 500 00 4133356336
        <br />
        <text className="font-bold">BIC:</text> BELADEBEXXX
      </div>
    ),
  },
];

export default function Engagement() {
  useEffect(() => {
    document.getElementById("categories").onmousemove = (e) => {
      for (const engagementcard of document.getElementsByClassName(
        "engagementcard"
      )) {
        const rect = engagementcard.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        engagementcard.style.setProperty("--mouse-x", `${x}px`);
        engagementcard.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 20, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ y: -20, x: 0, opacity: 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <div
          className={
            "pt-28 pb-[15rem] lg:pb-[12rem] text-white bg-neutral-950 min-h-screen"
          }
        >
          <div className="max-w-[81rem] px-[3%] mx-auto mb-4">
            <h1 className={classNames("mb-10", poppins.className)}>
              <div className={classNames("text-4xl pb-10", space.className)}>
                Engagement im Verein
              </div>
              <div className="text-neutral-200 text-md">
                Unser Vereinsleben lässt sich nur dank unserer vielen
                engagierten Mitglieder aufrechterhalten. Dabei haben sich in den
                letzten Jahren verschiedene Arbeitsgruppen gebildet, die sich
                immer über neue Mitstreitende freuen. Auch du möchtest dich
                stärker in den Verein einbringen und findest dich und deine
                Fähigkeiten und Vorlieben bei den Arbeitsgruppen wieder? Dann
                haben wir hier die Kontaktdaten für dich:
              </div>
            </h1>
            <div
              id="categories"
              className={classNames(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10",
                poppins.className
              )}
            >
              {engagements.map((engagement, index) => (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 7 }}
                  className="engagementcard"
                  key={index}
                >
                  <div className={"engagementcard-content bg-neutral-900"}>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2] blackoverlay" />
                    <div className="z-[3] px-3 py-2 h-full justify-between flex flex-col">
                      <div className="">
                        <h1 className="text-2xl pb-5">{engagement.title}</h1>
                        <p className="text-sm text-neutral-400">
                          {engagement.description}
                        </p>
                        {engagement.extra}
                      </div>
                      <div className="">{engagement.contact}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
