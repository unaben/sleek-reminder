import moment, { Moment } from "moment";
import { Timetable } from "../types/interface";

export const initialTimetable: Timetable = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
};

export const getWeekType = (
  currentDate: Moment,
  startDateStr: string | null
): "A" | "B" => {
  const defaultStartDate = moment("2025-09-01");
  const startDate = startDateStr ? moment(startDateStr) : defaultStartDate;

  // Calculate the difference in calendar weeks
  const startWeek = startDate.isoWeek();
  const currentWeek = currentDate.isoWeek();

  // Handle the edge case of a year change
  const weekDiff = currentWeek - startWeek;

  const totalWeeks = weekDiff + (currentDate.year() - startDate.year()) * 52;

  const weekNumber = totalWeeks + 1;

  // Week A is odd, Week B is even
  return weekNumber % 2 !== 0 ? "A" : "B";
};
