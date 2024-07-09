import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/Sanity Studio/StudioNavbar";
import StudioLogo from "./components/Sanity Studio/StudioLogo";
import { availability } from "sanity-plugin-availability";
import structure from "./sanity/deskStructure";
import { media } from "sanity-plugin-media";

const config = defineConfig({
  title: "Rugby Klub 03 Berlin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: "/admin",
  plugins: [deskTool({ structure }), availability(), media()],
  schema: { types: schemas },
  theme: myTheme,
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
});

export default config;
