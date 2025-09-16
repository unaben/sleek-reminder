import { Timetable } from "../types/interface";

export const initialTimetable: Timetable = {
  Monday: [""],
  Tuesday: [""],
  Wednesday: [""],
  Thursday: [""],
  Friday: [""],
};

export const getWeekType = (
  currentDate: Date,
  startDateStr: string | null
): "A" | "B" => {
  const defaultStartDate = new Date("2025-10-01T00:00:00");
  const startDate = startDateStr ? new Date(startDateStr) : defaultStartDate;

  const diffInDays = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const weekNumber = Math.floor(diffInDays / 7) + 1;
  return weekNumber % 2 !== 0 ? "A" : "B";
};
