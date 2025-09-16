import type { Timetable } from "../../types/interface";

export interface TimetableDisplayProps {
  weekA: Timetable;
  weekB: Timetable;
  onEdit: () => void;
  onUpdateDates: () => void;
  onReset: () => void;
}
