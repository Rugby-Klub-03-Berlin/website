import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--RK03-brand": "#f5ca0d",
  "--my-red": "#db4437",
  "--my-yellow": "#f46400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--RK03-brand"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--RK03-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--RK03-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],
  "--focus-color": props["-RK03-brand"],
});

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite-react/**/*.js",
//     "./node_modules/flowbite/**/*.js",
//     "./pages/**/*.{ts,tsx}",
//     "./public/**/*.html",
//     "node_modules/preline/dist/*.js",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     colors: {
//       dominantColor: "#f5ca0d",
//       inherit: "inherit",
//       current: "currentColor",
//       transparent: "transparent",
//       black: "#000",
//       white: "#fff",
//       slate: {
//         50: "#f8fafc",
//         100: "#f1f5f9",
//         200: "#e2e8f0",
//         300: "#cbd5e1",
//         400: "#94a3b8",
//         500: "#64748b",
//         600: "#475569",
//         700: "#334155",
//         800: "#1e293b",
//         900: "#0f172a",
//         950: "#020617",
//       },
//       gray: {
//         50: "#f9fafb",
//         100: "#f3f4f6",
//         200: "#e5e7eb",
//         300: "#d1d5db",
//         400: "#9ca3af",
//         500: "#6b7280",
//         600: "#4b5563",
//         700: "#374151",
//         800: "#1f2937",
//         900: "#111827",
//         950: "#030712",
//       },
//       zinc: {
//         50: "#fafafa",
//         100: "#f4f4f5",
//         200: "#e4e4e7",
//         300: "#d4d4d8",
//         400: "#a1a1aa",
//         500: "#71717a",
//         600: "#52525b",
//         700: "#3f3f46",
//         800: "#27272a",
//         900: "#18181b",
//         950: "#09090b",
//       },
//       neutral: {
//         50: "#fafafa",
//         100: "#f5f5f5",
//         200: "#e5e5e5",
//         300: "#d4d4d4",
//         400: "#a3a3a3",
//         500: "#737373",
//         600: "#525252",
//         700: "#404040",
//         800: "#262626",
//         900: "#171717",
//         950: "#0a0a0a",
//       },
//       stone: {
//         50: "#fafaf9",
//         100: "#f5f5f4",
//         200: "#e7e5e4",
//         300: "#d6d3d1",
//         400: "#a8a29e",
//         500: "#78716c",
//         600: "#57534e",
//         700: "#44403c",
//         800: "#292524",
//         900: "#1c1917",
//         950: "#0c0a09",
//       },
//       red: {
//         50: "#fef2f2",
//         100: "#fee2e2",
//         200: "#fecaca",
//         300: "#fca5a5",
//         400: "#f87171",
//         500: "#ef4444",
//         600: "#dc2626",
//         700: "#b91c1c",
//         800: "#991b1b",
//         900: "#7f1d1d",
//         950: "#450a0a",
//       },
//       orange: {
//         50: "#fff7ed",
//         100: "#ffedd5",
//         200: "#fed7aa",
//         300: "#fdba74",
//         400: "#fb923c",
//         500: "#f97316",
//         600: "#ea580c",
//         700: "#c2410c",
//         800: "#9a3412",
//         900: "#7c2d12",
//         950: "#431407",
//       },
//       amber: {
//         50: "#fffbeb",
//         100: "#fef3c7",
//         200: "#fde68a",
//         300: "#fcd34d",
//         400: "#fbbf24",
//         500: "#f59e0b",
//         600: "#d97706",
//         700: "#b45309",
//         800: "#92400e",
//         900: "#78350f",
//         950: "#451a03",
//       },
//       yellow: {
//         50: "#fefce8",
//         100: "#fef9c3",
//         200: "#fef08a",
//         300: "#fde047",
//         400: "#facc15",
//         500: "#eab308",
//         600: "#ca8a04",
//         700: "#a16207",
//         800: "#854d0e",
//         900: "#713f12",
//         950: "#422006",
//       },
//       lime: {
//         50: "#f7fee7",
//         100: "#ecfccb",
//         200: "#d9f99d",
//         300: "#bef264",
//         400: "#a3e635",
//         500: "#84cc16",
//         600: "#65a30d",
//         700: "#4d7c0f",
//         800: "#3f6212",
//         900: "#365314",
//         950: "#1a2e05",
//       },
//       green: {
//         50: "#f0fdf4",
//         100: "#dcfce7",
//         200: "#bbf7d0",
//         300: "#86efac",
//         400: "#4ade80",
//         500: "#22c55e",
//         600: "#16a34a",
//         700: "#15803d",
//         800: "#166534",
//         900: "#14532d",
//         950: "#052e16",
//       },
//       emerald: {
//         50: "#ecfdf5",
//         100: "#d1fae5",
//         200: "#a7f3d0",
//         300: "#6ee7b7",
//         400: "#34d399",
//         500: "#10b981",
//         600: "#059669",
//         700: "#047857",
//         800: "#065f46",
//         900: "#064e3b",
//         950: "#022c22",
//       },
//       teal: {
//         50: "#f0fdfa",
//         100: "#ccfbf1",
//         200: "#99f6e4",
//         300: "#5eead4",
//         400: "#2dd4bf",
//         500: "#14b8a6",
//         600: "#0d9488",
//         700: "#0f766e",
//         800: "#115e59",
//         900: "#134e4a",
//         950: "#042f2e",
//       },
//       cyan: {
//         50: "#ecfeff",
//         100: "#cffafe",
//         200: "#a5f3fc",
//         300: "#67e8f9",
//         400: "#22d3ee",
//         500: "#06b6d4",
//         600: "#0891b2",
//         700: "#0e7490",
//         800: "#155e75",
//         900: "#164e63",
//         950: "#083344",
//       },
//       sky: {
//         50: "#f0f9ff",
//         100: "#e0f2fe",
//         200: "#bae6fd",
//         300: "#7dd3fc",
//         400: "#38bdf8",
//         500: "#0ea5e9",
//         600: "#0284c7",
//         700: "#0369a1",
//         800: "#075985",
//         900: "#0c4a6e",
//         950: "#082f49",
//       },
//       blue: {
//         50: "#eff6ff",
//         100: "#dbeafe",
//         200: "#bfdbfe",
//         300: "#93c5fd",
//         400: "#60a5fa",
//         500: "#3b82f6",
//         600: "#2563eb",
//         700: "#1d4ed8",
//         800: "#1e40af",
//         900: "#1e3a8a",
//         950: "#172554",
//       },
//       indigo: {
//         50: "#eef2ff",
//         100: "#e0e7ff",
//         200: "#c7d2fe",
//         300: "#a5b4fc",
//         400: "#818cf8",
//         500: "#6366f1",
//         600: "#4f46e5",
//         700: "#4338ca",
//         800: "#3730a3",
//         900: "#312e81",
//         950: "#1e1b4b",
//       },
//       violet: {
//         50: "#f5f3ff",
//         100: "#ede9fe",
//         200: "#ddd6fe",
//         300: "#c4b5fd",
//         400: "#a78bfa",
//         500: "#8b5cf6",
//         600: "#7c3aed",
//         700: "#6d28d9",
//         800: "#5b21b6",
//         900: "#4c1d95",
//         950: "#2e1065",
//       },
//       purple: {
//         50: "#faf5ff",
//         100: "#f3e8ff",
//         200: "#e9d5ff",
//         300: "#d8b4fe",
//         400: "#c084fc",
//         500: "#a855f7",
//         600: "#9333ea",
//         700: "#7e22ce",
//         800: "#6b21a8",
//         900: "#581c87",
//         950: "#3b0764",
//       },
//       fuchsia: {
//         50: "#fdf4ff",
//         100: "#fae8ff",
//         200: "#f5d0fe",
//         300: "#f0abfc",
//         400: "#e879f9",
//         500: "#d946ef",
//         600: "#c026d3",
//         700: "#a21caf",
//         800: "#86198f",
//         900: "#701a75",
//         950: "#4a044e",
//       },
//       pink: {
//         50: "#fdf2f8",
//         100: "#fce7f3",
//         200: "#fbcfe8",
//         300: "#f9a8d4",
//         400: "#f472b6",
//         500: "#ec4899",
//         600: "#db2777",
//         700: "#be185d",
//         800: "#9d174d",
//         900: "#831843",
//         950: "#500724",
//       },
//       rose: {
//         50: "#fff1f2",
//         100: "#ffe4e6",
//         200: "#fecdd3",
//         300: "#fda4af",
//         400: "#fb7185",
//         500: "#f43f5e",
//         600: "#e11d48",
//         700: "#be123c",
//         800: "#9f1239",
//         900: "#881337",
//         950: "#4c0519",
//       },
//     },
//     fontSize: {
//       xs: ["0.75rem", { lineHeight: "1rem" }],
//       sm: ["0.875rem", { lineHeight: "1.25rem" }],
//       base: ["1rem", { lineHeight: "1.5rem" }],
//       xl: ["1.25rem", { lineHeight: "1.75rem" }],
//       "2xl": ["1.5rem", { lineHeight: "2rem" }],
//       "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
//       "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
//       "5xl": ["3rem", { lineHeight: 1 }],
//       "6xl": ["3.75rem", { lineHeight: 1 }],
//       "7xl": ["4.5rem", { lineHeight: 1 }],
//       "8xl": ["6rem", { lineHeight: 1 }],
//       "9xl": ["8rem", { lineHeight: 1 }],
//     },
//     screens: {
//       xs: "450px",
//       sm: "640px",
//       // => @media (min-width: 640px) { ... }

