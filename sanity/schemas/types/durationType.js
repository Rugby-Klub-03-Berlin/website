import { defineField, defineType } from "sanity";

export const durationType = defineType({
  name: "duration",
  title: "Duration",
  description: "Lege Startzeit und Endzeit fest",
  type: "object",
  fields: [
    defineField({
      name: "start",
      title: "Start",
      type: "timeValue",
    }),
    defineField({
      name: "end",
      title: "Ende",
      type: "timeValue",
    }),
  ],
  // make the fields render next to each other
  options: { columns: 2 },
});
