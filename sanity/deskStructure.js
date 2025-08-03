import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  Folder,
  Users,
  Dumbbell,
  Calendar,
  StickyNote,
  Trophy,
  Baby,
} from "lucide-react";

export default (S, context) =>
  S.list()
    .title("Inhalt")
    .items([
      S.listItem()
        .title("Beiträge")
        .icon(StickyNote)
        .child(
          S.list()
            .title("Beitragsart")
            .items([
              S.listItem()
                .title("Blogbeiträge")
                .icon(StickyNote)
                .child(S.documentTypeList("blog")),
              S.listItem()
                .title("Spielberichte")
                .icon(StickyNote)
                .child(S.documentTypeList("gamereport")),
            ])
        ),
      S.listItem()
        .title("Termine")
        .icon(Calendar)
        .child(S.documentTypeList("event")),
      S.listItem()
        .title("Klub")
        .icon(Trophy)
        .child(
          S.list()
            .title("Klub")
            .items([
              S.listItem()
                .title("Kinderschutz")
                .icon(Baby)
                .child(
                  S.document()
                    .title("Kinderschutz")
                    .schemaType("child-protection")
                    .documentId("child-protection")
                ),
              orderableDocumentListDeskItem({
                type: "board",
                title: "Vorstand",
                icon: Users,
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "training",
                title: "Trainingsgruppen",
                icon: Dumbbell,
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "documents",
                title: "Dokumente",
                icon: Folder,
                S,
                context,
              }),
            ])
        ),
    ]);
