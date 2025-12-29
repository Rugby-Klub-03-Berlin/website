import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const sponsor = {
  name: "sponsor",
  title: "Sponsoren",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "sponsor" }),
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
    },
    {
      name: "image",
      title: "Titelbild",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};

export default sponsor;
