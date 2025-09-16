import type { Timetable, DayOfWeek } from "../../../../types/interface";

export interface TimetableWeekFormProps {
  weekData: Timetable;
  weekType: "A" | "B";
  days: DayOfWeek[];
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    weekType: "A" | "B",
    day: DayOfWeek,
    index: number
  ) => void;
  onAddSubject: (weekType: "A" | "B", day: DayOfWeek) => void;
  onRemoveSubject: (weekType: "A" | "B", day: DayOfWeek, index: number) => void;
}
