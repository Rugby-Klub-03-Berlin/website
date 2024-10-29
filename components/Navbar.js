"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { space } from "@/public/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { ExternalLink, X } from "lucide-react";

const Box = ({ delay, title, Href, icon, target }) => {
  const [scroll, setScroll] = useState(false);
  const [textColor, setTextColor] = useState("white");
  const pathname = usePathname();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 5) {
        setScroll(true);
        setTextColor("gray-200");
      } else {
        setScroll(false);
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={"empty"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 250,
          damping: 15,
          delay: delay,
        }}
      >
        <div className="group">
          <Link
            href={Href}
            className={
              pathname === Href
                ? "lg:hs-collapse-toggle text-dominantColor font-medium lg:hover:text-yellow-400 transition duration-300"
                : pathname === "/"
                ? `text-${textColor} flex items-center w-full font-medium lg:hover:text-gray-300 transition duration-300`
                : "font-medium text-gray-200 lg:hover:text-gray-300 transition duration-300"
            }
            target={target}
          >
            <div className="flex items-center gap-1">
              <p className={space.className}>{title}</p>
              {icon && <ExternalLink width={16} height={16} />}
            </div>
          </Link>

          <span className="hidden lg:block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] backgroundDominantColor"></span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logoColor, setLogoColor] = useState("white");
  const [glow, setGlow] = useState(false);
  const pathname = usePathname();
  const [hamburgerMenuIsOpen, setHambugerMenuIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("open.hs.dropdown", ($dropdown) => {
      setDropdownIsOpen(true);
    });

    window.addEventListener("close.hs.dropdown", ($dropdown) => {
      setDropdownIsOpen(false);
    });
  }, []);

  useEffect(() => {
    import("preline");
  }, []);

  const handleSubmit = () => {
    window.location.href = `mailto:info@rugbyklub03.berlin`;
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 5) {
        setColor("neutral-950");
        setScroll(true);
        setLogoColor("white");
        setTextColor("gray-200");
      } else {
        setScroll(false);
        setColor("transparent");
        setTextColor("white");
        setLogoColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (hamburgerMenuIsOpen) {
        html.classList.add("disable-scrolling");
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
        html.style.maxHeight = "none";
      }
    }
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHambugerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHambugerMenuIsOpen]);

  return (
    <>
      <motion.header
        className={classNames(
          pathname === "/" || pathname.includes("/blogs")
            ? scroll
              ? `bg-${color} bg-opacity-60 backdrop-blur-lg fixed left-0 top-0 ease-in duration-200 flex flex-wrap lg:justify-start lg:flex-nowrap z-[50] w-full border-gray-200 text-[0.8rem] py-3 lg:py-0`
              : classNames(
                  "fixed left-0 top-0 ease-in flex flex-wrap lg:justify-start lg:flex-nowrap z-[50] w-full text-[0.8rem] py-3 lg:py-0 duration-200",
                  hamburgerMenuIsOpen &&
                    "bg-neutral-950 bg-opacity-60 backdrop-blur-lg"
                )
            : "bg-neutral-950 bg-opacity-60 backdrop-blur-lg fixed left-0 top-0 ease-in duration-200 flex flex-wrap lg:justify-start lg:flex-nowrap z-[50] w-full border-gray-200 text-[0.8rem] py-3 lg:py-0",
          hamburgerMenuIsOpen && "bg-neutral-950 bg-opacity-90 backdrop-blur-lg"
        )}
      >
        <nav
          className={classNames(
            "relative max-w-7xl w-full mx-auto lg:flex lg:items-center lg:justify-between md:px-6 lg:px-8 transition-all duration-300"
          )}
          aria-label="Global"
        >
          <div className="flex-row flex items-center justify-between pl-2 px-4">
            <Link
              href="./#"
              className="flex-row flex justify-center items-center align-center "
              style={{ textAlign: "center" }}
              onClick={() => {
                setHambugerMenuIsOpen(false);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={"empty"}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                    delay: 0.5,
                  }}
                  onHoverStart={(e) => {
                    setGlow(true);
                  }}
                  onHoverEnd={(e) => {
                    setGlow(false);
                  }}
                  className="flex flex-grow"
                >
                  <motion.img
                    className="h-8 px-2 lg:px-0 lg:pr-2"
                    src="./images/logo.png"
                    alt="Logo"
                  />
                  <motion.div
                    className={`text-${textColor} font-semibold text-2xl`}
                  >
                    <motion.span
                      className={[space.className]}
                      style={
                        glow
                          ? {
                              textShadow: "#f5ca0d 1px 0 5px",
                              color: "#f5ca0d",
                              transitionDuration: 300,
                            }
                          : {
                              textShadow: "transparent 1px 0 5px",
                              color: "#f5ca0d",
                              transitionDuration: 300,
                            }
                      }
                      transition={{
                        duration: 300,
                      }}
                    >
                      RK
                    </motion.span>
                    <motion.span
                      style={
                        glow
                          ? {
                              textShadow: `${logoColor} 1px 0 3px`,
                              color: `${logoColor}`,
                            }
                          : {
                              textShadow: "transparent 1px 0 5px",
                              color: `${logoColor}`,
                            }
                      }
                      className={space.className}
                    >
                      03
                    </motion.span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </Link>

            <div className="ml-6 lg:hidden flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={"empty"}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                    delay: 0.75,
                  }}
                >
                  <label
                    type="button"
                    className="relative group p-2 px-3 flex items-center gap-x-2 border border-dominantColor cursor-pointer text-dominantColor font-medium hover:text-black  duration-300 transition"
                    data-hs-overlay="#hs-overlay-contact"
                  >
                    <span className="absolute left-0 block w-0 h-full transition-all backgroundDominantColor opacity-100 group-hover:w-full top-0 bottom-0 group-hover:right-0 duration-300 ease z-[-1]" />

                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <p className={space.className}>Kontakt</p>
                  </label>
                </motion.div>
              </AnimatePresence>
              <button
                className="ml-6 "
                onClick={() => setHambugerMenuIsOpen((open) => !open)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
                  <path d="M0 0H18V1H0V0Z" fill="white"></path>
                  <path d="M0 10H18V11H0V10Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
          <span
            className={classNames(
              "block h-[0.5px] mx-4 mt-3 bg-neutral-700 transition duration-300",
              hamburgerMenuIsOpen ? "" : "hidden"
            )}
          />
          <div
            className={classNames(
              "lg:block flex-1 transition-[visibility] duration-300",
              hamburgerMenuIsOpen
                ? "bg-neutral-950 min-h-screen px-4 text-[0.85rem]"
                : "hidden"
            )}
          >
            <div className="w-full flex flex-col lg:flex-row lg:text-center lg:items-center lg:justify-center gap-x-10 space-y-4 lg:space-y-0 py-4">
              <div className="group hs-dropdown [--auto-close:inside] [--strategy:static] lg:[--strategy:fixed] [--adaptive:none] lg:[--trigger:hover]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={"empty"}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                      delay: 0.55,
                    }}
                  >
                    <div>
                      <button
                        type="button"
                        className={
                          pathname === "/club"
                            ? "flex items-center w-full text-dominantColor font-medium lg:group-hover:text-yellow-400 transition-all duration-300"
                            : pathname === "/"
                            ? `text-${textColor} flex items-center w-full font-medium lg:group-hover:text-gray-300 transition-all duration-300`
                            : "flex items-center w-full font-medium text-gray-200 lg:group-hover:text-gray-300 transition-all duration-300"
                        }
                      >
                        <p className={space.className}>Unser Verein</p>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={classNames(
                            `ml-2 w-2.5 h-2.5 transition-transform duration-200`,
                            dropdownIsOpen && "rotate-180"
                          )}
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </button>
                      <span className="hidden lg:block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] backgroundDominantColor"></span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="hs-dropdown-menu transition-[opacity,margin] hs-dropdown-open:opacity-100 opacity-0 lg:w-48 space-y-2 pt-4 lg:pt-2 font-medium lg:font-normal lg:space-y-0 hidden z-10 lg:bg-neutral-800 lg:shadow-md rounded-lg p-2 divide-gray-200 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 lg:rounded-md text-sm text-gray-300 lg:hover:bg-neutral-700 focus:ring-2 focus:ring-blue-500 "
                    href="/club#about"
                    onClick={() => {
                      setHambugerMenuIsOpen(false);
                    }}
                  >
                    <p className={space.className}>Über uns</p>
                  </Link>
                  <span
                    className={classNames(
                      "block h-[0.5px] bg-neutral-700 transition duration-300",
                      hamburgerMenuIsOpen ? "" : "hidden"
                    )}
                  />

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 lg:rounded-md text-sm text-gray-300 lg:hover:bg-neutral-700 focus:ring-2 focus:ring-blue-500"
                    href="/club#board"
                    onClick={() => {
                      setHambugerMenuIsOpen(false);
                    }}
                  >
                    <p className={space.className}>Vorstand</p>
                  </Link>
                  <span
                    className={classNames(
                      "block h-[0.5px] bg-neutral-700 transition duration-300",
                      hamburgerMenuIsOpen ? "" : "hidden"
                    )}
                  />
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 lg:rounded-md text-sm text-gray-300 lg:hover:bg-neutral-700 focus:ring-2 focus:ring-blue-500"
                    href="/club#stadion"
                    onClick={() => {
                      setHambugerMenuIsOpen(false);
                    }}
                  >
                    <p className={space.className}>Stadion Buschallee</p>
                  </Link>
                  <span
                    className={classNames(
                      "block h-[0.5px] bg-neutral-700 transition duration-300",
                      hamburgerMenuIsOpen ? "" : "hidden"
                    )}
                  />

                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 lg:rounded-md text-sm text-gray-300 lg:hover:bg-neutral-700 focus:ring-2 focus:ring-blue-500"
                    href="/club#impressum"
                    onClick={() => {
                      setHambugerMenuIsOpen(false);
                    }}
                  >
                    <p className={space.className}>Impressum</p>
                  </Link>
                </div>
              </div>
              <span
                className={classNames(
                  "block h-[0.5px] bg-neutral-700 transition duration-300",
                  hamburgerMenuIsOpen ? "" : "hidden"
                )}
              />
              <div onClick={() => setHambugerMenuIsOpen(false)}>
                <Box delay={0.6} title={"Teams"} Href={"/teams"} icon={false} />
              </div>
              <span
                className={classNames(
                  "block h-[0.5px] bg-neutral-700 transition duration-300",
                  hamburgerMenuIsOpen ? "" : "hidden"
                )}
              />

              <div onClick={() => setHambugerMenuIsOpen(false)}>
                <Box
                  delay={0.65}
                  title={"Termine"}
                  Href={"/calendar"}
                  icon={false}
                />
              </div>

              <span
                className={classNames(
                  "block h-[0.5px] bg-neutral-700 transition duration-300",
                  hamburgerMenuIsOpen ? "" : "hidden"
                )}
              />
              <div onClick={() => setHambugerMenuIsOpen(false)}>
                <Box
                  delay={0.7}
                  title={"Dokumente"}
                  Href={"/documents"}
                  icon={false}
                />
              </div>

              <span
                className={classNames(
                  "block h-[0.5px] bg-neutral-700 transition duration-300",
                  hamburgerMenuIsOpen ? "" : "hidden"
                )}
              />
              <div onClick={() => setHambugerMenuIsOpen(false)}>
                <Box
                  delay={0.7}
                  title={"Mithelfen"}
                  Href={"/engagement"}
                  icon={false}
                />
              </div>

              <span
                className={classNames(
                  "block h-[0.5px] bg-neutral-700 transition duration-300",
                  hamburgerMenuIsOpen ? "" : "hidden"
                )}
              />
              <div onClick={() => setHambugerMenuIsOpen(false)}>
                <Box
                  delay={0.7}
                  title={"Shop"}
                  Href={"https://rugby-fanshop.de"}
                  icon={true}
                  target={"_blank"}
                />
              </div>

              <span
                className={classNames(
                  "block h-[0.5px] bg-neutral-700 transition duration-300",
                  hamburgerMenuIsOpen ? "" : "hidden"
                )}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={"empty"}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                  delay: 0.75,
                }}
              >
                <label
                  type="button"
                  className="relative group p-2 px-3 flex items-center gap-x-2 border border-dominantColor my-3 cursor-pointer text-dominantColor font-medium hover:text-black  duration-300 transition"
                  data-hs-overlay="#hs-overlay-contact"
                >
                  <span className="absolute left-0 block w-0 h-full transition-all backgroundDominantColor opacity-100 group-hover:w-full top-0 bottom-0 group-hover:right-0 duration-300 ease z-[-1]" />

                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  <p className={space.className}>Kontakt</p>
                </label>
              </motion.div>
            </AnimatePresence>
          </div>
        </nav>
        {pathname === "/" ? (
          scroll && (
            <span className="absolute bottom-0 block w-full h-[0.3px] bg-neutral-700 transition duration-300" />
          )
        ) : (
          <span className="absolute bottom-0 block w-full h-[0.3px] bg-neutral-700 transition duration-300" />
        )}
      </motion.header>
      <div
        id="hs-overlay-contact"
        className="hs-overlay hidden w-full h-full bg-neutral-950/30 backdrop-blur-sm fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-300 mt-0 sm:m-3 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-start sm:items-center">
          <div className="flex flex-col bg-neutral-950 sm:rounded-2xl w-full">
            <div className="flex justify-between items-center py-6 px-6">
              <h3 className="font-bold text-2xl text-neutral-300">
                Kontaktiere uns
              </h3>
              <button
                className="rounded-full bg-neutral-900 text-neutral-400 hover:bg-neutral-800 transition duration-300 p-1"
                data-hs-overlay="#hs-overlay-contact"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-neutral-300 px-6">
              <span className="text-dominantColor">
                Wie können wir dir weiterhelfen?
              </span>{" "}
              Schreibe uns hier dein Anliegen und wir melden uns
              schnellstmöglich bei dir.
            </p>

            <div className="w-full p-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-neutral-800 py-2 px-2.5 text-neutral-300 text-sm hover:bg-neutral-700 transition duration-200 rounded"
              >
                Nachricht als E-Mail erstellen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
