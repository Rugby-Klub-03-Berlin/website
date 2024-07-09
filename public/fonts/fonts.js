import {
  Lato,
  Montserrat,
  MuseoModerno,
  Orbitron,
  Poppins,
} from "next/font/google";

export const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--museoModerno-font",
});

export const space = Orbitron({
  subsets: ["latin"],
  variable: "--space-font",
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--montserrat-font",
});
