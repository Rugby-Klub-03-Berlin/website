import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const documents = {
  name: "documents",
  title: "Dokumente",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "documents" }),
    {
      name: "name",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Datei",
      name: "file",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Beschreibung",
        },
      ],
    },
  ],
};

export default documents;
