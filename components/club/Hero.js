import { montserrat, poppins } from "@/public/fonts/fonts";
import classNames from "classnames";

import React from "react";
const Hero = () => {
  return (
    <section id="about" className=" text-white py-28 sm:pt-36">
      <div className="max-w-5xl px-[3%] mx-auto sm:px-6 lg:px-8 ">
        <h1 className={montserrat.className}>
          <div
            className={classNames(
              "text-4xl pb-10 font-light",
              poppins.className
            )}
          >
            Über uns
          </div>
          <div className="text-neutral-200 text-lg">
            Der Rugby Klub 03 Berlin e.V. ist mit über 400 Mitgliedern Berlins
            größter Rugbyverein. Während er 2003 aus der Rugby-Abteilung des
            damaligen Post SV hervorgegangen ist, reicht die Geschichte des
            Rugbys in Weißensee bis ins Jahr 1967 zurück. <br />
            Seit der Gründung des eigenständigen Vereins vor 20 Jahren ist der
            Verein stetig gewachsen und darf sich seit 2010 über die Nutzung
            einer gut ausgestatteten Rugby-Anlage mit 2 Spiel- und einem
            Trainingsplatz freuen, keine Selbstverständlichkeit für Sport- und
            insbesondere Rugbyvereine in Berlin. <br />
            <br />
            Durch das Engagement der Mitglieder und in Zusammenarbeit mit dem
            Bezirksamt wird diese Anlage gehegt, gepflegt und weiter ausgebaut.
            Neben zwei Männermannschaften (die 1. Männermannschaft spielt in der
            1. Bundesliga), gibt es ein Frauenteam, welches im 7er-Rugby aktiv,
            außerdem diverse Touch-Rugby-Trainingsgruppen. Besonderes Augenmerk
            liegt jedoch in der Jugendförderung.
            <br />
            <br /> Fast die Hälfte aller Mitglieder ist minderjährig und spielt
            in den diversen Altersklassen der Jugendabteilung. Erste
            Rugby-Erfahrungen können schon mit 3 ½ Jahren in der U6 gewonnen
            werden. Begleitet werden die Kinder und Jugendlichen von
            qualifizierten und engagierten Übungsleiter:innen, die sie
            altersgerecht fördern und fordern.
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