//       md: "768px",
//       md_1: "800px",
//       md_2: "900px",
//       md_3: "1000px",
//       // => @media (min-width: 768px) { ... }

//       lg: "1024px",
//       // => @media (min-width: 1024px) { ... }

//       xl: "1280px",
//       // => @media (min-width: 1280px) { ... }

//       "2xl": "1536px",
//       // => @media (min-width: 1536px) { ... }
//     },
//     extend: {
//       spacing: {
//         "1/2": "50%",
//         "1/3": "33.333333%",
//         "2/3": "66.666667%",
//         "1/4": "25%",
//         "2/4": "50%",
//         "3/4": "75%",
//         "1/5": "20%",
//         "2/5": "40%",
//         "3/5": "60%",
//         "4/5": "80%",
//         "1/6": "16.666667%",
//         "2/6": "33.333333%",
//         "3/6": "50%",
//         "4/6": "66.666667%",
//         "5/6": "83.333333%",
//         "1/12": "8.333333%",
//         "2/12": "16.666667%",
//         "3/12": "25%",
//         "4/12": "33.333333%",
//         "5/12": "41.666667%",
//         "6/12": "50%",
//         "7/12": "58.333333%",
//         "8/12": "66.666667%",
//         "9/12": "75%",
//         "10/12": "83.333333%",
//         "11/12": "99.666667%",
//       },
//       cursor: {
//         fancy: "url('./public/images/logo.png'), pointer",
//       },
//     },
//   },

