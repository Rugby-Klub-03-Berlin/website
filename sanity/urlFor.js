import imageUrlBuilder from "@sanity/image-url";
import config from "./config/client-config";

const builder = imageUrlBuilder(config);

export const urlFor = (source) => builder.image(source);
