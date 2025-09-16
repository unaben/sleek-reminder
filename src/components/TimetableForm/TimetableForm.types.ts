import { Timetable } from "../../types/interface";

export interface TimetableFormProps {
  initialWeekA: Timetable;
  initialWeekB: Timetable;
  onSave: (weekA: Timetable, weekB: Timetable) => void;
  onCancel: () => void;
}
