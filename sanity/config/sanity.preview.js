"use client";

import { definePreview } from "next-sanity/preview";
import config from "./client-config";

const { projectId, dataset, apiVersion, useCdn } = config;

function onPublicAccessOnly() {
  throw new Error("Unable to load preview as you're not logged in");
}

if (!projectId || !dataset) {
  throw new Error(
    "Missing projectId or dataset. Check your sanity. json or env"
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
