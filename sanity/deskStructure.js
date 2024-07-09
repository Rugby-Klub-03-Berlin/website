import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { Folder } from "lucide-react";

export default (S, context) =>
  S.list()
    .title("Inhalt")
    .items([
      S.listItem()
        .title("Beiträge")
        .icon(Folder)
        .child(
          S.list()
            .title("Beitragsart")
            .items([
              S.listItem()
                .title("Blogbeiträge")
                .icon(Folder)
                .child(S.documentTypeList("blog")),
              S.listItem()
                .title("Spielberichte")
                .icon(Folder)
                .child(S.documentTypeList("gamereport")),
            ])
        ),
      S.listItem()
        .title("Termine")
        .icon(Folder)
        .child(S.documentTypeList("event")),
      S.listItem()
        .title("Klub")
        .icon(Folder)
        .child(
          S.list()
            .title("Klub")
            .items([
              orderableDocumentListDeskItem({
                type: "board",
                title: "Vorstand",
                icon: Folder,
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "training",
                title: "Trainingsgruppen",
                icon: Folder,
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