//   plugins: [require("flowbite/plugin"), require("preline/plugin")],
// };

// @import 'tailwindcss/base';
// @import 'tailwindcss/components';
// @import 'tailwindcss/utilities';

// @layer base {
//   :root {
//     --background: 0 0% 100%;
//     --foreground: 222.2 47.4% 11.2%;

//     --muted: 210 40% 96.1%;
//     --muted-foreground: 215.4 16.3% 46.9%;

//     --popover: 0 0% 100%;
//     --popover-foreground: 222.2 47.4% 11.2%;

//     --card: 0 0% 100%;
//     --card-foreground: 222.2 47.4% 11.2%;

//     --border: 214.3 31.8% 91.4%;
//     --input: 214.3 31.8% 91.4%;

//     --primary: 222.2 47.4% 11.2%;
//     --primary-foreground: 210 40% 98%;

//     --secondary: 210 40% 96.1%;
//     --secondary-foreground: 222.2 47.4% 11.2%;

//     --accent: 210 40% 96.1%;
//     --accent-foreground: 222.2 47.4% 11.2%;

//     --destructive: 0 100% 50%;
//     --destructive-foreground: 210 40% 98%;

//     --ring: 215 20.2% 65.1%;

//     --radius: 0.5rem;
//   }

//   .dark {
//     --background: 224 71% 4%;
//     --foreground: 213 31% 91%;

//     --muted: 223 47% 11%;
//     --muted-foreground: 215.4 16.3% 56.9%;

//     --popover: 224 71% 4%;
//     --popover-foreground: 215 20.2% 65.1%;

//     --card: 224 71% 4%;
//     --card-foreground: 213 31% 91%;

//     --border: 216 34% 17%;
//     --input: 216 34% 17%;

//     --primary: 210 40% 98%;
//     --primary-foreground: 222.2 47.4% 1.2%;

//     --secondary: 222.2 47.4% 11.2%;
//     --secondary-foreground: 210 40% 98%;

//     --accent: 216 34% 17%;
//     --accent-foreground: 210 40% 98%;

//     --destructive: 0 63% 31%;
//     --destructive-foreground: 210 40% 98%;

//     --ring: 216 34% 17%;

//     --radius: 0.5rem;
//   }
// }

// @layer base {
//   * {
//     @apply border-border;
//   }
//   body {
//     @apply bg-background text-foreground;
//     font-feature-settings: "rlig" 1, "calt" 1;
//   }
// }

