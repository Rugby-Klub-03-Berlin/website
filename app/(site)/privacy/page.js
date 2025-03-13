"use client";
import { poppins } from "@/public/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

export default function Privacy() {
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
        <section className=" pt-28 pb-[15rem] bg-neutral-950 text-white min-h-screen">
          <div className="max-w-5xl px-[3%] mx-auto sm:px-6 lg:px-8 ">
            <div>
              <div
                className={classNames(
                  "text-4xl pb-10 font-light",
                  poppins.className
                )}
              >
                Datenschutz
              </div>
              <div className="text-neutral-300 text-base">
                <br />
                Mit dieser Datenschutzerklärung wollen wir Sie über den Umgang
                und die Verarbeitung Ihrer personenbezogenen Daten informieren.
                Ebenso geben wir Ihnen Einblick in Ihre Rechte im Zusammenhang
                mit der Datenschutzgrundverordnung (DSGVO) und dem
                Bundesdatenschutzgesetz (BDSG).
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Inhaltsverzeichnis:
                </text>
                <br />
                <br />
                (1) Verantwortlicher
                <br /> (2) Rechtsgrundlage der Verarbeitung
                <br /> (3) Dauer der Speicherung
                <br /> (4) Empfänger der Daten
                <br /> (5) Verarbeitung im Zusammenhang mit Artikel 15 – 22
                DSGVO
                <br /> (6) Verarbeitung auf der Webseite
                <br /> (7) Ihre Rechte
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">Verantwortlicher</text>
                <br />
                <br />
                Verantwortlicher im Sinne des Artikel 4 Nummer 7 DSGVO:
                <br />
                <br />
                <div className="font-bold">
                  Rugby Klub 03 Berlin e.V.
                  <br />
                  <br />
                  Vertreten durch Marc Berger (1. Vorsitzender)
                  <br /> Hansastraße 190 13088 Berlin
                  <br />
                  info@rugbyklub03.berlin
                </div>
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Rechtsgrundlage der Verarbeitung
                </text>
                <br />
                <br />
                Artikel 6 Absatz 1 lit. a DSGVO – Kontaktaufnahme <br />
                Artikel 6 Absatz 1 lit. c DSGVO – Betroffenenanfragen (Art.
                15-22 DSGVO) <br />
                Artikel 6 Absatz 1 lit. f DSGVO – Logging
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Zweck der Datenverarbeitung
                </text>
                <br />
                <br />
                Ihre personenbezogenen Daten werden ausschließlich zum Zwecke
                der Kontaktaufnahme und für Betroffenenanfragen verarbeitet.
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Dauer der Speicherung
                </text>
                <br />
                <br />
                Wir speichern Ihre Daten nur so lange, bis der jeweilige
                Verarbeitungszweck erreicht ist. Sollten gesetzliche
                Bestimmungen die Speicherungen der Daten vorschreiben, werden
                diese entsprechend länger gespeichert. Gesetzliche Bestimmungen
                diesbezüglich sind hier nur Mitwirkungspflichten zur
                Strafverfolgung.
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Empfänger der Daten
                </text>
                <br />
                <br />
                Ihre Daten verbleiben grundsätzlich in unserem Verein. Wir
                nutzen auf unserer Website Vercel, eine
                Cloud-Deployment-Plattform. Dienstanbieter ist das amerikanische
                Unternehmen Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
                91789. Das bedeutet, dass der Besuch unser Webseite durch die
                Server von Vercel bearbeitet oder durchgeleitet wird. Die mit
                deinem Besuch unserer Webseite verbundenen Daten werden auch an
                Vercel übermittelt. Dies ist notwendig, damit Deine
                Browseranfrage erfolgreich bearbeitet werden kann. Diese Daten
                werden je nach Serverstandort auch in die USA übertragen. Wir
                haben mit Vercel einen Vertrag über die Auftragsverarbeitung
                abgeschlossen. Außerdem ist Vercel unter dem EU-US
                Datenschutzabkommen zertifiziert und damit verpflichtet, den
                EU-Datenschutzvorgaben nachzukommen.
                <br />
                <br />
                Die Datenschutzerklärung von Vercel finden Sie unter
                https://vercel.com/legal/privacy-policy.
                <br />
                <br />
                Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Die Datenübermittlung ist notwendig, damit du
                unsere Webseite benutzen kannst.
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Verarbeitung im Zusammenhang mit Artikel 15 -22 DSGVO
                </text>
                <br />
                <br />
                Bei der Ausübung Ihrer Rechte im Zusammenhang mit Artikel 15 bis
                22 DSGVO verarbeiten wir Ihre Daten nur zur Bearbeitung der
                jeweiligen Anfrage. Im Anschluss werden, auf Wunsch, diese Daten
                gelöscht bzw. im Sinne des Artikel 18 DSGVO gesperrt.
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">
                  Verarbeitung auf dieser Webseite
                </text>
                <br />
                <br />
                Bei der Nutzung der Website erfassen wir personenbezogene Daten,
                die Sie selbst bereitstellen. Ebenso wird durch den Besuch
                dieser Webseite Ihre IP-Adresse übermittelt, welche ein
                personenbezogenes Datum darstellt. Ihr Browser übermittelt
                automatisch an unseren Server folgende Informationen:
                <br />
                <br />
                • Browsertyp/ -version
                <br />
                • verwendetes Betriebssystem
                <br />
                • aufgerufene Seite, die zuvor besuchte Seite (Referrer URL),
                <br />
                • IP-Adresse
                <br />
                • Datum und Uhrzeit der Serveranfrage
                <br />
                • HTTP-Statuscode
                <br />
                <br />
                Wir verarbeiten diese Daten zur Optimierung unseres
                Webauftrittes und um im Falle eines Cyberangriffes Forensik
                betreiben zu können. Diese Daten werden automatisch nach eine
                Woche gelöscht.
                <br />
                <br />
                <text className=" font-bold text-white">Kontaktformular:</text>
                <br />
                Diese Webseite nutzt kein Kontaktformular. Sie können uns via
                E-Mail erreichen. Hierfür wird durch Weiterleitung auf Ihr
                eigenes E-Mailprogramm verwiesen.
                <br />
                <br />
                <text className=" font-bold text-white">Cookies:</text>
                <br />
                Wir verwenden auf unserer Website lediglich einen
                Session-Cookie, welche keiner Einwilligung bedarf. Bei Cookies
                handelt es sich um kleine Textdateien, die durch Ihren Browser
                gespeichert werden, wenn Sie eine Website besuchen. Hierdurch
                wird der verwendete Browser gekennzeichnet und kann durch
                unseren Webserver wiedererkannt werden. Wir unterscheiden
                zwischen funktional notwendige Cookies (Session-Cookies z.B.)
                und optionalen Cookies (Cookies von Facebook usw.). Ein
                Session-Cookie (PHPSESSID) wird automatisch beim Beenden der
                Browsersitzung gelöscht, optionale Cookies besitzen eine gewisse
                Lebensdauer. Sie können die Cookies in den
                Sicherheitseinstellungen Ihres Browsers jederzeit löschen und
                der Verwendung von Cookies durch Ihre Browsereinstellungen
                grundsätzlich oder für bestimmte Fälle widersprechen.
                <br />
                <br />
                <text className=" font-bold text-white">
                  Auftragsverarbeitung (Artikel 28 DSGVO):
                </text>
                <br />
                Im Rahmen des Webauftrittes haben wir einen
                Auftragsverarbeitungsvertrag mit unserem Hostingprovider Vercel
                geschlossen, welcher das Schutzniveau der hier erfassten
                personenbezogenen Daten zusätzlich erhöht. Sollten Sie
                diesbezüglich Fragen haben, wenden Sie sich bitte an den
                Verantwortlichen (Artikel 4 Nummer 7 DSGVO).
                <br />
                <br />
                <text className=" font-bold text-white">
                  Automatische Entscheidungsfindung / Profiling:
                </text>
                <br />
                Wir verwenden keine automatisierten Entscheidungsfindungen und
                setzen ebenso kein Profiling ein.
                <br />
                <br />
                <br />
                <br />
                <text className=" font-bold text-white">Ihre Rechte</text>
                <br />
                <br />
                Als betroffene Person haben Sie die Möglichkeit Ihre Rechte im
                Zusammenhang mit der Datenschutzgrundverordnung uns gegenüber
                geltend zu machen. Hierzu zählen folgende Rechte:
                <br />
                <br />
                <text className=" font-bold text-white">
                  • Auskunftsrecht nach Artikel 15 DSGVO
                </text>
                <br /> Sie haben die Möglichkeit Ihre, bei uns gespeicherten
                Daten, abzufragen. Hierzu reicht ein formloser Antrag via
                Kontaktformular, E-Mail, Telefon oder auch postalisch. Innerhalb
                eines Monats nach Eingang des Schreibens erhalten Sie Ihre
                erbetenen Auskünfte.
                <br />
                <text className=" font-bold text-white">
                  • Recht auf Berichtigung nach Artikel 16 DSGVO
                </text>
                <br /> Im Falle, dass wir unrichtige Daten zu Ihrer Person
                erfasst / gespeichert haben, können Sie via formlosen Antrag,
                die Berichtigung dieser Daten verlangen. Innerhalb eines Monats
                nach Eingang des Schreibens erhalten Sie Auskunft über die
                Änderung Ihrer Daten.
                <br />
                <text className=" font-bold text-white">
                  • Recht auf Löschung nach Artikel 17 DSGVO
                </text>
                <br /> Sie haben die Möglichkeit eine Löschung Ihrer bei uns
                gespeicherten Daten, zu erwirken. Dies setzt jedoch voraus, dass
                die Zwecke zur Verarbeitung weggefallen sind, bzw. dass Sie
                Widerspruch nach Artikel 21 DSGVO gegen die Verarbeitung
                eingelegt haben, Sie Ihre Einwilligung nach Artikel 7 DSGVO
                widerrufen oder die Verarbeitung unrechtmäßig ist.
                <br />
                <text className=" font-bold text-white">
                  • Recht auf Einschränkung der Verarbeitung nach Artikel 18
                  DSGVO
                </text>
                <br /> Sie haben das Recht Ihre Daten bei uns von der
                Verarbeitung auszuschließen. Dies ist der Fall, wenn Sie die
                Richtigkeit Ihrer hinterlegten Daten bestreiten, falls die
                Verarbeitung an sich unrechtmäßig ist und durch uns eine
                Löschung verneint wird, falls die Daten für die Zwecke der
                Verarbeitung von uns nicht länger benötigt werden oder Sie
                Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1
                DSGVO eingelegt haben. Dies können Sie uns ebenso formlos
                anzeigen.
                <br />
                <text className=" font-bold text-white">
                  • Recht auf Datenübertragbarkeit nach Artikel 20 DSGVO
                </text>
                <br />
                Sie haben die Möglichkeit, die bei uns hinterlegten Daten über
                Sie, in einem strukturierten, gängigen und maschinenlesbaren
                Format übermittelt, auf Anfrage, zu erhalten. Wir können diese
                Daten auch, falls Sie dies gesondert einwilligen, an einen
                Verantwortlichen Ihrer Wahl übermitteln.
                <br />
                <text className=" font-bold text-white">
                  • Beschwerderecht nach Artikel 77 DSGVO
                </text>
                <br /> Sie haben das Recht auf Beschwerde bei einer
                Aufsichtsbehörde nach Artikel 77 DSGVO. Die zuständige
                Aufsichtsbehörde ist der Landesdatenschutzbeauftragte des
                Bundeslandes Berlin.
                <br />
                <br />
                <br />
                <br />
                Stand dieser Datenschutzerklärung: 03.12.2023
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
