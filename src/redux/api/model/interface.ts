import { Timetable } from "../../../types/interface";

export interface TimetableState {
  weekA: Timetable;
  weekB: Timetable;
  isEditing: boolean;
  isDateRangeSet: boolean;
  startDate: string | null;
  endDate: string | null;
}