// html {
//     scroll-behavior: smooth;
//   }

//   body{
//   scroll-behavior: smooth;
// }

// :root {
//   --hover-color: #ffdf40;
//   --primary-color: #d8ff18;
//   --success-color: #52c41a;
//   --warning-color: #faad14;
//   --error-color: #f5222d;
// }

// .heroimg{
//   background-image: url("../public/images/heroBackground.jpg");
// }

// .aboutimg{
//  background-image: url("../public/images/bac.jpg");
// }
// .about2img{
//    background-image: url("../public/images/team.jpg");
// }
// .background {
//  background-color: #ffffff;
// }
// /* Hide scrollbar for Chrome, Safari and Opera */
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
//  .no-scrollbar {
//   -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
//   }

//   .textDominantcolor {
//     color: #f5ca0d;
//   }

//   .backgroundDominantColor {
//     background-color: #f5ca0d;
//   }

//   .borderDominantColor {
//     border-color: #f5ca0d;
//   }

//   #cards:hover > .card::after {
//     opacity: 1;
//   }
//   #newbies:hover > .card::after {
//     opacity: 1;
//   }
//   #adults:hover > .card::after {
//     opacity: 1;
//   }

//   .card {
//     background-color: rgba(255, 255, 255, 0.1);
//     border-radius: 10px;
//     cursor: pointer;
//     display: flex;
//     height: 260px;
//     flex-direction: column;
//     position: relative;
//   }

//   .card:hover::before {
//     opacity: 1;
//   }

//   .card::before,
//   .card::after {
//     border-radius: inherit;
//     content: "";
//     height: 100%;
//     left: 0px;
//     opacity: 0;
//     position: absolute;
//     top: 0px;
//     transition: opacity 500ms;
//     width: 100%;
//   }

//   .card::before {
//     background: radial-gradient(
//       800px circle at var(--mouse-x) var(--mouse-y),
//       rgba(255, 255, 255, 0.06),
//       transparent 40%
//     );
//     z-index: 3;
//   }

//   .card::after {
//     background: radial-gradient(
//       600px circle at var(--mouse-x) var(--mouse-y),
//       rgba(255, 255, 255, 0.4),
//       transparent 40%
//     );
//     z-index: 1;
//   }

//   .card > .card-content {
//     background-color: rgb(23, 23, 23);
//     background-image: url("../public/images/team.jpg");
//     border-radius: inherit;
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     inset: 1px;
//     padding: 10px;
//     position: absolute;
//     z-index: 2;
//   }

//   .blackoverlay{
//     border-radius: inherit;
//   }

//   .spacer {
//     aspect-ratio: 960/100;
//     width: 100%;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//   }

//   .layer1 {
//     background-image: url("../public/svg/layered-steps-haikei.svg");
//   }
//   .layer2 {
//     background-image: url("../public/svg/layered-steps-haikei-2.svg");
//   }

//   .flip {
//     transform: rotate(180deg);
//   }

//   .dottedBackground {
//     background-image: radial-gradient(#4c4c4c79 2px, transparent 2px );
//     background-size: 50px 50px;
//   }

//   .nav-icon-3{
//     width: 30px;
//     height: 20px;
//     position: relative;
//     cursor: pointer;
//   }
//   .nav-icon-3 span{
//     background-color:#FFF;
//     position: absolute;
//     border-radius: 2px;
//     transition: .3s cubic-bezier(.8, .5, .2, 1.4);
//   }
//   .nav-icon-3 span:nth-child(1){
//     width: 100%;
//     height: 2px;
//     display: block;
//     top: 0px;
//     left: 0px;
//   }
//   .nav-icon-3 span:nth-child(2){
//     width: 70%;
//     height:  2px;
//     display: block;
//     top: 8.5px;
//     right: 0px;
//   }
//   .nav-icon-3 span:nth-child(3){
//     width: 100%;
//     height:  2px;
//     display: block;
//     bottom: 0px;
//     left: 0px;
//   }
//   .nav-icon-3:not(.open):hover span:nth-child(1){
//     width: 100%;
//     height: 2px;
//     display: block;
//     top: -2px;
//     left: 0px;
//     transition: .3s cubic-bezier(.8, .5, .2, 1.4);
//   }
//   .nav-icon-3:not(.open):hover span:nth-child(2){
//     width: 80%;
//     height:  2px;
//     display: block;
//     top: 8.5px;
//     right: 0px;
//     transition: .4s cubic-bezier(.8, .5, .2, 1.4);
//   }
//   .nav-icon-3:not(.open):hover span:nth-child(3){
//     width: 100%;
//     height:  2px;
//     display: block;
//     bottom: -2px;
//     left: 0px;
//     transition: .3s cubic-bezier(.8, .5, .2, 1.4);
//   }
//   .nav-icon-3.open {
//     transform: rotate(-90deg);
//   }
//   .nav-icon-3.open  span:nth-child(1){
//     left:3px;
//     top: 14px;
//     width: 80%;
//     transition: .3s cubic-bezier(.8, .5, .2, 1.4);
//     transform: rotate(90deg);
//     transition-delay: 150ms;
//   }
//   .nav-icon-3.open  span:nth-child(2){
//     left:3px;
//     top: 22px;
//     width: 50%;
//     transition: .3s cubic-bezier(.8, .5, .2, 1.4);
//     transform: rotate(50deg);
//     transition-delay: 50ms;
//   }
//   .nav-icon-3.open  span:nth-child(3){
//     left:12px;
//     top: 22px;
//     width: 50%;
//     transition: .3s cubic-bezier(.8, .5, .2, 1.4);
//     transform: rotate(-50deg);
//     transition-delay: 100ms;
//   }

