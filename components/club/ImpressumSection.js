import { montserrat, poppins } from "@/public/fonts/fonts";
import classNames from "classnames";
import React from "react";

const ImpressumSection = () => {
  return (
    <section
      id="impressum"
      className="text-white py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 mt-32 md:mt-10"
    >
      <div className={montserrat.className}>
        <div className="max-w-5xl px-[5%] m-auto sm:px-6 lg:px-8 relative flex flex-col items-center justify-center">
          <div
            className={classNames(
              "text-4xl pb-10 w-full font-light",
              poppins.className
            )}
          >
            Impressum
          </div>
          <div className="w-full">
            <div className="font-bold">
              Angaben gemäß § 5 TMG Rugby Klub 03 Berlin e.V.
            </div>
            Hansastraße 190,
            <br /> 13088 Berlin
            <br />
            <br /> <div className="font-semibold">Vereinsregister:</div>{" "}
            VR22787B <br />
            <div className="font-semibold">Registergericht:</div> Amtsgericht
            Berlin Charlottenburg <br /> <br />
            <div className="font-semibold">Vertreten durch:</div> Vorstand
            <br />
            <br />
            <div className="font-bold">Kontakt:</div>
            E-Mail: info@rugbyklub03.berlin
            <br /> <br />
            <div className="font-bold">Umsatzsteuer-ID:</div>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br /> DE195262236
            <br /> <br />
            <div className="font-bold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle:
            </div>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressumSection;
