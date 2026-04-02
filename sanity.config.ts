import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./src/sanity/schemas";

export default defineConfig({
  name: "openfields",
  title: "Open Fields",
  projectId: "0jqfomq3",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
});
