import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const board = {
  name: "board",
  title: "Vorstand",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "board" }),
    {
      name: "name",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Profilbild",
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
      name: "description",
      title: "Tätigkeit",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "E-Mail",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default board;
