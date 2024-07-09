import blog from "./Blog-Schema";
import board from "./Board-Schema";
import documents from "./Document-Schema";
import event from "./Events-Schema";
import gamereport from "./GameReports-Schema";
import training from "./Training-Schema";
import { durationType } from "./types/durationType";
import { timeValueType } from "./types/timeValueType";

const schemas = [
  blog,
  gamereport,
  training,
  event,
  durationType,
  timeValueType,
  documents,
  board,
];

export default schemas;