//   .accordion-content {
//     transition: max-height 0.3s ease-out, padding 0.3s ease;
//   }

//   .grid-wrapper > div {
//   	display: flex;
//   	justify-content: center;
//   	align-items: center;
//   }
//   .grid-wrapper > div > img {
//   	width: 100%;
//   	height: 100%;
//   	object-fit: cover;
//   	border-radius: 5px;
//   }

//   .grid-wrapper {
//   	display: grid;
//   	grid-gap: 10px;
//   	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   	grid-auto-rows: 200px;
//   	grid-auto-flow: dense;
//   }
//   .grid-wrapper .wide {
//   	grid-column: span 2;
//   }
//   .grid-wrapper .tall {
//   	grid-row: span 2;
//   }
//   .grid-wrapper .big {
//   	grid-column: span 2;
//   	grid-row: span 2;
//   }

//   .top {
//     top: 0;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background: linear-gradient(
//       90deg,
//       transparent 5%,
//       rgba(255, 255, 113, 0.5),
//       rgb(255, 255, 113)
//     );
//   }

//   .bottom {
//     right: 0;
//     bottom: 0;
//     height: 2px;
//     background: linear-gradient(
//       90deg,
//       rgb(255, 255, 113),
//       rgba(255, 255, 113, 0.5),
//       transparent 50%
//     );
//   }

//   .right {
//     top: 0;
//     right: 0;
//     width: 2px;
//     height: 0;
//     background: linear-gradient(
//       180deg,
//       transparent 30%,
//       rgba(255, 255, 113, 0.5),
//       rgb(255, 255, 113)
//     );
//   }

//   .left {
//     left: 0;
//     bottom: 0;
//     width: 2px;
//     height: 0;
//     background: linear-gradient(
//       180deg,
//       rgb(255, 255, 113),
//       rgba(255, 255, 113, 0.5),
//       transparent 80%
//     );
//   }

//   .top {
//     animation: animateTop 10s ease-in-out infinite;
//   }

//   .bottom {
//     animation: animateBottom 10s ease-in-out infinite;
//   }

//   .right {
//     animation: animateRight 10s ease-in-out infinite;
//   }

//   .left {
//     animation: animateLeft 10s ease-in-out infinite;
//   }

//   @keyframes animateTop {
//     25% {
//       width: 100%;
//       opacity: 1;
//     }

//     30%,
//     100% {
//       opacity: 0;
//     }
//   }

//   @keyframes animateBottom {
//     0%,
//     50% {
//       opacity: 0;
//       width: 0;
//     }

//     75% {
//       opacity: 1;
//       width: 100%;
//     }

//     76%,
//     100% {
//       opacity: 0;
//     }
//   }

//   @keyframes animateRight {
//     0%,
//     25% {
//       opacity: 0;
//       height: 0;
//     }

//     50% {
//       opacity: 1;
//       height: 100%;
//     }

//     55%,
//     100% {
//       height: 100%;
//       opacity: 0;
//     }
//   }

//   @keyframes animateLeft {
//     0%,
//     75% {
//       opacity: 0;
//       bottom: 0;
//       height: 0;
//     }

//     100% {
//   opacity: 1;
//   height: 100%;
//  }
//   }

// #stadiontitle{
//   font-family: monospace;
// }
