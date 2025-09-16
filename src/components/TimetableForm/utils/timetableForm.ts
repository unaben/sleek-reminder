import { Dispatch, SetStateAction, ChangeEvent } from "react";
import type { Timetable, DayOfWeek } from "../../../types/interface";

type SetWeekState = Dispatch<SetStateAction<Timetable>>;

export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement>,
  weekType: "A" | "B",
  day: DayOfWeek,
  index: number,
  setWeekA: SetWeekState,
  setWeekB: SetWeekState
) => {
  const { value } = e.target;
  const updateState = weekType === "A" ? setWeekA : setWeekB;

  updateState((prevWeek) => {
    const newDaySubjects = prevWeek[day]
      ? [...(prevWeek[day] as string[])]
      : [];
    newDaySubjects[index] = value;
    return { ...prevWeek, [day]: newDaySubjects };
  });
};

export const handleAddSubject = (
  weekType: "A" | "B",
  day: DayOfWeek,
  setWeekA: SetWeekState,
  setWeekB: SetWeekState
) => {
  const updateState = weekType === "A" ? setWeekA : setWeekB;
  updateState((prevWeek) => ({
    ...prevWeek,
    [day]: [...(prevWeek[day] || []), ""],
  }));
};

export const handleRemoveSubject = (
  weekType: "A" | "B",
  day: DayOfWeek,
  index: number,
  weekA: Timetable,
  weekB: Timetable,
  setWeekA: SetWeekState,
  setWeekB: SetWeekState
) => {
  const currentWeek = weekType === "A" ? weekA : weekB;
  const updateState = weekType === "A" ? setWeekA : setWeekB;

  if (currentWeek[day] && currentWeek[day]!.length > 1) {
    updateState((prevWeek) => ({
      ...prevWeek,
      [day]: prevWeek[day]?.filter((_, i) => i !== index),
    }));
  }
};
