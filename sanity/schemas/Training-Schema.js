import { defaultAvailabilityDays } from "sanity-plugin-availability";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const training = {
  name: "training",
  title: "Trainingsgruppen",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "training" }),
    {
      name: "name",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Trainer",
      name: "trainer",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "age",
      title: "Wähle die Altersgruppe",
      type: "string",
      initialValue: "adults",
      options: {
        list: [
          { title: "Erwachsene", value: "adults" },
          { title: "Nachwuchs", value: "newbies" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "availability",
      title: "Trainingszeiten",
      type: "availability",
      initialValue: {
        availability: defaultAvailabilityDays(),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gameplan",
      title: "Spielplan",
      type: "url",
    },
    {
      name: "image",
      title: "Teambild",
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
  ],
};

export default training;
