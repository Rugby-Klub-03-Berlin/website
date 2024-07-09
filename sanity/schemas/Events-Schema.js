const event = {
  name: "event",
  title: "Termine",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Kurze Beschreibung",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Uhrzeit",
      type: "duration",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default event;
